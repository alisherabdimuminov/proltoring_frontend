import { _ as _sfc_main$4, a as _sfc_main$3, b as _sfc_main$1$1, c as _sfc_main$5, d as _sfc_main$2$1 } from './DialogTitle-DXwZyxgs.mjs';
import { _ as _sfc_main$1 } from './DialogTrigger-DRJQjnK1.mjs';
import { _ as _sfc_main$2 } from './index-BMpvV6oe.mjs';
import { _ as _sfc_main$6 } from './Label-BBvFeqSn.mjs';
import { _ as _sfc_main$7 } from './Input-2SZV6hAa.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$8, b as _sfc_main$1$2, c as _sfc_main$4$1, d as _sfc_main$2$2, e as _sfc_main$3$1 } from './TableHeader-DqV9hosG.mjs';
import { a as autogen } from './autogen-CTs5Sc_K.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { a as apify } from './useAPI-B9JE9gpb.mjs';
import { u as useHead, b as useToast, n as navigateTo } from './server.mjs';
import { LucideShuffle, LucideEdit } from 'lucide-vue-next';
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
  __name: "users",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Talabalar"
    });
    const { toast } = useToast();
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
    const users = ref();
    const userModalOpen = ref(false);
    const getUsers = async () => {
      let response = await $fetch(apify("users"));
      users.value = response;
    };
    const addUser = async () => {
      if (user.value) {
        let response = await $fetch(apify("users/add"), {
          method: "POST",
          body: JSON.stringify({
            "username": user.value.username,
            "first_name": user.value.first_name,
            "last_name": user.value.last_name,
            "middle_name": user.value.middle_name,
            "password": user.value.pwd,
            "role": user.value.role
          })
        });
        if (response.status === "success") {
          toast({
            title: "Ajoyib",
            description: "Talaba qo'shildi"
          });
          getUsers();
        } else {
          toast({
            title: "Xatolik",
            description: "Barcha maydonni toldiring."
          });
        }
      }
      userModalOpen.value = false;
    };
    const editUser = async (user2) => {
      let response = await $fetch(apify(`users/${user2.uuid}/edit`), {
        method: "POST",
        body: JSON.stringify({
          "first_name": user2.first_name,
          "last_name": user2.last_name,
          "middle_name": user2.middle_name,
          "password": user2.pwd,
          "role": user2.role
        })
      });
      if (response.status === "success") {
        toast({
          title: "Ajoyib",
          description: "Talaba tahrirlandi"
        });
        getUsers();
      } else {
        toast({
          title: "Xatolik",
          description: "Barcha maydonni toldiring."
        });
      }
      userModalOpen.value = false;
    };
    const printUsersResult = async () => {
      let url = apify(`users/pdf`);
      navigateTo(url, { external: true, open: { target: "_blank" } });
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5 md:p-10 flex flex-col gap-5" }, _attrs))}><div class="flex items-center justify-between"><p>Talabalar</p><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_Dialog, {
        open: unref(userModalOpen),
        "onUpdate:open": ($event) => isRef(userModalOpen) ? userModalOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Talaba qo&#39;shish`);
                      } else {
                        return [
                          createTextVNode("Talaba qo'shish")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, null, {
                      default: withCtx(() => [
                        createTextVNode("Talaba qo'shish")
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
                              _push5(`Yangi Talaba qo&#39;shish`);
                            } else {
                              return [
                                createTextVNode("Yangi Talaba qo'shish")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Yangi Talaba qo'shish")
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
                        _push4(`Foydalanuvchi nomi`);
                      } else {
                        return [
                          createTextVNode("Foydalanuvchi nomi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(user).username,
                    "onUpdate:modelValue": ($event) => unref(user).username = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-3 flex-col md:flex-row"${_scopeId2}><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ism `);
                      } else {
                        return [
                          createTextVNode("Ism ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(user).first_name,
                    "onUpdate:modelValue": ($event) => unref(user).first_name = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Familiya `);
                      } else {
                        return [
                          createTextVNode("Familiya ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(user).last_name,
                    "onUpdate:modelValue": ($event) => unref(user).last_name = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Sharifi `);
                      } else {
                        return [
                          createTextVNode("Sharifi ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(user).middle_name,
                    "onUpdate:modelValue": ($event) => unref(user).middle_name = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Parol `);
                      } else {
                        return [
                          createTextVNode("Parol ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(user).pwd,
                    "onUpdate:modelValue": ($event) => unref(user).pwd = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="absolute top-0 right-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    onClick: ($event) => unref(user).pwd = ("autogen" in _ctx ? _ctx.autogen : unref(autogen))(),
                    size: "xs"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(LucideShuffle), { size: 16 }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(LucideShuffle), { size: 16 })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div>`);
                  _push3(ssrRenderComponent(_component_DialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, { onClick: addUser }, {
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
                          createVNode(_component_Button, { onClick: addUser }, {
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
                            createTextVNode("Yangi Talaba qo'shish")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", null, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Foydalanuvchi nomi")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(user).username,
                        "onUpdate:modelValue": ($event) => unref(user).username = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "flex gap-3 flex-col md:flex-row" }, [
                        createVNode("div", { class: "w-full" }, [
                          createVNode(_component_Label, null, {
                            default: withCtx(() => [
                              createTextVNode("Ism ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Input, {
                            modelValue: unref(user).first_name,
                            "onUpdate:modelValue": ($event) => unref(user).first_name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "w-full" }, [
                          createVNode(_component_Label, null, {
                            default: withCtx(() => [
                              createTextVNode("Familiya ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Input, {
                            modelValue: unref(user).last_name,
                            "onUpdate:modelValue": ($event) => unref(user).last_name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "w-full" }, [
                          createVNode(_component_Label, null, {
                            default: withCtx(() => [
                              createTextVNode("Sharifi ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Input, {
                            modelValue: unref(user).middle_name,
                            "onUpdate:modelValue": ($event) => unref(user).middle_name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Parol ")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_Input, {
                          modelValue: unref(user).pwd,
                          "onUpdate:modelValue": ($event) => unref(user).pwd = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("div", { class: "absolute top-0 right-0" }, [
                          createVNode(_component_Button, {
                            onClick: ($event) => unref(user).pwd = ("autogen" in _ctx ? _ctx.autogen : unref(autogen))(),
                            size: "xs"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(LucideShuffle), { size: 16 })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ])
                    ]),
                    createVNode(_component_DialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_Button, { onClick: addUser }, {
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
                      createTextVNode("Talaba qo'shish")
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
                          createTextVNode("Yangi Talaba qo'shish")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_Label, null, {
                      default: withCtx(() => [
                        createTextVNode("Foydalanuvchi nomi")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Input, {
                      modelValue: unref(user).username,
                      "onUpdate:modelValue": ($event) => unref(user).username = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "flex gap-3 flex-col md:flex-row" }, [
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Ism ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(user).first_name,
                          "onUpdate:modelValue": ($event) => unref(user).first_name = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Familiya ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(user).last_name,
                          "onUpdate:modelValue": ($event) => unref(user).last_name = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Sharifi ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(user).middle_name,
                          "onUpdate:modelValue": ($event) => unref(user).middle_name = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode(_component_Label, null, {
                      default: withCtx(() => [
                        createTextVNode("Parol ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_Input, {
                        modelValue: unref(user).pwd,
                        "onUpdate:modelValue": ($event) => unref(user).pwd = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "absolute top-0 right-0" }, [
                        createVNode(_component_Button, {
                          onClick: ($event) => unref(user).pwd = ("autogen" in _ctx ? _ctx.autogen : unref(autogen))(),
                          size: "xs"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(LucideShuffle), { size: 16 })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ])
                  ]),
                  createVNode(_component_DialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_Button, { onClick: addUser }, {
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
      _push(ssrRenderComponent(_component_Button, { onClick: printUsersResult }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Foydalanuvchilarni yuklab olish`);
          } else {
            return [
              createTextVNode("Foydalanuvchilarni yuklab olish")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="border rounded-md overflow-x-auto">`);
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
                        _push4(`Foydalanuvchi nomi`);
                      } else {
                        return [
                          createTextVNode("Foydalanuvchi nomi")
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
                        _push4(`Sharifi`);
                      } else {
                        return [
                          createTextVNode("Sharifi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Tahrirlash`);
                      } else {
                        return [
                          createTextVNode("Tahrirlash")
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
                        createTextVNode("Foydalanuvchi nomi")
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
                        createTextVNode("Sharifi")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Tahrirlash")
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
                  ssrRenderList(unref(users), (user2, index) => {
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
                                _push5(`${ssrInterpolate(user2.username)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(user2.username), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(user2.last_name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(user2.last_name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(user2.first_name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(user2.first_name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(user2.middle_name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(user2.middle_name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Dialog, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_DialogTrigger, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_Button, { size: "icon" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(unref(LucideEdit), { size: 16 }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(unref(LucideEdit), { size: 16 })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_Button, { size: "icon" }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(LucideEdit), { size: 16 })
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_DialogContent, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_DialogHeader, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_DialogTitle, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`Talabani tahrirlash`);
                                                      } else {
                                                        return [
                                                          createTextVNode("Talabani tahrirlash")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_DialogTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Talabani tahrirlash")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<div${_scopeId6}><div${_scopeId6}><div class="flex gap-3 flex-col md:flex-row"${_scopeId6}><div class="w-full"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_Label, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Ism `);
                                                } else {
                                                  return [
                                                    createTextVNode("Ism ")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_Input, {
                                              modelValue: user2.first_name,
                                              "onUpdate:modelValue": ($event) => user2.first_name = $event
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="w-full"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_Label, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Familiya `);
                                                } else {
                                                  return [
                                                    createTextVNode("Familiya ")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_Input, {
                                              modelValue: user2.last_name,
                                              "onUpdate:modelValue": ($event) => user2.last_name = $event
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="w-full"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_Label, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Sharifi `);
                                                } else {
                                                  return [
                                                    createTextVNode("Sharifi ")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_Input, {
                                              modelValue: user2.middle_name,
                                              "onUpdate:modelValue": ($event) => user2.middle_name = $event
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div></div>`);
                                            _push7(ssrRenderComponent(_component_Label, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Parol `);
                                                } else {
                                                  return [
                                                    createTextVNode("Parol ")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_Input, {
                                              modelValue: user2.pwd,
                                              "onUpdate:modelValue": ($event) => user2.pwd = $event
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div></div>`);
                                            _push7(ssrRenderComponent(_component_DialogFooter, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_Button, {
                                                    onClick: ($event) => editUser(user2)
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`Tahrirlash`);
                                                      } else {
                                                        return [
                                                          createTextVNode("Tahrirlash")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_Button, {
                                                      onClick: ($event) => editUser(user2)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Tahrirlash")
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_DialogHeader, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_DialogTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Talabani tahrirlash")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("div", null, [
                                                createVNode("div", null, [
                                                  createVNode("div", { class: "flex gap-3 flex-col md:flex-row" }, [
                                                    createVNode("div", { class: "w-full" }, [
                                                      createVNode(_component_Label, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Ism ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_Input, {
                                                        modelValue: user2.first_name,
                                                        "onUpdate:modelValue": ($event) => user2.first_name = $event
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    createVNode("div", { class: "w-full" }, [
                                                      createVNode(_component_Label, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Familiya ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_Input, {
                                                        modelValue: user2.last_name,
                                                        "onUpdate:modelValue": ($event) => user2.last_name = $event
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    createVNode("div", { class: "w-full" }, [
                                                      createVNode(_component_Label, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Sharifi ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_Input, {
                                                        modelValue: user2.middle_name,
                                                        "onUpdate:modelValue": ($event) => user2.middle_name = $event
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ])
                                                  ]),
                                                  createVNode(_component_Label, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Parol ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_Input, {
                                                    modelValue: user2.pwd,
                                                    "onUpdate:modelValue": ($event) => user2.pwd = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ]),
                                              createVNode(_component_DialogFooter, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_Button, {
                                                    onClick: ($event) => editUser(user2)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Tahrirlash")
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_DialogTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_Button, { size: "icon" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(LucideEdit), { size: 16 })
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
                                                    createTextVNode("Talabani tahrirlash")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("div", null, [
                                              createVNode("div", null, [
                                                createVNode("div", { class: "flex gap-3 flex-col md:flex-row" }, [
                                                  createVNode("div", { class: "w-full" }, [
                                                    createVNode(_component_Label, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Ism ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_Input, {
                                                      modelValue: user2.first_name,
                                                      "onUpdate:modelValue": ($event) => user2.first_name = $event
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  createVNode("div", { class: "w-full" }, [
                                                    createVNode(_component_Label, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Familiya ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_Input, {
                                                      modelValue: user2.last_name,
                                                      "onUpdate:modelValue": ($event) => user2.last_name = $event
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  createVNode("div", { class: "w-full" }, [
                                                    createVNode(_component_Label, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Sharifi ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_Input, {
                                                      modelValue: user2.middle_name,
                                                      "onUpdate:modelValue": ($event) => user2.middle_name = $event
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ])
                                                ]),
                                                createVNode(_component_Label, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Parol ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_Input, {
                                                  modelValue: user2.pwd,
                                                  "onUpdate:modelValue": ($event) => user2.pwd = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])
                                            ]),
                                            createVNode(_component_DialogFooter, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_Button, {
                                                  onClick: ($event) => editUser(user2)
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Tahrirlash")
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Dialog, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_DialogTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Button, { size: "icon" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(LucideEdit), { size: 16 })
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
                                                  createTextVNode("Talabani tahrirlash")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", null, [
                                            createVNode("div", null, [
                                              createVNode("div", { class: "flex gap-3 flex-col md:flex-row" }, [
                                                createVNode("div", { class: "w-full" }, [
                                                  createVNode(_component_Label, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Ism ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_Input, {
                                                    modelValue: user2.first_name,
                                                    "onUpdate:modelValue": ($event) => user2.first_name = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                createVNode("div", { class: "w-full" }, [
                                                  createVNode(_component_Label, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Familiya ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_Input, {
                                                    modelValue: user2.last_name,
                                                    "onUpdate:modelValue": ($event) => user2.last_name = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                createVNode("div", { class: "w-full" }, [
                                                  createVNode(_component_Label, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Sharifi ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_Input, {
                                                    modelValue: user2.middle_name,
                                                    "onUpdate:modelValue": ($event) => user2.middle_name = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ]),
                                              createVNode(_component_Label, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Parol ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_Input, {
                                                modelValue: user2.pwd,
                                                "onUpdate:modelValue": ($event) => user2.pwd = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          createVNode(_component_DialogFooter, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Button, {
                                                onClick: ($event) => editUser(user2)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Tahrirlash")
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
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
                                createTextVNode(toDisplayString(user2.username), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(user2.last_name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(user2.first_name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(user2.middle_name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createVNode(_component_Dialog, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_DialogTrigger, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Button, { size: "icon" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(LucideEdit), { size: 16 })
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
                                                createTextVNode("Talabani tahrirlash")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", null, [
                                          createVNode("div", null, [
                                            createVNode("div", { class: "flex gap-3 flex-col md:flex-row" }, [
                                              createVNode("div", { class: "w-full" }, [
                                                createVNode(_component_Label, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Ism ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_Input, {
                                                  modelValue: user2.first_name,
                                                  "onUpdate:modelValue": ($event) => user2.first_name = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              createVNode("div", { class: "w-full" }, [
                                                createVNode(_component_Label, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Familiya ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_Input, {
                                                  modelValue: user2.last_name,
                                                  "onUpdate:modelValue": ($event) => user2.last_name = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              createVNode("div", { class: "w-full" }, [
                                                createVNode(_component_Label, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Sharifi ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_Input, {
                                                  modelValue: user2.middle_name,
                                                  "onUpdate:modelValue": ($event) => user2.middle_name = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])
                                            ]),
                                            createVNode(_component_Label, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Parol ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_Input, {
                                              modelValue: user2.pwd,
                                              "onUpdate:modelValue": ($event) => user2.pwd = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        createVNode(_component_DialogFooter, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_Button, {
                                              onClick: ($event) => editUser(user2)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Tahrirlash")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(users), (user2, index) => {
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
                              createTextVNode(toDisplayString(user2.username), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(user2.last_name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(user2.first_name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(user2.middle_name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createVNode(_component_Dialog, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DialogTrigger, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Button, { size: "icon" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(LucideEdit), { size: 16 })
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
                                              createTextVNode("Talabani tahrirlash")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", null, [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "flex gap-3 flex-col md:flex-row" }, [
                                            createVNode("div", { class: "w-full" }, [
                                              createVNode(_component_Label, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Ism ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_Input, {
                                                modelValue: user2.first_name,
                                                "onUpdate:modelValue": ($event) => user2.first_name = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            createVNode("div", { class: "w-full" }, [
                                              createVNode(_component_Label, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Familiya ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_Input, {
                                                modelValue: user2.last_name,
                                                "onUpdate:modelValue": ($event) => user2.last_name = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            createVNode("div", { class: "w-full" }, [
                                              createVNode(_component_Label, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Sharifi ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_Input, {
                                                modelValue: user2.middle_name,
                                                "onUpdate:modelValue": ($event) => user2.middle_name = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          createVNode(_component_Label, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Parol ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_Input, {
                                            modelValue: user2.pwd,
                                            "onUpdate:modelValue": ($event) => user2.pwd = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ]),
                                      createVNode(_component_DialogFooter, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Button, {
                                            onClick: ($event) => editUser(user2)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Tahrirlash")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
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
                      createTextVNode("Foydalanuvchi nomi")
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
                      createTextVNode("Sharifi")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Tahrirlash")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_TableBody, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(users), (user2, index) => {
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
                            createTextVNode(toDisplayString(user2.username), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(user2.last_name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(user2.first_name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(user2.middle_name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createVNode(_component_Dialog, null, {
                              default: withCtx(() => [
                                createVNode(_component_DialogTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Button, { size: "icon" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(LucideEdit), { size: 16 })
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
                                            createTextVNode("Talabani tahrirlash")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", null, [
                                      createVNode("div", null, [
                                        createVNode("div", { class: "flex gap-3 flex-col md:flex-row" }, [
                                          createVNode("div", { class: "w-full" }, [
                                            createVNode(_component_Label, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Ism ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_Input, {
                                              modelValue: user2.first_name,
                                              "onUpdate:modelValue": ($event) => user2.first_name = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("div", { class: "w-full" }, [
                                            createVNode(_component_Label, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Familiya ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_Input, {
                                              modelValue: user2.last_name,
                                              "onUpdate:modelValue": ($event) => user2.last_name = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("div", { class: "w-full" }, [
                                            createVNode(_component_Label, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Sharifi ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_Input, {
                                              modelValue: user2.middle_name,
                                              "onUpdate:modelValue": ($event) => user2.middle_name = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        createVNode(_component_Label, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Parol ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_Input, {
                                          modelValue: user2.pwd,
                                          "onUpdate:modelValue": ($event) => user2.pwd = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ]),
                                    createVNode(_component_DialogFooter, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Button, {
                                          onClick: ($event) => editUser(user2)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Tahrirlash")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/users.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=users-rLwbyMlw.mjs.map
