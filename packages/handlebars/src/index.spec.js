import test from "@esload/core/test";

export default test("handlebars", ".hbs", (assert, imported) => {
  const { default: { compiler, main, useData } } = imported;
  assert(compiler).instanceof(Array);
  assert(main).typeof("function");
  assert(useData).true();
});
