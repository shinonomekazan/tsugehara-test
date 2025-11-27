/**
 * 2つの数値を加算します。
 * @param a - 1つ目の数値
 * @param b - 2つ目の数値
 * @returns aとbの合計
 */
export function add(a: number, b: number): number {
	return a + b;
}

/**
 * 1つ目の数値から2つ目の数値を減算します。
 * @param a - 1つ目の数値
 * @param b - 2つ目の数値
 * @returns aとbの差
 */
export function subtract(a: number, b: number): number {
	return a - b;
}

/**
 * 2つの数値を乗算します。
 * @param a - 1つ目の数値
 * @param b - 2つ目の数値
 * @returns aとbの積
 */
export function multiply(a: number, b: number): number {
	return a * b;
}

/**
 * 1つ目の数値を2つ目の数値で除算します。
 * @param a - 被除数
 * @param b - 除数
 * @returns aをbで割った商
 * @throws bがゼロの場合にエラーをスロー
 */
export function divide(a: number, b: number): number {
	if (b === 0) {
		throw new Error("ゼロで除算できません");
	}
	return a / b;
}
