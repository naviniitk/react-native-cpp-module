import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  multiply(a: number, b: number): number;
  add(a: number, b: number): number;
  reverseString(value: string): string;
}

export default TurboModuleRegistry.getEnforcing<Spec>('CppModule');
