<script setup lang="ts">
import apify from '~/composables/useAPI';
import type { IUser, IResponse } from '~/types';
import { branches } from '~/types';
import { useToast } from '~/components/ui/toast';
import { LucideEdit, LucideShuffle } from 'lucide-vue-next';


definePageMeta({
    layout: "admin"
});
useHead({
    title: "Talabalar"
});


const { toast } = useToast();

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
const users = ref<IUser[]>();
const userModalOpen = ref(false);

onMounted(async () => {
    getUsers();
});

const getUsers = async () => {
    let response = await $fetch<IUser[]>(apify("users"));
    users.value = response;
}

const addUser = async () => {
    if (user.value) {
        let response = await $fetch<IResponse<object>>(apify("users/add"), {
            method: "POST",
            body: JSON.stringify({
                "username": user.value.username,
                "first_name": user.value.first_name,
                "last_name": user.value.last_name,
                "middle_name": user.value.middle_name,
                "password": user.value.pwd,
                "role": user.value.role,
            })
        });
        if (response.status === "success") {
            toast({
                title: "Ajoyib",
                description: "Talaba qo'shildi"
            });
            getUsers();
        } else {
            toast({
                title: "Xatolik",
                description: "Barcha maydonni toldiring."
            });
        }
    }
    userModalOpen.value = false;
}

const editUser = async (user: IUser) => {
    let response = await $fetch<IResponse<string>>(apify(`users/${user.uuid}/edit`), {
        method: "POST",
        body: JSON.stringify({
            "first_name": user.first_name,
            "last_name": user.last_name,
            "middle_name": user.middle_name,
            "password": user.pwd,
            "role": user.role,
        })
    });
    if (response.status === "success") {
        toast({
            title: "Ajoyib",
            description: "Talaba tahrirlandi"
        });
        getUsers();
    } else {
        toast({
            title: "Xatolik",
            description: "Barcha maydonni toldiring."
        });
    }
    userModalOpen.value = false;
}

const printUsersResult = async () => {
    let url = apify(`users/pdf`);
    navigateTo(url, { external: true, open: { target: "_blank" } });
}

</script>

<template>
    <div class="p-5 md:p-10 flex flex-col gap-5">
        <div class="flex items-center justify-between">
            <p>Talabalar</p>
            <div class="flex gap-2">
                <Dialog v-model:open="userModalOpen">
                    <DialogTrigger>
                        <Button>Talaba qo'shish</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Yangi Talaba qo'shish</DialogTitle>
                        </DialogHeader>
                        <div>
                            <Label>Foydalanuvchi nomi</Label>
                            <Input v-model="user.username" />
                            <div class="flex gap-3 flex-col md:flex-row">
                                <div class="w-full">
                                    <Label>Ism </Label>
                                    <Input v-model="user.first_name" />
                                </div>
                                <div class="w-full">
                                    <Label>Familiya </Label>
                                    <Input v-model="user.last_name" />
                                </div>
                                <div class="w-full">
                                    <Label>Sharifi </Label>
                                    <Input v-model="user.middle_name" />
                                </div>
                            </div>
                            <Label>Parol </Label>
                            <div class="relative">
                                <Input v-model="user.pwd" />
                                <div class="absolute top-0 right-0">
                                    <Button @click="user.pwd = autogen()" size="xs"><LucideShuffle :size="16" /> </Button>
                                </div>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button @click="addUser">Qo'shish</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                <Button @click="printUsersResult">Foydalanuvchilarni yuklab olish</Button>
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
                    <TableHead>Tahrirlash</TableHead>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="user, index in users">
                        <TableCell class="border-r">{{ index+1 }}</TableCell>
                        <TableCell>{{ user.username }}</TableCell>
                        <TableCell>{{ user.last_name }}</TableCell>
                        <TableCell>{{ user.first_name }}</TableCell>
                        <TableCell>{{ user.middle_name }}</TableCell>
                        <TableCell>
                            <Dialog>
                                <DialogTrigger>
                                    <Button size="icon"><LucideEdit :size="16" /> </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Talabani tahrirlash</DialogTitle>
                                    </DialogHeader>
                                    <div>
                                        <div>
                                            <div class="flex gap-3 flex-col md:flex-row">
                                                <div class="w-full">
                                                    <Label>Ism </Label>
                                                    <Input v-model="user.first_name" />
                                                </div>
                                                <div class="w-full">
                                                    <Label>Familiya </Label>
                                                    <Input v-model="user.last_name" />
                                                </div>
                                                <div class="w-full">
                                                    <Label>Sharifi </Label>
                                                    <Input v-model="user.middle_name" />
                                                </div>
                                            </div>
                                            <Label>Parol </Label>
                                            <Input v-model="user.pwd" />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button @click="editUser(user)">Tahrirlash</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </div>
</template>
