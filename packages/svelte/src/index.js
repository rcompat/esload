import loader from "@esload/core/loader";

export default loader("svelte", ".svelte", (filter, runtime) => {
  runtime.onload({ filter }, async text => {
    const { compile } = await import("svelte/compiler");

    return compile(text, { generate: "ssr", hydratable: true }).js.code;
  });
});
