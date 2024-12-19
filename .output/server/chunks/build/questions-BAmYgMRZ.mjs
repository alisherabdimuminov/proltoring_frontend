import { _ as _sfc_main$4, a as _sfc_main$3, b as _sfc_main$1$1, c as _sfc_main$5, d as _sfc_main$2$1 } from './DialogTitle-DXwZyxgs.mjs';
import { _ as _sfc_main$1 } from './DialogTrigger-DRJQjnK1.mjs';
import { _ as _sfc_main$2 } from './index-BMpvV6oe.mjs';
import { _ as _sfc_main$6 } from './Label-BBvFeqSn.mjs';
import { _ as _sfc_main$7 } from './Input-2SZV6hAa.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$8, b as _sfc_main$1$2, c as _sfc_main$4$1, d as _sfc_main$2$2, e as _sfc_main$3$1 } from './TableHeader-DqV9hosG.mjs';
import { _ as _sfc_main$9 } from './Textarea-BpIqTOKC.mjs';
import { _ as _sfc_main$1$3, a as _sfc_main$a } from './RadioGroupItem-jSbXaFfo.mjs';
import { _ as _sfc_main$6$1, a as _sfc_main$1$4, b as _sfc_main$b, c as _sfc_main$5$2, d as _sfc_main$4$2 } from './SelectValue-B_PClpnf.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { a as apify } from './useAPI-B9JE9gpb.mjs';
import { u as useHead, b as useToast } from './server.mjs';
import 'radix-vue';
import '@radix-icons/vue';
import 'class-variance-authority';
import '@vueuse/core';
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
  __name: "questions",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Savollar"
    });
    const { toast } = useToast();
    const sets = ref();
    const set = ref({
      id: "0",
      name: "test"
    });
    const correctAnswer = ref("a");
    const questions = ref();
    const question = ref({
      question: "",
      answer_a: "",
      answer_b: "",
      answer_c: "",
      answer_d: "",
      correct_answer: "",
      score: 2,
      set: set.value
    });
    const getSets = async () => {
      let result = await $fetch(apify("sets"));
      sets.value = result;
    };
    const addSet = async () => {
      let result = await $fetch(apify("sets/add"), {
        method: "POST",
        body: JSON.stringify({
          "name": set.value.name
        })
      });
      if (result.status === "success") {
        toast({
          title: "Ajoyib",
          description: "To'plam qo'shildi"
        });
        getSets();
      } else {
        toast({
          title: "Xatolik",
          description: "Nimadur xato ketdi"
        });
      }
    };
    const getQuestions = async () => {
      let result = await $fetch(apify("questions"));
      questions.value = result;
    };
    const addQuestion = async () => {
      let result = await $fetch(apify("questions/add"), {
        method: "POST",
        body: JSON.stringify({
          "question": question.value.question,
          "answer_a": question.value.answer_a,
          "answer_b": question.value.answer_b,
          "answer_c": question.value.answer_c,
          "answer_d": question.value.answer_d,
          "score": question.value.score,
          "set": question.value.set.id,
          "correct_answer": correctAnswer.value
        })
      });
      if (result.status === "success") {
        toast({
          title: "Ajoyib",
          description: "Savol qo'shildi"
        });
        getQuestions();
      } else {
        toast({
          title: "Xatolik",
          description: "Barcha maydonni to'ldiring"
        });
      }
      console.log(result);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = _sfc_main$4;
      const _component_DialogTrigger = _sfc_main$1;
      const _component_Button = _sfc_main$2;
      const _component_DialogContent = _sfc_main$3;
      const _component_DialogHeader = _sfc_main$1$1;
      const _component_DialogTitle = _sfc_main$5;
      const _component_Label = _sfc_main$6;
      const _component_Input = _sfc_main$7;
      const _component_DialogFooter = _sfc_main$2$1;
      const _component_Table = _sfc_main$5$1;
      const _component_TableHeader = _sfc_main$8;
      const _component_TableHead = _sfc_main$1$2;
      const _component_TableBody = _sfc_main$4$1;
      const _component_TableRow = _sfc_main$2$2;
      const _component_TableCell = _sfc_main$3$1;
      const _component_Textarea = _sfc_main$9;
      const _component_RadioGroup = _sfc_main$1$3;
      const _component_RadioGroupItem = _sfc_main$a;
      const _component_Select = _sfc_main$6$1;
      const _component_SelectTrigger = _sfc_main$1$4;
      const _component_SelectValue = _sfc_main$b;
      const _component_SelectContent = _sfc_main$5$2;
      const _component_SelectItem = _sfc_main$4$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5 md:p-10 flex flex-col gap-5" }, _attrs))}><div class="flex items-center justify-between"><p>To&#39;plamlar</p>`);
      _push(ssrRenderComponent(_component_Dialog, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`To&#39;plam qo&#39;shish`);
                      } else {
                        return [
                          createTextVNode("To'plam qo'shish")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, null, {
                      default: withCtx(() => [
                        createTextVNode("To'plam qo'shish")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DialogContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Yangi to&#39;plam qo&#39;shish`);
                            } else {
                              return [
                                createTextVNode("Yangi to'plam qo'shish")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Yangi to'plam qo'shish")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Nomi`);
                      } else {
                        return [
                          createTextVNode("Nomi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(set).name,
                    "onUpdate:modelValue": ($event) => unref(set).name = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_DialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, { onClick: addSet }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Qo&#39;shish`);
                            } else {
                              return [
                                createTextVNode("Qo'shish")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, { onClick: addSet }, {
                            default: withCtx(() => [
                              createTextVNode("Qo'shish")
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
                            createTextVNode("Yangi to'plam qo'shish")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", null, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Nomi")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(set).name,
                        "onUpdate:modelValue": ($event) => unref(set).name = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode(_component_DialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_Button, { onClick: addSet }, {
                          default: withCtx(() => [
                            createTextVNode("Qo'shish")
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
              createVNode(_component_DialogTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_Button, null, {
                    default: withCtx(() => [
                      createTextVNode("To'plam qo'shish")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_DialogContent, null, {
                default: withCtx(() => [
                  createVNode(_component_DialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_DialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Yangi to'plam qo'shish")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_Label, null, {
                      default: withCtx(() => [
                        createTextVNode("Nomi")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Input, {
                      modelValue: unref(set).name,
                      "onUpdate:modelValue": ($event) => unref(set).name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(_component_DialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_Button, { onClick: addSet }, {
                        default: withCtx(() => [
                          createTextVNode("Qo'shish")
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
      _push(`</div><div class="border rounded-md">`);
      _push(ssrRenderComponent(_component_Table, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TableHeader, { class: "border-b" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TableHead, { class: "w-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`#`);
                      } else {
                        return [
                          createTextVNode("#")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Name`);
                      } else {
                        return [
                          createTextVNode("Name")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TableHead, { class: "w-4" }, {
                      default: withCtx(() => [
                        createTextVNode("#")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Name")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(sets), (set2, index) => {
                    _push3(ssrRenderComponent(_component_TableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableCell, { class: "border-r" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(index + 1)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(index + 1), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(set2.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(set2.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableCell, { class: "border-r" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(index + 1), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(set2.name), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(sets), (set2, index) => {
                      return openBlock(), createBlock(_component_TableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_TableCell, { class: "border-r" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(index + 1), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(set2.name), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TableHeader, { class: "border-b" }, {
                default: withCtx(() => [
                  createVNode(_component_TableHead, { class: "w-4" }, {
                    default: withCtx(() => [
                      createTextVNode("#")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Name")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_TableBody, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(sets), (set2, index) => {
                    return openBlock(), createBlock(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, { class: "border-r" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(index + 1), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(set2.name), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 256))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between"><p>Savollar</p>`);
      _push(ssrRenderComponent(_component_Dialog, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Savol qo&#39;shish`);
                      } else {
                        return [
                          createTextVNode("Savol qo'shish")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, null, {
                      default: withCtx(() => [
                        createTextVNode("Savol qo'shish")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DialogContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Yangi savol qo&#39;shish`);
                            } else {
                              return [
                                createTextVNode("Yangi savol qo'shish")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Yangi savol qo'shish")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Savol`);
                      } else {
                        return [
                          createTextVNode("Savol")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Textarea, {
                    class: "resize-none",
                    modelValue: unref(question).question,
                    "onUpdate:modelValue": ($event) => unref(question).question = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_RadioGroup, {
                    modelValue: unref(correctAnswer),
                    "onUpdate:modelValue": ($event) => isRef(correctAnswer) ? correctAnswer.value = $event : null,
                    "default-value": "a",
                    class: "grid grid-cols-2 w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}><div class="flex items-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_RadioGroupItem, {
                          id: "a",
                          value: "a",
                          class: "peer"
                        }, null, _parent4, _scopeId3));
                        _push4(`<p${_scopeId3}>A</p></div>`);
                        _push4(ssrRenderComponent(_component_Textarea, {
                          class: "resize-none",
                          modelValue: unref(question).answer_a,
                          "onUpdate:modelValue": ($event) => unref(question).answer_a = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div${_scopeId3}><div class="flex items-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_RadioGroupItem, {
                          id: "b",
                          value: "b",
                          class: "peer"
                        }, null, _parent4, _scopeId3));
                        _push4(`<p${_scopeId3}>B</p></div>`);
                        _push4(ssrRenderComponent(_component_Textarea, {
                          class: "resize-none",
                          modelValue: unref(question).answer_b,
                          "onUpdate:modelValue": ($event) => unref(question).answer_b = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div${_scopeId3}><div class="flex items-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_RadioGroupItem, {
                          id: "c",
                          value: "c",
                          class: "peer"
                        }, null, _parent4, _scopeId3));
                        _push4(`<p${_scopeId3}>C</p></div>`);
                        _push4(ssrRenderComponent(_component_Textarea, {
                          class: "resize-none",
                          modelValue: unref(question).answer_c,
                          "onUpdate:modelValue": ($event) => unref(question).answer_c = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div${_scopeId3}><div class="flex items-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_RadioGroupItem, {
                          id: "d",
                          value: "d",
                          class: "peer"
                        }, null, _parent4, _scopeId3));
                        _push4(`<p${_scopeId3}>D</p></div>`);
                        _push4(ssrRenderComponent(_component_Textarea, {
                          class: "resize-none",
                          modelValue: unref(question).answer_d,
                          "onUpdate:modelValue": ($event) => unref(question).answer_d = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_RadioGroupItem, {
                                id: "a",
                                value: "a",
                                class: "peer"
                              }),
                              createVNode("p", null, "A")
                            ]),
                            createVNode(_component_Textarea, {
                              class: "resize-none",
                              modelValue: unref(question).answer_a,
                              "onUpdate:modelValue": ($event) => unref(question).answer_a = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_RadioGroupItem, {
                                id: "b",
                                value: "b",
                                class: "peer"
                              }),
                              createVNode("p", null, "B")
                            ]),
                            createVNode(_component_Textarea, {
                              class: "resize-none",
                              modelValue: unref(question).answer_b,
                              "onUpdate:modelValue": ($event) => unref(question).answer_b = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_RadioGroupItem, {
                                id: "c",
                                value: "c",
                                class: "peer"
                              }),
                              createVNode("p", null, "C")
                            ]),
                            createVNode(_component_Textarea, {
                              class: "resize-none",
                              modelValue: unref(question).answer_c,
                              "onUpdate:modelValue": ($event) => unref(question).answer_c = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_RadioGroupItem, {
                                id: "d",
                                value: "d",
                                class: "peer"
                              }),
                              createVNode("p", null, "D")
                            ]),
                            createVNode(_component_Textarea, {
                              class: "resize-none",
                              modelValue: unref(question).answer_d,
                              "onUpdate:modelValue": ($event) => unref(question).answer_d = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`To&#39;plam`);
                      } else {
                        return [
                          createTextVNode("To'plam")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, {
                    modelValue: unref(question).set.id,
                    "onUpdate:modelValue": ($event) => unref(question).set.id = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectValue, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectValue)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(sets), (set2) => {
                                _push5(ssrRenderComponent(_component_SelectItem, {
                                  value: set2.id
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(set2.name)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(set2.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
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
                        }, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ball`);
                      } else {
                        return [
                          createTextVNode("Ball")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    type: "number",
                    modelValue: unref(question).score,
                    "onUpdate:modelValue": ($event) => unref(question).score = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_DialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, { onClick: addQuestion }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Qo&#39;shish`);
                            } else {
                              return [
                                createTextVNode("Qo'shish")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, { onClick: addQuestion }, {
                            default: withCtx(() => [
                              createTextVNode("Qo'shish")
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
                            createTextVNode("Yangi savol qo'shish")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", null, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Savol")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Textarea, {
                        class: "resize-none",
                        modelValue: unref(question).question,
                        "onUpdate:modelValue": ($event) => unref(question).question = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "flex gap-3" }, [
                        createVNode(_component_RadioGroup, {
                          modelValue: unref(correctAnswer),
                          "onUpdate:modelValue": ($event) => isRef(correctAnswer) ? correctAnswer.value = $event : null,
                          "default-value": "a",
                          class: "grid grid-cols-2 w-full"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(_component_RadioGroupItem, {
                                  id: "a",
                                  value: "a",
                                  class: "peer"
                                }),
                                createVNode("p", null, "A")
                              ]),
                              createVNode(_component_Textarea, {
                                class: "resize-none",
                                modelValue: unref(question).answer_a,
                                "onUpdate:modelValue": ($event) => unref(question).answer_a = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(_component_RadioGroupItem, {
                                  id: "b",
                                  value: "b",
                                  class: "peer"
                                }),
                                createVNode("p", null, "B")
                              ]),
                              createVNode(_component_Textarea, {
                                class: "resize-none",
                                modelValue: unref(question).answer_b,
                                "onUpdate:modelValue": ($event) => unref(question).answer_b = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(_component_RadioGroupItem, {
                                  id: "c",
                                  value: "c",
                                  class: "peer"
                                }),
                                createVNode("p", null, "C")
                              ]),
                              createVNode(_component_Textarea, {
                                class: "resize-none",
                                modelValue: unref(question).answer_c,
                                "onUpdate:modelValue": ($event) => unref(question).answer_c = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(_component_RadioGroupItem, {
                                  id: "d",
                                  value: "d",
                                  class: "peer"
                                }),
                                createVNode("p", null, "D")
                              ]),
                              createVNode(_component_Textarea, {
                                class: "resize-none",
                                modelValue: unref(question).answer_d,
                                "onUpdate:modelValue": ($event) => unref(question).answer_d = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("To'plam")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Select, {
                        modelValue: unref(question).set.id,
                        "onUpdate:modelValue": ($event) => unref(question).set.id = $event
                      }, {
                        default: withCtx(() => [
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
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Ball")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        type: "number",
                        modelValue: unref(question).score,
                        "onUpdate:modelValue": ($event) => unref(question).score = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode(_component_DialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_Button, { onClick: addQuestion }, {
                          default: withCtx(() => [
                            createTextVNode("Qo'shish")
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
              createVNode(_component_DialogTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_Button, null, {
                    default: withCtx(() => [
                      createTextVNode("Savol qo'shish")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_DialogContent, null, {
                default: withCtx(() => [
                  createVNode(_component_DialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_DialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Yangi savol qo'shish")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_Label, null, {
                      default: withCtx(() => [
                        createTextVNode("Savol")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Textarea, {
                      class: "resize-none",
                      modelValue: unref(question).question,
                      "onUpdate:modelValue": ($event) => unref(question).question = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "flex gap-3" }, [
                      createVNode(_component_RadioGroup, {
                        modelValue: unref(correctAnswer),
                        "onUpdate:modelValue": ($event) => isRef(correctAnswer) ? correctAnswer.value = $event : null,
                        "default-value": "a",
                        class: "grid grid-cols-2 w-full"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_RadioGroupItem, {
                                id: "a",
                                value: "a",
                                class: "peer"
                              }),
                              createVNode("p", null, "A")
                            ]),
                            createVNode(_component_Textarea, {
                              class: "resize-none",
                              modelValue: unref(question).answer_a,
                              "onUpdate:modelValue": ($event) => unref(question).answer_a = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_RadioGroupItem, {
                                id: "b",
                                value: "b",
                                class: "peer"
                              }),
                              createVNode("p", null, "B")
                            ]),
                            createVNode(_component_Textarea, {
                              class: "resize-none",
                              modelValue: unref(question).answer_b,
                              "onUpdate:modelValue": ($event) => unref(question).answer_b = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_RadioGroupItem, {
                                id: "c",
                                value: "c",
                                class: "peer"
                              }),
                              createVNode("p", null, "C")
                            ]),
                            createVNode(_component_Textarea, {
                              class: "resize-none",
                              modelValue: unref(question).answer_c,
                              "onUpdate:modelValue": ($event) => unref(question).answer_c = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_RadioGroupItem, {
                                id: "d",
                                value: "d",
                                class: "peer"
                              }),
                              createVNode("p", null, "D")
                            ]),
                            createVNode(_component_Textarea, {
                              class: "resize-none",
                              modelValue: unref(question).answer_d,
                              "onUpdate:modelValue": ($event) => unref(question).answer_d = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode(_component_Label, null, {
                      default: withCtx(() => [
                        createTextVNode("To'plam")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, {
                      modelValue: unref(question).set.id,
                      "onUpdate:modelValue": ($event) => unref(question).set.id = $event
                    }, {
                      default: withCtx(() => [
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
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_Label, null, {
                      default: withCtx(() => [
                        createTextVNode("Ball")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Input, {
                      type: "number",
                      modelValue: unref(question).score,
                      "onUpdate:modelValue": ($event) => unref(question).score = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(_component_DialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_Button, { onClick: addQuestion }, {
                        default: withCtx(() => [
                          createTextVNode("Qo'shish")
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
      _push(`</div><div class="border rounded-md overflow-auto">`);
      _push(ssrRenderComponent(_component_Table, { class: "whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TableHeader, { class: "border-b" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`#`);
                      } else {
                        return [
                          createTextVNode("#")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Savol`);
                      } else {
                        return [
                          createTextVNode("Savol")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`a varyant`);
                      } else {
                        return [
                          createTextVNode("a varyant")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`b varyant`);
                      } else {
                        return [
                          createTextVNode("b varyant")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`c varyant`);
                      } else {
                        return [
                          createTextVNode("c varyant")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`d varyant`);
                      } else {
                        return [
                          createTextVNode("d varyant")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`To&#39;g&#39;ri javob`);
                      } else {
                        return [
                          createTextVNode("To'g'ri javob")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ball`);
                      } else {
                        return [
                          createTextVNode("Ball")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`To&#39;plam`);
                      } else {
                        return [
                          createTextVNode("To'plam")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("#")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Savol")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("a varyant")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("b varyant")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("c varyant")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("d varyant")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("To'g'ri javob")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Ball")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("To'plam")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(questions), (question2, index) => {
                    _push3(ssrRenderComponent(_component_TableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableCell, { class: "border-r" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(index + 1)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(index + 1), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p class="w-32 truncate"${_scopeId4}>${ssrInterpolate(question2.question)}</p>`);
                              } else {
                                return [
                                  createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.question), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p class="w-32 truncate"${_scopeId4}>${ssrInterpolate(question2.answer_a)}</p>`);
                              } else {
                                return [
                                  createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.answer_a), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p class="w-32 truncate"${_scopeId4}>${ssrInterpolate(question2.answer_b)}</p>`);
                              } else {
                                return [
                                  createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.answer_b), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p class="w-32 truncate"${_scopeId4}>${ssrInterpolate(question2.answer_c)}</p>`);
                              } else {
                                return [
                                  createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.answer_c), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p class="w-32 truncate"${_scopeId4}>${ssrInterpolate(question2.answer_d)}</p>`);
                              } else {
                                return [
                                  createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.answer_d), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(question2.correct_answer)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(question2.correct_answer), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(question2.score)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(question2.score), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(question2.set.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(question2.set.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableCell, { class: "border-r" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(index + 1), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.question), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.answer_a), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.answer_b), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.answer_c), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.answer_d), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(question2.correct_answer), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(question2.score), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(question2.set.name), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(questions), (question2, index) => {
                      return openBlock(), createBlock(_component_TableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_TableCell, { class: "border-r" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(index + 1), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.question), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.answer_a), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.answer_b), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.answer_c), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.answer_d), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(question2.correct_answer), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(question2.score), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(question2.set.name), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TableHeader, { class: "border-b" }, {
                default: withCtx(() => [
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("#")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Savol")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("a varyant")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("b varyant")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("c varyant")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("d varyant")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("To'g'ri javob")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Ball")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("To'plam")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_TableBody, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(questions), (question2, index) => {
                    return openBlock(), createBlock(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, { class: "border-r" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(index + 1), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.question), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.answer_a), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.answer_b), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.answer_c), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "w-32 truncate" }, toDisplayString(question2.answer_d), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(question2.correct_answer), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(question2.score), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(question2.set.name), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 256))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/questions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=questions-BAmYgMRZ.mjs.map
