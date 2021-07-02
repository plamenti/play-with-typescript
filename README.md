# Play with typescripts

## Visual Studio Code extensions
1. ESLint
1. Path Intellisense
1. Prettier - Code formatter

## Project Setup
1. `npm init`
1. Install typescript - `npm install --save-dev typescript`
1. Create `index.html`
1. Create `app.ts`
1. Create script to run TypeScript compiler - `"tsc": "tsc"`
1. Install lite-server - `npm install --save-dev lite-server`
1. Create script to start lite-server - `"start-server": "lite-server"`

## Core Types
The core primitive types in TypeScript are all lowercase!
1. number - 1, 5.3, -10
1. string - "Hi", 'Hi'
1. boolean - true, false
1. object - {age: 30}
1. Array - [1, 2, 3] - Any JavaScript array, type can be flexible or strict (regarding the element types)

## TypeScript types
1. Tuples - [number, string]
1. Enum - enum {NEW, OLD}
1. Any - * - Any kind of value, no specific type. TRY TO AVOID USING OF ANY!
1. Union - function combine(input1: number | string, input2: number | string)
1. Literal - someVar: 'someString' - now the someVar could be only string with value 'someString'
1. Type aliases - type Combinable = number | string;

## TypeScript Compiler configuration
1. --watch mode - `tsc app.ts --watch` - will watch for change `app.ts` and will compile if any
1. Compiling the entire project - one time run `tsc --init` and this will create `tsconfig.json` file. now combine with --watch mode.
