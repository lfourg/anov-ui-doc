"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vueRouter = require("vue-router");
var vue = require("vue");
require("@vue/devtools-api");
var core = require("@vueuse/core");
var nprogress$1 = require("nprogress");
var serverRenderer = require("vue/server-renderer");
var Lottie = require("lottie-web");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var nprogress__namespace = /* @__PURE__ */ _interopNamespace(nprogress$1);
var Lottie__default = /* @__PURE__ */ _interopDefaultLegacy(Lottie);
const ClientOnly = vue.defineComponent({
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
const pagesComponents = {
  "v-8daa1a0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$a;
  })),
  "v-74c56a5a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return introduce_html$2;
  })),
  "v-1020f180": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$8;
  })),
  "v-1b623e0c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return dirtree_html$2;
  })),
  "v-55846971": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return file_html$2;
  })),
  "v-792a83a6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return group_html$2;
  })),
  "v-fffb8e28": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$6;
  })),
  "v-565176d0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return standard_html$2;
  })),
  "v-4d76029c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return theme_html$2;
  })),
  "v-7a23931a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return type_html$1;
  })),
  "v-d50f5082": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$4;
  })),
  "v-0a41b2f7": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return bar_html$1;
  })),
  "v-151c0caa": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return calendar_html$1;
  })),
  "v-3bfbad91": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return gauge_html$1;
  })),
  "v-62954d98": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return line_html$1;
  })),
  "v-454eb5da": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return other_html$3;
  })),
  "v-1bfa47c2": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return pictograph_html$1;
  })),
  "v-4995011e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return pie_html$1;
  })),
  "v-a40da8b8": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return radar_html$1;
  })),
  "v-097617af": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return btn_html$1;
  })),
  "v-31257a0a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return other_html$2;
  })),
  "v-955dcf2a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return select_html$1;
  })),
  "v-02bd726f": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return swiper_html$1;
  })),
  "v-40079946": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return header_html$1;
  })),
  "v-2313815a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return icon_html$1;
  })),
  "v-749dc084": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return shape_html$1;
  })),
  "v-0d8695b4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return streamer_html$1;
  })),
  "v-305c6767": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return title_html$1;
  })),
  "v-a5c63bec": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return list_html$1;
  })),
  "v-77b50ec8": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return table_html$1;
  })),
  "v-e5285fd6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _3D_html$1;
  })),
  "v-14903f90": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return map_html$1;
  })),
  "v-1e417be8": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return indicator_html$1;
  })),
  "v-33953caa": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return text_html$1;
  })),
  "v-686b8072": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return weather_html$1;
  })),
  "v-851ded6c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return img_html$1;
  })),
  "v-69e57a92": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return video_html$1;
  })),
  "v-3706649a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$2;
  }))
};
const pagesData$1 = {
  "v-8daa1a0e": () => Promise.resolve().then(function() {
    return index_html$3;
  }).then(({ data: data2 }) => data2),
  "v-74c56a5a": () => Promise.resolve().then(function() {
    return introduce_html;
  }).then(({ data: data2 }) => data2),
  "v-1020f180": () => Promise.resolve().then(function() {
    return index_html$2;
  }).then(({ data: data2 }) => data2),
  "v-1b623e0c": () => Promise.resolve().then(function() {
    return dirtree_html;
  }).then(({ data: data2 }) => data2),
  "v-55846971": () => Promise.resolve().then(function() {
    return file_html;
  }).then(({ data: data2 }) => data2),
  "v-792a83a6": () => Promise.resolve().then(function() {
    return group_html;
  }).then(({ data: data2 }) => data2),
  "v-fffb8e28": () => Promise.resolve().then(function() {
    return index_html$1;
  }).then(({ data: data2 }) => data2),
  "v-565176d0": () => Promise.resolve().then(function() {
    return standard_html;
  }).then(({ data: data2 }) => data2),
  "v-4d76029c": () => Promise.resolve().then(function() {
    return theme_html;
  }).then(({ data: data2 }) => data2),
  "v-7a23931a": () => Promise.resolve().then(function() {
    return type_html;
  }).then(({ data: data2 }) => data2),
  "v-d50f5082": () => Promise.resolve().then(function() {
    return index_html;
  }).then(({ data: data2 }) => data2),
  "v-0a41b2f7": () => Promise.resolve().then(function() {
    return bar_html;
  }).then(({ data: data2 }) => data2),
  "v-151c0caa": () => Promise.resolve().then(function() {
    return calendar_html;
  }).then(({ data: data2 }) => data2),
  "v-3bfbad91": () => Promise.resolve().then(function() {
    return gauge_html;
  }).then(({ data: data2 }) => data2),
  "v-62954d98": () => Promise.resolve().then(function() {
    return line_html;
  }).then(({ data: data2 }) => data2),
  "v-454eb5da": () => Promise.resolve().then(function() {
    return other_html$1;
  }).then(({ data: data2 }) => data2),
  "v-1bfa47c2": () => Promise.resolve().then(function() {
    return pictograph_html;
  }).then(({ data: data2 }) => data2),
  "v-4995011e": () => Promise.resolve().then(function() {
    return pie_html;
  }).then(({ data: data2 }) => data2),
  "v-a40da8b8": () => Promise.resolve().then(function() {
    return radar_html;
  }).then(({ data: data2 }) => data2),
  "v-097617af": () => Promise.resolve().then(function() {
    return btn_html;
  }).then(({ data: data2 }) => data2),
  "v-31257a0a": () => Promise.resolve().then(function() {
    return other_html;
  }).then(({ data: data2 }) => data2),
  "v-955dcf2a": () => Promise.resolve().then(function() {
    return select_html;
  }).then(({ data: data2 }) => data2),
  "v-02bd726f": () => Promise.resolve().then(function() {
    return swiper_html;
  }).then(({ data: data2 }) => data2),
  "v-40079946": () => Promise.resolve().then(function() {
    return header_html;
  }).then(({ data: data2 }) => data2),
  "v-2313815a": () => Promise.resolve().then(function() {
    return icon_html;
  }).then(({ data: data2 }) => data2),
  "v-749dc084": () => Promise.resolve().then(function() {
    return shape_html;
  }).then(({ data: data2 }) => data2),
  "v-0d8695b4": () => Promise.resolve().then(function() {
    return streamer_html;
  }).then(({ data: data2 }) => data2),
  "v-305c6767": () => Promise.resolve().then(function() {
    return title_html;
  }).then(({ data: data2 }) => data2),
  "v-a5c63bec": () => Promise.resolve().then(function() {
    return list_html;
  }).then(({ data: data2 }) => data2),
  "v-77b50ec8": () => Promise.resolve().then(function() {
    return table_html;
  }).then(({ data: data2 }) => data2),
  "v-e5285fd6": () => Promise.resolve().then(function() {
    return _3D_html;
  }).then(({ data: data2 }) => data2),
  "v-14903f90": () => Promise.resolve().then(function() {
    return map_html;
  }).then(({ data: data2 }) => data2),
  "v-1e417be8": () => Promise.resolve().then(function() {
    return indicator_html;
  }).then(({ data: data2 }) => data2),
  "v-33953caa": () => Promise.resolve().then(function() {
    return text_html;
  }).then(({ data: data2 }) => data2),
  "v-686b8072": () => Promise.resolve().then(function() {
    return weather_html;
  }).then(({ data: data2 }) => data2),
  "v-851ded6c": () => Promise.resolve().then(function() {
    return img_html;
  }).then(({ data: data2 }) => data2),
  "v-69e57a92": () => Promise.resolve().then(function() {
    return video_html;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html;
  }).then(({ data: data2 }) => data2)
};
const pagesData = vue.ref(pagesData$1);
const pageDataEmpty = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData = vue.ref(pageDataEmpty);
const usePageData = () => pageData;
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData.value.key) {
      pageData.value = data2;
    }
  };
}
const pageFrontmatterSymbol = Symbol("");
const usePageFrontmatter = () => {
  const pageFrontmatter = vue.inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
const pageHeadSymbol = Symbol("");
const usePageHead = () => {
  const pageHead = vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
const pageHeadTitleSymbol = Symbol("");
const pageLangSymbol = Symbol("");
const usePageLang = () => {
  const pageLang = vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const routeLocaleSymbol = Symbol("");
const useRouteLocale = () => {
  const routeLocale = vue.inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
const siteData$1 = {
  "base": "/anov-ui-doc/",
  "lang": "zh-CN",
  "title": "ANOV-UI",
  "description": "ANOV-UI \u662F\u4E00\u5957\u5F00\u6E90\u7EC4\u4EF6\u5E93\uFF0C\u81F4\u529B\u4E8E\u4E3A\u5F00\u53D1\u8005\u3001\u8BBE\u8BA1\u4EBA\u5458\u63D0\u4F9B\u4E30\u5BCC\u7684\u53EF\u89C6\u5316\u5927\u5C4F\u7EC4\u4EF6\uFF0C\u53EF\u5728\u57FA\u4E8E VUE \u7684\u9879\u76EE\u4E0A\u4F7F\u7528\u8BE5\u7EC4\u4EF6\u5E93\u3002",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "favicon.ico"
      }
    ]
  ],
  "locales": {}
};
const siteData = vue.ref(siteData$1);
const useSiteData = () => siteData;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
const siteLocaleDataSymbol = Symbol("");
const useSiteLocaleData = () => {
  const siteLocaleData = vue.inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
const Content = (props) => {
  let key;
  if (props.pageKey) {
    key = props.pageKey;
  } else {
    const page = usePageData();
    key = page.value.key;
  }
  const component = pagesComponents[key];
  if (component) {
    return vue.h(component);
  }
  return vue.h("div", "404 Not Found");
};
Content.displayName = "Content";
Content.props = {
  pageKey: {
    type: String,
    required: false
  }
};
const layoutComponents = {
  "404": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404;
  })),
  "Layout": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout;
  }))
};
process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const resolveHeadIdentifier = ([tag, attrs, content]) => {
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag)) {
    return tag;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([tag, attrs, content]);
};
const dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
const isLinkMailto = (link) => /^mailto:/.test(link);
const isLinkTel = (link) => /^tel:/.test(link);
const isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
const removeEndingSlash = (str) => str.replace(/\/$/, "");
const removeLeadingSlash = (str) => str.replace(/^\//, "");
const resolveLocalePath = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b.length - a.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const Vuepress = vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;
const withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${removeLeadingSlash(url)}`;
};
const resolvers = vue.reactive({
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver === null || pageDataResolver === void 0 ? void 0 : pageDataResolver());
    return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  resolvePageHeadTitle: (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`,
  resolvePageLang: (pageData2) => pageData2.lang || "en",
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  resolveSiteLocaleData: (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale])
});
var vars$3 = "";
var externalLinkIcon = "";
const svg = vue.h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  vue.h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  vue.h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = vue.defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = vue.computed(() => {
      var _a;
      return (_a = props.locales[routeLocale.value]) !== null && _a !== void 0 ? _a : {
        openInNewWindow: "open in new window"
      };
    });
    return () => vue.h("span", [
      svg,
      vue.h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = { "/": { "openInNewWindow": "open in new window" } };
var clientAppEnhance0 = defineClientAppEnhance(({ app }) => {
  app.component("ExternalLinkIcon", vue.h(ExternalLinkIcon, { locales }));
});
var vars$2 = "";
var mediumZoom = "";
var clientAppEnhance1 = defineClientAppEnhance(({ app, router }) => {
  return;
});
const themeData$1 = {
  "logo": "favicon.ico",
  "repo": "",
  "search": true,
  "searchMaxSuggestions": 8,
  "navbar": [
    {
      "text": "\u6307\u5357",
      "link": "/guide/"
    },
    {
      "text": "\u7EC4\u4EF6",
      "link": "/components/"
    },
    {
      "text": "\u4E3B\u9898",
      "link": "/theme/"
    }
  ],
  "sidebarDepth": 1,
  "sidebar": {
    "/guide/": [
      {
        "text": "\u6307\u5357",
        "children": [
          "/guide/README.md",
          "/guide/dirtree.md",
          "/guide/file.md",
          "/guide/type.md",
          "/guide/group.md",
          "/guide/theme.md",
          "/guide/standard.md"
        ]
      }
    ],
    "/components/": [
      {
        "text": "\u8BBE\u8BA1\u539F\u5219",
        "children": [
          "/components/README.md"
        ]
      },
      {
        "text": "\u7EC4\u4EF6",
        "children": [
          {
            "text": "\u56FE\u8868",
            "children": [
              "/components/chart/line.md",
              "/components/chart/bar.md",
              "/components/chart/pie.md",
              "/components/chart/pictograph.md",
              "/components/chart/calendar.md",
              "/components/chart/gauge.md",
              "/components/chart/radar.md",
              "/components/chart/other.md"
            ]
          },
          {
            "text": "\u6587\u5B57",
            "children": [
              "/components/text/text.md",
              "/components/text/indicator.md",
              "/components/text/weather.md"
            ]
          },
          {
            "text": "\u5A92\u4F53",
            "children": [
              "/components/video/img.md",
              "/components/video/video.md"
            ]
          },
          {
            "text": "\u88C5\u9970",
            "children": [
              "/components/deck/header.md",
              "/components/deck/title.md",
              "/components/deck/streamer.md",
              "/components/deck/icon.md",
              "/components/deck/shape.md"
            ]
          },
          {
            "text": "\u5217\u8868",
            "children": [
              "/components/list/table.md",
              "/components/list/list.md"
            ]
          },
          {
            "text": "\u5730\u56FE",
            "children": [
              "/components/map/map.md",
              "/components/map/3D.md"
            ]
          },
          {
            "text": "\u63A7\u4EF6",
            "children": [
              "/components/control/select.md",
              "/components/control/btn.md",
              "/components/control/swiper.md",
              "/components/control/other.md"
            ]
          }
        ]
      }
    ]
  },
  "editLink": false,
  "lastUpdatedText": "\u4E0A\u6B21\u66F4\u65B0",
  "contributorsText": "\u8D21\u732E\u8005",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "contributors": true,
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
};
const themeData = vue.ref(themeData$1);
const useThemeData = () => themeData;
if (false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data2) => {
    themeData.value = data2;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = vue.inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme2, routeLocale) => {
  var _a;
  return __spreadValues(__spreadValues({}, theme2), (_a = theme2.locales) === null || _a === void 0 ? void 0 : _a[routeLocale]);
};
var clientAppEnhance2 = defineClientAppEnhance(({ app }) => {
  const themeData2 = useThemeData();
  const routeLocale = app._context.provides[routeLocaleSymbol];
  const themeLocaleData = vue.computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
  app.provide(themeLocaleDataSymbol, themeLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $theme: {
      get() {
        return themeData2.value;
      }
    },
    $themeLocale: {
      get() {
        return themeLocaleData.value;
      }
    }
  });
});
const _sfc_main$$ = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${serverRenderer.ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
var CodeGroup = vue.defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = vue.ref(-1);
    const tabRefs = vue.ref([]);
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a;
      const items = (((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return vue.h("div", { class: "code-group" }, [
        vue.h("div", { class: "code-group__nav" }, vue.h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return vue.h("li", { class: "code-group__li" }, vue.h("button", {
            ref: (element2) => {
              if (element2) {
                tabRefs.value[i] = element2;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i,
            onKeydown: (e) => keyboardHandler(e, i)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const __default__$1 = vue.defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$_ = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["code-group-item", { "code-group-item__active": __props.active }],
        "aria-selected": __props.active
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
}));
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = vue.inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = core.usePreferredDark();
  const darkStorage = core.useStorage("vuepress-color-scheme", "auto");
  const isDarkMode = vue.computed({
    get() {
      if (!themeLocale.value.darkMode) {
        return false;
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  vue.provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window === null || window === void 0 ? void 0 : window.document.querySelector("html");
    htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  vue.onMounted(() => {
    vue.watch(isDarkMode, update, { immediate: true });
  });
  vue.onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = vueRouter.useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect(__spreadValues({
    hash: route.hash,
    query: route.query,
    params: route.params
  }, resolvedRedirectObj));
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(item);
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = vue.inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = vue.computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  vue.provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  var _a, _b, _c, _d;
  const sidebarConfig = (_b = (_a = frontmatter.sidebar) !== null && _a !== void 0 ? _a : themeLocale.sidebar) !== null && _b !== void 0 ? _b : "auto";
  const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) !== null && _c !== void 0 ? _c : themeLocale.sidebarDepth) !== null && _d !== void 0 ? _d : 2;
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = vueRouter.useRoute();
  const page = usePageData();
  const handleChildItem = (item) => {
    var _a;
    let childItem;
    if (isString(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return __spreadProps(__spreadValues({}, childItem), {
        children: childItem.children.map((item2) => handleChildItem(item2))
      });
    }
    if (childItem.link === route.path) {
      const headers = ((_a = page.value.headers[0]) === null || _a === void 0 ? void 0 : _a.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return __spreadProps(__spreadValues({}, childItem), {
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      });
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  var _a;
  const route = vueRouter.useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) !== null && _a !== void 0 ? _a : [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const useThemeLocaleData = () => useThemeLocaleData$1();
var index = "";
var clientAppEnhance3 = defineClientAppEnhance(({ app, router }) => {
  app.component("Badge", _sfc_main$$);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", _sfc_main$_);
  app.component("NavbarSearch", () => {
    const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
    if (SearchComponent) {
      return vue.h(SearchComponent);
    }
    return null;
  });
  const scrollBehavior = router.options.scrollBehavior;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
var clientAppEnhance4 = ({ app }) => {
  app.component("element", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return element$1;
  }))), app.component("guideTypeDetail", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return guideTypeDetail$1;
  }))), app.component("theme", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return theme$1;
  })));
};
const clientAppEnhances = [
  clientAppEnhance0,
  clientAppEnhance1,
  clientAppEnhance2,
  clientAppEnhance3,
  clientAppEnhance4
];
function r(r2, e, n) {
  var i, t, o;
  e === void 0 && (e = 50), n === void 0 && (n = {});
  var a = (i = n.isImmediate) != null && i, u = (t = n.callback) != null && t, c = n.maxWait, v = Date.now(), l = [];
  function f() {
    if (c !== void 0) {
      var r3 = Date.now() - v;
      if (r3 + e >= c)
        return c - r3;
    }
    return e;
  }
  var d = function() {
    var e2 = [].slice.call(arguments), n2 = this;
    return new Promise(function(i2, t2) {
      var c2 = a && o === void 0;
      if (o !== void 0 && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, v = Date.now(), !a) {
          var i3 = r2.apply(n2, e2);
          u && u(i3), l.forEach(function(r3) {
            return (0, r3.resolve)(i3);
          }), l = [];
        }
      }, f()), c2) {
        var d2 = r2.apply(n2, e2);
        return u && u(d2), i2(d2);
      }
      l.push({ resolve: i2, reject: t2 });
    });
  };
  return d.cancel = function(r3) {
    o !== void 0 && clearTimeout(o), l.forEach(function(e2) {
      return (0, e2.reject)(r3);
    }), l = [];
  }, d;
}
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
var vars$1 = "";
var backToTop = "";
const BackToTop = vue.defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = vue.ref(0);
    const show = vue.computed(() => scrollTop.value > 300);
    const onScroll = r(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    vue.onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = vue.h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => vue.h(vue.Transition, {
      name: "back-to-top"
    }, () => show.value ? backToTopEl : null);
  }
});
const clientAppRootComponents = [
  BackToTop
];
var clientAppSetup0 = defineClientAppSetup(() => {
  return;
});
var vars = "";
var nprogress = "";
const useNprogress = () => {
  vue.onMounted(() => {
    const router = vueRouter.useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    nprogress__namespace.configure({ showSpinner: false });
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress__namespace.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress__namespace.done();
    });
  });
};
var clientAppSetup1 = defineClientAppSetup(() => {
  useNprogress();
});
var clientAppSetup2 = defineClientAppSetup(() => {
  setupDarkMode();
  setupSidebarItems();
});
const clientAppSetups = [
  clientAppSetup0,
  clientAppSetup1,
  clientAppSetup2
];
const routeItems = [
  ["v-8daa1a0e", "/", { "title": "" }, ["/index.html", "/README.md"]],
  ["v-74c56a5a", "/components/introduce.html", { "title": "\u7EC4\u4EF6" }, ["/components/introduce", "/components/introduce.md"]],
  ["v-1020f180", "/components/", { "title": "\u8BBE\u8BA1\u539F\u5219" }, ["/components/index.html", "/components/README.md"]],
  ["v-1b623e0c", "/guide/dirtree.html", { "title": "\u76EE\u5F55\u7ED3\u6784" }, ["/guide/dirtree", "/guide/dirtree.md"]],
  ["v-55846971", "/guide/file.html", { "title": "\u7EC4\u4EF6\u5F00\u53D1" }, ["/guide/file", "/guide/file.md"]],
  ["v-792a83a6", "/guide/group.html", { "title": "\u5206\u7EC4\u4ECB\u7ECD" }, ["/guide/group", "/guide/group.md"]],
  ["v-fffb8e28", "/guide/", { "title": "\u51C6\u5907\u5DE5\u4F5C" }, ["/guide/index.html", "/guide/README.md"]],
  ["v-565176d0", "/guide/standard.html", { "title": "\u5F00\u53D1\u89C4\u8303" }, ["/guide/standard", "/guide/standard.md"]],
  ["v-4d76029c", "/guide/theme.html", { "title": "\u4E3B\u9898\u5E94\u7528" }, ["/guide/theme", "/guide/theme.md"]],
  ["v-7a23931a", "/guide/type.html", { "title": "\u7C7B\u578B\u4ECB\u7ECD" }, ["/guide/type", "/guide/type.md"]],
  ["v-d50f5082", "/theme/", { "title": "\u7EC4\u4EF6\u4E3B\u9898" }, ["/theme/index.html", "/theme/README.md"]],
  ["v-0a41b2f7", "/components/chart/bar.html", { "title": "\u67F1\u72B6\u56FE" }, ["/components/chart/bar", "/components/chart/bar.md"]],
  ["v-151c0caa", "/components/chart/calendar.html", { "title": "\u65E5\u5386\u56FE" }, ["/components/chart/calendar", "/components/chart/calendar.md"]],
  ["v-3bfbad91", "/components/chart/gauge.html", { "title": "\u4EEA\u8868\u76D8" }, ["/components/chart/gauge", "/components/chart/gauge.md"]],
  ["v-62954d98", "/components/chart/line.html", { "title": "\u6298\u7EBF\u56FE" }, ["/components/chart/line", "/components/chart/line.md"]],
  ["v-454eb5da", "/components/chart/other.html", { "title": "\u5176\u5B83" }, ["/components/chart/other", "/components/chart/other.md"]],
  ["v-1bfa47c2", "/components/chart/pictograph.html", { "title": "\u8C61\u5F62\u56FE" }, ["/components/chart/pictograph", "/components/chart/pictograph.md"]],
  ["v-4995011e", "/components/chart/pie.html", { "title": "\u997C\u56FE" }, ["/components/chart/pie", "/components/chart/pie.md"]],
  ["v-a40da8b8", "/components/chart/radar.html", { "title": "\u96F7\u8FBE\u56FE" }, ["/components/chart/radar", "/components/chart/radar.md"]],
  ["v-097617af", "/components/control/btn.html", { "title": "\u6309\u94AE" }, ["/components/control/btn", "/components/control/btn.md"]],
  ["v-31257a0a", "/components/control/other.html", { "title": "\u5176\u5B83" }, ["/components/control/other", "/components/control/other.md"]],
  ["v-955dcf2a", "/components/control/select.html", { "title": "\u9009\u62E9\u6846" }, ["/components/control/select", "/components/control/select.md"]],
  ["v-02bd726f", "/components/control/swiper.html", { "title": "\u8F6E\u64AD" }, ["/components/control/swiper", "/components/control/swiper.md"]],
  ["v-40079946", "/components/deck/header.html", { "title": "\u5934\u90E8\u88C5\u9970" }, ["/components/deck/header", "/components/deck/header.md"]],
  ["v-2313815a", "/components/deck/icon.html", { "title": "\u56FE\u6807" }, ["/components/deck/icon", "/components/deck/icon.md"]],
  ["v-749dc084", "/components/deck/shape.html", { "title": "\u5F62\u72B6" }, ["/components/deck/shape", "/components/deck/shape.md"]],
  ["v-0d8695b4", "/components/deck/streamer.html", { "title": "\u52A8\u753B" }, ["/components/deck/streamer", "/components/deck/streamer.md"]],
  ["v-305c6767", "/components/deck/title.html", { "title": "\u6807\u9898\u88C5\u9970" }, ["/components/deck/title", "/components/deck/title.md"]],
  ["v-a5c63bec", "/components/list/list.html", { "title": "\u5217\u8868" }, ["/components/list/list", "/components/list/list.md"]],
  ["v-77b50ec8", "/components/list/table.html", { "title": "\u8868\u683C" }, ["/components/list/table", "/components/list/table.md"]],
  ["v-e5285fd6", "/components/map/3D.html", { "title": "3D" }, ["/components/map/3D", "/components/map/3D.md"]],
  ["v-14903f90", "/components/map/map.html", { "title": "\u5730\u56FE" }, ["/components/map/map", "/components/map/map.md"]],
  ["v-1e417be8", "/components/text/indicator.html", { "title": "\u6307\u6807" }, ["/components/text/indicator", "/components/text/indicator.md"]],
  ["v-33953caa", "/components/text/text.html", { "title": "\u6587\u5B57" }, ["/components/text/text", "/components/text/text.md"]],
  ["v-686b8072", "/components/text/weather.html", { "title": "\u5929\u6C14" }, ["/components/text/weather", "/components/text/weather.md"]],
  ["v-851ded6c", "/components/video/img.html", { "title": "\u56FE\u7247" }, ["/components/video/img", "/components/video/img.md"]],
  ["v-69e57a92", "/components/video/video.html", { "title": "\u89C6\u9891" }, ["/components/video/video", "/components/video/video.md"]],
  ["v-3706649a", "/404.html", { "title": "" }, ["/404"]]
];
const pagesRoutes = routeItems.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
const historyCreator = vueRouter.createMemoryHistory;
const createVueRouter = () => {
  const router = vueRouter.createRouter({
    history: historyCreator(removeEndingSlash(siteData.value.base)),
    routes: pagesRoutes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a;
    if (to.path !== from.path || from === vueRouter.START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a = pagesComponents[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  return router;
};
const setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
const setupGlobalComputed = (app, router) => {
  const routeLocale = vue.computed(() => resolvers.resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = vue.computed(() => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = vue.computed(() => resolvers.resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = vue.computed(() => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = vue.computed(() => resolvers.resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = vue.computed(() => resolvers.resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
const setupUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
const appCreator = vue.createSSRApp;
const createVueApp = async () => {
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      setupUpdateHead();
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup();
      }
      return () => [
        vue.h(vueRouter.RouterView),
        ...clientAppRootComponents.map((comp) => vue.h(comp))
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router);
  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData });
  }
  app.use(router);
  return {
    app,
    router
  };
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$Z = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><ol><li>\u5B89\u88C5\u7EC4\u4EF6\u5305</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> anov-ui -S
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u4F7F\u7528\u7EC4\u4EF6</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AnovUI <span class="token keyword">from</span> <span class="token string">&quot;anov-ui&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//\u5168\u5C40\u5F15\u5165</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>AnovUI<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u6309\u9700\u5F15\u5165</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Table<span class="token punctuation">,</span>
  SingleLine<span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;anov-ui&quot;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Table<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>SingleLine<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8BF7\u786E\u4FDD\u60A8\u7684\u5F00\u53D1\u73AF\u5883 Node.js \u7248\u672C &gt;= 10</p></div><!--]-->`);
}
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.html.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
var index_html$9 = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["ssrRender", _sfc_ssrRender$a]]);
var index_html$a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$Y = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6</h1><p>\u76EE\u524D anov-ui \u63D0\u4F9B\u4E86 8 \u7C7B 40+\u4E2A\u7EC4\u4EF6\uFF0C\u5305\u62EC\u7684\u7C7B\u522B\u6709\u56FE\u8868(\u67F1\u56FE\u3001\u6298\u7EBF\u3001\u997C\u56FE\u3001\u6C14\u6CE1\u3001\u6563\u70B9\u7B49)\u3001\u6587\u5B57(\u6570\u5B57\u3001\u65E5\u671F\u3001\u6307\u6807\u3001\u5929\u6C14)\u3001\u5217\u8868(TOP \u8868\u683C\u3001\u6392\u540D\u5217\u8868\u7B49)\u3001\u7D20\u6750(header\u3001\u6807\u9898\u3001\u70B9\u7F00\u3001icon)\u3001\u5A92\u4F53\u3001\u5730\u56FE\u30013D\u3001\u63A7\u4EF6(\u6309\u94AE\u3001\u9875\u7B7E\u3001\u65F6\u95F4\u8F74\u3001\u884C\u5217\u5E03\u5C40\u7B49)\u3002</p><p><strong>\u5177\u4F53\u7EC4\u4EF6\u4ECB\u7ECD\u540E\u671F\u8865\u5145\u3002</strong></p><!--]-->`);
}
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/introduce.html.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
var introduce_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["ssrRender", _sfc_ssrRender$9]]);
var introduce_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": introduce_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$X = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u8BBE\u8BA1\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u539F\u5219" aria-hidden="true">#</a> \u8BBE\u8BA1\u539F\u5219</h1><h2 id="\u4E13\u6CE8\u5BFB\u627E\u771F\u6B63\u7684\u95EE\u9898\u548C\u9002\u5408\u7684\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u4E13\u6CE8\u5BFB\u627E\u771F\u6B63\u7684\u95EE\u9898\u548C\u9002\u5408\u7684\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u4E13\u6CE8\u5BFB\u627E\u771F\u6B63\u7684\u95EE\u9898\u548C\u9002\u5408\u7684\u89E3\u51B3\u65B9\u6848</h2><p>\u2460\u660E\u786E\u95EE\u9898\uFF0C\u4E86\u89E3\u7528\u6237\u9700\u6C42\uFF0C\u4E3A\u8C01\u800C\u8BBE\u8BA1 \u5148\u786E\u5B9A\u4F18\u5148\u7EA7\uFF0C\u524D\u671F\u4E86\u89E3\u8C01\u770B\u8FD9\u4E9B\u6570\u636E\uFF0C\u9488\u5BF9\u6570\u636E\u7684\u76EE\u6807\u5BF9\u8C61\u8FBE\u6210\u5171\u8BC6\uFF0C\u6EE1\u8DB3\u53D7\u4F17\u7684\u5229\u76CA\u548C\u9700\u6C42\u3002</p><p>\u2461\u4E86\u89E3\u53D7\u4F17\u5BF9\u53EF\u89C6\u5316\u7684\u719F\u6089\u6210\u5EA6\uFF0C\u8BBE\u8BA1\u7B26\u5408\u5B9E\u9645\uFF0C\u5207\u52FF\u5929\u9A6C\u884C\u7A7A \u5982\u679C\u4ED6\u4EEC\u662F\u65B0\u624B\uFF0C\u8BF7\u575A\u6301\u4F7F\u7528\u4F20\u7EDF\u56FE\u8868\uFF0C\u4F8B\u5982\u997C\u56FE\uFF0C\u6761\u5F62\u56FE\u548C\u6298\u7EBF\u56FE\uFF0C\u5426\u5219\uFF0C\u4ED6\u4EEC\u5C06\u82B1\u8D39\u66F4\u591A\u65F6\u95F4\u5728\u56FE\u8868\u7684\u65B0\u9896\u6027\u4E0A\uFF0C\u800C\u4E0D\u662F\u5173\u6CE8\u56FE\u8868\u4E2D\u5305\u542B\u7684\u4FE1\u606F\u3002\u8FD8\u9700\u8981\u8003\u8651\u5230\u524D\u7AEF\u7684\u5B9E\u73B0\u548C\u6570\u636E\u7279\u6B8A\u60C5\u51B5\u4E0B\u7684\u6837\u5F0F\u5C55\u73B0\u65B9\u5F0F\u3002</p><h2 id="\u7ED9\u7528\u6237\u8DB3\u591F\u7684\u601D\u8003\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u7528\u6237\u8DB3\u591F\u7684\u601D\u8003\u7A7A\u95F4" aria-hidden="true">#</a> \u7ED9\u7528\u6237\u8DB3\u591F\u7684\u601D\u8003\u7A7A\u95F4</h2><p>\u5728\u4E0D\u626D\u66F2\u6570\u636E\u6545\u4E8B\u524D\u63D0\u4E0B\uFF0C\u5B8C\u7F8E\u7684\u6570\u636E\u53EF\u89C6\u5316\u662F\u6FC0\u8D77\u597D\u5947\u5FC3\u4E0E\u6C42\u77E5\u6B32\u7684\uFF0C\u59CB\u7EC8\u575A\u6301\u7ED9\u7528\u6237\u8D85\u51FA\u671F\u5F85\u7684\u4F5C\u54C1\uFF0C\u4F53\u9A8C\u5728\u6570\u636E\u4E16\u754C\u4E2D\u7684\u6F2B\u6E38\u4E4B\u7F8E\u3002</p><h2 id="\u5BF9\u53EF\u53D1\u751F\u98CE\u9669\u4FDD\u6301\u8C28\u614E\u6001\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u53EF\u53D1\u751F\u98CE\u9669\u4FDD\u6301\u8C28\u614E\u6001\u5EA6" aria-hidden="true">#</a> \u5BF9\u53EF\u53D1\u751F\u98CE\u9669\u4FDD\u6301\u8C28\u614E\u6001\u5EA6</h2><p>\u6211\u4EEC\u5E76\u4E0D\u5F3A\u8C03\u56FA\u6B65\u81EA\u5C01\u3001\u907F\u514D\u521B\u65B0\uFF0C\u76F8\u53CD\u6211\u4EEC\u9F13\u52B1\u521B\u65B0\u4E0E\u6311\u6218\u81EA\u6211\uFF0C\u4F46\u8981\u660E\u786E\u77E5\u6089\u53EF\u89C6\u5316\u7CFB\u7EDF\u5E26\u6765\u7684\u98CE\u9669\u4E0E\u521B\u65B0\u6240\u5E26\u6765\u7684\u98CE\u9669\uFF0C\u5E76\u5BF9\u98CE\u9669\u4FDD\u6301\u8C28\u614E\u4FDD\u5B88\u7684\u6001\u5EA6\u3002</p><h2 id="\u5C55\u793A\u6570\u636E\u53D8\u5316\u800C\u975E\u8BBE\u8BA1\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#\u5C55\u793A\u6570\u636E\u53D8\u5316\u800C\u975E\u8BBE\u8BA1\u53D8\u5316" aria-hidden="true">#</a> \u5C55\u793A\u6570\u636E\u53D8\u5316\u800C\u975E\u8BBE\u8BA1\u53D8\u5316</h2><p>\u2460\u77E5\u9053\u81EA\u5DF1\u8BE5\u5982\u4F55\u8868\u8FBE\u548C\u5C55\u793A\u8BBE\u8BA1\u6548\u679C\uFF0C\u627E\u51FA\u6838\u5FC3 \u7B80\u5355\u6613\u61C2\uFF0C\u4E0D\u8981\u8BA9\u7528\u6237\u201C\u89E3\u8BFB\u201D\u4FE1\u606F\uFF0C\u8981\u901A\u8FC7\u805A\u7126\u6240\u5448\u73B0\u7684\u6570\u636E\u6765\u4F20\u8FBE\u4E00\u4E2A\u5F3A\u6709\u529B\u7684\u4FE1\u606F\uFF0C\u4EE5\u786E\u4FDD\u4E00\u4E2A\u4E2D\u5FC3\u4E3B\u9898\u7684\u51FA\u73B0\u3002</p><p>\u2461\u57FA\u4E8E\u80CC\u666F\u4FE1\u606F\u5185\u5BB9\uFF0C\u51CF\u5C11\u8FC7\u5EA6\u8BBE\u8BA1\u5BFC\u81F4\u7684\u6570\u636E\u8BEF\u8BFB\uFF1B\u540C\u65F6\u8003\u8651\u6570\u636E\u7684\u4E0D\u786E\u5B9A\u6027\u548C\u53EF\u53D8\u6027\uFF0C\u8BBE\u8BA1\u53D8\u5316\u670D\u52A1\u4E8E\u6570\u636E\u53D8\u5316\u3002</p><h2 id="\u521B\u9020\u5E76\u6279\u5224" tabindex="-1"><a class="header-anchor" href="#\u521B\u9020\u5E76\u6279\u5224" aria-hidden="true">#</a> \u521B\u9020\u5E76\u6279\u5224</h2><p>\u59CB\u7EC8\u4EE5\u8FA9\u8BC1\u7684\u773C\u5149\u770B\u5F85\u53EF\u89C6\u5316\u8BBE\u8BA1\uFF0C\u81EA\u6211\u5BA1\u89C6\u3001\u53D1\u73B0\u95EE\u9898\u3001\u89E3\u51B3\u95EE\u9898\uFF0C\u5982\u6B64\u53CD\u590D\u3002\u53EF\u89C6\u5316\u8BBE\u8BA1\u662F\u5FAA\u5E8F\u5411\u524D\u3001\u53CD\u590D\u8FED\u4EE3\u7684\uFF0C\u521B\u9020\u5E76\u6279\u5224\uFF0C\u4F7F\u8BBE\u8BA1\u8FC7\u7A0B\u66F4\u52A0\u4E25\u8C28\u3001\u5168\u9762\u3001\u5BA2\u89C2\u3002</p><h2 id="\u5408\u7406\u8BBE\u5B9A\u6570\u636E\u5BC6\u5EA6\u53CA\u6570\u636E\u77E9\u9635\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#\u5408\u7406\u8BBE\u5B9A\u6570\u636E\u5BC6\u5EA6\u53CA\u6570\u636E\u77E9\u9635\u8303\u56F4" aria-hidden="true">#</a> \u5408\u7406\u8BBE\u5B9A\u6570\u636E\u5BC6\u5EA6\u53CA\u6570\u636E\u77E9\u9635\u8303\u56F4</h2><p>\u2460\u6587\u5B57\u4E0E\u8868\u683C\u548C\u56FE\u8868\u548C\u7406\u89E3\u7ED3\u5408 a)\u6709\u610F\u4E49\u7684\u5E94\u7528\u6587\u672C\uFF0C\u4E0D\u8981\u4E00\u6B21\u6027\u7ED9\u7528\u6237\u63D0\u4F9B\u592A\u591A\u7684\u6587\u5B57\u4FE1\u606F\u3002\u901A\u8FC7\u9009\u62E9\u9002\u5F53\u7684\u89C6\u89C9\u6548\u679C\uFF0C\u4F7F\u4ED6\u4EEC\u80FD\u591F\u8F7B\u677E\u5730\u8BC6\u522B\u3002\u8BA9\u4EBA\u4EEC\u66F4\u5BB9\u6613\u770B\u5230\u56FE\u8868\u548C\u6587\u5B57\u7684\u4E92\u52A8\u3002\u5408\u7406\u7684\u6587\u672C\u6446\u653E\u52A9\u4E8E\u589E\u52A0\u7406\u89E3\uFF0C\u800C\u4E0D\u51CF\u635F\u89C6\u89C9\u7684\u610F\u4E49\u3002 b)\u5728\u6709\u9650\u9875\u9762\u4E2D\u5C55\u793A\u5927\u4F53\u91CF\u6570\u636E\uFF0C\u4FE1\u606F\u8868\u8FF0\u7EF4\u5EA6\u4E0D\u5E94\u8D85\u8FC7\u6570\u636E\u6570\u5B57\u7EF4\u5EA6\uFF0C\u5145\u5206\u8003\u8651\u76F8\u5173\u6027\u3001\u5BF9\u6BD4\u6027\u3001</p><p>\u2461\u5DEE\u5F02\u6027\uFF0C\u63ED\u793A\u6570\u636E\u591A\u5C42\u6B21\u7EC6\u8282\u4EE5\u53CA\u5C55\u793A\u6574\u4F53\u6982\u89C8\uFF0C\u6709\u6548\u96C6\u6210\u7EDF\u8BA1\u5206\u6790\u3001\u827A\u672F\u8BBE\u8BA1\u4EE5\u53CA\u53EF\u89C6\u5316\u5BA2\u89C2\u6027\u4E3A\u4E00\u4F53\u3002</p><h2 id="\u6CA1\u6709\u65E0\u7528\u7684\u6570\u636E-\u53EA\u6709\u65E0\u610F\u4E49\u7684\u89E3\u8BFB" tabindex="-1"><a class="header-anchor" href="#\u6CA1\u6709\u65E0\u7528\u7684\u6570\u636E-\u53EA\u6709\u65E0\u610F\u4E49\u7684\u89E3\u8BFB" aria-hidden="true">#</a> \u6CA1\u6709\u65E0\u7528\u7684\u6570\u636E\uFF0C\u53EA\u6709\u65E0\u610F\u4E49\u7684\u89E3\u8BFB</h2><p>\u2460\u5728\u6570\u636E\u53EF\u89C6\u5316\u8BBE\u8BA1\u65E0\u6CD5\u89E3\u51B3\u5F53\u524D\u7528\u6237\u95EE\u9898\u65F6\uFF0C\u5728\u6000\u7591\u6570\u636E\u6709\u6548\u6027\u524D\uFF0C\u5148\u5BA1\u89C6\u6570\u636E\u5C55\u793A\u89C6\u89D2\u3002 \u89D2\u7684\u9009\u53D6\u5F71\u54CD\u6570\u636E\u5206\u6790\u7684\u4FE1\u606F\u4F20\u8FBE\uFF0C\u5C24\u5176\u5728\u6570\u636E\u70B9\u6784\u6210\u6570\u636E\u96C6\u7684\u8FC7\u7A0B\u91CC\uFF0C\u6709\u65F6\u53EF\u4EE5\u901A\u8FC7\u89E3\u6784\u624B\u6CD5\uFF0C\u53D1\u73B0\u6570\u636E\u7684\u89C4\u5F8B\u3002</p><p>\u2461\u5408\u7406\u8FD0\u7528\u70B9\u7EBF\u9762\u76F8\u7ED3\u5408\u7684\u8BBE\u8BA1\u539F\u5219 \u5229\u7528\u70B9\u7684\u805A\u96C6\u548C\u5206\u6563\u6027\u3001\u7EBF\u7684\u6307\u5F15\u6027\u3001\u9762\u7684\u5207\u5272\u6027\uFF0C\u6765\u589E\u5F3A\u8BBE\u8BA1\u7684\u7A7A\u95F4\u611F\u548C\u79D1\u6280\u611F\uFF0C\u540C\u65F6\u63A7\u5236\u6570\u91CF\u548C\u5C42\u6B21\uFF0C\u4EE5\u514D\u753B\u9762\u51CC\u4E71\u3002</p><!--]-->`);
}
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/index.html.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
var index_html$7 = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["ssrRender", _sfc_ssrRender$8]]);
var index_html$8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$W = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784</h1><p>\u4EE5\u4E0B\u76EE\u5F55\u7ED3\u6784\u5BF9\u7EC4\u4EF6\u5E93\u7684\u4E00\u4E9B\u91CD\u8981\u6587\u4EF6\u3001\u76EE\u5F55\u505A\u4E86\u4E00\u4E2A\u7B80\u8981\u8BF4\u660E\uFF0C\u4F60\u4E0D\u5E94\u8BE5\u5220\u9664\u8FD9\u90E8\u5206\u6587\u4EF6\u6216\u76EE\u5F55\u3002</p><pre class="vue-container"><code><p>.
\u251C\u2500\u2500 <code>build</code> <em>(<strong>\u6253\u5305\u76F8\u5173</strong>)</em>
\u251C\u2500\u2500 <code>examples</code> <em>(<strong>\u6D4B\u8BD5\u9875\u9762</strong>)</em>
\u251C\u2500\u2500 <code>src</code>
\u2502\xA0\xA0 \u251C\u2500\u2500 <code>components</code> <em>(<strong>\u7EC4\u4EF6\u6A21\u5757</strong>)</em>
\u2502\xA0\xA0 \u251C\u2500\u2500 <code>panel</code> <em>(<strong>\u9762\u677F\u6838\u5FC3\u6A21\u5757</strong>)</em>
\u2502\xA0\xA0 \u251C\u2500\u2500 <code>utils</code> <em>(<strong>\u5DE5\u5177\u6A21\u5757</strong>)</em>
\u2502\xA0\xA0 \u251C\u2500\u2500 components.json <em>(<strong>\u5BFC\u51FA\u7EC4\u4EF6\u914D\u7F6E\u6587\u4EF6</strong>)</em>
\u2502\xA0\xA0 \u251C\u2500\u2500 index.js <em>(<strong>\u7EC4\u4EF6\u5165\u53E3\u6587\u4EF6</strong>)</em>
\u2502\xA0\xA0 \u251C\u2500\u2500 panel.js <em>(<strong>\u9762\u677F\u5165\u53E3\u6587\u4EF6</strong>)</em>
\u251C\u2500\u2500 <code>static</code> <em>(<strong>\u8D44\u6E90\u6587\u4EF6</strong>)</em></p>
</code></pre><!--]-->`);
}
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/dirtree.html.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
var dirtree_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["ssrRender", _sfc_ssrRender$7]]);
var dirtree_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": dirtree_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$V = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u7EC4\u4EF6\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5F00\u53D1" aria-hidden="true">#</a> \u7EC4\u4EF6\u5F00\u53D1</h1><h2 id="\u7EC4\u4EF6\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u7EC4\u4EF6\u76EE\u5F55\u7ED3\u6784</h2><p>\u672C\u8282\u4ECB\u7ECD\u5F00\u53D1\u8005\u5728\u5F00\u53D1\u7EC4\u4EF6\u65F6\uFF0C\u9700\u8981\u9075\u5FAA\u7684\u6587\u4EF6\u7ED3\u6784\u3002</p><p>\u5728\u5F00\u53D1\u7EC4\u4EF6\u4E4B\u524D\uFF0C\u60A8\u9700\u8981\u5728 <em>src/components</em> \u6587\u4EF6\u5939\u4E0B\u65B0\u5EFA\u4E00\u4E2A\u7EC4\u4EF6\u76EE\u5F55\uFF0C\u5728\u7EC4\u4EF6\u76EE\u5F55\u4E0B\u53EF\u4EE5\u6DFB\u52A0\u591A\u4E2A\u7EC4\u4EF6\uFF0C\u6BCF\u4E2A\u5177\u4F53\u7EC4\u4EF6\u5EFA\u8BAE\u4F7F\u7528\u7EC4\u4EF6\u7279\u6027\u4F5C\u4E3A\u76EE\u5F55\u540D\u3002\u{1F330} \u53C2\u8003 <strong>\u8868\u683C</strong> \u7EC4\u4EF6\u7684\u76EE\u5F55\u7ED3\u6784\u3002</p><pre class="vue-container"><code><p>.
\u251C\u2500\u2500 <code>components</code>
\u2502\xA0\xA0 \u251C\u2500\u2500 <code>table</code> <em>(<strong>\u7EC4\u4EF6\u76EE\u5F55\uFF1A\u8868\u683C</strong>)</em>
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 <code>normal</code> <em>(<strong>\u5E38\u89C4\u8868\u683C</strong>)</em>
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 index.vue <em>(<strong>\u89C6\u56FE</strong>)</em>
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 config.js <em>(<strong>\u914D\u7F6E\u6587\u4EF6</strong>)</em>
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 <code>top</code> <em>(<strong>TOP \u8868\u683C</strong>)</em>
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 index.vue
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 config.js
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 components.json <em>(<strong>\u5BFC\u51FA\u76EE\u5F55\u4E0B\u6240\u6709\u7EC4\u4EF6</strong>)</em></p>
</code></pre><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><p>\u60A8\u901A\u8FC7 <em>config.js</em> \u6587\u4EF6\u4E2D\u7684<code>getData</code>\u3001<code>getDataDes</code>\u51FD\u6570\uFF0C\u6765\u5B9A\u4E49\u5916\u89C2\u9762\u677F\u3001\u6570\u636E\u9762\u677F\u3001\u4EA4\u4E92\u9762\u677F\u7684\u663E\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//\u5916\u89C2\u9762\u677F\u6570\u636E</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//\u9759\u6001\u6570\u636E \u975E\u5FC5\u987B</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">getDataDes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">optionDes</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//\u5916\u89C2\u9762\u677F\u63CF\u8FF0</span>
      <span class="token literal-property property">sourceDes</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//\u6570\u636E\u9762\u677F\u63CF\u8FF0 \u975E\u5FC5\u987B</span>
      <span class="token literal-property property">actionsDes</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//\u4EA4\u4E92\u9762\u677F\u63CF\u8FF0 \u975E\u5FC5\u987B</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><details class="custom-container details"><summary>\u6837\u4F8B-\u5916\u89C2\u9762\u677F</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Type <span class="token keyword">from</span> <span class="token string">&quot;anov-ui/src/utils/panel/type&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&quot;\u6D4B\u8BD5\u6570\u636E&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">select</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">getDataDes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">optionDes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6807\u9898&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> Type<span class="token punctuation">.</span>input<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">select</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u7C7B\u578B&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> Type<span class="token punctuation">.</span>select<span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u9009\u9879\u4E00&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u9009\u9879\u4E8C&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u989C\u8272\u9009\u62E9&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> Type<span class="token punctuation">.</span>color<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><blockquote><p>\u5448\u73B0\u6548\u679C</p></blockquote><img${serverRenderer.ssrRenderAttr("src", _ctx.$withBase("/images/guide/file/panel.png"))} style="${serverRenderer.ssrRenderStyle({ "width": "350px" })}" alt="\u5916\u89C2\u9762\u677F"><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u5916\u89C2\u9762\u677F\u914D\u7F6E\u4E2D <code>\u6570\u636E</code>\u4E0E<code>\u63CF\u8FF0</code> \u6570\u636E\u7ED3\u6784\u8981\u5BF9\u5E94\uFF0C\u7ED3\u6784\u9519\u8BEF\u4F1A\u5BFC\u81F4\u5916\u89C2\u9762\u677F\u663E\u793A\u5F02\u5E38\u3002</p></div></details><details class="custom-container details"><summary>\u6837\u4F8B-\u6570\u636E\u9762\u677F</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u9759\u6001\u6570\u636E</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">area</span><span class="token operator">:</span> <span class="token string">&quot;\u5317\u4EAC&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token string">&quot;38558&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&quot;\u6587\u5316\u65C5\u6E38&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">area</span><span class="token operator">:</span> <span class="token string">&quot;\u4E0A\u6D77&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token string">&quot;48558&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&quot;\u751F\u6001\u73AF\u5883&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">area</span><span class="token operator">:</span> <span class="token string">&quot;\u6E56\u5357&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token string">&quot;98558&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&quot;\u533B\u7597\u5065\u5EB7&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">getDataDes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u6570\u636E\u9762\u677F\uFF1A\u4E0D\u652F\u6301\u6570\u636E\u6620\u5C04\u7684\u7EC4\u4EF6\u53EF\u4E0D\u5199sourceDes\u914D\u7F6E</span>
      <span class="token literal-property property">sourceDes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">mapFields</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&quot;area&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">mapField</span><span class="token operator">:</span> <span class="token string">&quot;area&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">des</span><span class="token operator">:</span> <span class="token string">&quot;\u533A\u57DF&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&quot;amount&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">mapField</span><span class="token operator">:</span> <span class="token string">&quot;amount&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">des</span><span class="token operator">:</span> <span class="token string">&quot;\u91D1\u989D&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">mapField</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">des</span><span class="token operator">:</span> <span class="token string">&quot;\u884C\u4E1A&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><blockquote><p>\u5448\u73B0\u6548\u679C</p></blockquote><img${serverRenderer.ssrRenderAttr("src", _ctx.$withBase("/images/guide/file/source.png"))} style="${serverRenderer.ssrRenderStyle({ "width": "300px" })}" alt="\u6570\u636E\u9762\u677F"><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5F53\u63CF\u8FF0\u4E2D\u4E0D\u63D0\u4F9B sourceDes \u5C5E\u6027\u65F6\uFF0C\u4E0D\u4F1A\u663E\u793A\u6570\u636E\u9762\u677F\uFF1B\u9762\u677F\u914D\u7F6E\u6587\u4EF6\u4E2D\u53EA\u5F00\u653E<code>\u9759\u6001\u6570\u636E</code>\u3001<code>\u6620\u5C04\u5B57\u6BB5\u63CF\u8FF0</code>\u914D\u7F6E\uFF0C\u5176\u5B83\u90FD\u662F\u7EC4\u4EF6\u5E93\u5185\u7F6E\u7684\u4E00\u4E9B\u914D\u7F6E\u884C\u4E3A\u3002</p></div></details><details class="custom-container details"><summary>\u6837\u4F8B-\u4EA4\u4E92\u9762\u677F</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">getDataDes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u4EA4\u4E92\u9762\u677F\uFF1A\u4E0D\u652F\u6301\u4EA4\u4E92\u7684\u7EC4\u4EF6\u53EF\u4E0D\u5199actionsDes\u914D\u7F6E</span>
      <span class="token literal-property property">actionsDes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">des</span><span class="token operator">:</span> <span class="token string">&quot;\u5355\u51FB\u4E8B\u4EF6&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token operator">...</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">mapFields</span><span class="token operator">:</span> <span class="token punctuation">[</span>  <span class="token comment">//\u975E\u5FC5\u987B</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">mapField</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">des</span><span class="token operator">:</span> <span class="token string">&quot;\u884C\u7D22\u5F15&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><blockquote><p>\u5448\u73B0\u6548\u679C</p></blockquote><img${serverRenderer.ssrRenderAttr("src", _ctx.$withBase("/images/guide/file/action.png"))} style="${serverRenderer.ssrRenderStyle({ "width": "300px" })}" alt="\u4EA4\u4E92\u9762\u677F"><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5F53\u63CF\u8FF0\u4E2D\u4E0D\u63D0\u4F9B actionsDes \u5C5E\u6027\u65F6\uFF0C\u4E0D\u4F1A\u663E\u793A\u4EA4\u4E92\u9762\u677F\uFF1B\u9762\u677F\u914D\u7F6E\u6587\u4EF6\u4E2D\u53EA\u5F00\u653E<code>\u4EA4\u4E92\u884C\u4E3A</code>\u3001<code>\u5168\u5C40\u53C2\u6570\u6620\u5C04</code>\u914D\u7F6E\uFF0C\u5176\u5B83\u90FD\u662F\u7EC4\u4EF6\u5E93\u5185\u7F6E\u7684\u4E00\u4E9B\u914D\u7F6E\u884C\u4E3A\u3002</p></div></details><h2 id="\u89C6\u56FE\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u89C6\u56FE\u6587\u4EF6" aria-hidden="true">#</a> \u89C6\u56FE\u6587\u4EF6</h2><p><em>index.vue</em>\u6587\u4EF6\u662F\u7EC4\u4EF6\u7684\u5165\u53E3\u6587\u4EF6\u3002\u4EE5\u4E0B\u63D0\u4F9B\u4E86\u4E00\u4E2A\u793A\u4F8B\u4F9B\u60A8\u53C2\u8003\uFF0C\u5E76\u4ECB\u7ECD\u4E86<em>index.vue</em>\u6587\u4EF6\u4E2D\u7684\u5E38\u7528\u51FD\u6570\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u8981\u53BB\u5B9E\u73B0\u8FD9\u4E9B\u51FD\u6570\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ ...size }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>click<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item index) in data<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClick(index, item)<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      ....
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> anMixin <span class="token keyword">from</span> <span class="token string">&quot;anov-ui/src/components/mixin/component.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Table&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u7EC4\u4EF6\u540D\u79F0\uFF0C\u91C7\u7528\u5E15\u65AF\u5361(pascal)\u547D\u540D\u6CD5</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>anMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u7EC4\u4EF6\u521D\u59CB\u5316
     */</span>
    <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * \u91CD\u65B0\u52A0\u8F7D\u7EC4\u4EF6\uFF0C\u4F1A\u6267\u884C\u52A8\u753B\u7EBF
     */</span>
    <span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * \u5237\u65B0\uFF0C\u4FDD\u7559\u4E4B\u524D\u7684\u7F13\u5B58\u5185\u5BB9\uFF0C\u4E00\u822C\u7528\u4E8E\u4FEE\u6539\u6570\u636E\uFF0C\u4E0D\u4F1A\u6267\u884C\u52A8\u753B\u7EBF
     */</span>
    <span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * \u4E3B\u9898\u6539\u53D8\uFF0C\u7EC4\u4EF6\u6267\u884C\u7684\u64CD\u4F5C
     */</span>
    <span class="token function">changeTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>theme<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5F53\u524D\u4E3B\u9898</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * \u5BB9\u5668\u5927\u5C0F\u6539\u53D8\uFF0C\u7EC4\u4EF6\u6267\u884C\u7684\u64CD\u4F5C
     */</span>
    <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * \u9500\u6BC1
     */</span>
    <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * \u70B9\u51FB\u4E8B\u4EF6
     */</span>
    <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u7B2C\u4E00\u4E2A\u53C2\u6570click\u5BF9\u5E94\u7684\u662F\u4EA4\u4E92\u63CF\u8FF0\u4E2D\u7684 event.name</span>
      <span class="token comment">//\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E2D index(\u884C\u7D22\u5F15)\u5BF9\u5E94\u7684\u662F\u4EA4\u4E92\u63CF\u8FF0\u4E2D \u5168\u5C40\u53C2\u6570\u6620\u5C04 \u4E2D\u7684index\uFF0Cdata\u662F\u5F53\u524D\u6570\u636E\u884C\u7684\u503C</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">index</span><span class="token operator">:</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><p>\u6DF7\u5165\u7684<em>mixin/component.js</em>\u63D0\u4F9B\u4E86\u7EC4\u4EF6\u63A5\u6536\u7684\u6570\u636E\uFF0C\u4EE5\u53CA\u901A\u7528\u51FD\u6570\u3002</p><details class="custom-container details"><summary>\u7EC4\u4EF6\u6570\u636E</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u5916\u89C2\u9762\u677F\u6570\u636E</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">440</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">246</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u5F53\u524D\u4E3B\u9898</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//\u6570\u636E</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">size</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u4E8B\u4EF6\u5904\u7406\u903B\u8F91
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">eventName</span> \u4E8B\u4EF6\u540D\u79F0
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">params</span> \u53C2\u6570
     */</span>
    <span class="token function">on</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u5177\u4F53\u5B9E\u73B0\u903B\u8F91.....</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div></details><h2 id="\u5BFC\u51FA\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u51FA\u7EC4\u4EF6" aria-hidden="true">#</a> \u5BFC\u51FA\u7EC4\u4EF6</h2><p>\u5BFC\u51FA\u7EC4\u4EF6\u5206\u4E8C\u6B65\uFF1A</p><ol><li>\u9996\u5148\u5728\u7EC4\u4EF6\u76EE\u5F55\u4E0B\u7684 <em>components.json</em> \u6587\u4EF6\u4E2D\u5BFC\u51FA\u7EC4\u4EF6\u3002</li><li>\u7B2C\u4E8C\u6B65\u5728 <em>src/components.json</em> \u6587\u4EF6\u4E2D\u5F15\u5165\u8FD9\u4E2A\u7EC4\u4EF6\u7684 <em>components.json</em> \u6587\u4EF6\u3002</li></ol><p>\u8FD9\u6837\u505A\u7684\u76EE\u7684\uFF0C\u6211\u4EEC\u4E0D\u9700\u8981\u5728\u5165\u53E3\u6587\u4EF6 <em>src/index.js</em> \u4E2D\u624B\u52A8\u5F15\u5165\u5BFC\u51FA\u7684\u7EC4\u4EF6\uFF0C\u901A\u8FC7\u547D\u4EE4\u89E3\u6790 <em>src/components.json</em> \u914D\u7F6E\u7684\u7EC4\u4EF6\u4FE1\u606F\uFF0C\u52A8\u6001\u751F\u6210\u7EC4\u4EF6\u5165\u53E3\u6587\u4EF6\u3002</p><ul><li>\u5728\u7EC4\u4EF6\u76EE\u5F55\u4E0B\u7684 <em>components.json</em> \u6587\u4EF6\u4E2D\u5BFC\u51FA\u7EC4\u4EF6\uFF0C\u683C\u5F0F\u5982\u4E0B\uFF1A</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8868\u683C&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;other&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;company&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Table&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u4E0E\u89C6\u56FE\u6587\u4EF6\u4E2D\u7684name\u5BF9\u5E94</span>
      <span class="token property">&quot;c_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5E38\u89C4\u8868\u683C&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;table/normal/index.vue&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token string">&quot;table/normal/config.js&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token string">&quot;440px&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&quot;246px&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TopTable&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u4E0E\u89C6\u56FE\u6587\u4EF6\u4E2D\u7684name\u5BF9\u5E94</span>
      <span class="token property">&quot;c_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TOP\u8868\u683C&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;table/top/index.vue&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token string">&quot;table/top/config.js&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token string">&quot;440px&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&quot;246px&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><ul><li>\u7B2C\u4E8C\u6B65\u5728 <em>src/components.json</em> \u6587\u4EF6\u4E2D\u5F15\u5165\u8FD9\u4E2A\u7EC4\u4EF6\u7684 <em>components.json</em> \u6587\u4EF6\uFF0C\u683C\u5F0F\u5982\u4E0B\uFF1A</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5217\u8868&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconbiaoge&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;components/table/components.json&quot;</span>
      .....
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u56FE\u8868&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icontubiao&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;components/chart/line/components.json&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;components/chart/bar/components.json&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  .....
<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u4E0A <em>src/components.json</em> \u6587\u4EF6\uFF0C\u5B9A\u4E49\u4E86\u4E8C\u4E2A\u7C7B\u522B\uFF1A\u5217\u8868\u3001\u56FE\u8868\uFF0C\u76F8\u540C\u7C7B\u522B\u7684\u7EC4\u4EF6\u5EFA\u8BAE\u653E\u5230\u540C\u4E00\u4E2Alist\u4E0B\u9762\uFF0C\u4E5F\u53EF\u4EE5\u53C2\u8003\u4EE5\u4E0A\u683C\u5F0F\u81EA\u5DF1\u6269\u5C55\u7C7B\u522B\u3002\u8FD9\u91CC\u7684\u5206\u7C7B\u76EE\u524D\u4EC5\u4F5C\u4E3A\u5F00\u53D1\u9636\u6BB5\u7EC4\u4EF6\u5217\u8868\u7684\u5448\u73B0\u3002</p></div><h2 id="\u5199\u5728\u6700\u540E" tabindex="-1"><a class="header-anchor" href="#\u5199\u5728\u6700\u540E" aria-hidden="true">#</a> \u5199\u5728\u6700\u540E</h2><p>\u6DFB\u52A0\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5305\u542B\u4E09\u4E2A\u8981\u70B9\uFF1A\u914D\u7F6E\u6587\u4EF6(config.js)\u3001\u89C6\u56FE\u6587\u4EF6(index.vue)\u3001\u5BFC\u51FA\u7EC4\u4EF6(components.json)\u3002 \u4E09\u8981\u70B9\u6587\u4EF6\u547D\u540D\u5EFA\u8BAE\u53C2\u8003\u4EE5\u4E0A\u89C4\u8303\uFF0C\u4E5F\u53EF\u4EE5\u6839\u636E\u7528\u6237\u4E60\u60EF\u547D\u540D\u3002</p><!--]-->`);
}
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/file.html.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
var file_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["ssrRender", _sfc_ssrRender$6]]);
var file_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": file_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$U = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u5206\u7EC4\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u5206\u7EC4\u4ECB\u7ECD" aria-hidden="true">#</a> \u5206\u7EC4\u4ECB\u7ECD</h1><p>\u5F53 <strong>\u5916\u89C2\u9762\u677F</strong> \u914D\u7F6E\u9879\u8FC7\u591A\u7684\u65F6\u5019\uFF0C\u63D0\u4F9B\u5BF9\u914D\u7F6E\u9879\u6309\u529F\u80FD\u5206\u7EC4\u7684\u80FD\u529B\uFF0C\u4E14\u5206\u7EC4\u4E0D\u9650\u4E2A\u6570\u3001\u4E0D\u9650\u5C42\u7EA7\u3002</p><p>\u5206\u7EC4\u5C5E\u6027 <em>group</em> \u63D0\u4F9B\u4EE5\u4E0B\u914D\u7F6E\u9879</p><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u542B\u4E49</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>name</td><td>\u7EC4\u540D\u79F0</td><td>string</td><td>true</td><td></td><td></td></tr><tr><td>expand</td><td>\u662F\u5426\u5C55\u5F00</td><td>boolean</td><td>false</td><td>false</td><td></td></tr><tr><td>depends</td><td>\u63A7\u5236\u7EC4\u7684\u663E\u9690</td><td>function</td><td>false</td><td></td><td>\u51FD\u6570\u8FD4\u56DE\u503C\u4E3A true \u663E\u793A\u8BE5\u5206\u7EC4\uFF0Cfalse \u9690\u85CF\u8BE5\u5206\u7EC4</td></tr></tbody></table><p>depends \u51FD\u6570\u53C2\u6570</p><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u542B\u4E49</th><th>\u7C7B\u578B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>rootOption</td><td>\u6837\u5F0F\u914D\u7F6E\u4FE1\u606F</td><td>object</td><td></td></tr><tr><td>rootDes</td><td>\u6837\u5F0F\u63CF\u8FF0\u4FE1\u606F</td><td>object</td><td></td></tr></tbody></table><p>\u{1F330} depends \u51FD\u6570\u5177\u4F53\u4F7F\u7528\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u7EC4\u540D\u79F0&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">depends</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> rootOption<span class="token punctuation">,</span> rootDes <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u8FD4\u56DE\u503C\u4E3Atrue\uFF1A\u663E\u793A\u8BE5\u5206\u7EC4  false\uFF1A\u9690\u85CF\u8BE5\u5206\u7EC4</span>
    <span class="token keyword">return</span> rootOption<span class="token punctuation">[</span>attribute<span class="token punctuation">]</span> <span class="token operator">&gt;</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u7B80\u5355\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u5206\u7EC4" aria-hidden="true">#</a> \u7B80\u5355\u5206\u7EC4</h2><p>\u{1F330} \u63D0\u4F9B\u57FA\u7840\u5C5E\u6027\u3001\u9AD8\u7EA7\u5C5E\u6027\u4E8C\u4E2A\u7EC4\uFF0C\u57FA\u7840\u5C5E\u6027\u7EC4\u9ED8\u8BA4\u5C55\u5F00\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span>
          <span class="token literal-property property">checkbox</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">advance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">getDataDes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">optionDes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u57FA\u7840\u5C5E\u6027&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">expand</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5206\u7EC4\u662F\u5426\u5C55\u5F00\uFF0C\u9ED8\u8BA4\u4E0D\u5C55\u5F00</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6570\u5B57&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">checkbox</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u590D\u9009\u6846&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;checkbox&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">advance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u9AD8\u7EA7\u5C5E\u6027&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6C34\u5E73\u4F4D\u7F6E&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;position&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;h&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><blockquote><p>\u5448\u73B0\u6548\u679C</p></blockquote><img${serverRenderer.ssrRenderAttr("src", _ctx.$withBase("/images/guide/group/baseGroup.png"))} alt="\u7B80\u5355\u5206\u7EC4"><h2 id="\u5D4C\u5957\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957\u5206\u7EC4" aria-hidden="true">#</a> \u5D4C\u5957\u5206\u7EC4</h2><p>\u{1F330} \u63D0\u4F9B <strong>\u57FA\u7840\u5C5E\u6027\u7EC4</strong> \u4E0B\u9762\u5D4C\u5957 <strong>\u5B50\u5206\u7EC4</strong>\uFF0C\u57FA\u7840\u5C5E\u6027\u7EC4\u3001\u5B50\u5206\u7EC4\u9ED8\u8BA4\u90FD\u5C55\u5F00\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span>
          <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">advance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">getDataDes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">optionDes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u57FA\u7840\u5C5E\u6027&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">expand</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5206\u7EC4\u662F\u5426\u5C55\u5F00\uFF0C\u9ED8\u8BA4\u4E0D\u5C55\u5F00</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6570\u5B57&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5B50\u5206\u7EC4&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">expand</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5206\u7EC4\u662F\u5426\u5C55\u5F00\uFF0C\u9ED8\u8BA4\u4E0D\u5C55\u5F00</span>
              <span class="token function-variable function">depends</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> rootOption<span class="token punctuation">,</span> rootDes <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u5F53\u7236\u7EA7number&gt;50\u7684\u65F6\u5019\u624D\u663E\u793A\u6B64\u5206\u7EC4</span>
                <span class="token keyword">return</span> rootOption<span class="token punctuation">.</span>base<span class="token punctuation">.</span>number <span class="token operator">&gt;</span> <span class="token number">50</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u989C\u8272\u9009\u62E9&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;color&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u56FE\u7247\u4E0A\u4F20&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">advance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u9AD8\u7EA7\u5C5E\u6027&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6C34\u5E73\u4F4D\u7F6E&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;position&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;h&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><blockquote><p>\u5448\u73B0\u6548\u679C</p></blockquote><img${serverRenderer.ssrRenderAttr("src", _ctx.$withBase("/images/guide/group/advanceGroup.png"))} alt="\u5D4C\u5957\u5206\u7EC4"><!--]-->`);
}
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/group.html.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
var group_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["ssrRender", _sfc_ssrRender$5]]);
var group_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": group_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$T = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><h1 id="\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> \u51C6\u5907\u5DE5\u4F5C</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p><strong>ANOV-UI</strong> \u662F\u4E00\u5957\u5F00\u6E90\u7EC4\u4EF6\u5E93\uFF0C\u81F4\u529B\u4E8E\u4E3A\u5F00\u53D1\u8005\u3001\u8BBE\u8BA1\u4EBA\u5458\u63D0\u4F9B\u4E30\u5BCC\u7684\u53EF\u89C6\u5316\u5927\u5C4F\u7EC4\u4EF6\uFF0C\u53EF\u5728\u57FA\u4E8E VUE \u7684\u9879\u76EE\u4E0A\u4F7F\u7528\u8BE5\u7EC4\u4EF6\u5E93\u3002</p><h2 id="\u517C\u5BB9\u6027" tabindex="-1"><a class="header-anchor" href="#\u517C\u5BB9\u6027" aria-hidden="true">#</a> \u517C\u5BB9\u6027</h2><p>\u8BE5\u5E73\u53F0\u5728\u8C37\u6B4C 80+\u3001\u706B\u72D0\u3001QQ\u3001360 \u6781\u901F\u3001Edge\u3001\u641C\u72D7\u6D4F\u89C8\u5668\u5747\u53EF\u8FD0\u884C\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u8C37\u6B4C\u6D4F\u89C8\u5668\uFF0C\u5176\u4F59\u6D4F\u89C8\u5668\u7531\u4E8E\u6D4F\u89C8\u5668\u672C\u8EAB API \u4E0D\u540C\uFF0C\u53EF\u80FD\u4F1A\u9020\u6210\u90E8\u5206\u529F\u80FD\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528\u3002</p><h2 id="\u5F00\u53D1\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> \u5F00\u53D1\u73AF\u5883\u642D\u5EFA</h2><p>\u9996\u5148\u60A8\u7684\u5F00\u53D1\u73AF\u5883\u9700\u8981 Node.js 10+\uFF0C\u63A8\u8350\u4F7F\u7528 npm \u7684\u65B9\u5F0F\u5B89\u88C5\uFF0C\u5B83\u80FD\u66F4\u597D\u5730\u548C webpack \u6253\u5305\u5DE5\u5177\u914D\u5408\u4F7F\u7528\u3002</p><ol><li>Fork \u7EC4\u4EF6\u5E93\u4EE3\u7801</li></ol><p>\u8BF7\u5148 Fork <a href="https://github.com/anov-team/anov-ui" target="_blank" rel="noopener noreferrer">ANOV-UI`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> \u4EE3\u7801\u5230\u81EA\u5DF1\u7684 github \u8D26\u53F7\u4E0B\uFF0C\u4E0D\u5EFA\u8BAE\u76F4\u63A5\u5728\u6211\u4EEC\u4ED3\u5E93\u4E0B\u5EFA\u7ACB\u5206\u652F\u3002</p><ol start="2"><li>\u514B\u9686\u4EE3\u7801\u5230\u672C\u5730\uFF0C\u5E76\u5B89\u88C5\u4F9D\u8D56</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/xxxxx/anov-ui.git
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li>\u751F\u6210\u5165\u53E3\u6587\u4EF6<em>src/index.js</em></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run build:file
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li>\u542F\u52A8\u9879\u76EE</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u7EC4\u4EF6\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5F00\u53D1" aria-hidden="true">#</a> \u7EC4\u4EF6\u5F00\u53D1</h2><p>\u5F53\u9879\u76EE\u542F\u52A8\u4EE5\u540E\uFF0C\u4F60\u5C31\u8FDB\u5165\u4E86\u6B63\u5F0F\u7684\u7EC4\u4EF6\u5F00\u53D1\u6D41\u7A0B\u4E86\uFF0C\u60A8\u9700\u8981\u82B1\u4E00\u4E9B\u65F6\u95F4\u719F\u6089\u7EC4\u4EF6\u5E93\u7684`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/guide/dirtree.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u76EE\u5F55\u7ED3\u6784`);
      } else {
        return [
          vue.createTextVNode("\u76EE\u5F55\u7ED3\u6784")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`\u3001`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/guide/file.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u7EC4\u4EF6\u8981\u7D20`);
      } else {
        return [
          vue.createTextVNode("\u7EC4\u4EF6\u8981\u7D20")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`\uFF0C\u4EE5\u53CA`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/guide/type.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u7C7B\u578B\u4ECB\u7ECD`);
      } else {
        return [
          vue.createTextVNode("\u7C7B\u578B\u4ECB\u7ECD")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`\u3002</p><!--]-->`);
}
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/index.html.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
var index_html$5 = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["ssrRender", _sfc_ssrRender$4]]);
var index_html$6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$S = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_BR = vue.resolveComponent("BR");
  _push(`<!--[--><h1 id="\u5F00\u53D1\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u89C4\u8303" aria-hidden="true">#</a> \u5F00\u53D1\u89C4\u8303</h1><h2 id="\u547D\u540D\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u89C4\u5219" aria-hidden="true">#</a> \u547D\u540D\u89C4\u5219</h2><p>\u7EC4\u4EF6\u540D\u79F0\u89C4\u5219\uFF1A<em>An</em>+<em>\u7279\u6027+\u7EC4\u4EF6\u7C7B\u578B</em></p><p>\u5927\u9A7C\u5CF0\u5F0F\u547D\u540D\u6CD5\uFF08upper camel case\uFF09\uFF0C\u6BCF\u4E00\u4E2A\u5355\u5B57\u7684\u9996\u5B57\u6BCD\u90FD\u91C7\u7528\u5927\u5199\u5B57\u6BCD\u3002</p><p>\u4F8B\u5982\uFF1A<em>AnSingleBar</em>(\u5355\u67F1\u56FE)\u3001<em>AnStackBar</em>(\u5806\u79EF\u67F1\u56FE)\u3001<em>AnGradualMutiBar</em>(\u6E10\u53D8\u591A\u67F1\u56FE)\u3001<em>AnBaseTable</em>(\u57FA\u7840\u8868\u683C)\u3001<em>AnTopTable</em>(\u6392\u540D\u8868\u683C)\u7B49\u3002</p><h2 id="\u6570\u636E\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u683C\u5F0F" aria-hidden="true">#</a> \u6570\u636E\u683C\u5F0F</h2><h4 id="\u5750\u6807\u8F74\u56FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u5750\u6807\u8F74\u56FE\u8868" aria-hidden="true">#</a> \u5750\u6807\u8F74\u56FE\u8868</h4><p>\u5305\u542B\u7684\u7EC4\u4EF6\u7C7B\u578B\u6709\uFF1A\u6298\u7EBF\u56FE\u3001\u67F1\u56FE\u3001\u8C61\u5F62\u56FE\u3001\u6563\u70B9\u56FE\u7B49\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u661F\u671F\u4E00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token string">&quot;400&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;s&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7CFB\u5217\u4E00&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u661F\u671F\u4E8C&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token string">&quot;180&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;s&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7CFB\u5217\u4E00&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u661F\u671F\u4E09&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token string">&quot;200&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;s&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7CFB\u5217\u4E00&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u661F\u671F\u56DB&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;s&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7CFB\u5217\u4E00&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>x</td><td>x \u8F74\u7684\u503C\uFF0C\u5373\u7EC4\u4EF6\u7684\u7C7B\u76EE\u503C</td></tr><tr><td>y</td><td>y \u8F74\u7684\u503C\uFF0C\u5373\u6BCF\u4E2A\u67F1\u5B50(\u6298\u7EBF\u3001\u70B9)\u7684\u5177\u4F53\u503C</td></tr><tr><td>z</td><td>\uFF08\u53EF\u9009\uFF09z \u8F74\u7684\u503C\uFF0C\u6DF7\u5408\u56FE\u8868\u53EF\u4EE5\u4F7F\u7528\u8BE5\u8F74</td></tr><tr><td>s</td><td>\u5BF9\u5E94\u7CFB\u5217\u547D\u540D</td></tr></tbody></table><h4 id="\u975E\u5750\u6807\u8F74\u56FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u975E\u5750\u6807\u8F74\u56FE\u8868" aria-hidden="true">#</a> \u975E\u5750\u6807\u8F74\u56FE\u8868</h4><p>\u5305\u542B\u7684\u7EC4\u4EF6\u7C7B\u578B\u6709\uFF1A\u997C\u56FE\u3001\u65E5\u5386\u56FE\u3001\u77E9\u5F62\u5F62\u3001\u6C34\u7403\u56FE\u3001\u4EEA\u8868\u76D8\u3001\u8BCD\u4E91\u3001\u96F7\u8FBE\u56FE\u3001\u6C14\u6CE1\u56FE\u3001\u6811\u5F62\u56FE\u7B49\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u6D6A\u5FAE\u535A&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">25</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5FAE\u4FE1\u516C\u4F17\u53F7&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">38</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u534E\u7F51&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">43</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4EBA\u6C11\u7F51&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">65</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u6709\u4E9B\u7279\u6B8A\u60C5\u51B5\uFF0C\u53EF\u4EE5\u7075\u6D3B\u6269\u5C55\u6570\u636E\u5C5E\u6027\uFF0C\u6BD4\u5982\u96F7\u8FBE\u56FE\u6DFB\u52A0\u5C5E\u6027 max\u3001s\uFF0C\u6811\u5F62\u56FE\u6DFB\u52A0\u5C5E\u6027 children\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u9500\u552E&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">4300</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">6500</span><span class="token punctuation">,</span>
    <span class="token property">&quot;s&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u9884\u7B97\u5206\u914D&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u9500\u552E&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">4300</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">6500</span><span class="token punctuation">,</span>
    <span class="token property">&quot;s&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5B9E\u9645\u5F00\u9500&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a-a&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a-a-a&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">353</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a-b&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a-b-a&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">17010</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>\u7EC4\u4EF6\u7684\u7C7B\u76EE\u503C</td></tr><tr><td>value</td><td>\u7EC4\u4EF6\u5177\u4F53\u6570\u503C</td></tr><tr><td>attr</td><td>\u6269\u5C55\u5C5E\u6027\uFF08\u53EF\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u6269\u5C55\u591A\u4E2A\u5C5E\u6027\uFF09</td></tr></tbody></table><h4 id="\u5176\u5B83\u7C7B\u578B\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83\u7C7B\u578B\u7EC4\u4EF6" aria-hidden="true">#</a> \u5176\u5B83\u7C7B\u578B\u7EC4\u4EF6</h4><p>\u6570\u636E\u7C7B\u578B\u53EF\u4EE5\u662F\u5BF9\u8C61\u6216\u6570\u5B57\uFF0C\u5B57\u6BB5\u547D\u540D\u5C3D\u91CF\u91C7\u7528 name\u3001value \u7684\u5F62\u5F0F\uFF0C\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u53BB\u6269\u5C55\u3001\u4FEE\u6539\u5C5E\u6027\u3002</p><h2 id="\u5C5E\u6027-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027-\u65B9\u6CD5" aria-hidden="true">#</a> \u5C5E\u6027/\u65B9\u6CD5</h2><p>\u7EC4\u4EF6\u89C6\u56FE\u6587\u4EF6\u4E2D\uFF08\u7EC4\u4EF6\u6587\u4EF6\u5939\u4E0B\u7684 <em>index.vue</em> \u6587\u4EF6\uFF09\u5305\u542B\u4E00\u4E9B\u901A\u7528\u7684\u5C5E\u6027\u3001\u65B9\u6CD5\uFF0C\u5177\u4F53\u5982\u4E0B\uFF1A</p><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><h4 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h4><ul><li>\u7C7B\u578B\uFF1Aany</li><li>\u9ED8\u8BA4\u503C\uFF1A<em>undefined</em></li><li>\u8BE6\u7EC6\uFF1Adata \u53EF\u4EE5\u662F\u6570\u5B57\u3001\u5B57\u7B26\u4E32\u3001\u6570\u7EC4\u6216\u5BF9\u8C61\u4EFB\u610F\u6570\u636E\u7C7B\u578B\uFF0C\u7528\u4E8E\u63A5\u6536\u4F20\u9012\u7ED9\u7EC4\u4EF6\u7684\u6570\u636E\u3002</li></ul><h4 id="option" tabindex="-1"><a class="header-anchor" href="#option" aria-hidden="true">#</a> option</h4><ul><li>\u7C7B\u578B\uFF1AObject</li><li>\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u914D\u7F6E\u4FE1\u606F\uFF0C\u901A\u8FC7\u914D\u7F6E\u4FE1\u606F\u6765\u5448\u73B0\u7EC4\u4EF6\u6548\u679C\uFF0C\u5BF9\u5E94 config.js \u4E2D\u7684 option\u3002\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u6839\u636E\u9700\u8981 watch \u914D\u7F6E\u4FE1\u606F\u4E2D\u67D0\u4E9B\u5C5E\u6027\u7684\u53D8\u5316\uFF0C\u52A8\u6001\u6E32\u67D3\u7EC4\u4EF6\u3002</li></ul><h4 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme</h4><ul><li>\u7C7B\u578B\uFF1AObject</li><li>\u9ED8\u8BA4\u503C\uFF1A</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u79D1\u6280\u84DD&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#115FEA&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&quot;#05255F&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pageBackground</span><span class="token operator">:</span> <span class="token string">&quot;#03091A&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;#F0F0F0&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">groups</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#115FEA&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#10EBE3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#10A9EB&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#EB9C10&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#2E10EB&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#9B10EB&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u8BE6\u7EC6\uFF1A\u4E3B\u9898\u63CF\u8FF0\uFF0C\u7EC4\u4EF6\u5F00\u53D1\u65F6\u5C3D\u91CF\u4F7F\u7528\u4E3B\u9898\u63CF\u8FF0\u4E2D\u7684\u8272\u503C\u3002\u5F53\u4E3B\u9898\u66F4\u6362\u65F6\uFF0C\u4F1A\u89E6\u53D1 <em>themeChange</em> \u51FD\u6570\u3002</li></ul><h4 id="width" tabindex="-1"><a class="header-anchor" href="#width" aria-hidden="true">#</a> width</h4><ul><li>\u7C7B\u578B\uFF1ANumber</li><li>\u9ED8\u8BA4\u503C\uFF1A<em>420</em></li><li>\u8BE6\u7EC6\uFF1A\u89C6\u56FE\u5BB9\u5668\u7684\u5BBD\u5EA6\u3002</li></ul><h4 id="height" tabindex="-1"><a class="header-anchor" href="#height" aria-hidden="true">#</a> height</h4><ul><li>\u7C7B\u578B\uFF1ANumber</li><li>\u9ED8\u8BA4\u503C\uFF1A<em>236</em></li><li>\u8BE6\u7EC6\uFF1A\u89C6\u56FE\u5BB9\u5668\u7684\u9AD8\u5EA6\u3002</li></ul><h4 id="autoinit" tabindex="-1"><a class="header-anchor" href="#autoinit" aria-hidden="true">#</a> autoInit</h4><ul><li>\u7C7B\u578B\uFF1ABoolean</li><li>\u9ED8\u8BA4\u503C\uFF1A<em>true</em></li><li>\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u9ED8\u8BA4\u6267\u884C <em>init</em> \u51FD\u6570\u3002`);
  _push(serverRenderer.ssrRenderComponent(_component_BR, null, null, _parent));
  _push(`<em>true</em>\uFF1A\u7EC4\u4EF6\u9ED8\u8BA4\u6267\u884C <em>init</em> \u51FD\u6570\u3002`);
  _push(serverRenderer.ssrRenderComponent(_component_BR, null, null, _parent));
  _push(`<em>false</em>\uFF1A\u7EC4\u4EF6\u9ED8\u8BA4\u4E0D\u6267\u884C <em>init</em> \u51FD\u6570\u3002\u4E00\u822C\u9700\u8981\u63A7\u5236\u6574\u4E2A\u5927\u5C4F\u52A8\u753B\u7EBF\uFF0C\u624D\u8003\u8651\u8BBE\u7F6E\u4E3A <em>false</em>\uFF0C\u7531\u7EC4\u4EF6\u4F7F\u7528\u4EBA\u5458\u624B\u52A8\u8C03\u7528 <em>init</em> \u51FD\u6570\u3002</li></ul><h4 id="esoption" tabindex="-1"><a class="header-anchor" href="#esoption" aria-hidden="true">#</a> esOption</h4><ul><li>\u7C7B\u578B\uFF1AObject</li><li>\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u6269\u5C55\u914D\u7F6E\u4FE1\u606F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6B64\u5C5E\u6027\u4F20\u9012\u7B2C\u4E09\u65B9\u63D2\u4EF6\u652F\u6301option\u4E0D\u5305\u542B\u7684\u5C5E\u6027\u3002\u3010\u9884\u7559\u5C5E\u6027\u3011</li></ul><h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3><h4 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h4><ul><li>\u7C7B\u578B\uFF1AFunction</li><li>\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u521D\u59CB\u5316\u65B9\u6CD5\uFF0C\u7EC4\u4EF6\u5F00\u53D1\u65F6\u5728\u89C6\u56FE\u6587\u4EF6\u4E2D<strong>\u4E0D\u9700\u8981\u624B\u52A8\u8C03\u7528\u6B64\u65B9\u6CD5</strong>\u3002</li></ul><h4 id="reload" tabindex="-1"><a class="header-anchor" href="#reload" aria-hidden="true">#</a> reload</h4><ul><li>\u7C7B\u578B\uFF1AFunction</li><li>\u8BE6\u7EC6\uFF1A\u91CD\u65B0\u52A0\u8F7D\u7EC4\u4EF6\uFF0C\u4F1A\u6267\u884C\u52A8\u753B\u7EBF\u3002</li></ul><h4 id="refresh" tabindex="-1"><a class="header-anchor" href="#refresh" aria-hidden="true">#</a> refresh</h4><ul><li>\u7C7B\u578B\uFF1AFunction</li><li>\u8BE6\u7EC6\uFF1A\u5237\u65B0\u7EC4\u4EF6\uFF0C\u4FDD\u7559\u4E4B\u524D\u7684\u7F13\u5B58\u5185\u5BB9\uFF0C\u7EC4\u4EF6\u4E4B\u524D\u7684\u914D\u7F6E\u4E0D\u4F1A\u6E05\u9664\uFF0C\u6CA1\u52A0\u8F7D\u4E0A\u6765\u7684\u914D\u7F6E\u7EE7\u7EED\u52A0\u8F7D\u3002<br>\u4E00\u822C\u7528\u4E8E\u4FEE\u6539\u6570\u636E\uFF0C\u4E0D\u4F1A\u6267\u884C\u52A8\u753B\u7EBF</li></ul><h4 id="resize" tabindex="-1"><a class="header-anchor" href="#resize" aria-hidden="true">#</a> resize</h4><ul><li>\u7C7B\u578B\uFF1AFunction</li><li>\u8BE6\u7EC6\uFF1A\u5BB9\u5668\u5927\u5C0F\u6539\u53D8\uFF0C\u7EC4\u4EF6\u6267\u884C\u7684\u64CD\u4F5C\uFF0C\u4E00\u822C\u7528\u4E8E\u56FE\u8868\u7C7B\u7EC4\u4EF6\u3002</li></ul><h4 id="reverse" tabindex="-1"><a class="header-anchor" href="#reverse" aria-hidden="true">#</a> reverse</h4><ul><li>\u7C7B\u578B\uFF1AFunction</li><li>\u8BE6\u7EC6\uFF1A\u63A7\u5236\u52A8\u753B\u53CD\u5411\u64AD\u653E\u3002\u3010\u9884\u7559\u51FD\u6570\u3011</li></ul><h4 id="themechange" tabindex="-1"><a class="header-anchor" href="#themechange" aria-hidden="true">#</a> themeChange</h4><ul><li>\u7C7B\u578B\uFF1AFunction</li><li>\u8BE6\u7EC6\uFF1A\u4E3B\u9898\u6539\u53D8\uFF0C\u7EC4\u4EF6\u6267\u884C\u7684\u51FD\u6570\u3002</li></ul><h4 id="dispatch" tabindex="-1"><a class="header-anchor" href="#dispatch" aria-hidden="true">#</a> dispatch</h4><ul><li>\u7C7B\u578B\uFF1AFunction</li><li>\u53C2\u6570\uFF1A<br> @param {String} eventName \u4E8B\u4EF6\u540D\u79F0<br> @param {*} params \u53C2\u6570</li><li>\u8BE6\u7EC6\uFF1A\u89E6\u53D1\u7EC4\u4EF6\u4EA4\u4E92\u884C\u4E3A\uFF0C\u901A\u8FC7\u6B64\u51FD\u6570\u7EDF\u4E00\u6D3E\u53D1\u7EC4\u4EF6\u4EA4\u4E92\u884C\u4E3A\u3002</li></ul><h4 id="off" tabindex="-1"><a class="header-anchor" href="#off" aria-hidden="true">#</a> off</h4><ul><li>\u7C7B\u578B\uFF1AFunction</li><li>\u53C2\u6570\uFF1A<br> @param {String} eventName \u4E8B\u4EF6\u540D\u79F0</li><li>\u8BE6\u7EC6\uFF1A\u89E3\u7ED1\u7EC4\u4EF6\u4EA4\u4E92\u884C\u4E3A\u3002</li></ul><h4 id="setconfigoption" tabindex="-1"><a class="header-anchor" href="#setconfigoption" aria-hidden="true">#</a> setConfigOption</h4><ul><li>\u7C7B\u578B\uFF1AFunction</li><li>\u53C2\u6570\uFF1A<br> @param {String} key \u952E\u540D\u79F0\uFF0C\u591A\u7EA7\u5D4C\u5957\u5BF9\u8C61\u5C5E\u6027\u503C\u7684\u4FEE\u6539\uFF0C\u4F7F\u7528\u70B9\u62FC\u63A5\u7684\u5B57\u7B26\u4E32\uFF0Ceg\uFF1A<em>obj1.obj2.name</em><br> @param {*} value \u503C</li><li>\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u89C6\u56FE\u6587\u4EF6\u4E2D\u4FEE\u6539\u914D\u7F6E\u4FE1\u606F(<em>option</em>)\uFF0C\u7EC4\u4EF6\u4E2D\u4E00\u822C\u90FD\u4E0D\u9700\u8981\u4FEE\u6539\u914D\u7F6E\u4FE1\u606F\u3002\u3010\u9884\u7559\u51FD\u6570\u3011</li></ul><h4 id="destroy" tabindex="-1"><a class="header-anchor" href="#destroy" aria-hidden="true">#</a> destroy</h4><ul><li>\u7C7B\u578B\uFF1AFunction</li><li>\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u9500\u6BC1\u4E4B\u524D\u8C03\u7528\u3002\uFF08\u4E5F\u53EF\u4EE5\u4F7F\u7528 VUE \u672C\u8EAB\u7684\u94A9\u5B50\u51FD\u6570\uFF09</li></ul><!--]-->`);
}
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/standard.html.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
var standard_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["ssrRender", _sfc_ssrRender$3]]);
var standard_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": standard_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$R = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u4E3B\u9898\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898\u5E94\u7528" aria-hidden="true">#</a> \u4E3B\u9898\u5E94\u7528</h1><h2 id="\u4E3B\u9898\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u4E3B\u9898\u6570\u636E\u7ED3\u6784</h2><p>\u7EC4\u4EF6\u5185\u7F6E\u591A\u5957\u4E3B\u9898\u98CE\u683C\uFF0C\u5982\u79D1\u6280\u84DD\u3001\u8D5B\u535A\u670B\u514B\u3001\u9ED1\u91D1\u3001\u9ED1\u51B0\u3001\u9752\u6A59\u7B49\uFF0C\u7528\u6237\u4E5F\u53EF\u4EE5\u6269\u5C55\u4E3B\u9898\u98CE\u683C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u79D1\u6280\u84DD&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#115FEA&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&quot;#05255F&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pageBackground</span><span class="token operator">:</span> <span class="token string">&quot;#03091A&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;#F0F0F0&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">groups</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#115FEA&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#10EBE3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#10A9EB&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#EB9C10&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#2E10EB&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#9B10EB&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u5355\u8272\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u5355\u8272\u9009\u62E9\u5668" aria-hidden="true">#</a> \u5355\u8272\u9009\u62E9\u5668</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u4E3B\u9898\u914D\u7F6E\u4E2D\u7684 <em>key</em> \u53EF\u4EE5\u662F\u4E3B\u9898\u6570\u636E\u7ED3\u6784\u4E2D\u7684\u4EFB\u4F55\u5C5E\u6027\u540D\uFF0C\u5982\uFF1Acolor\u3001background\u3001text \u7B49\uFF0C\u4E5F\u53EF\u4EE5\u53D6 groups \u6570\u7EC4\u4E2D\u7684\u67D0\u4E2A\u503C\uFF0C\u5982\uFF1A{key:&#39;groups.0&#39;}(groups \u4E2D\u7D22\u5F15\u4E3A 0 \u7684\u9879)\u3001{key:&#39;groups.3&#39;}(groups \u4E2D\u7D22\u5F15\u4E3A 3 \u7684\u9879)\u3002</li><li>\u4E3B\u9898\u914D\u7F6E\u4E2D\u7684\u900F\u660E\u5EA6 <em>opacity</em> \u53EF\u4EE5\u8BBE\u7F6E 0-1 \u7684\u503C\uFF0C\u9ED8\u8BA4\u503C\u4E3A 1\u3002</li></ul><h2 id="\u80CC\u666F\u8272\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F\u8272\u9009\u62E9\u5668" aria-hidden="true">#</a> \u80CC\u666F\u8272\u9009\u62E9\u5668</h2><ol><li>\u5355\u8272\u914D\u7F6E\u65B9\u6848</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;bgcolor&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u4E3B\u9898\u914D\u7F6E\u4E2D\u7684 <em>key</em> \u53EF\u4EE5\u662F\u4E3B\u9898\u6570\u636E\u7ED3\u6784\u4E2D\u7684\u4EFB\u4F55\u5C5E\u6027\u540D\uFF0C\u5982\uFF1Acolor\u3001background\u3001text \u7B49\uFF0C\u4E5F\u53EF\u4EE5\u53D6 groups \u6570\u7EC4\u4E2D\u7684\u67D0\u4E2A\u503C\uFF0C\u5982\uFF1A{key:&#39;groups.0&#39;}(groups \u4E2D\u7D22\u5F15\u4E3A 0 \u7684\u9879)\u3001{key:&#39;groups.3&#39;}(groups \u4E2D\u7D22\u5F15\u4E3A 3 \u7684\u9879)\u3002</li><li>\u4E3B\u9898\u914D\u7F6E\u4E2D\u7684\u900F\u660E\u5EA6 <em>opacity</em> \u53EF\u4EE5\u8BBE\u7F6E 0-1 \u7684\u503C\uFF0C\u9ED8\u8BA4\u503C\u4E3A 1\u3002</li></ul><ol start="2"><li>\u6E10\u53D8\u8272\u914D\u7F6E\u65B9\u6848</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bgcolor&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">degree</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token literal-property property">points</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;color&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;groups.3&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token operator">...</span><span class="token punctuation">.</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>\u4E3B\u9898\u914D\u7F6E\u4E2D\u7684\u6E10\u53D8\u65B9\u5F0F <em>type</em> \u53EF\u4EE5\u8BBE\u7F6E linear\uFF1A\u7EBF\u6027\u6E10\u53D8(\u9ED8\u8BA4) radial\uFF1A\u5F84\u5411\u6E10\u53D8\u3002</li><li>\u4E3B\u9898\u914D\u7F6E\u4E2D\u7684\u65CB\u8F6C\u89D2\u5EA6 <em>degree</em> \u53EF\u4EE5\u8BBE\u7F6E 0-360 \u89D2\u5EA6\u7684\u503C\uFF0C\u9ED8\u8BA4\u503C\u4E3A 0\u3002</li><li>\u4E3B\u9898\u914D\u7F6E\u4E2D\u7684\u989C\u8272\u70B9 <em>points</em> \u53EF\u4EE5\u8BBE\u7F6E\u4E00\u7EC4\u989C\u8272\u503C\uFF0C\u5177\u4F53\u7EC4\u4E2D\u7684\u503C\u540C\u5355\u8272\u4E3B\u9898\u914D\u7F6E\u65B9\u6848\u4E2D\u7684 <a href="#%E8%83%8C%E6%99%AF%E8%89%B2%E9%80%89%E6%8B%A9%E5%99%A8">theme</a> \u7ED3\u6784\u3002</li></ul><h2 id="\u5199\u5728\u6700\u540E" tabindex="-1"><a class="header-anchor" href="#\u5199\u5728\u6700\u540E" aria-hidden="true">#</a> \u5199\u5728\u6700\u540E</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u67D0\u4E2A\u5C5E\u6027\u914D\u7F6E\u4E86\u4E3B\u9898\u63CF\u8FF0\uFF0C\u5C5E\u6027\u503C\u53EF\u4EE5\u4E0D\u8BBE\u7F6E\u989C\u8272\u503C(\u503C\u4E3A null \u6216\u201C\u201D)\uFF0C\u7A0B\u5E8F\u4F1A\u6839\u636E\u914D\u7F6E\u7684\u4E3B\u9898\u63CF\u8FF0\u751F\u6210\u9ED8\u8BA4\u503C\u3002</p></div><!--]-->`);
}
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/theme.html.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
var theme_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["ssrRender", _sfc_ssrRender$2]]);
var theme_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": theme_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$Q = {
  __ssrInlineRender: true,
  setup(__props) {
    let baseFiles = [
      { name: "name", disName: "\u540D\u79F0", type: "string", required: false, defaultValue: "", remark: "" },
      { name: "type", disName: "\u7C7B\u578B", type: "string", required: true, defaultValue: "", remark: "" },
      { name: '<a href="#\u5C5E\u6027\u8BF4\u660E">depends</a>', disName: "\u4F9D\u8D56", type: "object | function", required: false, defaultValue: "", remark: "\u63A7\u5236\u5F53\u524D\u914D\u7F6E\u9879\u7684\u663E\u9690" }
    ];
    let numFiles = [
      { name: "max", disName: "\u6700\u5927\u503C", type: "number", required: false, defaultValue: "", remark: "" },
      { name: "min", disName: "\u6700\u5C0F\u503C", type: "number", required: false, defaultValue: "", remark: "" },
      { name: "step", disName: "\u6B65\u957F", type: "number", required: false, defaultValue: "", remark: "" },
      { name: "unit", disName: "\u540E\u7F00", type: "string", required: false, defaultValue: "", remark: "" }
    ];
    let imgBaseUrl = "/images/guide/type/";
    let baseType = {
      number: {
        description: "\u6570\u503C\u8F93\u5165\u6846\uFF0C\u53EF\u4EE5\u5B9A\u5236\u6B65\u957F\u3001\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C\u3001\u540E\u7F00\u3002",
        files: [
          ...baseFiles,
          ...numFiles,
          { name: "eventMode", disName: "\u6570\u636E\u66F4\u65B0\u6A21\u5F0F", type: "string", required: false, defaultValue: "change", remark: "\u53EF\u9009\uFF1A change | blur" }
        ],
        value: "",
        img: `${imgBaseUrl}number.png`,
        code: {
          name: "\u6570\u5B57\u6846",
          type: "number",
          unit: "px"
        }
      },
      input: {
        description: "\u6587\u672C\u8F93\u5165\u6846\uFF0C\u652F\u6301\u5355\u884C\u3001\u591A\u884C\u6A21\u5F0F\u3002",
        files: [
          ...baseFiles,
          { name: "rows", disName: "\u663E\u793A\u884C\u6570", type: "number", required: false, defaultValue: "1", remark: "" },
          { name: "eventMode", disName: "\u6570\u636E\u66F4\u65B0\u6A21\u5F0F", type: "string", required: false, defaultValue: "change", remark: "\u53EF\u9009\uFF1A change | blur" }
        ],
        value: "",
        img: `${imgBaseUrl}input.png`,
        code: {
          name: "\u8F93\u5165\u6846",
          type: "input",
          rows: 3
        }
      },
      select: {
        description: "\u9009\u62E9\u5668\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u3002",
        files: [
          ...baseFiles,
          { name: "options", disName: "\u9009\u9879\u5217\u8868", type: "Array", required: true, defaultValue: "", remark: "\u6BCF\u4E00\u9879\u90FD\u5305\u542Btext\u548Cvalue\uFF0Ctext\u8868\u793A\u663E\u793A\u6587\u672C\uFF0Cvalue\u8868\u793A\u6587\u672C\u7684\u503C\u3002" }
        ],
        value: "",
        img: `${imgBaseUrl}select.png`,
        code: {
          name: "\u4E0B\u62C9\u6846",
          type: "select",
          "options": [
            {
              "value": 1,
              "text": "\u9009\u9879\u4E00"
            },
            {
              "value": 2,
              "text": "\u9009\u9879\u4E8C"
            }
          ]
        }
      },
      slider: {
        description: "\u6ED1\u52A8\u6761\uFF0C\u53EF\u4EE5\u5B9A\u5236\u6B65\u957F\u3001\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C\u3001\u540E\u7F00\u3002",
        files: [
          ...baseFiles,
          ...numFiles
        ],
        value: "",
        img: `${imgBaseUrl}slider.png`,
        code: {
          name: "\u6ED1\u52A8\u8F93\u5165\u6761",
          type: "slider",
          min: 0,
          max: 50,
          step: 1,
          unit: "%"
        }
      },
      switch1: {
        description: "\u5F00\u5173\uFF0C\u652F\u6301\u662F\u5426\u5C55\u793A\u6587\u5B57\u72B6\u6001\u3002",
        files: [
          ...baseFiles
        ],
        value: "",
        img: `${imgBaseUrl}switch.png`,
        code: {
          name: "\u5F00\u5173",
          type: "switch"
        }
      },
      align: {
        description: "\u53EF\u4EE5\u63A7\u5236\u5143\u7D20\u6C34\u5E73\u6216\u5782\u76F4\u4F4D\u7F6E\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002",
        files: [
          ...baseFiles,
          { name: "mode", disName: "\u6A21\u5F0F", type: "string", required: false, defaultValue: "h", remark: "h\uFF1A\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F\uFF0Cv\uFF1A\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F\u3002" }
        ],
        value: "left",
        img: `${imgBaseUrl}align.png`,
        code: {
          name: "\u5143\u7D20\u4F4D\u7F6E",
          type: "align",
          mode: "h"
        }
      },
      position: {
        description: "\u53EF\u4EE5\u63A7\u5236\u5143\u7D20\u7684\u6C34\u5E73\u3001\u5782\u76F4\u4F4D\u7F6E(\u4E3B\u8981\u7528\u4E8E\u63A7\u5236\u56FE\u8868\u56FE\u4F8B\u7684\u4F4D\u7F6E)\u3002",
        files: [
          ...baseFiles
        ],
        value: {
          left: "center",
          top: "top"
        },
        img: `${imgBaseUrl}position.png`,
        code: {
          name: "\u5143\u7D20\u4F4D\u7F6E",
          type: "position"
        }
      },
      color: {
        description: "\u989C\u8272\u9009\u62E9\u5668\uFF0C\u652F\u6301\u4E3B\u9898\u5B9A\u4E49\u3002",
        files: [
          ...baseFiles,
          {
            name: "theme",
            disName: "\u4E3B\u9898\u914D\u7F6E",
            type: "object",
            required: false,
            defaultValue: "",
            remark: "\u6839\u636E theme \u914D\u7F6E\uFF0C\u521D\u59CB\u5316\u989C\u8272\u9ED8\u8BA4\u503C\u3002",
            children: {
              description: 'theme\u5BF9\u8C61\u914D\u7F6E\uFF0C\u5177\u4F53\u53C2\u8003<a style="font-weight:bold;" href="/anov-ui-doc/guide/theme.html#\u4E3B\u9898\u6570\u636E\u7ED3\u6784"> \u4E3B\u9898\u5E94\u7528 </a>\u6A21\u5757',
              files: [
                { name: "key", disName: "\u4E3B\u9898\u5B57\u6BB5", type: "string", required: true, defaultValue: "", remark: "\u4E3B\u9898\u5B57\u6BB5\u3002" },
                { name: "opacity", disName: "\u900F\u660E\u5EA6", type: "number", required: false, defaultValue: "1", remark: "\u989C\u8272\u900F\u660E\u5EA6\uFF0C0-1\u7684\u503C\u3002" }
              ]
            }
          }
        ],
        value: "",
        img: `${imgBaseUrl}color.png`,
        code: {
          name: "\u989C\u8272\u9009\u62E9",
          type: "color",
          theme: {
            key: "color",
            opacity: 1
          }
        }
      },
      bgcolor: {
        description: "\u989C\u8272\u9009\u62E9\u5668\uFF0C\u652F\u6301\u900F\u660E\u3001\u7EAF\u8272\u3001\u6E10\u53D8\u8272\u3001\u4E3B\u9898\u5B9A\u4E49\u3002",
        files: [
          ...baseFiles,
          {
            name: "theme",
            disName: "\u4E3B\u9898\u914D\u7F6E",
            type: "object",
            required: false,
            defaultValue: "",
            remark: "\u6839\u636E theme \u914D\u7F6E\uFF0C\u521D\u59CB\u5316\u989C\u8272\u9ED8\u8BA4\u503C\u3002",
            children: {
              description: 'theme\u5BF9\u8C61\u914D\u7F6E\uFF0C\u5177\u4F53\u53C2\u8003<a style="font-weight:bold;" href="/anov-ui-doc/guide/theme.html#\u4E3B\u9898\u6570\u636E\u7ED3\u6784"> \u4E3B\u9898\u5E94\u7528 </a>\u6A21\u5757',
              files: [
                { name: "type", disName: "\u7C7B\u578B", type: "string", required: false, defaultValue: "linear", remark: "linear\uFF1A\u7EBF\u6027\u6E10\u53D8\uFF0Cradial\uFF1A\u5F84\u5411\u6E10\u53D8" },
                { name: "degree", disName: "\u65CB\u8F6C\u89D2\u5EA6", type: "number", required: false, defaultValue: "0", remark: "\u65CB\u8F6C\u89D2\u5EA6" },
                { name: "points", disName: "\u4E00\u7EC4\u70B9\u96C6\u5408", type: "Array", required: false, defaultValue: "", remark: "\u6BCF\u4E00\u9879\u90FD\u5305\u542Bkey\u548Copacity\uFF0Ckey\u8868\u793A\u4E3B\u9898\u5B57\u6BB5\uFF0Copacity\u8868\u793A\u900F\u660E\u5EA6\u3002" }
              ]
            }
          }
        ],
        value: {
          style: "linear-gradient(90deg,rgba(17,95,234,0.3) 0%,rgba(17,95,234,0.1) 100%"
        },
        img: `${imgBaseUrl}bgcolor.png`,
        code: {
          name: "\u989C\u8272\u9009\u62E9",
          type: "bgcolor",
          theme: {
            type: "linear",
            degree: 90,
            points: [
              {
                key: "color",
                opacity: 0.3
              },
              {
                key: "color",
                opacity: 0.1
              }
            ]
          }
        }
      },
      radioGroup: {
        description: "\u4E00\u7EC4\u5355\u9009\u6846\u3002",
        files: [
          ...baseFiles,
          { name: "options", disName: "\u9009\u9879\u5217\u8868", type: "Array", required: true, defaultValue: "", remark: "\u6BCF\u4E00\u9879\u90FD\u5305\u542Btext\u548Cvalue\uFF0Ctext\u8868\u793A\u663E\u793A\u6587\u672C\uFF0Cvalue\u8868\u793A\u6587\u672C\u7684\u503C\u3002" }
        ],
        value: "",
        img: `${imgBaseUrl}radioGroup.png`,
        code: {
          name: "\u5355\u9009\u9879",
          type: "radioGroup",
          options: [
            {
              "value": 1,
              "text": "\u9009\u9879\u4E00"
            },
            {
              "value": 2,
              "text": "\u9009\u9879\u4E8C"
            }
          ]
        }
      },
      checkboxGroup: {
        description: "\u4E00\u7EC4\u590D\u9009\u6846\u3002",
        files: [
          ...baseFiles,
          { name: "options", disName: "\u9009\u9879\u5217\u8868", type: "Array", required: true, defaultValue: "", remark: "\u6BCF\u4E00\u9879\u90FD\u5305\u542Btext\u3001value\u548Ckey\u3002text\u8868\u793A\u663E\u793A\u6587\u672C\uFF0Cvalue\u8868\u793A\u6587\u672C\u7684\u503C\uFF0Ckey\u8868\u793A\u5B57\u6BB5\u540D\u79F0\u3002" }
        ],
        value: {
          field1: true,
          field2: true
        },
        img: `${imgBaseUrl}checkboxGroup.png`,
        code: {
          name: "\u590D\u9009\u6846",
          type: "checkboxGroup",
          options: [
            {
              value: 1,
              text: "\u9009\u9879\u4E00",
              key: "field1"
            },
            {
              value: 2,
              text: "\u9009\u9879\u4E8C",
              key: "field2"
            }
          ]
        }
      },
      checkbox: {
        description: "\u590D\u9009\u6846\uFF0C\u652F\u6301\u662F\u5426\u5C55\u793A\u6587\u5B57\u72B6\u6001\u3002",
        files: [
          ...baseFiles,
          { name: "text", disName: "\u6587\u672C", type: "string", required: false, defaultValue: "", remark: "" }
        ],
        value: "true|false",
        img: `${imgBaseUrl}checkbox.png`,
        code: {
          type: "checkbox",
          text: "\u63A7\u5236\u9690\u85CF\u663E\u793A"
        }
      },
      image: {
        description: "\u56FE\u7247\u4E0A\u4F20",
        files: [
          ...baseFiles
        ],
        value: "",
        img: `${imgBaseUrl}image.png`,
        code: {
          name: "\u56FE\u7247",
          type: "image"
        }
      },
      media: {
        description: "\u5A92\u4F53\u8D44\u6E90\u4E0A\u4F20",
        files: [
          ...baseFiles,
          { name: "text", disName: "\u6309\u94AE\u6587\u5B57", type: "string", required: false, defaultValue: "\u6587\u4EF6\u4E0A\u4F20", remark: "" },
          { name: "accept", disName: "\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B", type: "string", required: false, defaultValue: "video/*", remark: "" }
        ],
        value: "",
        img: `${imgBaseUrl}media.png`,
        code: {
          name: "\u5A92\u4F53",
          type: "media"
        }
      },
      upload: {
        description: "\u8D44\u6E90\u4E0A\u4F20",
        files: [
          ...baseFiles,
          { name: "text", disName: "\u6309\u94AE\u6587\u5B57", type: "string", required: false, defaultValue: "\u6587\u4EF6\u4E0A\u4F20", remark: "" },
          { name: "accept", disName: "\u6587\u4EF6\u7C7B\u578B", type: "string", required: false, defaultValue: "", remark: "\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B" },
          { name: "multiple", disName: "\u591A\u6587\u4EF6\u4E0A\u4F20", type: "boolean", required: false, defaultValue: false, remark: "\u662F\u5426\u652F\u6301\u591A\u6587\u4EF6\u4E0A\u4F20" }
        ],
        value: "",
        img: `${imgBaseUrl}upload.png`,
        code: {
          name: "\u6587\u4EF6\u4E0A\u4F20",
          type: "upload"
        }
      },
      unit: {
        description: "\u5355\u4F4D\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u5355\u4F4D\u9879\u3002",
        files: [
          ...baseFiles,
          { name: "options", disName: "\u9009\u9879\u5217\u8868", type: "Array", required: true, defaultValue: '[{value:"%",text:"%"},{value:"px",text:"px"}]', remark: "\u6BCF\u4E00\u9879\u90FD\u5305\u542Btext\u548Cvalue\uFF0Ctext\u8868\u793A\u663E\u793A\u6587\u672C\uFF0Cvalue\u8868\u793A\u6587\u672C\u7684\u503C\u3002" }
        ],
        value: {
          value: 50,
          unit: "px"
        },
        img: `${imgBaseUrl}unit.png`,
        code: {
          name: "\u5355\u4F4D",
          type: "unit"
        }
      },
      icon: {
        description: "\u56FE\u6807\u9009\u62E9\u5668",
        files: [
          ...baseFiles
        ],
        value: {
          name: "\u6536\u85CF",
          value: "bangong_shoucang"
        },
        img: `${imgBaseUrl}icon.png`,
        code: {
          name: "\u56FE\u6807\u9009\u62E9",
          type: "icon"
        }
      }
    };
    let groupType = {
      radius: {
        description: "\u5706\u89D2\uFF0C\u7531\u56DB\u4E2A\u8F93\u5165\u6846\u7EC4\u6210\uFF0C\u53EF\u5B9A\u5236\u5DE6\u4E0A\u3001\u53F3\u4E0A\u3001\u53F3\u4E0B\u3001\u5DE6\u4E0B\u56DB\u4E2A\u5706\u89D2\u503C\u3002",
        files: [
          ...baseFiles
        ],
        value: [
          {
            "val": 5,
            "unit": "px"
          },
          {
            "val": 5,
            "unit": "px"
          },
          {
            "val": 5,
            "unit": "px"
          },
          {
            "val": 5,
            "unit": "px"
          }
        ],
        img: `${imgBaseUrl}radius.png`,
        code: {
          name: "\u5706\u89D2",
          type: "radius"
        }
      },
      margin: {
        description: "\u5916\u8FB9\u6846\uFF0C\u7531\u56DB\u4E2A\u8F93\u5165\u6846\u7EC4\u6210\uFF0C\u53EF\u5B9A\u5236\u4E0A\u53F3\u4E0B\u5DE6\u56DB\u4E2A\u5916\u8FB9\u8DDD\u503C\u3002",
        files: [
          ...baseFiles
        ],
        value: [
          {
            "val": 0,
            "unit": "px"
          },
          {
            "val": 0,
            "unit": "px"
          },
          {
            "val": 0,
            "unit": "px"
          },
          {
            "val": 0,
            "unit": "px"
          }
        ],
        img: `${imgBaseUrl}margin.png`,
        code: {
          name: "\u8FB9\u8DDD",
          type: "margin"
        }
      },
      padding: {
        description: "\u5185\u8FB9\u6846\uFF0C\u7531\u56DB\u4E2A\u8F93\u5165\u6846\u7EC4\u6210\uFF0C\u53EF\u5B9A\u5236\u4E0A\u53F3\u4E0B\u5DE6\u56DB\u4E2A\u5185\u8FB9\u8DDD\u503C\u3002",
        files: [
          ...baseFiles
        ],
        value: [
          {
            "val": 0,
            "unit": "px"
          },
          {
            "val": 0,
            "unit": "px"
          },
          {
            "val": 0,
            "unit": "px"
          },
          {
            "val": 0,
            "unit": "px"
          }
        ],
        img: `${imgBaseUrl}margin.png`,
        code: {
          name: "\u5185\u8FB9\u6846",
          type: "padding"
        }
      },
      size: {
        description: "\u5B9A\u4E49\u5BB9\u5668\u5C3A\u5BF8",
        files: [
          ...baseFiles
        ],
        value: [20, 20],
        img: `${imgBaseUrl}size.png`,
        code: {
          name: "\u5C3A\u5BF8",
          type: "size"
        }
      },
      textStyle: {
        description: "\u6587\u672C\u6837\u5F0F\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5B57\u4F53\u5927\u5C0F\u3001\u989C\u8272\u3001\u7C97\u7EC6\u3001\u662F\u5426\u659C\u4F53\u3001\u5BF9\u9F50\u65B9\u5F0F\u3002",
        files: [
          ...baseFiles
        ],
        value: {
          fontFamily: "Microsoft YaHei",
          fontSize: 14,
          color: "#000000",
          textAlign: "left",
          fontWeight: "normal",
          fontStyle: "normal"
        },
        img: `${imgBaseUrl}textStyle.png`,
        code: {
          name: "\u6587\u672C\u6837\u5F0F",
          type: "textStyle"
        }
      }
    };
    let customType = {
      code: {
        description: "\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u8FD4\u56DE\u503C\u4E3A\u4E00\u4E2A\u6807\u51C6\u7684 render \u51FD\u6570\u3002",
        files: [
          ...baseFiles
        ],
        value: {
          jscode: 'return h("div","\u6D4B\u8BD5\u6570\u636E")'
        },
        img: `${imgBaseUrl}code.png`,
        code: {
          name: "\u81EA\u5B9A\u4E49\u5185\u5BB9",
          type: "code"
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_guide_type_detail = vue.resolveComponent("guide-type-detail");
      _push(`<!--[--><h1 id="\u7C7B\u578B\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u4ECB\u7ECD" aria-hidden="true">#</a> \u7C7B\u578B\u4ECB\u7ECD</h1><p>\u60A8\u53EF\u4EE5\u901A\u8FC7 <em>config.js</em> \u5916\u89C2\u63CF\u8FF0\u4E2D\u5B9A\u4E49\u7684 type \u5B57\u6BB5\uFF0C\u6765\u5B9A\u4E49\u63A7\u4EF6\u7684\u7C7B\u578B\u548C\u914D\u7F6E\u3002</p><h2 id="\u7C7B\u578B\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u6982\u89C8" aria-hidden="true">#</a> \u7C7B\u578B\u6982\u89C8</h2><p>type \u5B57\u6BB5\u652F\u6301\u4EE5\u4E0B\u7C7B\u578B\uFF1A</p><table><thead><tr><th>\u7C7B\u522B</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u57FA\u7840\u7C7B\u578B</td><td><a href="#number">number</a></td><td>\u6570\u503C\u8F93\u5165\u6846\uFF0C\u53EF\u4EE5\u5B9A\u5236\u6B65\u957F\u3001\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C\u3001\u540E\u7F00\u3002</td></tr><tr><td></td><td><a href="#input">input</a></td><td>\u6587\u672C\u8F93\u5165\u6846\uFF0C\u652F\u6301\u5355\u884C\u3001\u591A\u884C\u6A21\u5F0F\u3002</td></tr><tr><td></td><td><a href="#select">select</a></td><td>\u9009\u62E9\u5668\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u3002</td></tr><tr><td></td><td><a href="#slider">slider</a></td><td>\u6ED1\u52A8\u6761\uFF0C\u53EF\u4EE5\u5B9A\u5236\u6B65\u957F\u3001\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C\u3001\u540E\u7F00\u3002</td></tr><tr><td></td><td><a href="#switch">switch</a></td><td>\u5F00\u5173\uFF0C\u652F\u6301\u662F\u5426\u5C55\u793A\u6587\u5B57\u72B6\u6001\u3002</td></tr><tr><td></td><td><a href="#align">align</a></td><td>\u53EF\u4EE5\u63A7\u5236\u5143\u7D20\u6C34\u5E73\u6216\u5782\u76F4\u4F4D\u7F6E\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002</td></tr><tr><td></td><td><a href="#position">position</a></td><td>\u53EF\u4EE5\u63A7\u5236\u5143\u7D20\u7684\u6C34\u5E73\u3001\u5782\u76F4\u4F4D\u7F6E(\u4E3B\u8981\u7528\u4E8E\u63A7\u5236\u56FE\u8868\u56FE\u4F8B\u7684\u4F4D\u7F6E)\u3002</td></tr><tr><td></td><td><a href="#color">color</a></td><td>\u989C\u8272\u9009\u62E9\u5668\uFF0C\u652F\u6301\u4E3B\u9898\u5B9A\u4E49\u3002</td></tr><tr><td></td><td><a href="#bgcolor">bgcolor</a></td><td>\u989C\u8272\u9009\u62E9\u5668\uFF0C\u652F\u6301\u900F\u660E\u3001\u7EAF\u8272\u3001\u6E10\u53D8\u8272\u3001\u4E3B\u9898\u5B9A\u4E49\u3002</td></tr><tr><td></td><td><a href="#radiogroup">radioGroup</a></td><td>\u4E00\u7EC4\u5355\u9009\u6846</td></tr><tr><td></td><td><a href="#checkboxgroup">checkboxGroup</a></td><td>\u4E00\u7EC4\u590D\u9009\u6846</td></tr><tr><td></td><td><a href="#checkbox">checkbox</a></td><td>\u590D\u9009\u6846\uFF0C\u652F\u6301\u662F\u5426\u5C55\u793A\u6587\u5B57\u72B6\u6001\u3002</td></tr><tr><td></td><td><a href="#image">image</a></td><td>\u56FE\u7247\u4E0A\u4F20</td></tr><tr><td></td><td><a href="#media">media</a></td><td>\u5A92\u4F53\u8D44\u6E90\u4E0A\u4F20</td></tr><tr><td></td><td><a href="#upload">upload</a></td><td>\u8D44\u6E90\u4E0A\u4F20</td></tr><tr><td></td><td><a href="#unit">unit</a></td><td>\u5355\u4F4D\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u5355\u4F4D\u9879\u3002</td></tr><tr><td></td><td><a href="#icon">icon</a></td><td>\u56FE\u6807\u9009\u62E9\u5668</td></tr><tr><td></td><td><a href="#code">code</a></td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u8FD4\u56DE\u4E00\u4E2A render \u51FD\u6570\u3002</td></tr><tr><td>\u7EC4\u5408\u7C7B\u578B</td><td><a href="#radius">radius</a></td><td>\u5706\u89D2\uFF0C\u7531\u56DB\u4E2A\u8F93\u5165\u6846\u7EC4\u6210\uFF0C\u53EF\u5B9A\u5236\u5DE6\u4E0A\u3001\u53F3\u4E0A\u3001\u53F3\u4E0B\u3001\u5DE6\u4E0B\u56DB\u4E2A\u5706\u89D2\u503C\u3002</td></tr><tr><td></td><td><a href="#margin">margin</a></td><td>\u5916\u8FB9\u6846\uFF0C\u7531\u56DB\u4E2A\u8F93\u5165\u6846\u7EC4\u6210\uFF0C\u53EF\u5B9A\u5236\u4E0A\u53F3\u4E0B\u5DE6\u56DB\u4E2A\u5916\u8FB9\u8DDD\u503C\u3002</td></tr><tr><td></td><td><a href="#padding">padding</a></td><td>\u5185\u8FB9\u6846\uFF0C\u7531\u56DB\u4E2A\u8F93\u5165\u6846\u7EC4\u6210\uFF0C\u53EF\u5B9A\u5236\u4E0A\u53F3\u4E0B\u5DE6\u56DB\u4E2A\u5185\u8FB9\u8DDD\u503C\u3002</td></tr><tr><td></td><td><a href="#padding">size</a></td><td>\u5B9A\u4E49\u5BB9\u5668\u5C3A\u5BF8</td></tr><tr><td></td><td><a href="#textstyle">textStyle</a></td><td>\u6587\u672C\u6837\u5F0F\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5B57\u4F53\u5927\u5C0F\u3001\u989C\u8272\u3001\u7C97\u7EC6\u3001\u662F\u5426\u659C\u4F53\u3001\u5BF9\u9F50\u65B9\u5F0F\u3002</td></tr><tr><td>\u81EA\u5B9A\u4E49\u7C7B\u578B</td><td>slot</td><td>\u9884\u7559\u63D2\u69FD</td></tr></tbody></table><h2 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> number</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(baseType).number,
        src: _ctx.$withBase(vue.unref(baseType).number.img)
      }, null, _parent));
      _push(`<h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> input</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(baseType).input,
        src: _ctx.$withBase(vue.unref(baseType).input.img)
      }, null, _parent));
      _push(`<h2 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(baseType).select,
        src: _ctx.$withBase(vue.unref(baseType).select.img)
      }, null, _parent));
      _push(`<h2 id="slider" tabindex="-1"><a class="header-anchor" href="#slider" aria-hidden="true">#</a> slider</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(baseType).slider,
        src: _ctx.$withBase(vue.unref(baseType).slider.img)
      }, null, _parent));
      _push(`<h2 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> switch</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(baseType).switch1,
        src: _ctx.$withBase(vue.unref(baseType).switch1.img)
      }, null, _parent));
      _push(`<h2 id="align" tabindex="-1"><a class="header-anchor" href="#align" aria-hidden="true">#</a> align</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(baseType).align,
        src: _ctx.$withBase(vue.unref(baseType).align.img)
      }, null, _parent));
      _push(`<h2 id="position" tabindex="-1"><a class="header-anchor" href="#position" aria-hidden="true">#</a> position</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(baseType).position,
        src: _ctx.$withBase(vue.unref(baseType).position.img)
      }, null, _parent));
      _push(`<h2 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> color</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(baseType).color,
        src: _ctx.$withBase(vue.unref(baseType).color.img)
      }, null, _parent));
      _push(`<h2 id="bgcolor" tabindex="-1"><a class="header-anchor" href="#bgcolor" aria-hidden="true">#</a> bgcolor</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(baseType).bgcolor,
        src: _ctx.$withBase(vue.unref(baseType).bgcolor.img)
      }, null, _parent));
      _push(`<h2 id="radiogroup" tabindex="-1"><a class="header-anchor" href="#radiogroup" aria-hidden="true">#</a> radioGroup</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(baseType).radioGroup,
        src: _ctx.$withBase(vue.unref(baseType).radioGroup.img)
      }, null, _parent));
      _push(`<h2 id="checkboxgroup" tabindex="-1"><a class="header-anchor" href="#checkboxgroup" aria-hidden="true">#</a> checkboxGroup</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(baseType).checkboxGroup,
        src: _ctx.$withBase(vue.unref(baseType).checkboxGroup.img)
      }, null, _parent));
      _push(`<h2 id="checkbox" tabindex="-1"><a class="header-anchor" href="#checkbox" aria-hidden="true">#</a> checkbox</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(baseType).checkbox,
        src: _ctx.$withBase(vue.unref(baseType).checkbox.img)
      }, null, _parent));
      _push(`<h2 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(baseType).image,
        src: _ctx.$withBase(vue.unref(baseType).image.img)
      }, null, _parent));
      _push(`<h2 id="media" tabindex="-1"><a class="header-anchor" href="#media" aria-hidden="true">#</a> media</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(baseType).media,
        src: _ctx.$withBase(vue.unref(baseType).media.img)
      }, null, _parent));
      _push(`<h2 id="upload" tabindex="-1"><a class="header-anchor" href="#upload" aria-hidden="true">#</a> upload</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(baseType).upload,
        src: _ctx.$withBase(vue.unref(baseType).upload.img)
      }, null, _parent));
      _push(`<h2 id="unit" tabindex="-1"><a class="header-anchor" href="#unit" aria-hidden="true">#</a> unit</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(baseType).unit,
        src: _ctx.$withBase(vue.unref(baseType).unit.img)
      }, null, _parent));
      _push(`<h2 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> icon</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(baseType).icon,
        src: _ctx.$withBase(vue.unref(baseType).icon.img)
      }, null, _parent));
      _push(`<h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> code</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(customType).code,
        src: _ctx.$withBase(vue.unref(customType).code.img)
      }, null, _parent));
      _push(`<h2 id="radius" tabindex="-1"><a class="header-anchor" href="#radius" aria-hidden="true">#</a> radius</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(groupType).radius,
        src: _ctx.$withBase(vue.unref(groupType).radius.img)
      }, null, _parent));
      _push(`<h2 id="margin" tabindex="-1"><a class="header-anchor" href="#margin" aria-hidden="true">#</a> margin</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(groupType).margin,
        src: _ctx.$withBase(vue.unref(groupType).margin.img)
      }, null, _parent));
      _push(`<h2 id="padding" tabindex="-1"><a class="header-anchor" href="#padding" aria-hidden="true">#</a> padding</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(groupType).padding,
        src: _ctx.$withBase(vue.unref(groupType).margin.img)
      }, null, _parent));
      _push(`<h2 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> size</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(groupType).size,
        src: _ctx.$withBase(vue.unref(groupType).size.img)
      }, null, _parent));
      _push(`<h2 id="textstyle" tabindex="-1"><a class="header-anchor" href="#textstyle" aria-hidden="true">#</a> textStyle</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_guide_type_detail, {
        config: vue.unref(groupType).textStyle,
        src: _ctx.$withBase(vue.unref(groupType).textStyle.img)
      }, null, _parent));
      _push(`<h2 id="\u5C5E\u6027\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u8BF4\u660E" aria-hidden="true">#</a> \u5C5E\u6027\u8BF4\u660E</h2><h3 id="depends" tabindex="-1"><a class="header-anchor" href="#depends" aria-hidden="true">#</a> depends</h3><h4 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> object</h4><p>\u5F53 <em>depends</em> \u503C\u4E3A\u5BF9\u8C61\u65F6\uFF0C\u53EF\u4EE5\u914D\u7F6E <strong>\u540C\u7EC4</strong> \u4E0B\u7684\u591A\u4E2A\u5C5E\u6027\uFF0C\u5F53\u914D\u7F6E\u4E0B\u7684\u6240\u6709\u6761\u4EF6\u90FD\u6EE1\u8DB3\u65F6\uFF0C\u624D\u663E\u793A\u8BE5\u914D\u7F6E\u9879\u3002</p><p>\u{1F330} \u5F53 <em>attr1</em> == _2 &amp;&amp; <em>attr2</em> == <em>true</em> \uFF0C\u624D\u4F1A\u663E\u793A <em>\u540D\u79F03</em> \u914D\u7F6E\u9879\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">attr1</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u540D\u79F01&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;select&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&quot;\u98791&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&quot;\u98792&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attr2</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u540D\u79F02&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;switch&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attr3</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u540D\u79F03&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;type3&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">depends</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">attr1</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attr2</span><span class="token operator">:</span><span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> function</h4><p>\u5F53\u9700\u8981 <strong>\u8DE8\u7EC4(group)</strong> \u914D\u7F6E\u9879\u7684\u503C\u6765\u63A7\u5236\u5F53\u524D\u914D\u7F6E\u9879\u7684\u663E\u9690\u65F6\uFF0C\u8BF7\u4F7F\u7528\u51FD\u6570\u7684\u65B9\u5F0F\u3002</p><p>\u51FD\u6570\u53C2\u6570\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u542B\u4E49</th><th>\u7C7B\u578B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>option</td><td>\u5F53\u524D\u7EC4\u4E0B\u7684\u6837\u5F0F\u914D\u7F6E\u4FE1\u606F</td><td>object</td><td></td></tr><tr><td>des</td><td>\u5F53\u524D\u7EC4\u4E0B\u7684\u6837\u5F0F\u63CF\u8FF0\u4FE1\u606F</td><td>object</td><td></td></tr><tr><td>rootOption</td><td>\u6837\u5F0F\u914D\u7F6E\u4FE1\u606F</td><td>object</td><td></td></tr><tr><td>rootDes</td><td>\u6837\u5F0F\u63CF\u8FF0\u4FE1\u606F</td><td>object</td><td></td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u540D\u79F0&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;typeName&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">depends</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>option<span class="token punctuation">,</span> des<span class="token punctuation">,</span> rootOption<span class="token punctuation">,</span> rootDes <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u8FD4\u56DE\u503C\u4E3Atrue\uFF1A\u663E\u793A\u8BE5\u914D\u7F6E\u9879  false\uFF1A\u9690\u85CF\u8BE5\u914D\u7F6E\u9879</span>
    <span class="token keyword">return</span> option<span class="token punctuation">[</span>attribute<span class="token punctuation">]</span> <span class="token operator">&gt;</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/type.html.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
var type_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$Q
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$P = {
  __ssrInlineRender: true,
  setup(__props) {
    let imgs = ["1.png", "2.png", "3.png", "4.png", "5.png"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_theme = vue.resolveComponent("theme");
      _push(`<!--[--><h1 id="\u7EC4\u4EF6\u4E3B\u9898" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4E3B\u9898" aria-hidden="true">#</a> \u7EC4\u4EF6\u4E3B\u9898</h1><p>\u7EC4\u4EF6\u652F\u6301\u591A\u79CD\u4E3B\u9898\u98CE\u683C\uFF0C\u5982\u79D1\u6280\u84DD\u3001\u8D5B\u535A\u670B\u514B\u3001\u9ED1\u91D1\u3001\u9ED1\u51B0\u3001\u9752\u6A59\u7B49\uFF0C\u7528\u6237\u53EF\u4EE5\u6839\u636E\u4E0D\u540C\u573A\u666F\u4E00\u952E\u5207\u6362\u4E3B\u9898\uFF0C\u5E94\u5BF9\u4E0D\u540C\u7528\u6237\u7684\u559C\u597D\u3002</p><p>\u4E3B\u9898\u98CE\u683C\u7684\u8BBE\u8BA1\u4E0D\u4EC5\u662F\u4E3A\u4E86\u8BA9\u56FE\u8868\u6216\u5143\u7D20\u66F4\u597D\u770B\uFF0C\u4E5F\u662F\u4E3A\u4E86\u66F4\u7B26\u5408\u53EF\u89C6\u5316\u539F\u7406\u7684\u8BBE\u8BA1\uFF0C\u5E76\u4E14\u8BBE\u8BA1\u5E08\u8003\u91CF\u4E86\u989C\u8272\u4E4B\u95F4\u7684\u533A\u5206\u5EA6\u3001\u76F8\u90BB\u989C\u8272\u7684\u5BF9\u6BD4\u5EA6\u7B49\u56E0\u7D20\uFF0C\u4EE5\u4F7F\u5F97\u80FD\u591F\u660E\u786E\u5730\u3001\u6709\u6548\u5730\u4F20\u9012\u4FE1\u606F\u3002</p>`);
      _push(serverRenderer.ssrRenderComponent(_component_theme, {
        imgs: vue.unref(imgs),
        path: _ctx.$withBase("/images/theme/")
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/theme/index.html.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
var index_html$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$P
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$O = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [
      { name: "\u6E10\u53D8\u5355\u67F1\u56FE", code: "AnChartGradualSingleBar" },
      { name: "\u5806\u79EF\u67F1\u72B6\u56FE", code: "AnChartStackBar" },
      { name: "3D\u5355\u67F1\u56FE", code: "AnChartSingleBar3D" },
      { name: "\u6E10\u53D8\u6761\u5F62\u56FE", code: "AnChartCrossGradualMutiBar" },
      { name: "\u53CC\u5411\u6761\u5F62\u56FE", code: "AnChartTwoWayBar" },
      { name: "\u5806\u53E0\u5706\u73AF\u67F1\u5F62\u56FE", code: "AnChartRingStackBar" },
      { name: "\u5806\u53E0\u5706\u73AF\u6247\u5F62\u56FE", code: "AnChartFanStackBar" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u67F1\u72B6\u56FE" tabindex="-1"><a class="header-anchor" href="#\u67F1\u72B6\u56FE" aria-hidden="true">#</a> \u67F1\u72B6\u56FE</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/chart/bar.html.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
var bar_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$O
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$N = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [
      { name: "\u70ED\u529B\u65E5\u5386\u56FE", code: "AnHeatCalendar" },
      { name: "\u6563\u70B9\u65E5\u5386\u56FE", code: "AnScatterCalendar" },
      { name: "\u5173\u7CFB\u65E5\u5386\u56FE", code: "AnGraphCalendar" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u65E5\u5386\u56FE" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5386\u56FE" aria-hidden="true">#</a> \u65E5\u5386\u56FE</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/chart/calendar.html.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
var calendar_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$N
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$M = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [
      { name: "\u57FA\u7840\u4EEA\u8868\u76D8", code: "AnChartGaugeNormal" },
      { name: "\u6E10\u53D8\u6307\u9488\u4EEA\u8868\u76D8", code: "AnChartGaugePointer" },
      { name: "\u6E10\u53D8\u56FE\u6807\u4EEA\u8868\u76D8", code: "AnChartGaugeImage" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u4EEA\u8868\u76D8" tabindex="-1"><a class="header-anchor" href="#\u4EEA\u8868\u76D8" aria-hidden="true">#</a> \u4EEA\u8868\u76D8</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/chart/gauge.html.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
var gauge_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$M
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$L = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [{ name: "\u5355\u6298\u7EBF", code: "AnSingleLine" }, { name: "\u9762\u79EF\u591A\u6298\u7EBF", code: "AnMultiLineArea" }, { name: "\u9636\u68AF\u6298\u7EBF\u56FE", code: "AnMultiLineLadder" }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u6298\u7EBF\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6298\u7EBF\u56FE" aria-hidden="true">#</a> \u6298\u7EBF\u56FE</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/chart/line.html.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
var line_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$L
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$K = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [
      { name: "\u8BCD\u4E91", code: "AnChartWordcloud" },
      { name: "\u77E9\u5F62\u6811\u5F62", code: "AnTreemap" },
      { name: "\u6C34\u7403\u56FE", code: "AnLiquidNormal" },
      { name: "\u6E10\u53D8\u6C14\u6CE1\u56FE", code: "AnChartGradualBubble" },
      { name: "\u5355\u7CFB\u5217\u76D2\u987B\u56FE", code: "AnChartSingleBoxplot" },
      { name: "\u6F0F\u6597\u56FE", code: "AnChartFunnelNormal" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/chart/other.html.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
var other_html$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$K
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$J = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [
      { name: "\u8C61\u5F62\u67F1\u56FE", code: "AnChartPictographBar" },
      { name: "\u8C61\u5F62\u67F1\u56FE2", code: "AnChartPictographBar2" },
      { name: "\u8C61\u5F62\u7CBE\u7075\u56FE", code: "AnPictorialSprite" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u8C61\u5F62\u56FE" tabindex="-1"><a class="header-anchor" href="#\u8C61\u5F62\u56FE" aria-hidden="true">#</a> \u8C61\u5F62\u56FE</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/chart/pictograph.html.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
var pictograph_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$J
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$I = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [
      { name: "\u57FA\u7840\u997C\u56FE", code: "AnChartPieBase" },
      { name: "3/4\u591A\u5C42\u73AF\u5F62\u56FE", code: "AnChartPieThreeQuarterMultiLayer" },
      { name: "\u6781\u5750\u6807\u7CFB\u591A\u7CFB\u5217\u67F1\u56FE", code: "AnChartBarPolarMultiSeries" },
      { name: "\u5E26label\u6781\u5750\u6807\u7CFB\u73AB\u7470\u56FE", code: "AnChartRoseAngleAxisLabel" },
      { name: "\u5355\u5C42\u73AF\u5F62\u56FE", code: "AnChartPieSingleLayer" },
      { name: "3D\u997C\u56FE", code: "AnChartPieThreeD" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u997C\u56FE" tabindex="-1"><a class="header-anchor" href="#\u997C\u56FE" aria-hidden="true">#</a> \u997C\u56FE</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/chart/pie.html.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
var pie_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$I
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$H = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [{ name: "\u901A\u7528\u96F7\u8FBE\u56FE", code: "AnChartRadar" }, { name: "\u9762\u79EF\u96F7\u8FBE\u56FE", code: "AnChartRadarArea" }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u96F7\u8FBE\u56FE" tabindex="-1"><a class="header-anchor" href="#\u96F7\u8FBE\u56FE" aria-hidden="true">#</a> \u96F7\u8FBE\u56FE</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/chart/radar.html.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
var radar_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$H
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$G = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [
      { name: "\u5E38\u89C4\u6309\u94AE", code: "AnBtn1" },
      { name: "\u88C5\u9970\u6309\u94AE", code: "AnBtn2" },
      { name: "\u5E38\u89C4\u9875\u7B7E", code: "AnTab1" },
      { name: "\u88C5\u9970\u9875\u7B7E", code: "AnTab3" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u6309\u94AE" tabindex="-1"><a class="header-anchor" href="#\u6309\u94AE" aria-hidden="true">#</a> \u6309\u94AE</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/control/btn.html.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
var btn_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$G
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$F = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [
      { name: "\u65F6\u95F4\u8F74", code: "AnTimeline" },
      { name: "\u5206\u9875\u7EC4\u4EF6", code: "AnPagination" },
      { name: "\u884C\u5217\u5E03\u5C40", code: "AnGrid" },
      { name: "\u81EA\u5B9A\u4E49\u7EC4\u4EF6", code: "AnCustomNormal" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/control/other.html.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
var other_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$F
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$E = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [
      { name: "\u5355\u9009\u6846", code: "AnRadio1" },
      { name: "\u6309\u94AE\u5355\u9009\u6846", code: "AnRadio2" },
      { name: "\u591A\u9009\u6846", code: "AnCheckbox1" },
      { name: "\u6309\u94AE\u591A\u9009\u6846", code: "AnCheckbox2" },
      { name: "\u65E5\u671F\u9009\u62E9", code: "AnDatePicker1" },
      { name: "\u4E0B\u62C9\u5217\u8868", code: "AnDropdown" },
      { name: "\u5BFC\u822A\u83DC\u5355", code: "AnMenu" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u9009\u62E9\u6846" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u6846" aria-hidden="true">#</a> \u9009\u62E9\u6846</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/control/select.html.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
var select_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$E
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$D = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [{ name: "\u56FE\u7247\u8F6E\u64AD", code: "AnImageSwiper" }, { name: "\u81EA\u5B9A\u4E49\u8F6E\u64AD", code: "AnSwiper" }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u8F6E\u64AD" tabindex="-1"><a class="header-anchor" href="#\u8F6E\u64AD" aria-hidden="true">#</a> \u8F6E\u64AD</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/control/swiper.html.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
var swiper_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$D
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$C = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [{ name: "\u5934\u90E8\u88C5\u9970", code: "AnDeckHeader3" }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u5934\u90E8\u88C5\u9970" tabindex="-1"><a class="header-anchor" href="#\u5934\u90E8\u88C5\u9970" aria-hidden="true">#</a> \u5934\u90E8\u88C5\u9970</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/deck/header.html.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
var header_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$C
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$B = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [{ name: "icon\u56FE\u6807", code: "AnDeckIcon" }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#\u56FE\u6807" aria-hidden="true">#</a> \u56FE\u6807</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/deck/icon.html.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
var icon_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$B
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$A = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [{ name: "\u77E9\u5F62", code: "AnRectangle" }, { name: "\u5706/\u692D\u5706", code: "AnCircle" }, { name: "\u4E09\u89D2\u5F62", code: "AnTriangle" }, { name: "\u7EBF\u6BB5", code: "AnLine" }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u5F62\u72B6" tabindex="-1"><a class="header-anchor" href="#\u5F62\u72B6" aria-hidden="true">#</a> \u5F62\u72B6</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/deck/shape.html.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var shape_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$A
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [{ name: "\u52A8\u753B", code: "AnDeckStreamer" }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B" aria-hidden="true">#</a> \u52A8\u753B</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/deck/streamer.html.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var streamer_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$z
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [{ name: "\u6807\u9898\u88C5\u9970", code: "AnDeckTitle3" }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u6807\u9898\u88C5\u9970" tabindex="-1"><a class="header-anchor" href="#\u6807\u9898\u88C5\u9970" aria-hidden="true">#</a> \u6807\u9898\u88C5\u9970</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/deck/title.html.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var title_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$y
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [{ name: "\u5E38\u89C4\u5217\u8868", code: "AnList1" }, { name: "\u591A\u5217\u5217\u8868", code: "AnList2" }, { name: "\u6392\u540D\u5217\u8868", code: "AnList3" }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u5217\u8868" aria-hidden="true">#</a> \u5217\u8868</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/list/list.html.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var list_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$x
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [{ name: "\u5E38\u89C4\u8868\u683C", code: "AnTable" }, { name: "TOP\u8868\u683C", code: "AnTopTable" }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u8868\u683C" tabindex="-1"><a class="header-anchor" href="#\u8868\u683C" aria-hidden="true">#</a> \u8868\u683C</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/list/table.html.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var table_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$w
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [
      { name: "3D\u7C92\u5B50\u5730\u7403", code: "AnThreeEarthParticle" },
      { name: "3D\u5168\u56FD\u5730\u56FE", code: "AnThreeEarthChina3d" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="_3d" tabindex="-1"><a class="header-anchor" href="#_3d" aria-hidden="true">#</a> 3D</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/map/3D.html.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var _3D_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$v
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [
      { name: "Echarts\u5730\u56FE", code: "AnEchartsMap1" },
      { name: "\u9AD8\u5FB7\u5730\u56FE", code: "AnAMap1" },
      { name: "Maptalks\u5730\u56FE", code: "AnMaptalks" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u5730\u56FE" tabindex="-1"><a class="header-anchor" href="#\u5730\u56FE" aria-hidden="true">#</a> \u5730\u56FE</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/map/map.html.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var map_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$u
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$t = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [{ name: "\u5E38\u89C4\u6307\u6807", code: "AnIndicatorNormal" }, { name: "\u4E1A\u52A1\u6307\u6807\u8D8B\u52BF", code: "AnIndicatorTrend" }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u6307\u6807" tabindex="-1"><a class="header-anchor" href="#\u6307\u6807" aria-hidden="true">#</a> \u6307\u6807</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/text/indicator.html.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var indicator_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$t
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$s = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [{ name: "\u901A\u7528\u6570\u5B57", code: "AnTextNum" }, { name: "\u65E5\u671F\u65F6\u95F4", code: "AnTextDateTime" }, { name: "\u7FFB\u724C\u5668", code: "AnOdometer" }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u6587\u5B57" tabindex="-1"><a class="header-anchor" href="#\u6587\u5B57" aria-hidden="true">#</a> \u6587\u5B57</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/text/text.html.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var text_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$s
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [{ name: "\u8D28\u91CF\u5929\u6C14", code: "AnQualityWeather" }, { name: "\u5750\u6807\u5929\u6C14", code: "AnLocationWeather" }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u5929\u6C14" tabindex="-1"><a class="header-anchor" href="#\u5929\u6C14" aria-hidden="true">#</a> \u5929\u6C14</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/text/weather.html.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var weather_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$r
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [{ name: "\u5E38\u89C4\u56FE\u7247", code: "AnImg" }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247" aria-hidden="true">#</a> \u56FE\u7247</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/video/img.html.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var img_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$q
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = {
  __ssrInlineRender: true,
  setup(__props) {
    let data2 = [
      { name: "\u901A\u7528\u89C6\u9891", code: "AnVideoNormal" },
      { name: "\u6D41\u89C6\u9891", code: "AnVideoStream" },
      { name: "\u80CC\u666F\u97F3\u6548", code: "AnAudioNormal" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_element = vue.resolveComponent("element");
      _push(`<!--[--><h1 id="\u89C6\u9891" tabindex="-1"><a class="header-anchor" href="#\u89C6\u9891" aria-hidden="true">#</a> \u89C6\u9891</h1>`);
      _push(serverRenderer.ssrRenderComponent(_component_element, { data: vue.unref(data2) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/video/video.html.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var video_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$p
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/404.html.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var _404_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$1]]);
var _404_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _404_html$1
}, Symbol.toStringTag, { value: "Module" }));
const data$B = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "/logo.png",
    "heroText": null,
    "tagline": "AnovUI\u662F\u4E00\u5957\u5F00\u6E90\u7EC4\u4EF6\u5E93\uFF0C\u81F4\u529B\u4E8E\u4E3A\u5F00\u53D1\u8005\u3001\u8BBE\u8BA1\u4EBA\u5458\u63D0\u4F9B\u4E30\u5BCC\u7684\u53EF\u89C6\u5316\u5927\u5C4F\u7EC4\u4EF6\uFF0C\u53EF\u5728\u57FA\u4E8E VUE \u7684\u9879\u76EE\u4E0A\u4F7F\u7528\u8BE5\u7EC4\u4EF6\u5E93\u3002",
    "actionText": "\u5FEB\u901F\u4E0A\u624B \u2192",
    "actionLink": "/zh/guide/",
    "features": [
      {
        "title": "\u7EC4\u4EF6\u7C7B\u522B",
        "details": "\u76EE\u524D\u63D0\u4F9B\u4E86 8 \u7C7B 50+\u4E2A\u7EC4\u4EF6\uFF0C\u5305\u62EC\u7684\u7C7B\u522B\u6709\u56FE\u8868(\u67F1\u56FE\u3001\u6298\u7EBF\u3001\u997C\u56FE\u3001\u6C14\u6CE1\u3001\u6563\u70B9\u7B49)\u3001\u4FE1\u606F(\u6587\u672C\u3001\u65E5\u671F\u3001\u6307\u6807\u3001\u5929\u6C14)\u3001\u5217\u8868(TOP\u8868\u683C\u3001\u5217\u8868\u7B49)\u3001\u7D20\u6750(\u6807\u9898\u3001\u70B9\u7F00\u3001icon\u7B49)\u3001\u5A92\u4F53\u3001\u5730\u56FE\u30013D\u3001\u63A7\u4EF6(\u6309\u94AE\u3001\u9009\u62E9\u6846\u3001\u8F6E\u64AD\u3001\u65F6\u95F4\u8F74\u3001\u5E03\u5C40\u7B49)\u3002"
      },
      {
        "title": "\u4E3B\u9898\u98CE\u683C",
        "details": "\u7EC4\u4EF6\u5185\u7F6E\u591A\u5957\u4E3B\u9898\u98CE\u683C\uFF0C\u5982\u79D1\u6280\u84DD\u3001\u8D5B\u535A\u670B\u514B\u3001\u9ED1\u91D1\u3001\u9ED1\u51B0\u3001\u9752\u6A59\u7B49\uFF0C\u7528\u6237\u53EF\u4EE5\u6839\u636E\u4E0D\u540C\u573A\u666F\u4E00\u952E\u5207\u6362\u4E3B\u9898\u3002\u4E3B\u9898\u98CE\u683C\u7684\u8BBE\u8BA1\u4E0D\u4EC5\u662F\u4E3A\u4E86\u8BA9\u56FE\u8868\u6216\u5143\u7D20\u66F4\u597D\u770B\uFF0C\u4E5F\u662F\u4E3A\u4E86\u66F4\u7B26\u5408\u53EF\u89C6\u5316\u539F\u7406\u7684\u8BBE\u8BA1\uFF0C\u4EE5\u4F7F\u5F97\u80FD\u591F\u660E\u786E\u5730\u3001\u6709\u6548\u5730\u4F20\u9012\u4FE1\u606F\u3002"
      },
      {
        "title": "\u8D44\u6E90\u7BA1\u7406",
        "details": "\u7EC4\u4EF6\u5E93\u5305\u542B\u591A\u7C7B\u8D44\u6E90\u7EC4\u4EF6\uFF0C\u5305\u62EC\u5934\u90E8\u88C5\u9970\u3001\u6807\u9898\u88C5\u9970\u3001\u52A8\u753B\u70B9\u7F00\u3001\u80CC\u666F\u56FE\u7247\u3001\u89C6\u9891\u3001ICON\u7B49\uFF0C\u8D44\u6E90\u7EC4\u4EF6\u5185\u7F6E\u90E8\u5206\u9759\u6001\u6570\u636E\uFF0C\u4E5F\u652F\u6301\u63A5\u5165\u6807\u51C6\u683C\u5F0F\u7684\u5916\u90E8\u8D44\u6E90\u6570\u636E\u3002"
      }
    ],
    "footer": "MIT Licensed | Copyright \xA9 2022-present ANOV"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u4F7F\u7528",
      "slug": "\u4F7F\u7528",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1659079943e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "README.md"
};
var index_html$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$B
}, Symbol.toStringTag, { value: "Module" }));
const data$A = {
  "key": "v-74c56a5a",
  "path": "/components/introduce.html",
  "title": "\u7EC4\u4EF6",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1648890668e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/introduce.md"
};
var introduce_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$A
}, Symbol.toStringTag, { value: "Module" }));
const data$z = {
  "key": "v-1020f180",
  "path": "/components/",
  "title": "\u8BBE\u8BA1\u539F\u5219",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u4E13\u6CE8\u5BFB\u627E\u771F\u6B63\u7684\u95EE\u9898\u548C\u9002\u5408\u7684\u89E3\u51B3\u65B9\u6848",
      "slug": "\u4E13\u6CE8\u5BFB\u627E\u771F\u6B63\u7684\u95EE\u9898\u548C\u9002\u5408\u7684\u89E3\u51B3\u65B9\u6848",
      "children": []
    },
    {
      "level": 2,
      "title": "\u7ED9\u7528\u6237\u8DB3\u591F\u7684\u601D\u8003\u7A7A\u95F4",
      "slug": "\u7ED9\u7528\u6237\u8DB3\u591F\u7684\u601D\u8003\u7A7A\u95F4",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5BF9\u53EF\u53D1\u751F\u98CE\u9669\u4FDD\u6301\u8C28\u614E\u6001\u5EA6",
      "slug": "\u5BF9\u53EF\u53D1\u751F\u98CE\u9669\u4FDD\u6301\u8C28\u614E\u6001\u5EA6",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5C55\u793A\u6570\u636E\u53D8\u5316\u800C\u975E\u8BBE\u8BA1\u53D8\u5316",
      "slug": "\u5C55\u793A\u6570\u636E\u53D8\u5316\u800C\u975E\u8BBE\u8BA1\u53D8\u5316",
      "children": []
    },
    {
      "level": 2,
      "title": "\u521B\u9020\u5E76\u6279\u5224",
      "slug": "\u521B\u9020\u5E76\u6279\u5224",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5408\u7406\u8BBE\u5B9A\u6570\u636E\u5BC6\u5EA6\u53CA\u6570\u636E\u77E9\u9635\u8303\u56F4",
      "slug": "\u5408\u7406\u8BBE\u5B9A\u6570\u636E\u5BC6\u5EA6\u53CA\u6570\u636E\u77E9\u9635\u8303\u56F4",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6CA1\u6709\u65E0\u7528\u7684\u6570\u636E\uFF0C\u53EA\u6709\u65E0\u610F\u4E49\u7684\u89E3\u8BFB",
      "slug": "\u6CA1\u6709\u65E0\u7528\u7684\u6570\u636E-\u53EA\u6709\u65E0\u610F\u4E49\u7684\u89E3\u8BFB",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1648890668e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "components/README.md"
};
var index_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$z
}, Symbol.toStringTag, { value: "Module" }));
const data$y = {
  "key": "v-1b623e0c",
  "path": "/guide/dirtree.html",
  "title": "\u76EE\u5F55\u7ED3\u6784",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1648890668e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "guide/dirtree.md"
};
var dirtree_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$y
}, Symbol.toStringTag, { value: "Module" }));
const data$x = {
  "key": "v-55846971",
  "path": "/guide/file.html",
  "title": "\u7EC4\u4EF6\u5F00\u53D1",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u7EC4\u4EF6\u76EE\u5F55\u7ED3\u6784",
      "slug": "\u7EC4\u4EF6\u76EE\u5F55\u7ED3\u6784",
      "children": []
    },
    {
      "level": 2,
      "title": "\u914D\u7F6E\u6587\u4EF6",
      "slug": "\u914D\u7F6E\u6587\u4EF6",
      "children": []
    },
    {
      "level": 2,
      "title": "\u89C6\u56FE\u6587\u4EF6",
      "slug": "\u89C6\u56FE\u6587\u4EF6",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5BFC\u51FA\u7EC4\u4EF6",
      "slug": "\u5BFC\u51FA\u7EC4\u4EF6",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5199\u5728\u6700\u540E",
      "slug": "\u5199\u5728\u6700\u540E",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1660650492e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 7
      }
    ]
  },
  "filePathRelative": "guide/file.md"
};
var file_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$x
}, Symbol.toStringTag, { value: "Module" }));
const data$w = {
  "key": "v-792a83a6",
  "path": "/guide/group.html",
  "title": "\u5206\u7EC4\u4ECB\u7ECD",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u7B80\u5355\u5206\u7EC4",
      "slug": "\u7B80\u5355\u5206\u7EC4",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5D4C\u5957\u5206\u7EC4",
      "slug": "\u5D4C\u5957\u5206\u7EC4",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1660650492e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 5
      }
    ]
  },
  "filePathRelative": "guide/group.md"
};
var group_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$w
}, Symbol.toStringTag, { value: "Module" }));
const data$v = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "\u51C6\u5907\u5DE5\u4F5C",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u4ECB\u7ECD",
      "slug": "\u4ECB\u7ECD",
      "children": []
    },
    {
      "level": 2,
      "title": "\u517C\u5BB9\u6027",
      "slug": "\u517C\u5BB9\u6027",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5F00\u53D1\u73AF\u5883\u642D\u5EFA",
      "slug": "\u5F00\u53D1\u73AF\u5883\u642D\u5EFA",
      "children": []
    },
    {
      "level": 2,
      "title": "\u7EC4\u4EF6\u5F00\u53D1",
      "slug": "\u7EC4\u4EF6\u5F00\u53D1",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1648890668e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "guide/README.md"
};
var index_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$v
}, Symbol.toStringTag, { value: "Module" }));
const data$u = {
  "key": "v-565176d0",
  "path": "/guide/standard.html",
  "title": "\u5F00\u53D1\u89C4\u8303",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u547D\u540D\u89C4\u5219",
      "slug": "\u547D\u540D\u89C4\u5219",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6570\u636E\u683C\u5F0F",
      "slug": "\u6570\u636E\u683C\u5F0F",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5C5E\u6027/\u65B9\u6CD5",
      "slug": "\u5C5E\u6027-\u65B9\u6CD5",
      "children": [
        {
          "level": 3,
          "title": "Props",
          "slug": "props",
          "children": []
        },
        {
          "level": 3,
          "title": "Methods",
          "slug": "methods",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1660650492e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/standard.md"
};
var standard_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$u
}, Symbol.toStringTag, { value: "Module" }));
const data$t = {
  "key": "v-4d76029c",
  "path": "/guide/theme.html",
  "title": "\u4E3B\u9898\u5E94\u7528",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u4E3B\u9898\u6570\u636E\u7ED3\u6784",
      "slug": "\u4E3B\u9898\u6570\u636E\u7ED3\u6784",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5355\u8272\u9009\u62E9\u5668",
      "slug": "\u5355\u8272\u9009\u62E9\u5668",
      "children": []
    },
    {
      "level": 2,
      "title": "\u80CC\u666F\u8272\u9009\u62E9\u5668",
      "slug": "\u80CC\u666F\u8272\u9009\u62E9\u5668",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5199\u5728\u6700\u540E",
      "slug": "\u5199\u5728\u6700\u540E",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1652750076e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "guide/theme.md"
};
var theme_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$t
}, Symbol.toStringTag, { value: "Module" }));
const data$s = {
  "key": "v-7a23931a",
  "path": "/guide/type.html",
  "title": "\u7C7B\u578B\u4ECB\u7ECD",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u7C7B\u578B\u6982\u89C8",
      "slug": "\u7C7B\u578B\u6982\u89C8",
      "children": []
    },
    {
      "level": 2,
      "title": "number",
      "slug": "number",
      "children": []
    },
    {
      "level": 2,
      "title": "input",
      "slug": "input",
      "children": []
    },
    {
      "level": 2,
      "title": "select",
      "slug": "select",
      "children": []
    },
    {
      "level": 2,
      "title": "slider",
      "slug": "slider",
      "children": []
    },
    {
      "level": 2,
      "title": "switch",
      "slug": "switch",
      "children": []
    },
    {
      "level": 2,
      "title": "align",
      "slug": "align",
      "children": []
    },
    {
      "level": 2,
      "title": "position",
      "slug": "position",
      "children": []
    },
    {
      "level": 2,
      "title": "color",
      "slug": "color",
      "children": []
    },
    {
      "level": 2,
      "title": "bgcolor",
      "slug": "bgcolor",
      "children": []
    },
    {
      "level": 2,
      "title": "radioGroup",
      "slug": "radiogroup",
      "children": []
    },
    {
      "level": 2,
      "title": "checkboxGroup",
      "slug": "checkboxgroup",
      "children": []
    },
    {
      "level": 2,
      "title": "checkbox",
      "slug": "checkbox",
      "children": []
    },
    {
      "level": 2,
      "title": "image",
      "slug": "image",
      "children": []
    },
    {
      "level": 2,
      "title": "media",
      "slug": "media",
      "children": []
    },
    {
      "level": 2,
      "title": "upload",
      "slug": "upload",
      "children": []
    },
    {
      "level": 2,
      "title": "unit",
      "slug": "unit",
      "children": []
    },
    {
      "level": 2,
      "title": "icon",
      "slug": "icon",
      "children": []
    },
    {
      "level": 2,
      "title": "code",
      "slug": "code",
      "children": []
    },
    {
      "level": 2,
      "title": "radius",
      "slug": "radius",
      "children": []
    },
    {
      "level": 2,
      "title": "margin",
      "slug": "margin",
      "children": []
    },
    {
      "level": 2,
      "title": "padding",
      "slug": "padding",
      "children": []
    },
    {
      "level": 2,
      "title": "size",
      "slug": "size",
      "children": []
    },
    {
      "level": 2,
      "title": "textStyle",
      "slug": "textstyle",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5C5E\u6027\u8BF4\u660E",
      "slug": "\u5C5E\u6027\u8BF4\u660E",
      "children": [
        {
          "level": 3,
          "title": "depends",
          "slug": "depends",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1660650492e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 6
      }
    ]
  },
  "filePathRelative": "guide/type.md"
};
var type_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$s
}, Symbol.toStringTag, { value: "Module" }));
const data$r = {
  "key": "v-d50f5082",
  "path": "/theme/",
  "title": "\u7EC4\u4EF6\u4E3B\u9898",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1650015008e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "theme/README.md"
};
var index_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$r
}, Symbol.toStringTag, { value: "Module" }));
const data$q = {
  "key": "v-0a41b2f7",
  "path": "/components/chart/bar.html",
  "title": "\u67F1\u72B6\u56FE",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1659079943e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "components/chart/bar.md"
};
var bar_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$q
}, Symbol.toStringTag, { value: "Module" }));
const data$p = {
  "key": "v-151c0caa",
  "path": "/components/chart/calendar.html",
  "title": "\u65E5\u5386\u56FE",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1659079943e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/chart/calendar.md"
};
var calendar_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$p
}, Symbol.toStringTag, { value: "Module" }));
const data$o = {
  "key": "v-3bfbad91",
  "path": "/components/chart/gauge.html",
  "title": "\u4EEA\u8868\u76D8",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1659079943e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "components/chart/gauge.md"
};
var gauge_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$o
}, Symbol.toStringTag, { value: "Module" }));
const data$n = {
  "key": "v-62954d98",
  "path": "/components/chart/line.html",
  "title": "\u6298\u7EBF\u56FE",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1659079943e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "components/chart/line.md"
};
var line_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$n
}, Symbol.toStringTag, { value: "Module" }));
const data$m = {
  "key": "v-454eb5da",
  "path": "/components/chart/other.html",
  "title": "\u5176\u5B83",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1659079943e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "components/chart/other.md"
};
var other_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$m
}, Symbol.toStringTag, { value: "Module" }));
const data$l = {
  "key": "v-1bfa47c2",
  "path": "/components/chart/pictograph.html",
  "title": "\u8C61\u5F62\u56FE",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1659079943e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "components/chart/pictograph.md"
};
var pictograph_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$l
}, Symbol.toStringTag, { value: "Module" }));
const data$k = {
  "key": "v-4995011e",
  "path": "/components/chart/pie.html",
  "title": "\u997C\u56FE",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1659079943e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "components/chart/pie.md"
};
var pie_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$k
}, Symbol.toStringTag, { value: "Module" }));
const data$j = {
  "key": "v-a40da8b8",
  "path": "/components/chart/radar.html",
  "title": "\u96F7\u8FBE\u56FE",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649168746e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/chart/radar.md"
};
var radar_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$j
}, Symbol.toStringTag, { value: "Module" }));
const data$i = {
  "key": "v-097617af",
  "path": "/components/control/btn.html",
  "title": "\u6309\u94AE",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1659079943e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "components/control/btn.md"
};
var btn_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$i
}, Symbol.toStringTag, { value: "Module" }));
const data$h = {
  "key": "v-31257a0a",
  "path": "/components/control/other.html",
  "title": "\u5176\u5B83",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1659079943e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/control/other.md"
};
var other_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$h
}, Symbol.toStringTag, { value: "Module" }));
const data$g = {
  "key": "v-955dcf2a",
  "path": "/components/control/select.html",
  "title": "\u9009\u62E9\u6846",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1659079943e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/control/select.md"
};
var select_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$g
}, Symbol.toStringTag, { value: "Module" }));
const data$f = {
  "key": "v-02bd726f",
  "path": "/components/control/swiper.html",
  "title": "\u8F6E\u64AD",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1659079943e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/control/swiper.md"
};
var swiper_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$f
}, Symbol.toStringTag, { value: "Module" }));
const data$e = {
  "key": "v-40079946",
  "path": "/components/deck/header.html",
  "title": "\u5934\u90E8\u88C5\u9970",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649168746e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/deck/header.md"
};
var header_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$e
}, Symbol.toStringTag, { value: "Module" }));
const data$d = {
  "key": "v-2313815a",
  "path": "/components/deck/icon.html",
  "title": "\u56FE\u6807",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649168746e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/deck/icon.md"
};
var icon_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$d
}, Symbol.toStringTag, { value: "Module" }));
const data$c = {
  "key": "v-749dc084",
  "path": "/components/deck/shape.html",
  "title": "\u5F62\u72B6",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649168746e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/deck/shape.md"
};
var shape_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$c
}, Symbol.toStringTag, { value: "Module" }));
const data$b = {
  "key": "v-0d8695b4",
  "path": "/components/deck/streamer.html",
  "title": "\u52A8\u753B",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649168746e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/deck/streamer.md"
};
var streamer_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$b
}, Symbol.toStringTag, { value: "Module" }));
const data$a = {
  "key": "v-305c6767",
  "path": "/components/deck/title.html",
  "title": "\u6807\u9898\u88C5\u9970",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649168746e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/deck/title.md"
};
var title_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$a
}, Symbol.toStringTag, { value: "Module" }));
const data$9 = {
  "key": "v-a5c63bec",
  "path": "/components/list/list.html",
  "title": "\u5217\u8868",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649168746e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/list/list.md"
};
var list_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$9
}, Symbol.toStringTag, { value: "Module" }));
const data$8 = {
  "key": "v-77b50ec8",
  "path": "/components/list/table.html",
  "title": "\u8868\u683C",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649168746e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/list/table.md"
};
var table_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$8
}, Symbol.toStringTag, { value: "Module" }));
const data$7 = {
  "key": "v-e5285fd6",
  "path": "/components/map/3D.html",
  "title": "3D",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1659079943e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/map/3D.md"
};
var _3D_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$7
}, Symbol.toStringTag, { value: "Module" }));
const data$6 = {
  "key": "v-14903f90",
  "path": "/components/map/map.html",
  "title": "\u5730\u56FE",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1659079943e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/map/map.md"
};
var map_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$6
}, Symbol.toStringTag, { value: "Module" }));
const data$5 = {
  "key": "v-1e417be8",
  "path": "/components/text/indicator.html",
  "title": "\u6307\u6807",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649168746e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/text/indicator.md"
};
var indicator_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$5
}, Symbol.toStringTag, { value: "Module" }));
const data$4 = {
  "key": "v-33953caa",
  "path": "/components/text/text.html",
  "title": "\u6587\u5B57",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649168746e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/text/text.md"
};
var text_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$4
}, Symbol.toStringTag, { value: "Module" }));
const data$3 = {
  "key": "v-686b8072",
  "path": "/components/text/weather.html",
  "title": "\u5929\u6C14",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649168746e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/text/weather.md"
};
var weather_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$3
}, Symbol.toStringTag, { value: "Module" }));
const data$2 = {
  "key": "v-851ded6c",
  "path": "/components/video/img.html",
  "title": "\u56FE\u7247",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1659079943e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/video/img.md"
};
var img_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$2
}, Symbol.toStringTag, { value: "Module" }));
const data$1 = {
  "key": "v-69e57a92",
  "path": "/components/video/video.html",
  "title": "\u89C6\u9891",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1659079943e3,
    "contributors": [
      {
        "name": "lfourg",
        "email": "limengnew@163.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "components/video/video.md"
};
var video_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$1
}, Symbol.toStringTag, { value: "Module" }));
const data = {
  "key": "v-3706649a",
  "path": "/404.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "layout": "404"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": null
};
var _404_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = (_b = themeLocale.value.home) != null ? _b : routeLocale.value;
    const homeText = (_c = themeLocale.value.backToHome) != null ? _c : "Back to home";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-container" }, _attrs))}><div class="theme-default-content"><h1>404</h1><blockquote>${serverRenderer.ssrInterpolate(getMsg())}</blockquote>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: vue.unref(homeLink) }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(vue.unref(homeText))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(vue.unref(homeText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/404.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var _404 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$n
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Content = vue.resolveComponent("Content");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-default-content custom" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeContent.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$l = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const features = vue.computed(() => {
      if (isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(features).length) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "features" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(features), (feature) => {
          _push(`<div class="feature"><h2>${serverRenderer.ssrInterpolate(feature.title)}</h2><p>${serverRenderer.ssrInterpolate(feature.details)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFeatures.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const footer = vue.computed(() => frontmatter.value.footer);
    const footerHtml = vue.computed(() => frontmatter.value.footerHtml);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(footer)) {
        _push(`<!--[-->`);
        if (vue.unref(footerHtml)) {
          _push(`<div class="footer">${vue.unref(footer)}</div>`);
        } else {
          _push(`<div class="footer">${serverRenderer.ssrInterpolate(vue.unref(footer))}</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFooter.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __default__ = vue.defineComponent({
  inheritAttrs: false
});
const _sfc_main$j = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = vueRouter.useRoute();
    const site = useSiteData();
    const { item } = vue.toRefs(props);
    const hasHttpProtocol = vue.computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = vue.computed(() => isLinkMailto(item.value.link) || isLinkTel(item.value.link));
    const linkTarget = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = vue.computed(() => linkTarget.value === "_blank");
    const isRouterLink = vue.computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const linkRel = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = vue.computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = vue.computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = vue.computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
      if (vue.unref(isRouterLink)) {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({
          class: { "router-link-active": vue.unref(isActive) },
          to: vue.unref(item).link,
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
              _push2(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
              serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "before"),
                vue.createTextVNode(" " + vue.toDisplayString(vue.unref(item).text) + " ", 1),
                vue.renderSlot(_ctx.$slots, "after")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "external-link",
          href: vue.unref(item).link,
          rel: vue.unref(linkRel),
          target: vue.unref(linkTarget),
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
        _push(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(isBlankTarget)) {
          _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
        _push(`</a>`);
      }
    };
  }
}));
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/AutoLink.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = vue.computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroText = vue.computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const heroAlt = vue.computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const tagline = vue.computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = vue.computed(() => {
      if (!isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const HomeHeroImage = () => {
      if (!heroImage.value)
        return null;
      const img = vue.h("img", {
        src: withBase(heroImage.value),
        alt: heroAlt.value
      });
      if (frontmatter.value.heroImageDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, () => img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "hero" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(HomeHeroImage, null, null, _parent));
      if (vue.unref(heroText)) {
        _push(`<h1 id="main-title">${serverRenderer.ssrInterpolate(vue.unref(heroText))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(tagline)) {
        _push(`<p class="description">${serverRenderer.ssrInterpolate(vue.unref(tagline))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(actions).length) {
        _push(`<p class="actions"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(actions), (action) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$j, {
            key: action.text,
            class: ["action-button", [action.type]],
            item: action
          }, null, _parent));
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeHero.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "home" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$l, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(HomeContent, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$k, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Home.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = vue.computed(() => themeLocale.value.home || routeLocale.value);
    const navbarBrandTitle = vue.computed(() => siteLocale.value.title);
    const navbarBrandLogo = vue.computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = vue.h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, () => img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({ to: vue.unref(navbarBrandLink) }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(NavbarBrandLogo, null, null, _parent2, _scopeId));
            if (vue.unref(navbarBrandTitle)) {
              _push2(`<span class="${serverRenderer.ssrRenderClass([{ "can-hide": vue.unref(navbarBrandLogo) }, "site-name"])}"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(navbarBrandTitle))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.createVNode(NavbarBrandLogo),
              vue.unref(navbarBrandTitle) ? (vue.openBlock(), vue.createBlock("span", {
                key: 0,
                class: ["site-name", { "can-hide": vue.unref(navbarBrandLogo) }]
              }, vue.toDisplayString(vue.unref(navbarBrandTitle)), 3)) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarBrand.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = vue.toRefs(props);
    const dropdownAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const open = vue.ref(false);
    const route = vueRouter.useRoute();
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["navbar-dropdown-wrapper", { open: open.value }]
      }, _attrs))}><button class="navbar-dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="arrow down"></span></button><button class="navbar-dropdown-title-mobile" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="${serverRenderer.ssrRenderClass([open.value ? "down" : "right", "arrow"])}"></span></button>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$f, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${serverRenderer.ssrRenderStyle(open.value ? null : { display: "none" })}" class="navbar-dropdown"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
              _push2(`<li class="navbar-dropdown-item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h4 class="navbar-dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$j, { item: child }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(child.text)}</span>`);
                }
                _push2(`</h4><ul class="navbar-dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                serverRenderer.ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="navbar-dropdown-subitem"${_scopeId}>`);
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$j, { item: grandchild }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(serverRenderer.ssrRenderComponent(_sfc_main$j, { item: child }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              vue.withDirectives(vue.createVNode("ul", { class: "navbar-dropdown" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                  return vue.openBlock(), vue.createBlock("li", {
                    key: child.text,
                    class: "navbar-dropdown-item"
                  }, [
                    child.children ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                      vue.createVNode("h4", { class: "navbar-dropdown-subtitle" }, [
                        child.link ? (vue.openBlock(), vue.createBlock(_sfc_main$j, {
                          key: 0,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && child.children.length === 0 && (open.value = false)
                        }, null, 8, ["item", "onFocusout"])) : (vue.openBlock(), vue.createBlock("span", { key: 1 }, vue.toDisplayString(child.text), 1))
                      ]),
                      vue.createVNode("ul", { class: "navbar-dropdown-subitem-wrapper" }, [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(child.children, (grandchild) => {
                          return vue.openBlock(), vue.createBlock("li", {
                            key: grandchild.link,
                            class: "navbar-dropdown-subitem"
                          }, [
                            vue.createVNode(_sfc_main$j, {
                              item: grandchild,
                              onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                            }, null, 8, ["item", "onFocusout"])
                          ]);
                        }), 128))
                      ])
                    ], 64)) : (vue.openBlock(), vue.createBlock(_sfc_main$j, {
                      key: 1,
                      item: child,
                      onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                    }, null, 8, ["item", "onFocusout"]))
                  ]);
                }), 128))
              ], 512), [
                [vue.vShow, open.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarDropdown.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = vueRouter.useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unknown language",
          ariaLabel: (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : "unkown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c, _d, _e, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c = themeLocale.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e = targetThemeLocale.selectLanguageName) != null ? _e : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = targetLocalePage;
              } else {
                link = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = vue.computed(() => themeLocale.value.repo);
      const repoType = vue.computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = vue.computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = vue.computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return vue.computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return __spreadProps(__spreadValues({}, item), {
          children: item.children.map(resolveNavbarItem)
        });
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = vue.computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(navbarLinks).length) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "navbar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(navbarLinks), (item) => {
          _push(`<div class="navbar-item">`);
          if (item.children) {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$e, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$j, { item }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarItems.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-dark-button",
        title: vue.unref(themeLocale).toggleDarkMode
      }, _attrs))}><svg style="${serverRenderer.ssrRenderStyle(!vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg><svg style="${serverRenderer.ssrRenderStyle(vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg></button>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-sidebar-button",
        title: vue.unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = vue.ref(null);
    const navbarBrand = vue.ref(null);
    const linksWrapperMaxWidth = vue.ref(0);
    const linksWrapperStyle = vue.computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    const enableDarkMode = vue.computed(() => themeLocale.value.darkMode);
    vue.onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = navbarBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavbarSearch = vue.resolveComponent("NavbarSearch");
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$b, null, null, _parent));
      _push(`<span>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$g, null, null, _parent));
      _push(`</span><div class="navbar-items-wrapper" style="${serverRenderer.ssrRenderStyle(vue.unref(linksWrapperStyle))}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$d, { class: "can-hide" }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
      if (vue.unref(enableDarkMode)) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$c, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_NavbarSearch, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-meta" }, _attrs))}>`);
      if (vue.unref(editNavLink)) {
        _push(`<div class="meta-item edit-link">`);
        _push(serverRenderer.ssrRenderComponent(_sfc_main$j, {
          class: "meta-item-label",
          item: vue.unref(editNavLink)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(lastUpdated)) {
        _push(`<div class="meta-item last-updated"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).lastUpdatedText)}: </span>`);
        _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="meta-item-info"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(lastUpdated))}</span>`);
            } else {
              return [
                vue.createVNode("span", { class: "meta-item-info" }, vue.toDisplayString(vue.unref(lastUpdated)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(contributors) && vue.unref(contributors).length) {
        _push(`<div class="meta-item contributors"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(contributors), (contributor, index2) => {
          _push(`<!--[--><span class="contributor"${serverRenderer.ssrRenderAttr("title", `email: ${contributor.email}`)}>${serverRenderer.ssrInterpolate(contributor.name)}</span>`);
          if (index2 !== vue.unref(contributors).length - 1) {
            _push(`<!--[-->, <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index2 = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index2 !== -1) {
        const targetItem = sidebarItems2[index2 + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = vueRouter.useRoute();
    const prevNavLink = vue.computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = vue.computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(prevNavLink) || vue.unref(nextNavLink)) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-nav" }, _attrs))}><p class="inner">`);
        if (vue.unref(prevNavLink)) {
          _push(`<span class="prev">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$j, { item: vue.unref(prevNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(nextNavLink)) {
          _push(`<span class="next">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$j, { item: vue.unref(nextNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="theme-default-content">`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$8, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Page.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = vue.toRefs(props);
    const route = vueRouter.useRoute();
    const router = vueRouter.useRouter();
    const isActive = vue.computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = vue.computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const isOpen = vue.ref(true);
    const onClick = vue.ref(void 0);
    if (item.value.collapsible) {
      isOpen.value = isActive.value;
      onClick.value = () => {
        isOpen.value = !isOpen.value;
      };
      router.afterEach(() => {
        isOpen.value = isActive.value;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SidebarItem = vue.resolveComponent("SidebarItem", true);
      _push(`<li${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (vue.unref(item).link) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$j, {
          class: vue.unref(itemClass),
          item: vue.unref(item)
        }, null, _parent));
      } else {
        _push(`<p tabindex="0" class="${serverRenderer.ssrRenderClass(vue.unref(itemClass))}">${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(item).collapsible) {
          _push(`<span class="${serverRenderer.ssrRenderClass([isOpen.value ? "down" : "right", "arrow"])}"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      }
      if ((_a = vue.unref(item).children) == null ? void 0 : _a.length) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$f, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul style="${serverRenderer.ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="sidebar-item-children"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
                _push2(serverRenderer.ssrRenderComponent(_component_SidebarItem, {
                  key: `${vue.unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: vue.unref(depth) + 1
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                vue.withDirectives(vue.createVNode("ul", { class: "sidebar-item-children" }, [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                    return vue.openBlock(), vue.createBlock(_component_SidebarItem, {
                      key: `${vue.unref(depth)}${child.text}${child.link}`,
                      item: child,
                      depth: vue.unref(depth) + 1
                    }, null, 8, ["item", "depth"]);
                  }), 128))
                ], 512), [
                  [vue.vShow, isOpen.value]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarItems = useSidebarItems();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(sidebarItems).length) {
        _push(`<ul${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(sidebarItems), (item) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$6, {
            key: item.link || item.text,
            item
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItems.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$d, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$5, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Sidebar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = vue.computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = vue.ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const containerClass = vue.computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    vue.onMounted(() => {
      const router = vueRouter.useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    vue.onUnmounted(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["theme-container", vue.unref(containerClass)]
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
        if (vue.unref(shouldShowNavbar)) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$a, null, {
            before: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-before")
                ];
              }
            }),
            after: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-after")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="sidebar-mask"></div>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$4, null, {
          top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-top")
              ];
            }
          }),
          bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-bottom")
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "page", {}, () => {
        if (vue.unref(frontmatter).home) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$h, null, null, _parent));
        } else {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$7, vue.mergeProps({
            key: vue.unref(page).path
          }, _attrs), {
            top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-top")
                ];
              }
            }),
            bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-bottom")
                ];
              }
            }),
            _: 3
          }, _parent));
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var Layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
var element_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = {
  __ssrInlineRender: true,
  props: {
    data: []
  },
  setup(__props) {
    const props = __props;
    let basePath = "https://lfourg.github.io/anov-ui-pro/#/docs/";
    let data2 = vue.ref(props.data);
    vue.onMounted(() => {
      data2.value.forEach((item, index2) => {
        Lottie__default["default"].loadAnimation({
          container: document.getElementById("eleCon" + index2),
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "/anov-ui-doc/line3.json"
        });
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(data2), (item, index2) => {
        _push(`<div class="comp" data-v-65afa42e>`);
        if (!item.load) {
          _push(`<div class="loading" data-v-65afa42e><div${serverRenderer.ssrRenderAttr("id", `eleCon${index2}`)} class="icon" data-v-65afa42e></div><span class="word" data-v-65afa42e>\u52A0\u8F7D\u4E2D...</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="title" data-v-65afa42e>${serverRenderer.ssrInterpolate(item.name)}</p><iframe frameborder="0" width="100%" height="500px"${serverRenderer.ssrRenderAttr("src", vue.unref(basePath) + item.code)} data-v-65afa42e></iframe></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/element.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var element = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-65afa42e"]]);
var element$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": element
}, Symbol.toStringTag, { value: "Module" }));
var guideTypeDetail_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = {
  __ssrInlineRender: true,
  props: {
    config: {},
    src: ""
  },
  setup(__props) {
    const props = __props;
    const { config, src } = props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><p data-v-31226899>${serverRenderer.ssrInterpolate(vue.unref(config).description)}</p><span class="title" data-v-31226899>\u914D\u7F6E\u9879\u8BF4\u660E\uFF1A</span><table data-v-31226899><tr data-v-31226899><td data-v-31226899>\u5B57\u6BB5\u540D</td><td style="${serverRenderer.ssrRenderStyle({ "min-width": "80px" })}" data-v-31226899>\u542B\u4E49</td><td data-v-31226899>\u7C7B\u578B</td><td data-v-31226899>\u662F\u5426\u5FC5\u987B</td><td data-v-31226899>\u9ED8\u8BA4\u503C</td><td data-v-31226899>\u5907\u6CE8</td></tr><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(config).files, (item, index2) => {
        _push(`<!--[--><tr data-v-31226899><td data-v-31226899>${item.name}</td><td data-v-31226899>${serverRenderer.ssrInterpolate(item.disName)}</td><td data-v-31226899>${serverRenderer.ssrInterpolate(item.type)}</td><td data-v-31226899>${serverRenderer.ssrInterpolate(item.required)}</td><td data-v-31226899>${serverRenderer.ssrInterpolate(item.defaultValue)}</td><td data-v-31226899>${serverRenderer.ssrInterpolate(item.remark)}</td></tr>`);
        if (item.children) {
          _push(`<!--[--><tr data-v-31226899><td colspan="6" data-v-31226899>${item.children.description}</td></tr><!--[-->`);
          serverRenderer.ssrRenderList(item.children.files, (citem, cindex) => {
            _push(`<tr data-v-31226899><td data-v-31226899>${serverRenderer.ssrInterpolate(citem.name)}</td><td data-v-31226899>${serverRenderer.ssrInterpolate(citem.disName)}</td><td data-v-31226899>${serverRenderer.ssrInterpolate(citem.type)}</td><td data-v-31226899>${serverRenderer.ssrInterpolate(citem.required)}</td><td data-v-31226899>${serverRenderer.ssrInterpolate(citem.defaultValue)}</td><td data-v-31226899>${serverRenderer.ssrInterpolate(citem.remark)}</td></tr>`);
          });
          _push(`<!--]--><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></table><span class="title" data-v-31226899>\u914D\u7F6E\u793A\u4F8B\uFF1A</span><img${serverRenderer.ssrRenderAttr("src", vue.unref(src))} data-v-31226899><pre class="language-javascript" data-v-31226899><code data-v-31226899>${serverRenderer.ssrInterpolate(vue.unref(config).code)}</code></pre><span class="title" data-v-31226899>\u503C\u8BF4\u660E\uFF1A</span>`);
      if (vue.unref(config).value) {
        _push(`<pre${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "language-javascript" }, _attrs))} data-v-31226899><code data-v-31226899>${serverRenderer.ssrInterpolate(vue.unref(config).value)}</code></pre>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/guideTypeDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var guideTypeDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-31226899"]]);
var guideTypeDetail$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": guideTypeDetail
}, Symbol.toStringTag, { value: "Module" }));
var theme_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  __ssrInlineRender: true,
  props: {
    imgs: [],
    path: ""
  },
  setup(__props) {
    const props = __props;
    const { imgs, path } = props;
    const activeIndex = vue.ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "list" }, _attrs))} data-v-28c9789c><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(imgs), (item, index2) => {
        _push(`<div style="${serverRenderer.ssrRenderStyle({
          background: `url(${vue.unref(path)}${item}) no-repeat`
        })}" class="${serverRenderer.ssrRenderClass([[index2 == activeIndex.value ? "active" : ""], "item"])}" data-v-28c9789c></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/theme.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var theme = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-28c9789c"]]);
var theme$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": theme
}, Symbol.toStringTag, { value: "Module" }));
exports.createVueApp = createVueApp;
