#include "react-native-cpp-module.h"

#include <string> // Include the necessary header file

namespace cppmodule {
  double multiply(double a, double b) {
    return a * b;
  }

  double add(double a, double b) {
    return a + b;
  }

  std::string reverseString(const std::string& str) {
    std::string reversedStr = str;
    std::reverse(reversedStr.begin(), reversedStr.end());
    return reversedStr;
  }
}
