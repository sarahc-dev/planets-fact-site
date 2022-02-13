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
  default: () => U5Bplanetu5D,
  load: () => load
});
var import_index_8bee4077 = __toModule(require("../../chunks/index-8bee4077.js"));
var import_store_408058b2 = __toModule(require("../../chunks/store-408058b2.js"));
var Tablist_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "section.svelte-1as5jlu.svelte-1as5jlu{border-bottom:1px solid hsl(var(--white-opaque) / 0.2)}ul.svelte-1as5jlu.svelte-1as5jlu{display:flex;justify-content:space-between;padding:1.25rem 1.5rem 0;max-width:30rem;margin:0 auto}li.svelte-1as5jlu.svelte-1as5jlu{color:hsl(var(--white-opaque) / 0.5);font-size:0.5625rem;font-weight:700;letter-spacing:1.92857px;line-height:0.625rem;text-transform:uppercase;padding:0 4px 17px;cursor:pointer}li.svelte-1as5jlu.svelte-1as5jlu:hover:not(.active){background-color:hsl(0, 0%, 85%, 0.2) !important}li.svelte-1as5jlu.svelte-1as5jlu:focus-visible{outline-offset:4px}.number.svelte-1as5jlu.svelte-1as5jlu,.text.svelte-1as5jlu.svelte-1as5jlu{display:none}.active.svelte-1as5jlu.svelte-1as5jlu{border-bottom:4px solid;color:var(--text);outline:none}@media(min-width: 768px){section.svelte-1as5jlu.svelte-1as5jlu{border-bottom:none}ul.svelte-1as5jlu.svelte-1as5jlu{display:block;max-width:unset;padding:3.5rem 2.5rem 0 0}li.svelte-1as5jlu.svelte-1as5jlu{color:var(--text);line-height:1.5625rem;outline:1px solid hsl(var(--white-opaque) / 0.2);padding:0.5rem 1.25rem 0.4375rem}li.svelte-1as5jlu+li.svelte-1as5jlu{margin-top:1rem}li.svelte-1as5jlu.svelte-1as5jlu:focus-visible{outline:2px solid white}.number.svelte-1as5jlu.svelte-1as5jlu,.text.svelte-1as5jlu.svelte-1as5jlu{display:unset}.number.svelte-1as5jlu.svelte-1as5jlu{opacity:0.5;margin-right:0.875rem}}@media(min-width: 1250px){section.svelte-1as5jlu.svelte-1as5jlu{grid-row:2;grid-column:2}ul.svelte-1as5jlu.svelte-1as5jlu{padding:0 10.3125rem 2rem 0}li.svelte-1as5jlu.svelte-1as5jlu{font-size:0.75rem;letter-spacing:2.57143px}}@media(min-width: 1300px){li.svelte-1as5jlu.svelte-1as5jlu{padding:0.75rem 1.75rem 0.6875rem}}",
  map: null
};
const Tablist = (0, import_index_8bee4077.c)(($$result, $$props, $$bindings, slots) => {
  let { planet } = $$props;
  let { wideScreen } = $$props;
  let { currentTab = 1 } = $$props;
  if ($$props.planet === void 0 && $$bindings.planet && planet !== void 0)
    $$bindings.planet(planet);
  if ($$props.wideScreen === void 0 && $$bindings.wideScreen && wideScreen !== void 0)
    $$bindings.wideScreen(wideScreen);
  if ($$props.currentTab === void 0 && $$bindings.currentTab && currentTab !== void 0)
    $$bindings.currentTab(currentTab);
  $$result.css.add(css$4);
  return `<section class="${"svelte-1as5jlu"}"><ul role="${"tablist"}" class="${"svelte-1as5jlu"}"><li class="${(0, import_index_8bee4077.e)((0, import_index_8bee4077.n)(currentTab === 1 ? "active" : "")) + " svelte-1as5jlu"}" role="${"tab"}"${(0, import_index_8bee4077.b)("tabindex", currentTab === 1 ? 0 : -1, 0)} aria-controls="${"overview-tab"}"${(0, import_index_8bee4077.b)("aria-selected", currentTab === 1 ? true : false, 0)}${(0, import_index_8bee4077.f)({
    "border-color": `var(--${planet.toLowerCase()})`,
    "background-color": currentTab === 1 && wideScreen ? `var(--${planet.toLowerCase()})` : "transparent"
  })}><span aria-hidden="${"true"}" class="${"number svelte-1as5jlu"}">01</span>
      Overview
    </li>
    <li class="${(0, import_index_8bee4077.e)((0, import_index_8bee4077.n)(currentTab === 2 ? "active" : "")) + " svelte-1as5jlu"}" role="${"tab"}"${(0, import_index_8bee4077.b)("tabindex", currentTab === 2 ? 0 : -1, 0)} aria-controls="${"structure-tab"}"${(0, import_index_8bee4077.b)("aria-selected", currentTab === 2 ? true : false, 0)}${(0, import_index_8bee4077.f)({
    "border-color": `var(--${planet.toLowerCase()})`,
    "background-color": currentTab === 2 && wideScreen ? `var(--${planet.toLowerCase()})` : "transparent"
  })}><span aria-hidden="${"true"}" class="${"number svelte-1as5jlu"}">02</span>
      <span class="${"text svelte-1as5jlu"}">Internal </span>
      Structure
    </li>
    <li class="${(0, import_index_8bee4077.e)((0, import_index_8bee4077.n)(currentTab === 3 ? "active" : "")) + " svelte-1as5jlu"}" role="${"tab"}"${(0, import_index_8bee4077.b)("tabindex", currentTab === 3 ? 0 : -1, 0)} aria-controls="${"surface-tab"}"${(0, import_index_8bee4077.b)("aria-selected", currentTab === 3 ? true : false, 0)}${(0, import_index_8bee4077.f)({
    "border-color": `var(--${planet.toLowerCase()})`,
    "background-color": currentTab === 3 && wideScreen ? `var(--${planet.toLowerCase()})` : "transparent"
  })}><span aria-hidden="${"true"}" class="${"number svelte-1as5jlu"}">03</span>
      Surface
      <span class="${"text svelte-1as5jlu"}">Geology </span></li></ul>
</section>`;
});
var PlanetImg_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "section.svelte-3xxzvu{height:68.267vw;width:68.267vw;max-height:22rem;max-width:22rem;margin:1.5rem auto;position:relative;display:flex;align-items:center;justify-content:center}.geology.svelte-3xxzvu{width:62.65px;position:absolute;bottom:5vw}.mercury.svelte-3xxzvu{width:43.3594%;height:43.3594%}.venus.svelte-3xxzvu{width:60.15625%;height:60.15625%}.earth.svelte-3xxzvu,.neptune.svelte-3xxzvu{width:67.578125%;height:67.578125%}.mars.svelte-3xxzvu{width:50.390625%;height:50.390625%}.jupiter.svelte-3xxzvu{width:87.5%;height:87.5%}.saturn.svelte-3xxzvu{width:100%;height:100%}.uranus.svelte-3xxzvu{width:68.75%;height:68.75%}@media(min-width: 768px){section.svelte-3xxzvu{max-height:422px;max-width:422px;margin:1.6875rem auto 0.6875rem;grid-column:1 / 3;grid-row-start:1}.geology.svelte-3xxzvu{width:103.25px;bottom:2vw}.mercury.svelte-3xxzvu{width:43.6019%;height:43.6019%}.venus.svelte-3xxzvu{width:59.952607%;height:59.952607%}.earth.svelte-3xxzvu,.neptune.svelte-3xxzvu{width:67.535545%;height:67.535545%}.mars.svelte-3xxzvu{width:50.473934%;height:50.473934%}.jupiter.svelte-3xxzvu{width:87.440758%;height:87.440758%}.uranus.svelte-3xxzvu{width:68.720379%;height:68.720379%}}@media(min-width: 1250px){section.svelte-3xxzvu{height:46.25626vw;width:46.25626vw;max-width:800px;max-height:800px;margin:69.95px auto 17.95px;grid-row:1 / 3;grid-column:1 / 2}.geology.svelte-3xxzvu{width:163px;bottom:3.6vw}.mercury.svelte-3xxzvu{width:43.53768%;height:43.53768%}.venus.svelte-3xxzvu{width:59.952607%;height:59.952607%}.earth.svelte-3xxzvu,.neptune.svelte-3xxzvu{width:67.535545%;height:67.535545%}.mars.svelte-3xxzvu{width:50.473934%;height:50.473934%}.jupiter.svelte-3xxzvu{width:87.440758%;height:87.440758%}.uranus.svelte-3xxzvu{width:68.720379%;height:68.720379%}}",
  map: null
};
const PlanetImg = (0, import_index_8bee4077.c)(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  let { name } = $$props;
  let { currentTab } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.currentTab === void 0 && $$bindings.currentTab && currentTab !== void 0)
    $$bindings.currentTab(currentTab);
  $$result.css.add(css$3);
  return `<section class="${"svelte-3xxzvu"}">${currentTab === 2 ? `<img class="${(0, import_index_8bee4077.e)((0, import_index_8bee4077.n)(name.toLowerCase())) + " svelte-3xxzvu"}" height="${"256"}" width="${"256"}"${(0, import_index_8bee4077.b)("src", images.internal, 0)}${(0, import_index_8bee4077.b)("alt", `${name} - internal`, 0)}>` : `${currentTab === 3 ? `<img class="${(0, import_index_8bee4077.e)((0, import_index_8bee4077.n)(name.toLowerCase())) + " svelte-3xxzvu"}" height="${"256"}" width="${"256"}"${(0, import_index_8bee4077.b)("src", images.planet, 0)}${(0, import_index_8bee4077.b)("alt", name, 0)}>
      <img class="${"geology svelte-3xxzvu"}"${(0, import_index_8bee4077.b)("src", images.geology, 0)}${(0, import_index_8bee4077.b)("alt", `${name} - geology`, 0)}>` : `<img class="${(0, import_index_8bee4077.e)((0, import_index_8bee4077.n)(name.toLowerCase())) + " svelte-3xxzvu"}" height="${"256"}" width="${"256"}"${(0, import_index_8bee4077.b)("src", images.planet, 0)}${(0, import_index_8bee4077.b)("alt", name, 0)}>`}`}
</section>`;
});
var TabPanel_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "section.svelte-1v279he{padding:0 1.5rem;text-align:center}h1.svelte-1v279he{font-size:2.5rem;line-height:3.25rem;text-transform:uppercase;margin-bottom:1rem}p.svelte-1v279he{max-width:30rem;margin:0 auto}.source.svelte-1v279he{margin-top:2rem;opacity:0.5}a.svelte-1v279he{font-weight:700}.source.svelte-1v279he,svg.svelte-1v279he{display:inline-block}svg.svelte-1v279he{padding:3px 0 0 3px;overflow:visible}@media(min-width: 768px){section.svelte-1v279he{text-align:left;grid-column:1 / 2;order:-1;padding:0 69px 0 2.5rem}h1.svelte-1v279he{font-size:3rem;line-height:3.875rem;margin-bottom:1.5rem}p.svelte-1v279he{margin:unset;max-width:35rem}}@media(min-width: 1250px){section.svelte-1v279he{grid-column:2;grid-row:1;padding:126px 10.3125rem 2.4375rem 0}h1.svelte-1v279he{font-size:5rem;line-height:6.5rem;margin-bottom:1.4375rem}.source.svelte-1v279he{margin-top:1.5rem}}",
  map: null
};
const TabPanel = (0, import_index_8bee4077.c)(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { overview } = $$props;
  let { structure } = $$props;
  let { geology } = $$props;
  let { currentTab } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.overview === void 0 && $$bindings.overview && overview !== void 0)
    $$bindings.overview(overview);
  if ($$props.structure === void 0 && $$bindings.structure && structure !== void 0)
    $$bindings.structure(structure);
  if ($$props.geology === void 0 && $$bindings.geology && geology !== void 0)
    $$bindings.geology(geology);
  if ($$props.currentTab === void 0 && $$bindings.currentTab && currentTab !== void 0)
    $$bindings.currentTab(currentTab);
  $$result.css.add(css$2);
  return `<section class="${"svelte-1v279he"}"><h1 class="${"svelte-1v279he"}">${(0, import_index_8bee4077.e)(name)}</h1>

  ${currentTab === 2 ? `<article id="${"structure-tab"}"><p class="${"svelte-1v279he"}">${(0, import_index_8bee4077.e)(structure.content)}</p>
        <p class="${"source svelte-1v279he"}">Source : <a${(0, import_index_8bee4077.b)("href", structure.source, 0)} target="${"_blank"}" class="${"svelte-1v279he"}">Wikipedia </a>
          <svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"12"}" height="${"12"}" class="${"svelte-1v279he"}"><path fill="${"#FFF"}" d="${"M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"}" opacity="${".5"}"></path></svg></p></article>` : `${currentTab === 3 ? `<article id="${"surface-tab"}"><p class="${"svelte-1v279he"}">${(0, import_index_8bee4077.e)(geology.content)}</p>
        <p class="${"source svelte-1v279he"}">Source : <a${(0, import_index_8bee4077.b)("href", geology.source, 0)} target="${"_blank"}" class="${"svelte-1v279he"}">Wikipedia </a>
          <svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"12"}" height="${"12"}" class="${"svelte-1v279he"}"><path fill="${"#FFF"}" d="${"M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"}" opacity="${".5"}"></path></svg></p></article>` : `<article id="${"overview-tab"}"><p class="${"svelte-1v279he"}">${(0, import_index_8bee4077.e)(overview.content)}</p>
        <p class="${"source svelte-1v279he"}">Source : <a${(0, import_index_8bee4077.b)("href", overview.source, 0)} target="${"_blank"}" class="${"svelte-1v279he"}">Wikipedia</a></p>
        <svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"12"}" height="${"12"}" class="${"svelte-1v279he"}"><path fill="${"#FFF"}" d="${"M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"}" opacity="${".5"}"></path></svg></article>`}`}
