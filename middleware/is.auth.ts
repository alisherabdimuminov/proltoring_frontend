import useAuth from "~/composables/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
    const { user } = useAuth();
    if (user.value === null) {
        return navigateTo({ name: "auth-login" });
    }
});