import { _ as _sfc_main$5, a as _sfc_main$1, b as _sfc_main$4, c as _sfc_main$2$1, d as _sfc_main$1$1, e as _sfc_main$3$1 } from './DialogTrigger-DklqpnXa.mjs';
import { _ as _sfc_main$2 } from './index-BMpvV6oe.mjs';
import { _ as _sfc_main$3 } from './Label-BBvFeqSn.mjs';
import { _ as _sfc_main$6 } from './Input-2SZV6hAa.mjs';
import { _ as _sfc_main$6$1, a as _sfc_main$1$2, b as _sfc_main$7, c as _sfc_main$5$1, d as _sfc_main$4$1 } from './SelectValue-B_PClpnf.mjs';
import { _ as _sfc_main$5$2, a as _sfc_main$8, b as _sfc_main$1$3, c as _sfc_main$4$2, d as _sfc_main$2$2, e as _sfc_main$3$2 } from './TableHeader-DqV9hosG.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead, b as useToast, n as navigateTo } from './server.mjs';
import { a as apify } from './useAPI-B9JE9gpb.mjs';
import { a as autogen } from './autogen-CTs5Sc_K.mjs';
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
  __name: "tests",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Testlar"
    });
    const { toast } = useToast();
    const set = ref({
      id: "1",
      name: ""
    });
    const sets = ref();
    ref("");
    ref("");
    const testOpenModal = ref(false);
    const user = ref({
      "id": "0",
      "uuid": "",
      "username": "",
      "first_name": "",
      "last_name": "",
      "middle_name": "",
      "role": "student",
      "pwd": autogen(),
      "token": ""
    });
    const test = ref({
      uuid: "",
      name: "",
      user: user.value,
      set: set.value,
      passed_score: 70,
      questions_count: 120,
      percentage: 0,
      status: "not_started",
      elapsed: 0,
      left: 0,
      right: 0,
      no_person: 0,
      two_person: 0
    });
    const tests = ref();
    const users = ref();
    const secondsToHMS = (seconds) => {
      let h = Math.floor(seconds / 3600);
      let m = Math.floor(seconds % 3600 / 60);
      let s = Math.floor(seconds % 3600 % 60);
      return `${h}`.padStart(2, "0") + ":" + `${m}`.padStart(2, "0") + ":" + `${s}`.padStart(2, "0");
    };
    const getTests = async () => {
      let result = await $fetch(apify("tests"));
      tests.value = result;
    };
    const addTest = async () => {
      let result = await $fetch(apify("tests/add"), {
        method: "POST",
        body: JSON.stringify({
          "name": test.value.name,
          "user": test.value.user.id,
          "set": test.value.set.id,
          "passed_score": test.value.passed_score,
          "questions_count": test.value.questions_count
        })
      });
      if (result.status === "success") {
        toast({
          title: "Ajoyib",
          description: "Test qo'shildi"
        });
        getTests();
      } else {
        toast({
          title: "Xatolik",
          description: "Xatolik"
        });
      }
      testOpenModal.value = false;
    };
    const printTestsResult = async () => {
      let url = apify(`tests/pdf`);
      navigateTo(url, { external: true, open: { target: "_blank" } });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = _sfc_main$5;
      const _component_DialogTrigger = _sfc_main$1;
      const _component_Button = _sfc_main$2;
      const _component_DialogContent = _sfc_main$4;
      const _component_DialogHeader = _sfc_main$2$1;
      const _component_DialogTitle = _sfc_main$1$1;
      const _component_Label = _sfc_main$3;
      const _component_Input = _sfc_main$6;
      const _component_Select = _sfc_main$6$1;
      const _component_SelectTrigger = _sfc_main$1$2;
      const _component_SelectValue = _sfc_main$7;
      const _component_SelectContent = _sfc_main$5$1;
      const _component_SelectItem = _sfc_main$4$1;
      const _component_DialogFooter = _sfc_main$3$1;
      const _component_Table = _sfc_main$5$2;
      const _component_TableHeader = _sfc_main$8;
      const _component_TableHead = _sfc_main$1$3;
      const _component_TableBody = _sfc_main$4$2;
      const _component_TableRow = _sfc_main$2$2;
      const _component_TableCell = _sfc_main$3$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5 md:p-10 flex flex-col gap-5" }, _attrs))}><div class="flex justify-between"><p>Testlar</p><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_Dialog, {
        open: unref(testOpenModal),
        "onUpdate:open": ($event) => isRef(testOpenModal) ? testOpenModal.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Test qo&#39;shish`);
                      } else {
                        return [
                          createTextVNode("Test qo'shish")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, null, {
                      default: withCtx(() => [
                        createTextVNode("Test qo'shish")
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
                              _push5(`Yangi test qo&#39;shish`);
                            } else {
                              return [
                                createTextVNode("Yangi test qo'shish")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Yangi test qo'shish")
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
                    modelValue: unref(test).name,
                    "onUpdate:modelValue": ($event) => unref(test).name = $event
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Talaba`);
                      } else {
                        return [
                          createTextVNode("Talaba")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, {
                    modelValue: unref(test).user.id,
                    "onUpdate:modelValue": ($event) => unref(test).user.id = $event
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
                              ssrRenderList(unref(users), (user2) => {
                                _push5(ssrRenderComponent(_component_SelectItem, {
                                  value: user2.id
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(user2.first_name)} ${ssrInterpolate(user2.last_name)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(user2.first_name) + " " + toDisplayString(user2.last_name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(users), (user2) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
                                    value: user2.id
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(user2.first_name) + " " + toDisplayString(user2.last_name), 1)
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(users), (user2) => {
                                return openBlock(), createBlock(_component_SelectItem, {
                                  value: user2.id
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(user2.first_name) + " " + toDisplayString(user2.last_name), 1)
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
                    modelValue: unref(test).set.id,
                    "onUpdate:modelValue": ($event) => unref(test).set.id = $event
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
                        _push4(`Savollar soni`);
                      } else {
                        return [
                          createTextVNode("Savollar soni")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    type: "number",
                    modelValue: unref(test).questions_count,
                    "onUpdate:modelValue": ($event) => unref(test).questions_count = $event
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`O&#39;tish bali`);
                      } else {
                        return [
                          createTextVNode("O'tish bali")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    type: "number",
                    modelValue: unref(test).passed_score,
                    "onUpdate:modelValue": ($event) => unref(test).passed_score = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_DialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, { onClick: addTest }, {
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
                          createVNode(_component_Button, { onClick: addTest }, {
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
                            createTextVNode("Yangi test qo'shish")
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
                        modelValue: unref(test).name,
                        "onUpdate:modelValue": ($event) => unref(test).name = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Talaba")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Select, {
                        modelValue: unref(test).user.id,
                        "onUpdate:modelValue": ($event) => unref(test).user.id = $event
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(users), (user2) => {
                                return openBlock(), createBlock(_component_SelectItem, {
                                  value: user2.id
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(user2.first_name) + " " + toDisplayString(user2.last_name), 1)
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
                          createTextVNode("To'plam")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Select, {
                        modelValue: unref(test).set.id,
                        "onUpdate:modelValue": ($event) => unref(test).set.id = $event
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
                          createTextVNode("Savollar soni")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        type: "number",
                        modelValue: unref(test).questions_count,
                        "onUpdate:modelValue": ($event) => unref(test).questions_count = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("O'tish bali")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        type: "number",
                        modelValue: unref(test).passed_score,
                        "onUpdate:modelValue": ($event) => unref(test).passed_score = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode(_component_DialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_Button, { onClick: addTest }, {
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
                      createTextVNode("Test qo'shish")
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
                          createTextVNode("Yangi test qo'shish")
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
                      modelValue: unref(test).name,
                      "onUpdate:modelValue": ($event) => unref(test).name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_Label, null, {
                      default: withCtx(() => [
                        createTextVNode("Talaba")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, {
                      modelValue: unref(test).user.id,
                      "onUpdate:modelValue": ($event) => unref(test).user.id = $event
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(users), (user2) => {
                              return openBlock(), createBlock(_component_SelectItem, {
                                value: user2.id
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(user2.first_name) + " " + toDisplayString(user2.last_name), 1)
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
                        createTextVNode("To'plam")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, {
                      modelValue: unref(test).set.id,
                      "onUpdate:modelValue": ($event) => unref(test).set.id = $event
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
                        createTextVNode("Savollar soni")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Input, {
                      type: "number",
                      modelValue: unref(test).questions_count,
                      "onUpdate:modelValue": ($event) => unref(test).questions_count = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_Label, null, {
                      default: withCtx(() => [
                        createTextVNode("O'tish bali")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Input, {
                      type: "number",
                      modelValue: unref(test).passed_score,
                      "onUpdate:modelValue": ($event) => unref(test).passed_score = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(_component_DialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_Button, { onClick: addTest }, {
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
      _push(ssrRenderComponent(_component_Button, { onClick: printTestsResult }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`PDF Natijalar`);
          } else {
            return [
              createTextVNode("PDF Natijalar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="overflow-x-auto border rounded-md">`);
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
                        _push4(`Nomi`);
                      } else {
                        return [
                          createTextVNode("Nomi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Familiyasi`);
                      } else {
                        return [
                          createTextVNode("Familiyasi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ismi`);
                      } else {
                        return [
                          createTextVNode("Ismi")
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
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`O&#39;tish bali`);
                      } else {
                        return [
                          createTextVNode("O'tish bali")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Holati`);
                      } else {
                        return [
                          createTextVNode("Holati")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Natija`);
                      } else {
                        return [
                          createTextVNode("Natija")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Sarflangan vaqt`);
                      } else {
                        return [
                          createTextVNode("Sarflangan vaqt")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, { class: "border-l" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Chap`);
                      } else {
                        return [
                          createTextVNode("Chap")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`O&#39;ng`);
                      } else {
                        return [
                          createTextVNode("O'ng")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Odam yuq`);
                      } else {
                        return [
                          createTextVNode("Odam yuq")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Odam kup`);
                      } else {
                        return [
                          createTextVNode("Odam kup")
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
                        createTextVNode("Nomi")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Familiyasi")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Ismi")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("To'plam")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("O'tish bali")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Holati")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Natija")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Sarflangan vaqt")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, { class: "border-l" }, {
                      default: withCtx(() => [
                        createTextVNode("Chap")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("O'ng")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Odam yuq")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Odam kup")
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
                  ssrRenderList(unref(tests), (test2, index) => {
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
                                _push5(`${ssrInterpolate(test2.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(test2.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(test2.user.last_name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(test2.user.last_name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(test2.user.first_name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(test2.user.first_name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(test2.set.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(test2.set.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(test2.passed_score)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(test2.passed_score), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (test2.status === "not_started") {
                                  _push5(`<span class="font-bold text-blue-500 border p-1 rounded-md bg-blue-500/10"${_scopeId4}>Boshlanmagan</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (test2.status === "started") {
                                  _push5(`<span class="font-bold text-sky-500 border p-1 rounded-md bg-sky-500/10"${_scopeId4}>Boshlangan</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (test2.status === "passed") {
                                  _push5(`<span class="font-bold text-green-500 border p-1 rounded-md bg-green-500/10"${_scopeId4}>O&#39;tgan</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (test2.status === "failed") {
                                  _push5(`<span class="font-bold text-red-500 border p-1 rounded-md bg-red-500/10"${_scopeId4}>Yiqilgan</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (test2.status === "ended") {
                                  _push5(`<span class="font-bold text-orange-500 border p-1 rounded-md bg-orange-500/10"${_scopeId4}>Tugagan</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  test2.status === "not_started" ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "font-bold text-blue-500 border p-1 rounded-md bg-blue-500/10"
                                  }, "Boshlanmagan")) : createCommentVNode("", true),
                                  test2.status === "started" ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "font-bold text-sky-500 border p-1 rounded-md bg-sky-500/10"
                                  }, "Boshlangan")) : createCommentVNode("", true),
                                  test2.status === "passed" ? (openBlock(), createBlock("span", {
                                    key: 2,
                                    class: "font-bold text-green-500 border p-1 rounded-md bg-green-500/10"
                                  }, "O'tgan")) : createCommentVNode("", true),
                                  test2.status === "failed" ? (openBlock(), createBlock("span", {
                                    key: 3,
                                    class: "font-bold text-red-500 border p-1 rounded-md bg-red-500/10"
                                  }, "Yiqilgan")) : createCommentVNode("", true),
                                  test2.status === "ended" ? (openBlock(), createBlock("span", {
                                    key: 4,
                                    class: "font-bold text-orange-500 border p-1 rounded-md bg-orange-500/10"
                                  }, "Tugagan")) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(test2.percentage)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(test2.percentage), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(secondsToHMS(test2.elapsed))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(secondsToHMS(test2.elapsed)), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, { class: "border-l text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(test2.left)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(test2.left), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, { class: "text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(test2.right)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(test2.right), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, { class: "text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(test2.no_person)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(test2.no_person), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, { class: "text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(test2.two_person)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(test2.two_person), 1)
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
                                createTextVNode(toDisplayString(test2.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(test2.user.last_name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(test2.user.first_name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(test2.set.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(test2.passed_score), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                test2.status === "not_started" ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "font-bold text-blue-500 border p-1 rounded-md bg-blue-500/10"
                                }, "Boshlanmagan")) : createCommentVNode("", true),
                                test2.status === "started" ? (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "font-bold text-sky-500 border p-1 rounded-md bg-sky-500/10"
                                }, "Boshlangan")) : createCommentVNode("", true),
                                test2.status === "passed" ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: "font-bold text-green-500 border p-1 rounded-md bg-green-500/10"
                                }, "O'tgan")) : createCommentVNode("", true),
                                test2.status === "failed" ? (openBlock(), createBlock("span", {
                                  key: 3,
                                  class: "font-bold text-red-500 border p-1 rounded-md bg-red-500/10"
                                }, "Yiqilgan")) : createCommentVNode("", true),
                                test2.status === "ended" ? (openBlock(), createBlock("span", {
                                  key: 4,
                                  class: "font-bold text-orange-500 border p-1 rounded-md bg-orange-500/10"
                                }, "Tugagan")) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(test2.percentage), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(secondsToHMS(test2.elapsed)), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "border-l text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(test2.left), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(test2.right), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(test2.no_person), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(test2.two_person), 1)
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(tests), (test2, index) => {
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
                              createTextVNode(toDisplayString(test2.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(test2.user.last_name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(test2.user.first_name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(test2.set.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(test2.passed_score), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              test2.status === "not_started" ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "font-bold text-blue-500 border p-1 rounded-md bg-blue-500/10"
                              }, "Boshlanmagan")) : createCommentVNode("", true),
                              test2.status === "started" ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: "font-bold text-sky-500 border p-1 rounded-md bg-sky-500/10"
                              }, "Boshlangan")) : createCommentVNode("", true),
                              test2.status === "passed" ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: "font-bold text-green-500 border p-1 rounded-md bg-green-500/10"
                              }, "O'tgan")) : createCommentVNode("", true),
                              test2.status === "failed" ? (openBlock(), createBlock("span", {
                                key: 3,
                                class: "font-bold text-red-500 border p-1 rounded-md bg-red-500/10"
                              }, "Yiqilgan")) : createCommentVNode("", true),
                              test2.status === "ended" ? (openBlock(), createBlock("span", {
                                key: 4,
                                class: "font-bold text-orange-500 border p-1 rounded-md bg-orange-500/10"
                              }, "Tugagan")) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(test2.percentage), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(secondsToHMS(test2.elapsed)), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "border-l text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(test2.left), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(test2.right), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(test2.no_person), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(test2.two_person), 1)
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
                      createTextVNode("Nomi")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Familiyasi")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Ismi")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("To'plam")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("O'tish bali")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Holati")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Natija")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Sarflangan vaqt")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, { class: "border-l" }, {
                    default: withCtx(() => [
                      createTextVNode("Chap")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("O'ng")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Odam yuq")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Odam kup")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_TableBody, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(tests), (test2, index) => {
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
                            createTextVNode(toDisplayString(test2.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(test2.user.last_name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(test2.user.first_name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(test2.set.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(test2.passed_score), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            test2.status === "not_started" ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "font-bold text-blue-500 border p-1 rounded-md bg-blue-500/10"
                            }, "Boshlanmagan")) : createCommentVNode("", true),
                            test2.status === "started" ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "font-bold text-sky-500 border p-1 rounded-md bg-sky-500/10"
                            }, "Boshlangan")) : createCommentVNode("", true),
                            test2.status === "passed" ? (openBlock(), createBlock("span", {
                              key: 2,
                              class: "font-bold text-green-500 border p-1 rounded-md bg-green-500/10"
                            }, "O'tgan")) : createCommentVNode("", true),
                            test2.status === "failed" ? (openBlock(), createBlock("span", {
                              key: 3,
                              class: "font-bold text-red-500 border p-1 rounded-md bg-red-500/10"
                            }, "Yiqilgan")) : createCommentVNode("", true),
                            test2.status === "ended" ? (openBlock(), createBlock("span", {
                              key: 4,
                              class: "font-bold text-orange-500 border p-1 rounded-md bg-orange-500/10"
                            }, "Tugagan")) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(test2.percentage), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(secondsToHMS(test2.elapsed)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, { class: "border-l text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(test2.left), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, { class: "text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(test2.right), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, { class: "text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(test2.no_person), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, { class: "text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(test2.two_person), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/tests.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tests-Diu-219x.mjs.map
