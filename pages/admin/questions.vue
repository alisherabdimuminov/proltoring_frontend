<script setup lang="ts">
import apify from '~/composables/useAPI';
import type { IQuestion, IResponse, ISet } from '~/types';
import { useToast } from '~/components/ui/toast';


definePageMeta({
    layout: "admin"
});
useHead({
    title: "Savollar"
});

const { toast } = useToast();

const sets = ref<ISet[]>();
const set = ref<ISet>({
    id: "0",
    name: "test"
});
const correctAnswer = ref("a");
const questions = ref<IQuestion[]>();
const question = ref<IQuestion>({
    question: "",
    answer_a: "",
    answer_b: "",
    answer_c: "",
    answer_d: "",
    correct_answer: "",
    score: 2,
    set: set.value
});


onMounted(() => {
    getSets();
    getQuestions();
});

const getSets = async () => {
    let result = await $fetch<ISet[]>(apify("sets"));
    sets.value = result;
}

const addSet = async () => {
    let result = await $fetch<IResponse<string>>(apify("sets/add"), {
        method: "POST",
        body: JSON.stringify({
            "name": set.value.name
        })
    });
    if (result.status === "success") {
        toast({
            title: "Ajoyib",
            description: "To'plam qo'shildi"
        });
        getSets();
    } else {
        toast({
            title: "Xatolik",
            description: "Nimadur xato ketdi"
        });
    }
}

const getQuestions = async () => {
    let result = await $fetch<IQuestion[]>(apify("questions"));
    questions.value = result;
}

const addQuestion = async () => {
    let result = await $fetch<IResponse<string>>(apify("questions/add"), {
        method: "POST",
        body: JSON.stringify({
            "question": question.value.question,
            "answer_a": question.value.answer_a,
            "answer_b": question.value.answer_b,
            "answer_c": question.value.answer_c,
            "answer_d": question.value.answer_d,
            "score": question.value.score,
            "set": question.value.set.id,
            "correct_answer": correctAnswer.value,
        })
    });

    if (result.status === "success") {
        toast({
            title: "Ajoyib",
            description: "Savol qo'shildi"
        });
        getQuestions();
    } else {
        toast({
            title: "Xatolik",
            description: "Barcha maydonni to'ldiring"
        });
    }
    console.log(result);

}
</script>

<template>
    <div class="p-5 md:p-10 flex flex-col gap-5">
        <div class="flex items-center justify-between">
            <p>To'plamlar</p>
            <Dialog>
                <DialogTrigger>
                    <Button>To'plam qo'shish</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Yangi to'plam qo'shish</DialogTitle>
                    </DialogHeader>
                    <div>
                        <Label>Nomi</Label>
                        <Input v-model="set.name" />
                    </div>
                    <DialogFooter>
                        <Button @click="addSet">Qo'shish</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
        <div class="border rounded-md">
            <Table>
                <TableHeader class="border-b">
                    <TableHead class="w-4">#</TableHead>
                    <TableHead>Name</TableHead>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="set, index in sets">
                        <TableCell class="border-r">{{ index+1 }}</TableCell>
                        <TableCell>{{ set.name }}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

        <div class="flex items-center justify-between">
            <p>Savollar</p>
            <Dialog>
                <DialogTrigger>
                    <Button>Savol qo'shish</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Yangi savol qo'shish</DialogTitle>
                    </DialogHeader>
                    <div>
                        <Label>Savol</Label>
                        <Textarea class="resize-none" v-model="question.question" />

                        <div class="flex gap-3">
                            <RadioGroup v-model="correctAnswer" default-value="a" class="grid grid-cols-2 w-full">
                                <div>
                                    <div class="flex items-center">
                                        <RadioGroupItem id="a" value="a" class="peer" />
                                        <p>A</p>
                                    </div>
                                    <Textarea class="resize-none" v-model="question.answer_a" />
                                </div>
                                <div>
                                    <div class="flex items-center">
                                        <RadioGroupItem id="b" value="b" class="peer" />
                                        <p>B</p>
                                    </div>
                                    <Textarea class="resize-none" v-model="question.answer_b" />
                                </div>
                                <div>
                                    <div class="flex items-center">
                                        <RadioGroupItem id="c" value="c" class="peer" />
                                        <p>C</p>
                                    </div>
                                    <Textarea class="resize-none" v-model="question.answer_c" />
                                </div>
                                <div>
                                    <div class="flex items-center">
                                        <RadioGroupItem id="d" value="d" class="peer" />
                                        <p>D</p>
                                    </div>
                                    <Textarea class="resize-none" v-model="question.answer_d" />
                                </div>
                            </RadioGroup>
                        </div>
                        <Label>To'plam</Label>
                        <Select v-model="question.set.id">
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem v-for="set in sets" :value="set.id">{{ set.name }}</SelectItem>
                            </SelectContent>
                        </Select>
                        <Label>Ball</Label>
                        <Input type="number" v-model="question.score" />
                    </div>
                    <DialogFooter>
                        <Button @click="addQuestion">Qo'shish</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
        <div class="border rounded-md overflow-auto">
            <Table class="whitespace-nowrap">
                <TableHeader class="border-b">
                    <TableHead>#</TableHead>
                    <TableHead>Savol</TableHead>
                    <TableHead>a varyant</TableHead>
                    <TableHead>b varyant</TableHead>
                    <TableHead>c varyant</TableHead>
                    <TableHead>d varyant</TableHead>
                    <TableHead>To'g'ri javob</TableHead>
                    <TableHead>Ball</TableHead>
                    <TableHead>To'plam</TableHead>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="question, index in questions">
                        <TableCell class="border-r">{{ index+1 }}</TableCell>
                        <TableCell>
                            <p class="w-32 truncate">{{ question.question }}</p>
                        </TableCell>
                        <TableCell>
                            <p class="w-32 truncate">{{ question.answer_a }}</p>
                        </TableCell>
                        <TableCell>
                            <p class="w-32 truncate">{{ question.answer_b }}</p>
                        </TableCell>
                        <TableCell>
                            <p class="w-32 truncate">{{ question.answer_c }}</p>
                        </TableCell>
                        <TableCell>
                            <p class="w-32 truncate">{{ question.answer_d }}</p>
                        </TableCell>
                        <TableCell>{{ question.correct_answer }}</TableCell>
                        <TableCell>{{ question.score }}</TableCell>
                        <TableCell>{{ question.set.name }}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </div>
</template>
