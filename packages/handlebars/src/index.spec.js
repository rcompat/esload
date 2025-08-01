import test from "esload/test";

export default test("test.hbs", import.meta.dirname, (assert, imported) => {
  const { default: { compiler, main, useData } } = imported;
  assert(compiler instanceof Array).true();
  assert(typeof main).equals("function");
  assert(useData).true();
});
