import loader from "@esload/core/loader";

export default loader("json5", ".json5", (filter, runtime) => {
  runtime.onload({ filter }, async text => {
    const { default: { parse } } = await import("json5");

    return `export default ${JSON.stringify(parse(text))}`;
  });
});
