import { add, subtract, multiply, divide } from './math';

/**
 * アプリケーションのメインエントリーポイント
 */
function main(): void {
	console.log('TypeScript Template Repository');
	console.log('==============================\n');

	// 数学関数の使用例
	const a = 10;
	const b = 5;

	console.log(`加算: ${a} + ${b} = ${add(a, b)}`);
	console.log(`減算: ${a} - ${b} = ${subtract(a, b)}`);
	console.log(`乗算: ${a} * ${b} = ${multiply(a, b)}`);
	console.log(`除算: ${a} / ${b} = ${divide(a, b)}`);
}

// このファイルが直接実行された場合にmain関数を実行
if (require.main === module) {
	main();
}

export { main };
