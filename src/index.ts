import { add, subtract, multiply, divide } from './math';

/**
 * Main entry point of the application
 */
function main(): void {
  console.log('TypeScript Template Repository');
  console.log('==============================\n');

  // Example usage of the math functions
  const a = 10;
  const b = 5;

  console.log(`Addition: ${a} + ${b} = ${add(a, b)}`);
  console.log(`Subtraction: ${a} - ${b} = ${subtract(a, b)}`);
  console.log(`Multiplication: ${a} * ${b} = ${multiply(a, b)}`);
  console.log(`Division: ${a} / ${b} = ${divide(a, b)}`);
}

// Run the main function if this file is executed directly
if (require.main === module) {
  main();
}

export { main };
