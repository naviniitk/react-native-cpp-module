#ifdef __cplusplus
#import "react-native-cpp-module.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNCppModuleSpec.h"

@interface CppModule : NSObject <NativeCppModuleSpec>
#else
#import <React/RCTBridgeModule.h>

@interface CppModule : NSObject <RCTBridgeModule>
#endif

@end
