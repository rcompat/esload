import depend from "@esload/core/depend";
import loader from "@esload/core/loader";

export default loader("yaml", ".yaml", (filter, runtime) => {
  runtime.onload({ filter }, async text => {
    await depend(["yaml"], "yaml");
    const { parse } = await import("yaml");

    return `export default ${JSON.stringify(parse(text))}`;
  });
});