</section>`;
});
var PlanetStats_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.stats.svelte-1o11crr.svelte-1o11crr{text-transform:uppercase;padding:1.75rem 1.5rem 2.9375rem}.box.svelte-1o11crr.svelte-1o11crr{border:1px solid hsl(var(--white-opaque) / 0.2);padding:0.5625rem 1.5rem 0.8125rem;display:flex;align-items:center;justify-content:space-between;max-width:30rem;margin:0 auto}.box.svelte-1o11crr+.box.svelte-1o11crr{margin-top:0.5rem}.description.svelte-1o11crr.svelte-1o11crr{font-size:0.5rem;font-weight:700;letter-spacing:0.727273px;line-height:1rem;opacity:0.5}.stat.svelte-1o11crr.svelte-1o11crr{font-family:"Antonio", sans-serif;font-size:1.25rem;letter-spacing:-0.75px;line-height:1.625rem}@media(min-width: 768px){section.svelte-1o11crr.svelte-1o11crr{grid-column:1 / 3}.stats.svelte-1o11crr.svelte-1o11crr{display:flex;justify-content:space-between;gap:1rem;padding:1.625rem 2.5rem 2.25rem}.box.svelte-1o11crr.svelte-1o11crr{flex-direction:column;align-items:flex-start;gap:0.375rem;width:100%;max-width:10.25rem;padding:1rem 0.9375rem 1.1875rem;margin:unset}.box.svelte-1o11crr+.box.svelte-1o11crr{margin-top:0}.stat.svelte-1o11crr.svelte-1o11crr{font-size:1.5rem;letter-spacing:-0.9px;line-height:1.9375rem}}@media(min-width: 1000px){.box.svelte-1o11crr.svelte-1o11crr{max-width:15.9375rem;padding:1.25rem 1.4375rem 1.6875rem;gap:0.25rem}.description.svelte-1o11crr.svelte-1o11crr{font-size:0.6875rem;letter-spacing:1px;line-height:1.5625rem}.stat.svelte-1o11crr.svelte-1o11crr{font-size:2.5rem;letter-spacing:-1.5px;line-height:3.25rem}}@media(min-width: 1250px){.stats.svelte-1o11crr.svelte-1o11crr{padding:0 10.3125rem 3.5rem}}',
  map: null
};
const PlanetStats = (0, import_index_8bee4077.c)(($$result, $$props, $$bindings, slots) => {
  let { rotation } = $$props;
  let { revolution } = $$props;
  let { radius } = $$props;
  let { temp } = $$props;
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0)
    $$bindings.rotation(rotation);
  if ($$props.revolution === void 0 && $$bindings.revolution && revolution !== void 0)
    $$bindings.revolution(revolution);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.temp === void 0 && $$bindings.temp && temp !== void 0)
    $$bindings.temp(temp);
  $$result.css.add(css$1);
  return `<section class="${"stats svelte-1o11crr"}"><div class="${"box svelte-1o11crr"}"><p class="${"description svelte-1o11crr"}">Rotation time</p>
    <p class="${"stat svelte-1o11crr"}">${(0, import_index_8bee4077.e)(rotation)}</p></div>
  <div class="${"box svelte-1o11crr"}"><p class="${"description svelte-1o11crr"}">Revolution time</p>
    <p class="${"stat svelte-1o11crr"}">${(0, import_index_8bee4077.e)(revolution)}</p></div>
  <div class="${"box svelte-1o11crr"}"><p class="${"description svelte-1o11crr"}">Radius</p>
    <p class="${"stat svelte-1o11crr"}">${(0, import_index_8bee4077.e)(radius)}</p></div>
  <div class="${"box svelte-1o11crr"}"><p class="${"description svelte-1o11crr"}">Average Temp.</p>
    <p class="${"stat svelte-1o11crr"}">${(0, import_index_8bee4077.e)(temp)}</p></div>
