<script setup lang="ts">
import { LucideChevronRight, LucideFileQuestion, LucideHistory, LucideSigma, LucideUsers, LucideUsers2 } from 'lucide-vue-next';
import apify from '~/composables/useAPI';
import type { IQuestion, ITest, IUser } from '~/types';



definePageMeta({
    layout: "admin",
    middleware: "is-admin"
});
useHead({
    title: "Bosh sahifa"
});

const users = ref<IUser[]>([]);
const tests = ref<ITest[]>([]);
const questions = ref<IQuestion[]>([]);


const getUsers = async () => {
    let response = await $fetch<IUser[]>(apify("users"));
    users.value = response;
}

const getTests = async () => {
    let response = await $fetch<ITest[]>(apify("tests"));
    tests.value = response;
}

const getQuestions = async () => {
    let response = await $fetch<IQuestion[]>(apify("questions"));
    questions.value = response;
}


onMounted(() => {
    getUsers();
    getTests();
    getQuestions();
});
</script>

<template>
    <div class="p-5 md:p-10 flex flex-col gap-5">
        <div class="flex gap-5 flex-col md:flex-row">
            <Card class="w-full">
                <CardHeader>
                    <CardTitle>Talabalar soni</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="flex items-center justify-between">
                        <p>{{ users.length }}</p>
                        <LucideUsers />
                    </div>
                </CardContent>
            </Card>
            <Card class="w-full">
                <CardHeader>
                    <CardTitle>Testlar soni</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="flex items-center justify-between">
                        <p>{{ tests.length }}</p>
                        <LucideSigma />
                    </div>
                </CardContent>
            </Card>
            <Card class="w-full">
                <CardHeader>
                    <CardTitle>Savollar soni</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="flex items-center justify-between">
                        <p>{{ questions.length }}</p>
                        <LucideFileQuestion />
                    </div>
                </CardContent>
            </Card>
        </div>

        <div class="flex items-center gap-2 justify-between">
            <div class="flex items-center gap-2">
                <LucideUsers2 :size="20" />
                <p class="text-2xl font-bold">Talabalar</p>
            </div>
            <div>
                <NuxtLink :to="{ name: 'admin-users' }" class="text-blue-500 flex items-center gap-1 hover:underline">
                    <span>Barchasi</span>
                    <LucideChevronRight :size="16" />
                </NuxtLink>
            </div>
        </div>
        <div class="border rounded-md overflow-x-auto">
            <Table class="whitespace-nowrap">
                <TableHeader class="border-b">
                    <TableHead>#</TableHead>
                    <TableHead>Foydalanuvchi nomi</TableHead>
                    <TableHead>Familiyasi</TableHead>
                    <TableHead>Ismi</TableHead>
                    <TableHead>Sharifi</TableHead>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="user, index in users.slice(0, 5)">
                        <TableCell class="border-r">{{ index+1 }}</TableCell>
                        <TableCell>{{ user.username }}</TableCell>
                        <TableCell>{{ user.first_name }}</TableCell>
                        <TableCell>{{ user.last_name }}</TableCell>
                        <TableCell>{{ user.middle_name }}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </div>
</template>