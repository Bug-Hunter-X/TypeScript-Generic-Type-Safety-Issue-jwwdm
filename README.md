# TypeScript Generic Type Safety

This repository demonstrates a common issue with generics in TypeScript:  the lack of runtime type checking.  The `printAll` function, while accepting any type, doesn't prevent runtime errors if type-specific operations are attempted on the array elements.

The solution file shows how to improve type safety using type guards or conditional logic to check types before applying type-specific operations.  This helps prevent unexpected runtime behavior. 

## Usage

1. Clone this repository
2. Run `tsc bug.ts` to compile the buggy code
3. Run `tsc bugSolution.ts` to compile the corrected code
4. Run the compiled JavaScript file to observe the behavior.