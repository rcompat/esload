import test from "@esload/core/test";

export default test("typescript", ".ts", (assert, imported) => {
  const { foo } = imported;
  assert(foo).typeof("function");
});
