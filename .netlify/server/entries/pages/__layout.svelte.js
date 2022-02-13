var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => _layout,
  load: () => load
});
var import_index_8bee4077 = __toModule(require("../../chunks/index-8bee4077.js"));
var import_store_408058b2 = __toModule(require("../../chunks/store-408058b2.js"));
var global = "";
var MenuBtn_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "button.svelte-18zln6a{display:flex;align-items:center;transition:opacity 0.2s}button.svelte-18zln6a:hover,.open.svelte-18zln6a{opacity:0.25}@media(min-width: 768px){button.svelte-18zln6a{display:none}}",
  map: null
};
const MenuBtn = (0, import_index_8bee4077.c)(($$result, $$props, $$bindings, slots) => {
  let outerWidth;
  let $menuOpen, $$unsubscribe_menuOpen;
  $$unsubscribe_menuOpen = (0, import_index_8bee4077.a)(import_store_408058b2.m, (value) => $menuOpen = value);
  $$result.css.add(css$2);
  outerWidth = 0;
  {
    if (outerWidth >= 768) {
      import_store_408058b2.m.update((status) => {
        return false;
      });
    }
  }
  $$unsubscribe_menuOpen();
  return `

<button class="${(0, import_index_8bee4077.e)((0, import_index_8bee4077.n)($menuOpen ? "open" : "")) + " svelte-18zln6a"}" type="${"button"}" aria-controls="${"primary-nav"}"${(0, import_index_8bee4077.b)("aria-expanded", $menuOpen, 0)}><span class="${"sr-only"}">Menu</span>
  <svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"17"}"><g fill="${"#FFF"}" fill-rule="${"evenodd"}"><path d="${"M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"}"></path></g></svg>
</button>`;
});
var Navigation_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'nav.svelte-pogsjl.svelte-pogsjl{display:flex}a.svelte-pogsjl.svelte-pogsjl{font-weight:700;line-height:1.5625rem;text-decoration:unset;text-transform:uppercase}@media(max-width: 767px){nav.svelte-pogsjl.svelte-pogsjl{background-color:var(--background);flex-direction:column;min-height:100vh;padding:1.5rem;width:100%;position:absolute;left:-100%;transition:left 0.3s ease-in-out;z-index:2}.open.svelte-pogsjl.svelte-pogsjl{left:0}.decoration.svelte-pogsjl.svelte-pogsjl{display:inline-block;height:20px;width:20px;border-radius:100px}a.svelte-pogsjl.svelte-pogsjl{background-image:url("/assets/icon-chevron.svg");background-repeat:no-repeat;background-position:center right;display:flex;align-items:center;gap:25px;font-size:0.9375rem;letter-spacing:1.36364px;padding:1.25rem 0}a.svelte-pogsjl+a.svelte-pogsjl{border-top:1px solid hsla(var(--white-opaque) / 0.1)}}@media(min-width: 768px){nav.svelte-pogsjl.svelte-pogsjl{gap:2.0625rem;justify-content:space-between;padding:0 3.25rem 1.6875rem}a.svelte-pogsjl.svelte-pogsjl{letter-spacing:1px;opacity:0.75;transition:opacity 0.2s}a.svelte-pogsjl.svelte-pogsjl:hover{opacity:1}}@media(min-width: 1000px){nav.svelte-pogsjl.svelte-pogsjl{padding:0}a.svelte-pogsjl.svelte-pogsjl{position:relative}a.svelte-pogsjl:hover .decoration.svelte-pogsjl{display:inline-block;height:4px;width:100%;position:absolute;top:-2.0625rem}}',
  map: null
};
const Navigation = (0, import_index_8bee4077.c)(($$result, $$props, $$bindings, slots) => {
  let $menuOpen, $$unsubscribe_menuOpen;
  $$unsubscribe_menuOpen = (0, import_index_8bee4077.a)(import_store_408058b2.m, (value) => $menuOpen = value);
  let { planets } = $$props;
  let wideScreen;
  if ($$props.planets === void 0 && $$bindings.planets && planets !== void 0)
    $$bindings.planets(planets);
  $$result.css.add(css$1);
  {
    {
      wideScreen = false;
    }
  }
  $$unsubscribe_menuOpen();
  return `

<nav id="${"primary-nav"}" class="${(0, import_index_8bee4077.e)((0, import_index_8bee4077.n)($menuOpen ? "open" : "")) + " svelte-pogsjl"}">${(0, import_index_8bee4077.d)(planets, (planet) => {
    return `<a sveltekit:prefetch${(0, import_index_8bee4077.b)("href", `/${planet.toLowerCase()}`, 0)}${(0, import_index_8bee4077.b)("tabindex", !wideScreen && !$menuOpen ? "-1" : "0", 0)} class="${"svelte-pogsjl"}"><div class="${"decoration svelte-pogsjl"}"${(0, import_index_8bee4077.f)({
      "background-color": wideScreen ? `var(--${planet.toLowerCase()})` : `var(--nav-${planet.toLowerCase()})`
    })}></div>
      ${(0, import_index_8bee4077.e)(planet)}</a>`;
  })}
</nav>`;
});
var Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1i5mwhq{border-bottom:1px solid hsl(var(--white-opaque) / 0.2)}.container.svelte-1i5mwhq{display:flex;justify-content:space-between;padding:1rem 1.5rem}h2.svelte-1i5mwhq{font-size:1.75rem;letter-spacing:-1.05px;line-height:2.25rem;text-transform:uppercase}@media(min-width: 768px){.container.svelte-1i5mwhq{justify-content:center;padding:2rem 0 2.4375rem}}@media(min-width: 1000px){header.svelte-1i5mwhq{display:flex;align-items:end;justify-content:space-between;padding:1.375rem 2.5625rem 1.6875rem 2rem}.container.svelte-1i5mwhq{padding:0}}",
  map: null
};
const Header = (0, import_index_8bee4077.c)(($$result, $$props, $$bindings, slots) => {
  let { planets } = $$props;
  if ($$props.planets === void 0 && $$bindings.planets && planets !== void 0)
    $$bindings.planets(planets);
  $$result.css.add(css);
  return `<header class="${"svelte-1i5mwhq"}"><div class="${"container svelte-1i5mwhq"}"><h2 class="${"svelte-1i5mwhq"}">The planets</h2>
    ${(0, import_index_8bee4077.v)(MenuBtn, "Button").$$render($$result, {}, {}, {})}</div>
  ${(0, import_index_8bee4077.v)(Navigation, "Nav").$$render($$result, { planets }, {}, {})}
</header>`;
});
async function load({ fetch }) {
  const res = await fetch("/api/planets");
  const data = await res.json();
  return { props: { planets: data } };
}
const _layout = (0, import_index_8bee4077.c)(($$result, $$props, $$bindings, slots) => {
  let { planets } = $$props;
  if ($$props.planets === void 0 && $$bindings.planets && planets !== void 0)
    $$bindings.planets(planets);
  return `${$$result.head += `${$$result.title = `<title>Frontend Mentor | Planets fact site</title>`, ""}`, ""}

${(0, import_index_8bee4077.v)(Header, "Header").$$render($$result, { planets }, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
