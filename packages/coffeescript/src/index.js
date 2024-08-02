import depend from "@esload/core/depend";
import loader from "@esload/core/loader";

export default loader("coffeescript", ".coffee", (filter, runtime) => {
  runtime.onload({ filter }, async text => {
    await depend(["coffeescript"], "coffeescript");
    const { compile } = await import("coffeescript");

    return compile(text);
  });
});
