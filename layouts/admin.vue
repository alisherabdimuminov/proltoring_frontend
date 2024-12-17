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
                <img width="25" height="25" src="~/assets/images/logo.png" alt="">
            </div>
            <div class="flex flex-col gap-1 p-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <NuxtLink :to="{ name: 'admin' }" class="flex items-center gap-2 p-1" :class="route.name === 'admin' ? 'font-bold' : 'text-muted-foreground'">
                                <LucideLayoutGrid :size="20" />
                            </NuxtLink>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            Bosh sahifa
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <NuxtLink :to="{ name: 'admin-users' }" class="flex items-center gap-2 p-1" :class="route.name === 'admin-users' ? 'font-bold' : 'text-muted-foreground'">
                                <LucideUsers :size="20" />
                            </NuxtLink>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            Xodimlar
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <NuxtLink :to="{ name: 'admin-tests' }" class="flex items-center rounded-md gap-2 p-1" :class="route.name === 'admin-tests' ? 'font-bold' : 'text-muted-foreground'">
                                <LucideFlaskConical :size="20" />
                            </NuxtLink>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            Testlar
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <NuxtLink :to="{ name: 'admin-questions' }" class="flex items-center rounded-md gap-2 p-1" :class="route.name === 'admin-questions' ? 'font-bold' : 'text-muted-foreground'">
                                <LucideText :size="20" />
                            </NuxtLink>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            Savollar
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <NuxtLink :to="{ name: 'admin-bulk' }" class="flex items-center rounded-md gap-2 p-1" :class="route.name === 'admin-bulk' ? 'font-bold' : 'text-muted-foreground'">
                                <LucideCirclePlus :size="20" />
                            </NuxtLink>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            Savol qo'shish
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
        <div class="flex-1 w-[calc(100%-3.5rem)]">
            <div class="h-[3rem] border-b bg-accent/30 flex items-center justify-between px-5">
                <div>
                    <p class="font-bold">O'zbekiston-Finlandiya Pedagogika Instituti</p>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <LucideUser />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent class="w-64">
                        <DropdownMenuLabel>{{ user?.phone }}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            {{ user?.first_name }} {{ user?.last_name }}
                            <DropdownMenuShortcut>
                                <LucideUser :size="16" />
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            {{ user?.branch }}
                            <DropdownMenuShortcut>
                                <LucideGitBranch :size="16" />
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