import test from "@esload/core/test";

export default test("text", ".txt", (assert, imported) => {
  const { default: string } = imported;
  assert(string).equals("foo bar\n");
});
