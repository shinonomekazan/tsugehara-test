import { add, subtract, multiply, divide } from "../math";

describe("数学関数", () => {
	describe("add", () => {
		it("2つの正の数を加算する", () => {
			expect(add(2, 3)).toBe(5);
		});

		it("負の数を加算する", () => {
			expect(add(-2, -3)).toBe(-5);
		});

		it("正の数と負の数を加算する", () => {
			expect(add(5, -3)).toBe(2);
		});
	});

	describe("subtract", () => {
		it("2つの正の数を減算する", () => {
			expect(subtract(5, 3)).toBe(2);
		});

		it("負の数を減算する", () => {
			expect(subtract(-5, -3)).toBe(-2);
		});

		it("負の結果を持つ減算を処理する", () => {
			expect(subtract(3, 5)).toBe(-2);
		});
	});

	describe("multiply", () => {
		it("2つの正の数を乗算する", () => {
			expect(multiply(3, 4)).toBe(12);
		});

		it("ゼロで乗算する", () => {
			expect(multiply(5, 0)).toBe(0);
		});

		it("負の数を乗算する", () => {
			expect(multiply(-3, -4)).toBe(12);
		});

		it("正の数と負の数を乗算する", () => {
			expect(multiply(3, -4)).toBe(-12);
		});
	});

	describe("divide", () => {
		it("2つの正の数を除算する", () => {
			expect(divide(10, 2)).toBe(5);
		});

		it("負の数を除算する", () => {
			expect(divide(-10, -2)).toBe(5);
		});

		it("正の数を負の数で除算する", () => {
			expect(divide(10, -2)).toBe(-5);
		});

		it("ゼロで除算するとエラーをスローする", () => {
			expect(() => divide(10, 0)).toThrow("ゼロで除算できません");
		});
	});
});
