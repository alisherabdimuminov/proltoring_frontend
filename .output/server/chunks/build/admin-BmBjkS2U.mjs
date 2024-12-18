import { useSSRContext, defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, renderSlot, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { useForwardPropsEmits, TooltipRoot, TooltipPortal, TooltipContent, TooltipProvider, TooltipTrigger } from 'radix-vue';
import { a as useRoute, c as cn } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Bqtg2vbP.mjs';
import { u as useColorMode, _ as _sfc_main$8, a as _sfc_main$2$1, b as _sfc_main$7, c as _sfc_main$6, d as _sfc_main$3$1, e as _sfc_main$4$1, f as _sfc_main$5, g as _sfc_main$9 } from './composables-DSg21Fil.mjs';
import { l as logo } from './logo-C3IdMNMb.mjs';
import { LucideLayoutGrid, LucideUsers, LucideFlaskConical, LucideText, LucideCirclePlus, LucideUser, LucideMonitor, LucideSun, LucideMoon, LucideLogOut } from 'lucide-vue-next';
import { u as useAuth } from './useAuth-BglfZ2NW.mjs';
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

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Tooltip",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/Tooltip.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "TooltipContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TooltipContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
              class: unref(cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class)
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TooltipContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
                class: unref(cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class)
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TooltipProvider",
  __ssrInlineRender: true,
  props: {
    delayDuration: {},
    skipDelayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipProvider), mergeProps(props, _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipProvider.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TooltipTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipTrigger), mergeProps(props, _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipTrigger.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const { logout, user } = useAuth();
    const route = useRoute();
    if (user.value === null) {
      logout();
      console.log("logout");
    }
    const colorMode = useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TooltipProvider = _sfc_main$2;
      const _component_Tooltip = _sfc_main$4;
      const _component_TooltipTrigger = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_TooltipContent = _sfc_main$3;
      const _component_DropdownMenu = _sfc_main$8;
      const _component_DropdownMenuTrigger = _sfc_main$2$1;
      const _component_DropdownMenuContent = _sfc_main$7;
      const _component_DropdownMenuItem = _sfc_main$6;
      const _component_DropdownMenuShortcut = _sfc_main$3$1;
      const _component_DropdownMenuSeparator = _sfc_main$4$1;
      const _component_DropdownMenuLabel = _sfc_main$5;
      const _component_ScrollArea = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen flex" }, _attrs))}><div class="w-14 border-r bg-accent/30"><div class="h-[3rem] flex gap-2 items-center justify-center"><img width="25" height="25"${ssrRenderAttr("src", logo)} alt=""></div><div class="flex flex-col gap-1 p-2">`);
      _push(ssrRenderComponent(_component_TooltipProvider, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Tooltip, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TooltipTrigger, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: { name: "admin" },
                          class: ["flex items-center gap-2 p-1", unref(route).name === "admin" ? "font-bold" : "text-muted-foreground"]
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(LucideLayoutGrid), { size: 20 }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(LucideLayoutGrid), { size: 20 })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: { name: "admin" },
                            class: ["flex items-center gap-2 p-1", unref(route).name === "admin" ? "font-bold" : "text-muted-foreground"]
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(LucideLayoutGrid), { size: 20 })
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TooltipContent, { side: "right" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Bosh sahifa `);
                      } else {
                        return [
                          createTextVNode(" Bosh sahifa ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TooltipTrigger, null, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: { name: "admin" },
                          class: ["flex items-center gap-2 p-1", unref(route).name === "admin" ? "font-bold" : "text-muted-foreground"]
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(LucideLayoutGrid), { size: 20 })
                          ]),
                          _: 1
                        }, 8, ["class"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TooltipContent, { side: "right" }, {
                      default: withCtx(() => [
                        createTextVNode(" Bosh sahifa ")
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
              createVNode(_component_Tooltip, null, {
                default: withCtx(() => [
                  createVNode(_component_TooltipTrigger, null, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: { name: "admin" },
                        class: ["flex items-center gap-2 p-1", unref(route).name === "admin" ? "font-bold" : "text-muted-foreground"]
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(LucideLayoutGrid), { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TooltipContent, { side: "right" }, {
                    default: withCtx(() => [
                      createTextVNode(" Bosh sahifa ")
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
      _push(ssrRenderComponent(_component_TooltipProvider, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Tooltip, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TooltipTrigger, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: { name: "admin-users" },
                          class: ["flex items-center gap-2 p-1", unref(route).name === "admin-users" ? "font-bold" : "text-muted-foreground"]
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(LucideUsers), { size: 20 }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(LucideUsers), { size: 20 })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: { name: "admin-users" },
                            class: ["flex items-center gap-2 p-1", unref(route).name === "admin-users" ? "font-bold" : "text-muted-foreground"]
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(LucideUsers), { size: 20 })
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TooltipContent, { side: "right" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Xodimlar `);
                      } else {
                        return [
                          createTextVNode(" Xodimlar ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TooltipTrigger, null, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: { name: "admin-users" },
                          class: ["flex items-center gap-2 p-1", unref(route).name === "admin-users" ? "font-bold" : "text-muted-foreground"]
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(LucideUsers), { size: 20 })
                          ]),
                          _: 1
                        }, 8, ["class"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TooltipContent, { side: "right" }, {
                      default: withCtx(() => [
                        createTextVNode(" Xodimlar ")
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
              createVNode(_component_Tooltip, null, {
                default: withCtx(() => [
                  createVNode(_component_TooltipTrigger, null, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: { name: "admin-users" },
                        class: ["flex items-center gap-2 p-1", unref(route).name === "admin-users" ? "font-bold" : "text-muted-foreground"]
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(LucideUsers), { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TooltipContent, { side: "right" }, {
                    default: withCtx(() => [
                      createTextVNode(" Xodimlar ")
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
      _push(ssrRenderComponent(_component_TooltipProvider, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Tooltip, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TooltipTrigger, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: { name: "admin-tests" },
                          class: ["flex items-center rounded-md gap-2 p-1", unref(route).name === "admin-tests" ? "font-bold" : "text-muted-foreground"]
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(LucideFlaskConical), { size: 20 }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(LucideFlaskConical), { size: 20 })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: { name: "admin-tests" },
                            class: ["flex items-center rounded-md gap-2 p-1", unref(route).name === "admin-tests" ? "font-bold" : "text-muted-foreground"]
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(LucideFlaskConical), { size: 20 })
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TooltipContent, { side: "right" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Testlar `);
                      } else {
                        return [
                          createTextVNode(" Testlar ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TooltipTrigger, null, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: { name: "admin-tests" },
                          class: ["flex items-center rounded-md gap-2 p-1", unref(route).name === "admin-tests" ? "font-bold" : "text-muted-foreground"]
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(LucideFlaskConical), { size: 20 })
                          ]),
                          _: 1
                        }, 8, ["class"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TooltipContent, { side: "right" }, {
                      default: withCtx(() => [
                        createTextVNode(" Testlar ")
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
              createVNode(_component_Tooltip, null, {
                default: withCtx(() => [
                  createVNode(_component_TooltipTrigger, null, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: { name: "admin-tests" },
                        class: ["flex items-center rounded-md gap-2 p-1", unref(route).name === "admin-tests" ? "font-bold" : "text-muted-foreground"]
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(LucideFlaskConical), { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TooltipContent, { side: "right" }, {
                    default: withCtx(() => [
                      createTextVNode(" Testlar ")
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
      _push(ssrRenderComponent(_component_TooltipProvider, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Tooltip, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TooltipTrigger, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: { name: "admin-questions" },
                          class: ["flex items-center rounded-md gap-2 p-1", unref(route).name === "admin-questions" ? "font-bold" : "text-muted-foreground"]
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(LucideText), { size: 20 }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(LucideText), { size: 20 })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: { name: "admin-questions" },
                            class: ["flex items-center rounded-md gap-2 p-1", unref(route).name === "admin-questions" ? "font-bold" : "text-muted-foreground"]
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(LucideText), { size: 20 })
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TooltipContent, { side: "right" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Savollar `);
                      } else {
                        return [
                          createTextVNode(" Savollar ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TooltipTrigger, null, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: { name: "admin-questions" },
                          class: ["flex items-center rounded-md gap-2 p-1", unref(route).name === "admin-questions" ? "font-bold" : "text-muted-foreground"]
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(LucideText), { size: 20 })
                          ]),
                          _: 1
                        }, 8, ["class"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TooltipContent, { side: "right" }, {
                      default: withCtx(() => [
                        createTextVNode(" Savollar ")
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
              createVNode(_component_Tooltip, null, {
                default: withCtx(() => [
                  createVNode(_component_TooltipTrigger, null, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: { name: "admin-questions" },
                        class: ["flex items-center rounded-md gap-2 p-1", unref(route).name === "admin-questions" ? "font-bold" : "text-muted-foreground"]
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(LucideText), { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TooltipContent, { side: "right" }, {
                    default: withCtx(() => [
                      createTextVNode(" Savollar ")
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
      _push(ssrRenderComponent(_component_TooltipProvider, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Tooltip, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TooltipTrigger, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: { name: "admin-bulk" },
                          class: ["flex items-center rounded-md gap-2 p-1", unref(route).name === "admin-bulk" ? "font-bold" : "text-muted-foreground"]
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(LucideCirclePlus), { size: 20 }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(LucideCirclePlus), { size: 20 })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: { name: "admin-bulk" },
                            class: ["flex items-center rounded-md gap-2 p-1", unref(route).name === "admin-bulk" ? "font-bold" : "text-muted-foreground"]
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(LucideCirclePlus), { size: 20 })
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TooltipContent, { side: "right" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Savol qo&#39;shish `);
                      } else {
                        return [
                          createTextVNode(" Savol qo'shish ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TooltipTrigger, null, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: { name: "admin-bulk" },
                          class: ["flex items-center rounded-md gap-2 p-1", unref(route).name === "admin-bulk" ? "font-bold" : "text-muted-foreground"]
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(LucideCirclePlus), { size: 20 })
                          ]),
                          _: 1
                        }, 8, ["class"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TooltipContent, { side: "right" }, {
                      default: withCtx(() => [
                        createTextVNode(" Savol qo'shish ")
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
              createVNode(_component_Tooltip, null, {
                default: withCtx(() => [
                  createVNode(_component_TooltipTrigger, null, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: { name: "admin-bulk" },
                        class: ["flex items-center rounded-md gap-2 p-1", unref(route).name === "admin-bulk" ? "font-bold" : "text-muted-foreground"]
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(LucideCirclePlus), { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TooltipContent, { side: "right" }, {
                    default: withCtx(() => [
                      createTextVNode(" Savol qo'shish ")
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
      _push(`</div></div><div class="flex-1 w-[calc(100%-3.5rem)]"><div class="h-[3rem] border-b bg-accent/30 flex items-center justify-between px-5"><div><p class="font-bold">LMC - Zukko</p></div>`);
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
                      var _a, _b, _c, _d;
                      if (_push4) {
                        _push4(`${ssrInterpolate((_a = unref(user)) == null ? void 0 : _a.first_name)} ${ssrInterpolate((_b = unref(user)) == null ? void 0 : _b.last_name)} `);
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
                        var _a, _b;
                        return [
                          createTextVNode(toDisplayString((_a = unref(user)) == null ? void 0 : _a.first_name) + " " + toDisplayString((_b = unref(user)) == null ? void 0 : _b.last_name) + " ", 1),
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
                      var _a, _b;
                      return [
                        createTextVNode(toDisplayString((_a = unref(user)) == null ? void 0 : _a.first_name) + " " + toDisplayString((_b = unref(user)) == null ? void 0 : _b.last_name) + " ", 1),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=admin-BmBjkS2U.mjs.map
