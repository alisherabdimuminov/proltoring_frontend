import { u as useAuth } from './useAuth-BglfZ2NW.mjs';
import { d as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import 'vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'class-variance-authority';
import 'radix-vue';
import 'clsx';
import 'tailwind-merge';
import '@radix-icons/vue';

const is_auth = defineNuxtRouteMiddleware((to, from) => {
  const { user } = useAuth();
  if (user.value === null) {
    return navigateTo({ name: "auth-login" });
  }
});

export { is_auth as default };
//# sourceMappingURL=is.auth-D9YODouk.mjs.map
