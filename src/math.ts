/**
 * Adds two numbers together.
 * @param a - The first number
 * @param b - The second number
 * @returns The sum of a and b
 */
export function add(a: number, b: number): number {
	return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param a - The first number
 * @param b - The second number
 * @returns The difference between a and b
 */
export function subtract(a: number, b: number): number {
	return a - b;
}

/**
 * Multiplies two numbers together.
 * @param a - The first number
 * @param b - The second number
 * @returns The product of a and b
 */
export function multiply(a: number, b: number): number {
	return a * b;
}

/**
 * Divides the first number by the second.
 * @param a - The dividend
 * @param b - The divisor
 * @returns The quotient of a divided by b
 * @throws Error if b is zero
 */
export function divide(a: number, b: number): number {
	if (b === 0) {
		throw new Error('Cannot divide by zero');
	}
	return a / b;
}
