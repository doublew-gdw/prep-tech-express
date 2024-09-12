import { sum } from "../src/sum";

test("sum(1, 2) must be 3", () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});

test("sum(4, 5) must be 9", () => {
  const result = sum(4, 5);

  expect(result).toBe(9);
});

test("test equal matchers", () => {
  const user = { id: 1 };
  Object.assign(user, { name: "John Doe" });

  expect(user).toEqual({ id: 1, name: "John Doe" });
});
