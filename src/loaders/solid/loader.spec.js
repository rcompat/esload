import { test } from "dp";

export default test("solid", (assert, { message }) => {
  assert(message.includes("Cannot find package 'solid-js'")).true();
});
