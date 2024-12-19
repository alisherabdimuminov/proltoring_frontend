<script setup lang="ts">
import type { ITest, IResponse, IQuestion } from "~/types";
import apify from "~/composables/useAPI";
import { LucideCheck, LucideX, LucideChevronLeft } from "lucide-vue-next";
import { FaceLandmarker, FilesetResolver, type FaceLandmarkerResult, ObjectDetector,type ObjectDetectorResult } from "@mediapipe/tasks-vision";
import { toast } from '~/components/ui/toast';
import rodriguesRotationVectorFromMatrix from "~/utils/rodrigues";


/*
10s left right
more than 1 person
no person
change blur
*/


definePageMeta({
    middleware: "is-auth",
    layout: "user"
});
useHead({
    title: "LMC - Zukko"
});

const { user } = useAuth();
const route = useRoute();

if (user.value !== null && user.value.role === "admin") {
    navigateTo({ name: "admin" });
}

const test = ref<ITest>();
const answers = ref([]);
const isShown = ref(false);

const isCameraAllowed = ref(false);
const isLoading = ref(true);
const open = ref(false);

let video: HTMLVideoElement;
let faceLandMarker: FaceLandmarker;
let runningMode = ref<"VIDEO" | "IMAGE">("VIDEO");
let videoWidth = 400;
let border = ref("");
let cameraWidth = 0;
let cameraHeight = 0;
let lastVideoTime = -1;
let results: FaceLandmarkerResult | null = null;
let h = 0;


async function createFaceLandmarker() {
    isLoading.value = true;
    const filesetResolver = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm");
    faceLandMarker = await FaceLandmarker.createFromOptions(filesetResolver, {
        baseOptions: {
            modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
            delegate: "GPU"
        },
        outputFaceBlendshapes: true,
        outputFacialTransformationMatrixes: true,
        runningMode: runningMode.value,
        numFaces: 10,
    });
    isLoading.value = false;
}

async function predictWebcam() {
    const radio = video.videoHeight / video.videoWidth;

    let startTimeMS = performance.now();

    if (lastVideoTime !== video.currentTime) {
        lastVideoTime = video.currentTime;
        results = faceLandMarker.detectForVideo(video, startTimeMS);
    }

    let x1 = cameraWidth;
    let y1 = cameraHeight;
    let x2 = 0;
    let y2 = 0;
    
    if (results) {
        if (results.faceLandmarks.length === 1) {
            results.faceLandmarks.forEach((element) => {
                for (let a of element) {
                    let cordX = a.x * cameraWidth;
                    let cordY = a.y * cameraHeight;

                    if (cordX < x1) {
                        x1 = cordX;
                    }
                    if (cordY < y1) {
                        y1 = cordY;
                    }
                    if (cordX > x2) {
                        x2 = cordX;
                    }
                    if (cordY > y2) {
                        y2 = cordY;
                    }
                }
            });

            results.facialTransformationMatrixes.forEach((element) => {
                const matrix = [
                    element.data[0], element.data[1], element.data[2],
                    element.data[4], element.data[5], element.data[6],
                    element.data[8], element.data[9], element.data[10],
                ];
                const rodriguesVector = rodriguesRotationVectorFromMatrix(matrix);

                let pitch = rodriguesVector[0];
                let yaw = rodriguesVector[1];
                let roll = rodriguesVector[2];

                if (yaw < -7) {
                    // console.log("o'ng tomonga qaradingiz");
                    border.value = "border-red-500";
                    sendFine("right");
                } else if (yaw > 7) {
                    // console.log("chap tomonga qaradingiz");
                    border.value = "border-red-500";
                    sendFine("left");
                } else if (pitch < -7) {
                    // console.log("tepaga qaradingiz");
                } else if (pitch > 7) {
                    // console.log("Pastga qaradingzi");
                } else if (roll < -7) {
                    // console.log("chap tomonga burildingiz");
                } else if (roll > 7) {
                    // console.log("o'ng tomonga burildingiz");
                } else {
                    border.value = "border-green-500";
                }
            });
        } else if (results.faceLandmarks.length >= 2) {
            console.log("odam 1 tadan ko'p");
            border.value = "border-red-500";
            sendFine("two_person");
        } else {
            console.log("odam topilmadi");
            border.value = "border-red-500";
            sendFine("no_person");
        }
    } else {
    }
    window.requestAnimationFrame(predictWebcam);
}


const getCameraPermission = () => {
    if (navigator.mediaDevices) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                toast({
                    title: "Ajoyib",
                    description: "Davom etishingiz mumkin",
                });
                isCameraAllowed.value = true;
            })
            .catch(() => {
                toast({
                    title: "Xatolik",
                    description: "Sizning kamerangizni ololmadik qaytadan urinib ko'ring",
                });
                isCameraAllowed.value = false;
                navigateTo("/");
            });
    } else {
        toast({
            title: "Xatolik",
            description: "Qurilmangiz kamerani qo'llab quvvatlamaydi.",
        });
        isCameraAllowed.value = false;
        navigateTo("/");
    }
}

