import { add } from "./main.wasm.js";
import { test } from "vitest";

test("add", () => {
  expect(add(1, 2)).toBe(3);
});
