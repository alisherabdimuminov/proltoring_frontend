<script setup lang="ts">
import { useToast } from '~/components/ui/toast';
import apify from '~/composables/useAPI';
import type { IUser, IResponse, ISet, ITest } from '~/types';


definePageMeta({
    layout: "admin"
});
useHead({
    title: "Testlar"
});

const { toast } = useToast();

const set = ref<ISet>({
    id: "1",
    name: ""
});
const sets = ref<ISet[]>();
const start_date = ref("");
const start_time = ref("");
const testOpenModal = ref(false);
const user = ref<IUser>({
    "id": "0",
    "uuid": "",
    "username": "",
    "first_name": "",
    "last_name": "",
    "middle_name": "",
    "role": "student",
    "pwd": autogen(),
    "token": ""
});
const test = ref<ITest>({
    uuid: "",
    name: "",
    user: user.value,
    set: set.value,
    passed_score: 70,
    questions_count: 120,

    percentage: 0,
    status: "not_started",
    elapsed: 0,

    left: 0,
    right: 0,
    no_person: 0,
    two_person: 0,
});
const tests = ref<ITest[]>();
const users = ref<IUser[]>();


onMounted(() => {
    getTests();
    getUsers();
    getSpecs();
    setInterval(() => {
        getTests();
    }, 5000);
});

const secondsToHMS = (seconds: number) => {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 3600 % 60);
    return `${h}`.padStart(2, "0") + ":" + `${m}`.padStart(2, "0") + ":" + `${s}`.padStart(2, "0");
}


const getTests = async () => {
    let result = await $fetch<ITest[]>(apify("tests"));
    tests.value = result;
}

const getUsers = async () => {
    let result = await $fetch<IUser[]>(apify("users"));
    users.value = result;
}

const getSpecs = async () => {
    let result = await $fetch<ISet[]>(apify("sets"));
    sets.value = result;
}

const addTest = async () => {
    let result = await $fetch<IResponse<string>>(apify("tests/add"), {
        method: "POST",
        body: JSON.stringify({
            "name": test.value.name,
            "user": test.value.user.id,
            "set": test.value.set.id,
            "passed_score": test.value.passed_score,
            "questions_count": test.value.questions_count,
        })
    });
    if (result.status === "success") {
        toast({
            title: "Ajoyib",
            description: "Test qo'shildi"
        });
        getTests();
    } else {
        toast({
            title: "Xatolik",
            description: "Xatolik"
        });
    }
    testOpenModal.value = false;
}

const printTestResult = async (test: ITest) => {
    let url = apify(`tests/test/${test.uuid}/pdf`);
    navigateTo(url, { external: true, open: { target: "_blank" } });
}

const printTestsResult = async () => {
    let url = apify(`tests/pdf`);
    navigateTo(url, { external: true, open: { target: "_blank" } });
}
</script>

<template>
    <div class="p-5 md:p-10 flex flex-col gap-5">
        <div class="flex justify-between">
            <p>Testlar</p>
            <div class="flex gap-2">
                <Dialog v-model:open="testOpenModal">
                    <DialogTrigger>
                        <Button>Test qo'shish</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Yangi test qo'shish</DialogTitle>
                        </DialogHeader>
                        <div>
                            <Label>Nomi</Label>
                            <Input v-model="test.name" />
                            <Label>Talaba</Label>
                            <Select v-model="test.user.id">
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem v-for="user in users" :value="user.id" >{{ user.first_name }} {{  user.last_name }}</SelectItem>
                                </SelectContent>
                            </Select>
                            <Label>To'plam</Label>
                            <Select v-model="test.set.id">
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem v-for="set in sets" :value="set.id" >{{ set.name }}</SelectItem>
                                </SelectContent>
                            </Select>
                            <Label>Savollar soni</Label>
                            <Input type="number" v-model="test.questions_count" />
                            <Label>O'tish bali</Label>
                            <Input type="number" v-model="test.passed_score" />
                        </div>
                        <DialogFooter>
                            <Button @click="addTest">Qo'shish</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                <Button @click="printTestsResult">PDF Natijalar</Button>
            </div>
        </div>
        <div class="overflow-x-auto border rounded-md">
            <Table class="whitespace-nowrap">
                <TableHeader class="border-b">
                    <TableHead>#</TableHead>
                    <TableHead>Nomi</TableHead>
                    <TableHead>Familiyasi</TableHead>
                    <TableHead>Ismi</TableHead>
                    <TableHead>To'plam</TableHead>
                    <TableHead>O'tish bali</TableHead>
                    <TableHead>Holati</TableHead>
                    <TableHead>Natija</TableHead>
                    <TableHead>Sarflangan vaqt</TableHead>
                    <TableHead class="border-l">Chap</TableHead>
                    <TableHead>O'ng</TableHead>
                    <TableHead>Odam yuq</TableHead>
                    <TableHead>Odam kup</TableHead>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="test, index in tests">
                        <TableCell class="border-r">{{ index+1 }}</TableCell>
                        <TableCell>{{ test.name }}</TableCell>
                        <TableCell>{{ test.user.last_name }}</TableCell>
                        <TableCell>{{ test.user.first_name }}</TableCell>
                        <TableCell>{{ test.set.name }}</TableCell>
                        <TableCell>{{ test.passed_score }}</TableCell>
                        <TableCell>
                            <span class="font-bold text-blue-500 border p-1 rounded-md bg-blue-500/10" v-if="test.status === 'not_started'">Boshlanmagan</span>
                            <span class="font-bold text-sky-500 border p-1 rounded-md bg-sky-500/10" v-if="test.status === 'started'">Boshlangan</span>
                            <span class="font-bold text-green-500 border p-1 rounded-md bg-green-500/10" v-if="test.status === 'passed'">O'tgan</span>
                            <span class="font-bold text-red-500 border p-1 rounded-md bg-red-500/10" v-if="test.status === 'failed'">Yiqilgan</span>
                            <span class="font-bold text-orange-500 border p-1 rounded-md bg-orange-500/10" v-if="test.status === 'ended'">Tugagan</span>
                        </TableCell>
                        <TableCell>{{ test.percentage }}</TableCell>
                        <TableCell>{{ secondsToHMS(test.elapsed) }}</TableCell>
                        <TableCell class="border-l text-center">{{ test.left }}</TableCell>
                        <TableCell class="text-center">{{ test.right }}</TableCell>
                        <TableCell class="text-center">{{ test.no_person }}</TableCell>
                        <TableCell class="text-center">{{ test.two_person }}</TableCell>
                        <!-- <TableCell>
                            <Button v-if="test.status !== 'not_started' && test.status !== 'started'" @click="printTestResult(test)" size="xs">PDF Natija</Button>
                        </TableCell> -->
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </div>
</template>
