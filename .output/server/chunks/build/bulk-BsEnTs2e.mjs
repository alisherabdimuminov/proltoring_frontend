import { _ as _sfc_main$1 } from './index-BMpvV6oe.mjs';
import { _ as _sfc_main$6, a as _sfc_main$1$1, b as _sfc_main$2, c as _sfc_main$5, d as _sfc_main$4 } from './SelectValue-B_PClpnf.mjs';
import { _ as _sfc_main$3 } from './Textarea-BpIqTOKC.mjs';
import { defineComponent, ref, watch, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { a as apify } from './useAPI-B9JE9gpb.mjs';
import './server.mjs';
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
import 'class-variance-authority';
import 'radix-vue';
import 'clsx';
import 'tailwind-merge';
import '@radix-icons/vue';
import '@vueuse/core';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bulk",
  __ssrInlineRender: true,
  setup(__props) {
    const rawQuestions = ref("");
    const questions = ref([]);
    const isLoading = ref(false);
    const set = ref({
      id: "1",
      name: ""
    });
    const sets = ref([]);
    const parseRawQuestions = () => {
      questions.value = [];
      let splittedRawQuestions = rawQuestions.value.split("\n\n");
      splittedRawQuestions.forEach((splittedRawQuestion) => {
        let question = splittedRawQuestion.split("\n");
        let content = question[0];
        let answer_a = question[1];
        let answer_b = question[2];
        let answer_c = question[3];
        let answer_d = question[4];
        let q = { "question": content, "answer_a": answer_a, "answer_b": answer_b, "answer_c": answer_c, "answer_d": answer_d, correct_answer: "a" };
        questions.value.push(q);
      });
      console.log(splittedRawQuestions);
    };
    watch(rawQuestions, (newValue) => {
      parseRawQuestions();
      console.log(questions);
    });
    const bulkCreate = async () => {
      isLoading.value = true;
      await $fetch(apify("bulk"), {
        method: "POST",
        body: JSON.stringify({
          "set": set.value.id,
          "raw": rawQuestions.value
        })
      });
      rawQuestions.value = "";
      isLoading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$1;
      const _component_Select = _sfc_main$6;
      const _component_SelectTrigger = _sfc_main$1$1;
      const _component_SelectValue = _sfc_main$2;
      const _component_SelectContent = _sfc_main$5;
      const _component_SelectItem = _sfc_main$4;
      const _component_Textarea = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full p-5 md:p-10 flex flex-col gap-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Button, {
        disabled: unref(isLoading),
        onClick: bulkCreate
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Generatsiya qilish`);
          } else {
            return [
              createTextVNode("Generatsiya qilish")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Select, {
        modelValue: unref(set).id,
        "onUpdate:modelValue": ($event) => unref(set).id = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SelectTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectValue, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectValue)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SelectContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(sets), (set2) => {
                    _push3(ssrRenderComponent(_component_SelectItem, {
                      value: set2.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(set2.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(set2.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(sets), (set2) => {
                      return openBlock(), createBlock(_component_SelectItem, {
                        value: set2.id
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(set2.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SelectTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectValue)
                ]),
                _: 1
              }),
              createVNode(_component_SelectContent, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(sets), (set2) => {
                    return openBlock(), createBlock(_component_SelectItem, {
                      value: set2.id
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(set2.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 256))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex h-full border">`);
      _push(ssrRenderComponent(_component_Textarea, {
        disabled: unref(isLoading),
        cols: "20",
        modelValue: unref(rawQuestions),
        "onUpdate:modelValue": ($event) => isRef(rawQuestions) ? rawQuestions.value = $event : null
      }, null, _parent));
      _push(`<div class="w-full p-2"><!--[-->`);
      ssrRenderList(unref(questions), (question, index) => {
        _push(`<div><p>${ssrInterpolate(index + 1)}. ${ssrInterpolate(question.question)}</p><p class="ml-6">a) ${ssrInterpolate(question.answer_a)}</p><p class="ml-6">b) ${ssrInterpolate(question.answer_b)}</p><p class="ml-6">c) ${ssrInterpolate(question.answer_c)}</p><p class="ml-6">d) ${ssrInterpolate(question.answer_d)}</p></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/bulk.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=bulk-BsEnTs2e.mjs.map
