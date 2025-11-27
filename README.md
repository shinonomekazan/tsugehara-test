# tsugehara-test

A comprehensive TypeScript template repository with modern development tools and best practices.

## Features

- 🚀 TypeScript for type-safe development
- 🧪 Jest for testing with coverage reporting
- 🎨 ESLint + Prettier for code quality and formatting
- 📦 Pre-configured build scripts
- 🔧 Ready-to-use project structure

## Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the application in development mode with ts-node:

```bash
npm run dev
```

### Building

Build the TypeScript code to JavaScript:

```bash
npm run build
```

### Running

Run the compiled JavaScript:

```bash
npm start
```

## Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Run the application in development mode
- `npm start` - Run the compiled application
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run lint` - Lint the codebase
- `npm run lint:fix` - Lint and auto-fix issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run clean` - Remove build artifacts

## Project Structure

```
.
├── src/
│   ├── __tests__/       # Test files
│   │   └── math.test.ts
│   ├── index.ts         # Main entry point
│   └── math.ts          # Example module
├── dist/                # Compiled JavaScript (generated)
├── coverage/            # Test coverage reports (generated)
├── eslint.config.js     # ESLint configuration
├── .prettierrc          # Prettier configuration
├── tsconfig.json        # TypeScript configuration
├── jest.config.js       # Jest configuration
├── .gitignore           # Git ignore rules
└── package.json         # Project dependencies and scripts
```

## Testing

This project uses Jest for testing. Tests are located in the `src/__tests__` directory.

Run all tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate coverage report:
```bash
npm run test:coverage
```

## Code Quality

### Linting

ESLint is configured with TypeScript support and Prettier integration.

```bash
npm run lint
npm run lint:fix
```

### Formatting

Prettier is configured for consistent code formatting.

```bash
npm run format
npm run format:check
```

## Configuration

### TypeScript (`tsconfig.json`)

The TypeScript configuration targets ES2020 with strict mode enabled for maximum type safety.

### ESLint (`eslint.config.js`)

ESLint is configured with:
- TypeScript ESLint parser and plugin
- Prettier integration
- Recommended rule sets

### Prettier (`.prettierrc`)

Prettier is configured with standard formatting rules.

## License

ISC
