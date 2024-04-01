import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { add, multiply } from 'react-native-cpp-module';

const result = multiply(3, 7);

export default function App() {
  const addition = add(3, 7);
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Text>Addition: {addition}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
