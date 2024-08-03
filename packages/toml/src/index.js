import loader from "@esload/core/loader";

export default loader("toml", ".toml", (filter, runtime) => {
  runtime.onload({ filter }, async text => {
    const { parse } = await import("smol-toml");

    return `export default ${JSON.stringify(parse(text))}`;
  });
});