onMounted(async () => {
    await createFaceLandmarker();
    getCameraPermission();
    getTest();
    setStartTime();
    document.addEventListener("keydown", (event) => {
        if (event.key === 'Escape') {
            event.preventDefault();
            isShown.value = !isShown.value;
        }
    });
    video = document.getElementById("video") as HTMLVideoElement;

    const constraints = {
        video: true
    }

    navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
            video.srcObject = stream;
            video.addEventListener("loadeddata", predictWebcam);
            let settings = stream.getVideoTracks()[0].getSettings();
            cameraWidth = settings.width || 0;
            cameraHeight = settings.height || 0;
        })

    document.addEventListener("visibilitychange", async () => {
        if (document.hidden) {
            let response = await $fetch<IResponse<{ on_blur: number }>>(apify("blur"), {
                method: "post",
                body: JSON.stringify({
                    "test": route.params.uuid,
                })
            });
            open.value = true;
        }
    });
});


const getTest = async () => {
    isLoading.value = true;
    let response = await $fetch<ITest>(apify(`tests/test/${route.params.uuid}`), {
        method: "GET",
        headers: {
            "Authorization": `Token ${user.value?.token}`
        }
    });
    test.value = response;
    isLoading.value = false;
}

const setStartTime = async () => {
    isLoading.value = true;
    let start_time = new Date();
    let response = await $fetch(apify(`tests/test/${route.params.uuid}/set_start_time`), {
        method: "POST",
        headers: {
            "Authorization": `Token ${user.value?.token}`
        },
    });
    getTest();
    isLoading.value = false;
}

const sendFine = async (type: "left" | "right" | "no_person" | "two_person") => {
    if (test.value) {
        console.log(test.value);
        let response = await $fetch(apify("fine"), {
            method: "POST",
            body: JSON.stringify({
                "test": route.params.uuid,
                "type": type,
            })
        });

    }
}

const submit = async () => {
    isLoading.value = true;
    let response = await $fetch<IResponse<string>>(apify(`tests/test/${route.params.uuid}/submit`), {
        method: "POST",
        body: JSON.stringify({
            "answers": answers.value.join(",")
        }),
        headers: {
            "Authorization": `Token ${user.value?.token}`
        }
    });
    if (response.status === "error") {
        toast({
            title: "Xatolik",
            description: "Barch savollarni belgilang"
        });
    } else {
        if (response.status === "success") {
            navigateTo("/");
        }
    }
    isLoading.value = false;
}

onUnmounted(() => {
    video.pause();
    video.src = "";
    if (video.srcObject) {
        // @ts-ignore
        video.srcObject.getTracks()[0].stop();
    }
    window.requestAnimationFrame(() => {});
    console.log("chiqildi");
    document.removeEventListener("visibilitychange", () => {});
})
</script>

<template>
    <div class="p-5 md:p-10 flex flex-col gap-5 sm:mx-16 md:mx-24 lg:mx-64">
        <Dialog v-model:open="open">
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Ogohlantirish</DialogTitle>
                    <DialogDescription>Kechirasiz, siz qoidalarni buzyabsiz.</DialogDescription>
                </DialogHeader>
                <p>Siz taqiqlangan amallarni bajaryabsiz. Yani, test yechish muhidan chiqib ketyabsiz.</p>
                <DialogFooter>
                    <DialogClose>
                        <Button>Tushunarli</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        <div class="flex justify-between">
            <Button @click="navigateTo('/')"><LucideChevronLeft /> Orqaga </Button>
            <Button v-if="test && (test.status === 'not_started' || test.status === 'started')" @click="submit" size="xs" variant="destructive">Tugatish</Button>
        </div>
        <p v-if="test" class="text-center text-2xl font-bold">{{ test.name }}</p>
        <div  class="h-full border p-1 md:p-5 bg-accent/30 flex flex-col divide-y">
            <div v-if="test && test.questions" class="p-2" v-for="question, index in test.questions">
                <p class="text-base md:text-lg">{{ index+1 }}. {{ question.question }}</p>
                <RadioGroup class="ml-10 p-2 flex flex-col gap-3" v-model="answers[index]">
                    <div class="flex gap-3">
                        <RadioGroupItem :id="`q_${index+1}_answer_a`" value="a" />
                        <Label :class="{ 'font-bold': question.correct_answer === 'a' && user && user.role === 'admin' && isShown }" :for="`q_${index+1}_answer_a`">{{ question.answer_a }}</Label>
                    </div>
                    <div class="flex gap-3">
                        <RadioGroupItem :id="`q_${index+1}_answer_b`" value="b" />
                        <Label :class="{ 'font-bold': question.correct_answer === 'b' && user && user.role === 'admin' && isShown }" :for="`q_${index+1}_answer_b`">{{ question.answer_b }}</Label>
                    </div>
                    <div class="flex gap-3">
                        <RadioGroupItem :id="`q_${index+1}_answer_c`" value="c" />
                        <Label :class="{ 'font-bold': question.correct_answer === 'c' && user && user.role === 'admin' && isShown }" :for="`q_${index+1}_answer_c`">{{ question.answer_c }}</Label>
                    </div>
                    <div class="flex gap-3">
                        <RadioGroupItem :id="`q_${index+1}_answer_d`" value="d" />
                        <Label :class="{ 'font-bold': question.correct_answer === 'd' && user && user.role === 'admin' && isShown }" :for="`q_${index+1}_answer_d`">{{ question.answer_d }}</Label>
                    </div>
                </RadioGroup>
            </div>
        </div>
        <video class="fixed bottom-5 right-5 w-20 md:w-32 h-20 md:h-32 rounded-full object-cover border-4" :class="border" id="video" autoplay playsinline></video>
    </div>
</template>
