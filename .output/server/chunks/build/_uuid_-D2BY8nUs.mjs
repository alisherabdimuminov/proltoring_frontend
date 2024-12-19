import { _ as _sfc_main$4, a as _sfc_main$3, b as _sfc_main$1$1, c as _sfc_main$5, d as _sfc_main$2$1 } from './DialogTitle-DXwZyxgs.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, toDisplayString, renderSlot, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { DialogClose, useForwardProps, DialogDescription } from 'radix-vue';
import { u as useHead, a as useRoute, n as navigateTo, c as cn, t as toast } from './server.mjs';
import { _ as _sfc_main$6 } from './index-BMpvV6oe.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$7 } from './RadioGroupItem-jSbXaFfo.mjs';
import { _ as _sfc_main$8 } from './Label-BBvFeqSn.mjs';
import { a as apify } from './useAPI-B9JE9gpb.mjs';
import { LucideChevronLeft } from 'lucide-vue-next';
import { u as useAuth } from './useAuth-BglfZ2NW.mjs';
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
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DialogClose",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogClose), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogClose.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DialogDescription",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogDescription), mergeProps(unref(forwardedProps), {
        class: unref(cn)("text-sm text-muted-foreground", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogDescription.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
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
    const open = ref(false);
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
      const _component_Dialog = _sfc_main$4;
      const _component_DialogContent = _sfc_main$3;
      const _component_DialogHeader = _sfc_main$1$1;
      const _component_DialogTitle = _sfc_main$5;
      const _component_DialogDescription = _sfc_main$1;
      const _component_DialogFooter = _sfc_main$2$1;
      const _component_DialogClose = _sfc_main$2;
      const _component_Button = _sfc_main$6;
      const _component_RadioGroup = _sfc_main$1$2;
      const _component_RadioGroupItem = _sfc_main$7;
      const _component_Label = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5 md:p-10 flex flex-col gap-5 sm:mx-16 md:mx-24 lg:mx-64" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Dialog, {
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Ogohlantirish`);
                            } else {
                              return [
                                createTextVNode("Ogohlantirish")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Kechirasiz, siz qoidalarni buzyabsiz.`);
                            } else {
                              return [
                                createTextVNode("Kechirasiz, siz qoidalarni buzyabsiz.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Ogohlantirish")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode("Kechirasiz, siz qoidalarni buzyabsiz.")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p${_scopeId2}>Siz taqiqlangan amallarni bajaryabsiz. Yani, test yechish muhidan chiqib ketyabsiz.</p>`);
                  _push3(ssrRenderComponent(_component_DialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogClose, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Button, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Tushunarli`);
                                  } else {
                                    return [
                                      createTextVNode("Tushunarli")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Button, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tushunarli")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogClose, null, {
                            default: withCtx(() => [
                              createVNode(_component_Button, null, {
                                default: withCtx(() => [
                                  createTextVNode("Tushunarli")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Ogohlantirish")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode("Kechirasiz, siz qoidalarni buzyabsiz.")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("p", null, "Siz taqiqlangan amallarni bajaryabsiz. Yani, test yechish muhidan chiqib ketyabsiz."),
                    createVNode(_component_DialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogClose, null, {
                          default: withCtx(() => [
                            createVNode(_component_Button, null, {
                              default: withCtx(() => [
                                createTextVNode("Tushunarli")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DialogContent, null, {
                default: withCtx(() => [
                  createVNode(_component_DialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_DialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Ogohlantirish")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode("Kechirasiz, siz qoidalarni buzyabsiz.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("p", null, "Siz taqiqlangan amallarni bajaryabsiz. Yani, test yechish muhidan chiqib ketyabsiz."),
                  createVNode(_component_DialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_DialogClose, null, {
                        default: withCtx(() => [
                          createVNode(_component_Button, null, {
                            default: withCtx(() => [
                              createTextVNode("Tushunarli")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-between">`);
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
//# sourceMappingURL=_uuid_-D2BY8nUs.mjs.map
