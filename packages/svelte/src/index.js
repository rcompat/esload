import depend from "@esload/core/depend";
import loader from "@esload/core/loader";

export default loader("svelte", ".svelte", (filter, runtime) => {
  runtime.onload({ filter }, async text => {
    await depend(["svelte"], "svelte");
    const { compile } = await import("svelte/compiler");

    return compile(text, { generate: "ssr", hydratable: true }).js.code;
  });
});
