#include <jni.h>
#include "react-native-cpp-module.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_cppmodule_CppModuleModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return cppmodule::multiply(a, b);
}
