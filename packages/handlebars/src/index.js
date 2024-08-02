import depend from "@esload/core/depend";
import loader from "@esload/core/loader";

export default loader("handlebars", ".hbs", (filter, runtime) => {
  runtime.onload({ filter }, async text => {
    await depend(["handlebars"], "handlebars");
    const { default: { precompile } } = await import("handlebars");

    return `export default ${precompile(text)};`;
  });
});
