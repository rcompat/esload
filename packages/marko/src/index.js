import depend from "@esload/core/depend";
import loader from "@esload/core/loader";

export default loader("marko", ".marko", (filter, runtime) => {
  runtime.onload({ filter }, async text => {
    await depend(["marko", "@marko/compiler", "@marko/translator-default"],
      "marko");
    const { compile } = await import("@marko/compiler");

    return (await compile(text, "")).code;
  });
});
