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

const is_admin = defineNuxtRouteMiddleware((to, from) => {
  var _a, _b;
  const { user } = useAuth();
  if (((_a = to.name) == null ? void 0 : _a.toString().includes("admin")) && ((_b = user.value) == null ? void 0 : _b.role) !== "admin") {
    return navigateTo({ name: "index" });
  }
});

export { is_admin as default };
//# sourceMappingURL=is.admin-D--VcqU6.mjs.map
