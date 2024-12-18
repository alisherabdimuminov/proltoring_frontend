import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { l as logo } from './logo-C3IdMNMb.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "auth",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen flex" }, _attrs))}><div class="relative hidden md:block w-full bg-accent p-10" style="${ssrRenderStyle({ backgroundImage: `url(${unref(logo)})`, backgroundSize: "50%", backgroundRepeat: "no-repeat", backgroundPosition: "center" })}"><div class="absolute text-center w-full left-0 bottom-20"><p class="text-2xl font-bold w-full"><span class="block">LMC - Zukko</span></p></div></div><div class="w-full flex items-center justify-center">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=auth-Dxmw1tpL.mjs.map
