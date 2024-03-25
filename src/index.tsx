const CppModule = require('./NativeCppModule').default;

export function multiply(a: number, b: number): number {
  return CppModule.multiply(a, b);
}
