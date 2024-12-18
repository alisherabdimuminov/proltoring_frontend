import { _ as _sfc_main$1 } from './Label-BBvFeqSn.mjs';
import { _ as _sfc_main$2 } from './Input-2SZV6hAa.mjs';
import { _ as _sfc_main$3 } from './index-BMpvV6oe.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead, n as navigateTo, t as toast } from './server.mjs';
import { a as apify } from './useAPI-B9JE9gpb.mjs';
import { u as useAuth } from './useAuth-BglfZ2NW.mjs';
import 'radix-vue';
import '@vueuse/core';
import 'class-variance-authority';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'clsx';
import 'tailwind-merge';
import '@radix-icons/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Kirish"
    });
    const { login } = useAuth();
    const username = ref("");
    const password = ref("");
    const handleLogin = async () => {
      let response = await $fetch(apify("users/login"), {
        method: "POST",
        body: JSON.stringify({
          "username": username.value,
          "password": password.value
        })
      });
      if (response.status === "success") {
        if (response.data.role === "admin") {
          login(response.data);
          navigateTo({ name: "admin" });
        } else {
          login(response.data);
          navigateTo({ name: "index" });
        }
        toast({
          title: "Ajoyib",
          description: "Tizimga muvaffaqiyatli kirdingiz."
        });
      } else {
        if (response.code === "404") {
          toast({
            title: "Afsus",
            description: "Foydalanuvchi topilmadi"
          });
        } else if (response.code === "400") {
          toast({
            title: "Afsus",
            description: "Parol noto'g'ri, qaytadan urinib ko'ring."
          });
        } else {
          toast({
            title: "Afsus",
            description: "Tizim xatoligi. Adminga murojat qiling."
          });
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Label = _sfc_main$1;
      const _component_Input = _sfc_main$2;
      const _component_Button = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-96 flex-col" }, _attrs))}><p class="text-center text-2xl font-bold">Kirish</p>`);
      _push(ssrRenderComponent(_component_Label, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Foydalanuvchi nomi`);
          } else {
            return [
              createTextVNode("Foydalanuvchi nomi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Input, {
        modelValue: unref(username),
        "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_Label, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Parol`);
          } else {
            return [
              createTextVNode("Parol")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Input, {
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
        type: "password"
      }, null, _parent));
      _push(`<br>`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: handleLogin,
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kirish`);
          } else {
            return [
              createTextVNode("Kirish")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-8zukbZwl.mjs.map
