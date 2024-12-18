import { _ as _sfc_main$5, a as _sfc_main$1, b as _sfc_main$1$1, c as _sfc_main$4, d as _sfc_main$2, e as _sfc_main$3 } from './TableHeader-DqV9hosG.mjs';
import { _ as _sfc_main$6 } from './index-BMpvV6oe.mjs';
import { u as useHead, n as navigateTo } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useAuth } from './useAuth-BglfZ2NW.mjs';
import 'radix-vue';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "LMC - Zukko"
    });
    const { user } = useAuth();
    if (user.value !== null && user.value.role === "admin") {
      navigateTo({ name: "admin" });
    }
    const tests = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Table = _sfc_main$5;
      const _component_TableHeader = _sfc_main$1;
      const _component_TableHead = _sfc_main$1$1;
      const _component_TableBody = _sfc_main$4;
      const _component_TableRow = _sfc_main$2;
      const _component_TableCell = _sfc_main$3;
      const _component_Button = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5 md:p-10 flex flex-col gap-5" }, _attrs))}><p class="text-2xl">Testlar</p><div class="border rounded-md overflow-x-auto">`);
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
                        _push4(`Savollar soni`);
                      } else {
                        return [
                          createTextVNode("Savollar soni")
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
                        _push4(`Harakat`);
                      } else {
                        return [
                          createTextVNode("Harakat")
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
                        createTextVNode("Savollar soni")
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
                        createTextVNode("Ball")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Harakat")
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
                  ssrRenderList(unref(tests), (test, index) => {
                    _push3(ssrRenderComponent(_component_TableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableCell, null, {
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
                                _push5(`${ssrInterpolate(test.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(test.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(test.questions_count)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(test.questions_count), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (test.status === "not_started") {
                                  _push5(`<span class="font-bold text-blue-500 border p-1 rounded-md bg-blue-500/10"${_scopeId4}>Boshlanmagan</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (test.status === "started") {
                                  _push5(`<span class="font-bold text-sky-500 border p-1 rounded-md bg-sky-500/10"${_scopeId4}>Boshlangan</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (test.status === "passed") {
                                  _push5(`<span class="font-bold text-green-500 border p-1 rounded-md bg-green-500/10"${_scopeId4}>O&#39;tgan</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (test.status === "failed") {
                                  _push5(`<span class="font-bold text-red-500 border p-1 rounded-md bg-red-500/10"${_scopeId4}>Yiqilgan</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (test.status === "ended") {
                                  _push5(`<span class="font-bold text-orange-500 border p-1 rounded-md bg-orange-500/10"${_scopeId4}>Tugagan</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  test.status === "not_started" ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "font-bold text-blue-500 border p-1 rounded-md bg-blue-500/10"
                                  }, "Boshlanmagan")) : createCommentVNode("", true),
                                  test.status === "started" ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "font-bold text-sky-500 border p-1 rounded-md bg-sky-500/10"
                                  }, "Boshlangan")) : createCommentVNode("", true),
                                  test.status === "passed" ? (openBlock(), createBlock("span", {
                                    key: 2,
                                    class: "font-bold text-green-500 border p-1 rounded-md bg-green-500/10"
                                  }, "O'tgan")) : createCommentVNode("", true),
                                  test.status === "failed" ? (openBlock(), createBlock("span", {
                                    key: 3,
                                    class: "font-bold text-red-500 border p-1 rounded-md bg-red-500/10"
                                  }, "Yiqilgan")) : createCommentVNode("", true),
                                  test.status === "ended" ? (openBlock(), createBlock("span", {
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
                                _push5(`${ssrInterpolate(test.percentage)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(test.percentage), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (test.status === "not_started" || test.status === "started") {
                                  _push5(ssrRenderComponent(_component_Button, {
                                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "uuid", params: { uuid: test.uuid } }),
                                    size: "xs"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<span${_scopeId5}>Boshlash</span>`);
                                      } else {
                                        return [
                                          createVNode("span", null, "Boshlash")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  test.status === "not_started" || test.status === "started" ? (openBlock(), createBlock(_component_Button, {
                                    key: 0,
                                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "uuid", params: { uuid: test.uuid } }),
                                    size: "xs"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Boshlash")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(index + 1), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(test.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(test.questions_count), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                test.status === "not_started" ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "font-bold text-blue-500 border p-1 rounded-md bg-blue-500/10"
                                }, "Boshlanmagan")) : createCommentVNode("", true),
                                test.status === "started" ? (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "font-bold text-sky-500 border p-1 rounded-md bg-sky-500/10"
                                }, "Boshlangan")) : createCommentVNode("", true),
                                test.status === "passed" ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: "font-bold text-green-500 border p-1 rounded-md bg-green-500/10"
                                }, "O'tgan")) : createCommentVNode("", true),
                                test.status === "failed" ? (openBlock(), createBlock("span", {
                                  key: 3,
                                  class: "font-bold text-red-500 border p-1 rounded-md bg-red-500/10"
                                }, "Yiqilgan")) : createCommentVNode("", true),
                                test.status === "ended" ? (openBlock(), createBlock("span", {
                                  key: 4,
                                  class: "font-bold text-orange-500 border p-1 rounded-md bg-orange-500/10"
                                }, "Tugagan")) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(test.percentage), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                test.status === "not_started" || test.status === "started" ? (openBlock(), createBlock(_component_Button, {
                                  key: 0,
                                  onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "uuid", params: { uuid: test.uuid } }),
                                  size: "xs"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Boshlash")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])) : createCommentVNode("", true)
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(tests), (test, index) => {
                      return openBlock(), createBlock(_component_TableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(index + 1), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(test.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(test.questions_count), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              test.status === "not_started" ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "font-bold text-blue-500 border p-1 rounded-md bg-blue-500/10"
                              }, "Boshlanmagan")) : createCommentVNode("", true),
                              test.status === "started" ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: "font-bold text-sky-500 border p-1 rounded-md bg-sky-500/10"
                              }, "Boshlangan")) : createCommentVNode("", true),
                              test.status === "passed" ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: "font-bold text-green-500 border p-1 rounded-md bg-green-500/10"
                              }, "O'tgan")) : createCommentVNode("", true),
                              test.status === "failed" ? (openBlock(), createBlock("span", {
                                key: 3,
                                class: "font-bold text-red-500 border p-1 rounded-md bg-red-500/10"
                              }, "Yiqilgan")) : createCommentVNode("", true),
                              test.status === "ended" ? (openBlock(), createBlock("span", {
                                key: 4,
                                class: "font-bold text-orange-500 border p-1 rounded-md bg-orange-500/10"
                              }, "Tugagan")) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(test.percentage), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              test.status === "not_started" || test.status === "started" ? (openBlock(), createBlock(_component_Button, {
                                key: 0,
                                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "uuid", params: { uuid: test.uuid } }),
                                size: "xs"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Boshlash")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : createCommentVNode("", true)
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
                      createTextVNode("Savollar soni")
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
                      createTextVNode("Ball")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Harakat")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_TableBody, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(tests), (test, index) => {
                    return openBlock(), createBlock(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(index + 1), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(test.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(test.questions_count), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            test.status === "not_started" ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "font-bold text-blue-500 border p-1 rounded-md bg-blue-500/10"
                            }, "Boshlanmagan")) : createCommentVNode("", true),
                            test.status === "started" ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "font-bold text-sky-500 border p-1 rounded-md bg-sky-500/10"
                            }, "Boshlangan")) : createCommentVNode("", true),
                            test.status === "passed" ? (openBlock(), createBlock("span", {
                              key: 2,
                              class: "font-bold text-green-500 border p-1 rounded-md bg-green-500/10"
                            }, "O'tgan")) : createCommentVNode("", true),
                            test.status === "failed" ? (openBlock(), createBlock("span", {
                              key: 3,
                              class: "font-bold text-red-500 border p-1 rounded-md bg-red-500/10"
                            }, "Yiqilgan")) : createCommentVNode("", true),
                            test.status === "ended" ? (openBlock(), createBlock("span", {
                              key: 4,
                              class: "font-bold text-orange-500 border p-1 rounded-md bg-orange-500/10"
                            }, "Tugagan")) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(test.percentage), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            test.status === "not_started" || test.status === "started" ? (openBlock(), createBlock(_component_Button, {
                              key: 0,
                              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "uuid", params: { uuid: test.uuid } }),
                              size: "xs"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Boshlash")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bomm3zfj.mjs.map
