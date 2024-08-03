import loader from "@esload/core/loader";

export default loader("coffeescript", ".coffee", (filter, runtime) => {
  runtime.onload({ filter }, async text => {
    const { compile } = await import("coffeescript");

    return compile(text);
  });
});
