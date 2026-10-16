import { describe, it, expect } from "vitest";
import { add, subtract, multiply } from "./math.js";

describe("Math functions", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("subtracts two numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  it("multiplies two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });
});
