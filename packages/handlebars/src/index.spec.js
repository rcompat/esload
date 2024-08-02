import test from "esload/test";

export default test("test.hbs", (assert, imported) => {
  const { default: { compiler, main, useData } } = imported;
  assert(compiler).instanceof(Array);
  assert(main).typeof("function");
  assert(useData).true();
});
