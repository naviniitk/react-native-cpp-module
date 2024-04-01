const CppModule = require('./NativeCppModule').default;

export function multiply(a: number, b: number): number {
  return CppModule.multiply(a, b);
}

export function add(a: number, b: number): number {
  return CppModule.add(a, b);
}

export function reverse(value: string): string {
  return CppModule.reverseString(value);
}
