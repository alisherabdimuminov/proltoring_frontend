<script setup lang="ts">
import type { ITest } from "~/types";
import apify from "~/composables/useAPI";


definePageMeta({
    middleware: "is-auth",
    layout: "user"
});
useHead({
    title: "O'zbekiston-Finlandiya pedagogika institu"
});

const { user } = useAuth();

if (user.value !== null && user.value.role === "admin") {
    navigateTo({ name: "admin" });
}

const tests = ref<ITest[]>();


const getTests = async () => {
    let response = await $fetch<ITest[]>(apify("tests/me"), {
        method: "GET",
        headers: {
            "Authorization": `Token ${user.value?.token}`
        }
    });
    tests.value = response;
}


onMounted(() => {
    getTests();
});
</script>

<template>
    <div class="p-5 md:p-10 flex flex-col gap-5">
        <p class="text-2xl">Testlar</p>
        <div class="border rounded-md overflow-x-auto">
            <Table class="whitespace-nowrap">
                <TableHeader class="border-b">
                    <TableHead>#</TableHead>
                    <TableHead>Nomi</TableHead>
                    <TableHead>Savollar soni</TableHead>
                    <TableHead>Holati</TableHead>
                    <TableHead>Ball</TableHead>
                    <TableHead>Harakat</TableHead>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="test, index in tests">
                        <TableCell>{{ index+1 }}</TableCell>
                        <TableCell>{{ test.name }}</TableCell>
                        <TableCell>{{ test.questions_count }}</TableCell>
                        <TableCell>
                            <span class="font-bold text-blue-500 border p-1 rounded-md bg-blue-500/10" v-if="test.status === 'not_started'">Boshlanmagan</span>
                            <span class="font-bold text-sky-500 border p-1 rounded-md bg-sky-500/10" v-if="test.status === 'started'">Boshlangan</span>
                            <span class="font-bold text-green-500 border p-1 rounded-md bg-green-500/10" v-if="test.status === 'passed'">O'tgan</span>
                            <span class="font-bold text-red-500 border p-1 rounded-md bg-red-500/10" v-if="test.status === 'failed'">Yiqilgan</span>
                            <span class="font-bold text-orange-500 border p-1 rounded-md bg-orange-500/10" v-if="test.status === 'ended'">Tugagan</span>
                        </TableCell>
                        <TableCell>{{ test.percentage }}</TableCell>
                        <TableCell>
                            <Button v-if="test.status === 'not_started' || test.status === 'started'" @click="navigateTo({ name: 'uuid', params: { uuid: test.uuid } })" size="xs">
                                 <span>Boshlash</span>
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </div>
</template>
