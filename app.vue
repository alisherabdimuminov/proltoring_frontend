<script setup lang="ts">
import Toaster from './components/ui/toast/Toaster.vue';
</script>



<template>
	<div>
		<Toaster />
    	<NuxtRouteAnnouncer />
		<NuxtLoadingIndicator />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

body {
	font-family: "Nunito", serif;
}
</style>
