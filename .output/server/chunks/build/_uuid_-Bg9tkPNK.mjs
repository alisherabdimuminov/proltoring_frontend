import { _ as _sfc_main$1 } from './index-BMpvV6oe.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './RadioGroupItem-jSbXaFfo.mjs';
import { _ as _sfc_main$3 } from './Label-BBvFeqSn.mjs';
import { u as useHead, a as useRoute, n as navigateTo, t as toast } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { a as apify } from './useAPI-B9JE9gpb.mjs';
import { LucideChevronLeft } from 'lucide-vue-next';
import { u as useAuth } from './useAuth-BglfZ2NW.mjs';
import 'radix-vue';
import 'class-variance-authority';
import '@radix-icons/vue';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[uuid]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "LMC - Zukko"
    });
    const { user } = useAuth();
    const route = useRoute();
    if (user.value !== null && user.value.role === "admin") {
      navigateTo({ name: "admin" });
    }
    const test = ref();
    const answers = ref([]);
    const isShown = ref(false);
    ref(false);
    const isLoading = ref(true);
    ref("VIDEO");
    let border = ref("");
    const submit = async () => {
      var _a;
      isLoading.value = true;
      let response = await $fetch(apify(`tests/test/${route.params.uuid}/submit`), {
        method: "POST",
        body: JSON.stringify({
          "answers": answers.value.join(",")
        }),
        headers: {
          "Authorization": `Token ${(_a = user.value) == null ? void 0 : _a.token}`
        }
      });
      if (response.status === "error") {
        toast({
          title: "Xatolik",
          description: "Barch savollarni belgilang"
        });
      } else {
        if (response.status === "success") {
          navigateTo("/");
        }
      }
      isLoading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$1;
      const _component_RadioGroup = _sfc_main$1$1;
      const _component_RadioGroupItem = _sfc_main$2;
      const _component_Label = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5 md:p-10 flex flex-col gap-5 sm:mx-16 md:mx-24 lg:mx-64" }, _attrs))}><div class="flex justify-between">`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(LucideChevronLeft), null, null, _parent2, _scopeId));
            _push2(` Orqaga `);
          } else {
            return [
              createVNode(unref(LucideChevronLeft)),
              createTextVNode(" Orqaga ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(test) && (unref(test).status === "not_started" || unref(test).status === "started")) {
        _push(ssrRenderComponent(_component_Button, {
          onClick: submit,
          size: "xs",
          variant: "destructive"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Tugatish`);
            } else {
              return [
                createTextVNode("Tugatish")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(test)) {
        _push(`<p class="text-center text-2xl font-bold">${ssrInterpolate(unref(test).name)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="h-full border p-1 md:p-5 bg-accent/30 flex flex-col divide-y">`);
      if (unref(test) && unref(test).questions) {
        _push(`<!--[-->`);
        ssrRenderList(unref(test).questions, (question, index) => {
          _push(`<div class="p-2"><p class="text-base md:text-lg">${ssrInterpolate(index + 1)}. ${ssrInterpolate(question.question)}</p>`);
          _push(ssrRenderComponent(_component_RadioGroup, {
            class: "ml-10 p-2 flex flex-col gap-3",
            modelValue: unref(answers)[index],
            "onUpdate:modelValue": ($event) => unref(answers)[index] = $event
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex gap-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_RadioGroupItem, {
                  id: `q_${index + 1}_answer_a`,
                  value: "a"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_Label, {
                  class: { "font-bold": question.correct_answer === "a" && unref(user) && unref(user).role === "admin" && unref(isShown) },
                  for: `q_${index + 1}_answer_a`
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(question.answer_a)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(question.answer_a), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="flex gap-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_RadioGroupItem, {
                  id: `q_${index + 1}_answer_b`,
                  value: "b"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_Label, {
                  class: { "font-bold": question.correct_answer === "b" && unref(user) && unref(user).role === "admin" && unref(isShown) },
                  for: `q_${index + 1}_answer_b`
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(question.answer_b)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(question.answer_b), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="flex gap-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_RadioGroupItem, {
                  id: `q_${index + 1}_answer_c`,
                  value: "c"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_Label, {
                  class: { "font-bold": question.correct_answer === "c" && unref(user) && unref(user).role === "admin" && unref(isShown) },
                  for: `q_${index + 1}_answer_c`
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(question.answer_c)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(question.answer_c), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="flex gap-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_RadioGroupItem, {
                  id: `q_${index + 1}_answer_d`,
                  value: "d"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_Label, {
                  class: { "font-bold": question.correct_answer === "d" && unref(user) && unref(user).role === "admin" && unref(isShown) },
                  for: `q_${index + 1}_answer_d`
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(question.answer_d)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(question.answer_d), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "flex gap-3" }, [
                    createVNode(_component_RadioGroupItem, {
                      id: `q_${index + 1}_answer_a`,
                      value: "a"
                    }, null, 8, ["id"]),
                    createVNode(_component_Label, {
                      class: { "font-bold": question.correct_answer === "a" && unref(user) && unref(user).role === "admin" && unref(isShown) },
                      for: `q_${index + 1}_answer_a`
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(question.answer_a), 1)
                      ]),
                      _: 2
                    }, 1032, ["class", "for"])
                  ]),
                  createVNode("div", { class: "flex gap-3" }, [
                    createVNode(_component_RadioGroupItem, {
                      id: `q_${index + 1}_answer_b`,
                      value: "b"
                    }, null, 8, ["id"]),
                    createVNode(_component_Label, {
                      class: { "font-bold": question.correct_answer === "b" && unref(user) && unref(user).role === "admin" && unref(isShown) },
                      for: `q_${index + 1}_answer_b`
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(question.answer_b), 1)
                      ]),
                      _: 2
                    }, 1032, ["class", "for"])
                  ]),
                  createVNode("div", { class: "flex gap-3" }, [
                    createVNode(_component_RadioGroupItem, {
                      id: `q_${index + 1}_answer_c`,
                      value: "c"
                    }, null, 8, ["id"]),
                    createVNode(_component_Label, {
                      class: { "font-bold": question.correct_answer === "c" && unref(user) && unref(user).role === "admin" && unref(isShown) },
                      for: `q_${index + 1}_answer_c`
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(question.answer_c), 1)
                      ]),
                      _: 2
                    }, 1032, ["class", "for"])
                  ]),
                  createVNode("div", { class: "flex gap-3" }, [
                    createVNode(_component_RadioGroupItem, {
                      id: `q_${index + 1}_answer_d`,
                      value: "d"
                    }, null, 8, ["id"]),
                    createVNode(_component_Label, {
                      class: { "font-bold": question.correct_answer === "d" && unref(user) && unref(user).role === "admin" && unref(isShown) },
                      for: `q_${index + 1}_answer_d`
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(question.answer_d), 1)
                      ]),
                      _: 2
                    }, 1032, ["class", "for"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><video class="${ssrRenderClass([unref(border), "fixed bottom-5 right-5 w-20 md:w-32 h-20 md:h-32 rounded-full object-cover border-4"])}" id="video" autoplay playsinline></video></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[uuid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_uuid_-Bg9tkPNK.mjs.map
