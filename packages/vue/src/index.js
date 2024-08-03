import loader from "@esload/core/loader";

export default loader("vue", ".vue", (filter, runtime) => {
  runtime.onload({ filter }, async text => {
    const { compileTemplate, parse } = await import("vue/compiler-sfc");

    return compileTemplate({
      source: parse(text).descriptor.template.content,
      id: "1",
    }).code;
  });
});
