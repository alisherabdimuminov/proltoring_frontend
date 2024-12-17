<script setup lang="ts">
import { LucideCirclePlus, LucideFlaskConical, LucideGitBranch, LucideLayoutGrid, LucideLogOut, LucideMonitor, LucideMoon, LucideSprout, LucideSun, LucideText, LucideUser, LucideUsers, LucideZap } from 'lucide-vue-next';


const { logout, user } = useAuth();
const route = useRoute();

if (user.value === null) {
    logout();
    console.log("logout")
}

const colorMode = useColorMode();

</script>

<template>
    <div class="h-screen flex">
        <div class="w-14 border-r bg-accent/30">
            <div class="h-[3rem] flex gap-2 items-center justify-center">
                <LucideSprout :size="30" />
            </div>
            <div class="flex flex-col gap-1 p-2">
                
            </div>
        </div>
        <div class="flex-1 w-[calc(100%-3.5rem)]">
            <div class="h-[3rem] border-b bg-accent/30 flex items-center justify-between px-5">
                <div class="flex flex-col md:flex-row gap-1 md:gap-5">
                    <p class="font-bold">Uzbekistan-Finlandiya Pedagogika Instituti</p>
                    <p class="hidden md:block">|</p>
                    <p>{{ user?.first_name }} {{ user?.last_name }}</p>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <LucideUser />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent class="w-64">
                        <DropdownMenuLabel>{{ user?.department }}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            {{ user?.first_name }} {{ user?.last_name }}
                            <DropdownMenuShortcut>
                                <LucideUser :size="16" />
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Rejim</DropdownMenuLabel>
                        <DropdownMenuItem @click="colorMode.preference = 'light'">
                            Tizim
                            <DropdownMenuShortcut>
                                <LucideMonitor :size="16" />
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="colorMode.preference = 'light'">
                            Yorug'
                            <DropdownMenuShortcut>
                                <LucideSun :size="16" />
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="colorMode.preference = 'dark'">
                            Qorong'u
                            <DropdownMenuShortcut>
                                <LucideMoon :size="16" />
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem @click="logout">
                            <span>Chiqish</span>
                            <DropdownMenuShortcut>
                                <LucideLogOut :size="16" />
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <ScrollArea class="h-[calc(100%-3.1rem)]">
                <slot />
            </ScrollArea>
        </div>
    </div>
</template>