</section>`;
});
var _planet__svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 767px){.hide-body.svelte-qx4noh{display:none}}@media(min-width: 768px){main.svelte-qx4noh{display:grid;grid-template-columns:1fr 40.84323%}}@media(min-width: 900px){main.svelte-qx4noh{margin:0 2rem}}@media(min-width: 1250px){main.svelte-qx4noh{grid-template-columns:64.2361% 1fr;grid-template-rows:min-content 1fr;max-width:1650px;margin:0 auto}}",
  map: null
};
async function load({ fetch, params }) {
  const res = await fetch(`/api/${params.planet}`);
  const data = await res.json();
  return { props: { data } };
}
const U5Bplanetu5D = (0, import_index_8bee4077.c)(($$result, $$props, $$bindings, slots) => {
  let $menuOpen, $$unsubscribe_menuOpen;
  $$unsubscribe_menuOpen = (0, import_index_8bee4077.a)(import_store_408058b2.m, (value) => $menuOpen = value);
  let { data } = $$props;
  let currentTab;
  let wideScreen;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        wideScreen = false;
      }
    }
    $$rendered = `

<main class="${(0, import_index_8bee4077.e)((0, import_index_8bee4077.n)($menuOpen ? "hide-body" : "")) + " svelte-qx4noh"}">${(0, import_index_8bee4077.v)(Tablist, "Tablist").$$render($$result, {
      planet: data.name,
      wideScreen,
      currentTab
    }, {
      currentTab: ($$value) => {
        currentTab = $$value;
        $$settled = false;
      }
    }, {})}
    ${(0, import_index_8bee4077.v)(PlanetImg, "PlanetImg").$$render($$result, {
      images: data.images,
      name: data.name,
      currentTab
    }, {}, {})}
    ${(0, import_index_8bee4077.v)(TabPanel, "PlanetInfo").$$render($$result, {
      name: data.name,
      overview: data.overview,
      structure: data.structure,
      geology: data.geology,
      currentTab
    }, {}, {})}
    ${(0, import_index_8bee4077.v)(PlanetStats, "PlanetStats").$$render($$result, {
      rotation: data.rotation,
      revolution: data.revolution,
      radius: data.radius,
      temp: data.temperature
    }, {}, {})}</main>`;
  } while (!$$settled);
  $$unsubscribe_menuOpen();
  return $$rendered;
});
