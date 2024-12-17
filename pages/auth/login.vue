<script setup lang="ts">
import { toast } from '~/components/ui/toast';
import apify from '~/composables/useAPI';
import type { IResponse, IUser } from '~/types';



definePageMeta({
    layout: "auth"
});
useHead({
    title: "Kirish"
});

const { login } = useAuth();

const username = ref("");
const password = ref("");

const handleLogin = async () => {
    let response = await $fetch<IResponse<IUser>>(apify("users/login"), {
        method: "POST",
        body: JSON.stringify({
            "username": username.value,
            "password": password.value
        })
    });
    if (response.status === "success") {
        if (response.data.role === "admin") {
            login(response.data);
            navigateTo({ name: "admin" });
        } else {
            login(response.data);
            navigateTo({ name: "index" });
        }
        toast({
            title: "Ajoyib",
            description: "Tizimga muvaffaqiyatli kirdingiz."
        });
    } else {
        if (response.code === "404") {
            toast({
                title: "Afsus",
                description: "Foydalanuvchi topilmadi"
            });
        } else if (response.code === "400") {
            toast({
                title: "Afsus",
                description: "Parol noto'g'ri, qaytadan urinib ko'ring."
            });
        } else {
            toast({
                title: "Afsus",
                description: "Tizim xatoligi. Adminga murojat qiling."
            });
        }
    }
}
</script>

<template>
    <div class="w-96 flex-col">
        <p class="text-center text-2xl font-bold">Kirish</p>
        
        <Label>Foydalanuvchi nomi</Label>
        <Input v-model="username" />

        <Label>Parol</Label>
        <Input v-model="password" type="password"/>
        <br>
        <Button @click="handleLogin" class="w-full">Kirish</Button>
    </div>
</template>
