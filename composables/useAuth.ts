import type { IUser } from "~/types";
import { useLocalStorage } from "@vueuse/core"

export default function useAuth() {
    const router = useRouter();
    // const userCookie = useLocalStorage<IUser | null>("user", null);
    const userCookie = useCookie<IUser | null>("user", {
        watch: "shallow",
        default: () => null
    });

    const user = computed(() => {
        try {
            let user: IUser | null = JSON.parse(JSON.stringify(userCookie.value));
            return user;
        } catch {
            console.log(typeof userCookie.value);
            return null;
        }
    });

    const login = (user: IUser) => {
        userCookie.value = user;
    }

    const logout = () => {
        userCookie.value = null;
        router.push({ name: "auth-login" });
    }

    return {
        user,
        login,
        logout,
    }
} 