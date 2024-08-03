import loader from "@esload/core/loader";

export default loader("marko", ".marko", (filter, runtime) => {
  runtime.onload({ filter }, async text => {
    const { compile } = await import("@marko/compiler");

    return (await compile(text, "")).code;
  });
});
