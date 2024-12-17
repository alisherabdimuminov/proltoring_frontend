<script setup lang="ts">
import logo from "~/assets/images/logo.png";
</script>

<template>
    <div class="h-screen flex">
        <div class="relative hidden md:block w-full bg-accent p-10" :style="{ backgroundImage: `url(${logo})`, backgroundSize: '50%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
             <div class="absolute text-center w-full left-0 bottom-20">
                <p class="text-2xl font-bold w-full">
                    <span class="block">LMC - Zukko</span>
                </p>
            </div>
        </div>
        <div class="w-full flex items-center justify-center">
            <slot />
        </div>
    </div>
</template>
