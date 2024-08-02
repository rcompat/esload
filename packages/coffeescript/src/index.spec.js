import test from "@esload/core/test";

export default test("coffeescript", ".coffee", (assert, imported) => {
  const { foo } = imported;
  assert(foo).typeof("function");
});
