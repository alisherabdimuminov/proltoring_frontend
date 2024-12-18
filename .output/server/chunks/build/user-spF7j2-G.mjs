import { u as useColorMode, _ as _sfc_main$8, a as _sfc_main$2, b as _sfc_main$7, c as _sfc_main$6, d as _sfc_main$3, e as _sfc_main$4, f as _sfc_main$5, g as _sfc_main$1 } from './composables-DSg21Fil.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { LucideSprout, LucideUser, LucideMonitor, LucideSun, LucideMoon, LucideLogOut } from 'lucide-vue-next';
import { u as useAuth } from './useAuth-BglfZ2NW.mjs';
import { a as useRoute } from './server.mjs';
import 'radix-vue';
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
import '@radix-icons/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "user",
  __ssrInlineRender: true,
  setup(__props) {
    const { logout, user } = useAuth();
    useRoute();
    if (user.value === null) {
      logout();
      console.log("logout");
    }
    const colorMode = useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_DropdownMenu = _sfc_main$8;
      const _component_DropdownMenuTrigger = _sfc_main$2;
      const _component_DropdownMenuContent = _sfc_main$7;
      const _component_DropdownMenuItem = _sfc_main$6;
      const _component_DropdownMenuShortcut = _sfc_main$3;
      const _component_DropdownMenuSeparator = _sfc_main$4;
      const _component_DropdownMenuLabel = _sfc_main$5;
      const _component_ScrollArea = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen flex" }, _attrs))}><div class="w-14 border-r bg-accent/30"><div class="h-[3rem] flex gap-2 items-center justify-center">`);
      _push(ssrRenderComponent(unref(LucideSprout), { size: 30 }, null, _parent));
      _push(`</div><div class="flex flex-col gap-1 p-2"></div></div><div class="flex-1 w-[calc(100%-3.5rem)]"><div class="h-[3rem] border-b bg-accent/30 flex items-center justify-between px-5"><div class="flex flex-col md:flex-row gap-1 md:gap-5"><p class="font-bold">LMC - Zukko</p><p class="hidden md:block">|</p><p>${ssrInterpolate((_a = unref(user)) == null ? void 0 : _a.first_name)} ${ssrInterpolate((_b = unref(user)) == null ? void 0 : _b.last_name)}</p></div>`);
      _push(ssrRenderComponent(_component_DropdownMenu, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DropdownMenuTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(LucideUser), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(LucideUser))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DropdownMenuContent, { class: "w-64" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a2, _b2, _c, _d;
                      if (_push4) {
                        _push4(`${ssrInterpolate((_a2 = unref(user)) == null ? void 0 : _a2.first_name)} ${ssrInterpolate((_b2 = unref(user)) == null ? void 0 : _b2.last_name)} `);
                        _push4(ssrRenderComponent(_component_DropdownMenuShortcut, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(LucideUser), { size: 16 }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(LucideUser), { size: 16 })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(toDisplayString((_c = unref(user)) == null ? void 0 : _c.first_name) + " " + toDisplayString((_d = unref(user)) == null ? void 0 : _d.last_name) + " ", 1),
                          createVNode(_component_DropdownMenuShortcut, null, {
                            default: withCtx(() => [
                              createVNode(unref(LucideUser), { size: 16 })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuLabel, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Rejim`);
                      } else {
                        return [
                          createTextVNode("Rejim")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, {
                    onClick: ($event) => unref(colorMode).preference = "light"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Tizim `);
                        _push4(ssrRenderComponent(_component_DropdownMenuShortcut, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(LucideMonitor), { size: 16 }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(LucideMonitor), { size: 16 })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" Tizim "),
                          createVNode(_component_DropdownMenuShortcut, null, {
                            default: withCtx(() => [
                              createVNode(unref(LucideMonitor), { size: 16 })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, {
                    onClick: ($event) => unref(colorMode).preference = "light"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Yorug&#39; `);
                        _push4(ssrRenderComponent(_component_DropdownMenuShortcut, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(LucideSun), { size: 16 }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(LucideSun), { size: 16 })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" Yorug' "),
                          createVNode(_component_DropdownMenuShortcut, null, {
                            default: withCtx(() => [
                              createVNode(unref(LucideSun), { size: 16 })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, {
                    onClick: ($event) => unref(colorMode).preference = "dark"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Qorong&#39;u `);
                        _push4(ssrRenderComponent(_component_DropdownMenuShortcut, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(LucideMoon), { size: 16 }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(LucideMoon), { size: 16 })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" Qorong'u "),
                          createVNode(_component_DropdownMenuShortcut, null, {
                            default: withCtx(() => [
                              createVNode(unref(LucideMoon), { size: 16 })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, { onClick: unref(logout) }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Chiqish</span>`);
                        _push4(ssrRenderComponent(_component_DropdownMenuShortcut, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(LucideLogOut), { size: 16 }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(LucideLogOut), { size: 16 })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", null, "Chiqish"),
                          createVNode(_component_DropdownMenuShortcut, null, {
                            default: withCtx(() => [
                              createVNode(unref(LucideLogOut), { size: 16 })
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
                    createVNode(_component_DropdownMenuItem, null, {
                      default: withCtx(() => {
                        var _a2, _b2;
                        return [
                          createTextVNode(toDisplayString((_a2 = unref(user)) == null ? void 0 : _a2.first_name) + " " + toDisplayString((_b2 = unref(user)) == null ? void 0 : _b2.last_name) + " ", 1),
                          createVNode(_component_DropdownMenuShortcut, null, {
                            default: withCtx(() => [
                              createVNode(unref(LucideUser), { size: 16 })
                            ]),
                            _: 1
                          })
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_DropdownMenuSeparator),
                    createVNode(_component_DropdownMenuLabel, null, {
                      default: withCtx(() => [
                        createTextVNode("Rejim")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DropdownMenuItem, {
                      onClick: ($event) => unref(colorMode).preference = "light"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Tizim "),
                        createVNode(_component_DropdownMenuShortcut, null, {
                          default: withCtx(() => [
                            createVNode(unref(LucideMonitor), { size: 16 })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_DropdownMenuItem, {
                      onClick: ($event) => unref(colorMode).preference = "light"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Yorug' "),
                        createVNode(_component_DropdownMenuShortcut, null, {
                          default: withCtx(() => [
                            createVNode(unref(LucideSun), { size: 16 })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_DropdownMenuItem, {
                      onClick: ($event) => unref(colorMode).preference = "dark"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Qorong'u "),
                        createVNode(_component_DropdownMenuShortcut, null, {
                          default: withCtx(() => [
                            createVNode(unref(LucideMoon), { size: 16 })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_DropdownMenuSeparator),
                    createVNode(_component_DropdownMenuItem, { onClick: unref(logout) }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Chiqish"),
                        createVNode(_component_DropdownMenuShortcut, null, {
                          default: withCtx(() => [
                            createVNode(unref(LucideLogOut), { size: 16 })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DropdownMenuTrigger, null, {
                default: withCtx(() => [
                  createVNode(unref(LucideUser))
                ]),
                _: 1
              }),
              createVNode(_component_DropdownMenuContent, { class: "w-64" }, {
                default: withCtx(() => [
                  createVNode(_component_DropdownMenuItem, null, {
                    default: withCtx(() => {
                      var _a2, _b2;
                      return [
                        createTextVNode(toDisplayString((_a2 = unref(user)) == null ? void 0 : _a2.first_name) + " " + toDisplayString((_b2 = unref(user)) == null ? void 0 : _b2.last_name) + " ", 1),
                        createVNode(_component_DropdownMenuShortcut, null, {
                          default: withCtx(() => [
                            createVNode(unref(LucideUser), { size: 16 })
                          ]),
                          _: 1
                        })
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_DropdownMenuSeparator),
                  createVNode(_component_DropdownMenuLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("Rejim")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DropdownMenuItem, {
                    onClick: ($event) => unref(colorMode).preference = "light"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Tizim "),
                      createVNode(_component_DropdownMenuShortcut, null, {
                        default: withCtx(() => [
                          createVNode(unref(LucideMonitor), { size: 16 })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_DropdownMenuItem, {
                    onClick: ($event) => unref(colorMode).preference = "light"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Yorug' "),
                      createVNode(_component_DropdownMenuShortcut, null, {
                        default: withCtx(() => [
                          createVNode(unref(LucideSun), { size: 16 })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_DropdownMenuItem, {
                    onClick: ($event) => unref(colorMode).preference = "dark"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Qorong'u "),
                      createVNode(_component_DropdownMenuShortcut, null, {
                        default: withCtx(() => [
                          createVNode(unref(LucideMoon), { size: 16 })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_DropdownMenuSeparator),
                  createVNode(_component_DropdownMenuItem, { onClick: unref(logout) }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Chiqish"),
                      createVNode(_component_DropdownMenuShortcut, null, {
                        default: withCtx(() => [
                          createVNode(unref(LucideLogOut), { size: 16 })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ScrollArea, { class: "h-[calc(100%-3.1rem)]" }, {
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=user-spF7j2-G.mjs.map
