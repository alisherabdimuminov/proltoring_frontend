import useAuth from "~/composables/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
    const { user } = useAuth();
    if (to.name?.toString().includes("admin") && user.value?.role !== 'admin') {
        return navigateTo({ name: "index" });
    }
});