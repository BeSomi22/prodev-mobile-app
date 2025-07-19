// import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
// import { styles } from "@/styles/_joinstyle";
// import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
// import { FontAwesome, Ionicons } from "@expo/vector-icons";

// export default function Index() {
//     return (
//         <SafeAreaProvider>
//             <SafeAreaView style={styles.container}>
//                 <View style={styles.navGroup}>
//                     <Ionicons name="arrow-back" size={25} />
//                     <Image source={require('@/assets/images/logo.png')} />
//                 </View>
//                 <Text style={styles.largeText}>Sign in to your</Text>
//                 <Text style={styles.largeText}>Account</Text>
//                 <Text style={styles.smallText}>
//                     Enter your email and password to sign in.
//                 </Text>

//                 <View style={styles.formGroup}>
//                     <View>
//                         <Text style={styles.placeholderText}>Email</Text>
//                         <TextInput keyboardType="email-address" style={styles.inputField} />
//                     </View>
//                     <View style={{ marginTop: 20 }}>
//                         <Text style={styles.placeholderText}>Password</Text>
//                         <View style={styles.passwordGroup}>
//                             <TextInput style={{ flex: 1 }} />
//                             <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
//                         </View>
//                     </View>
//                     <Text style={styles.forgotPasswordText}>Forgot password?</Text>
//                 </View>

//                 <TouchableOpacity style={styles.button}>
//                     <Text style={styles.buttonText}>Sign in</Text>
//                 </TouchableOpacity>

//                 <View style={styles.dividerGroup}>
//                     <View
//                         style={styles.divider}
//                     ></View>
//                     <Text
//                         style={styles.dividerText}
//                     >
//                         OR
//                     </Text>
//                     <View
//                         style={styles.divider}
//                     ></View>
//                 </View>

//                 <View style={styles.socialMediaButtonGroup}>
//                     <TouchableOpacity style={styles.socialMediaButton}>
//                         <View
//                             style={{
//                                 flexDirection: "row",
//                                 alignItems: "center",
//                                 gap: 5,
//                             }}
//                         >
//                             <Image source={require("@/assets/images/google.png")} />
//                             <Text style={styles.socialMediaButtonText}>
//                                 Continue with Google
//                             </Text>
//                         </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity style={styles.socialMediaButton}>
//                         <View
//                             style={{
//                                 flexDirection: "row",
//                                 alignItems: "center",
//                                 gap: 5,
//                             }}
//                         >
//                             <Image source={require("@/assets/images/facebook.png")} />
//                             <Text style={styles.socialMediaButtonText}>
//                                 Continue with Facebook
//                             </Text>
//                         </View>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={styles.subTextGroup}>
//                     <Text style={styles.subText}>Don't have an account?</Text>
//                     <Text style={styles.subTextJoin}>Join now</Text>
//                 </View>
//             </SafeAreaView>
//         </SafeAreaProvider>
//     );
// }

import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Index() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                {/* Nav Section */}
                <View style={styles.iconsection}>
                    <Ionicons name="arrow-back" size={25} />
                    <Image source={require('@/assets/images/logo.png')} />
                </View>

                {/* Title */}
                <View style={styles.titleTextGroup}>
                    <Text style={styles.titleText}>Sign in to your</Text>
                    <Text style={styles.titleText}>Account</Text>
                    <Text style={styles.subText}>
                        Enter your email and password to sign in.
                    </Text>
                </View>

                {/* Form Group */}
                <View style={styles.formGroup}>
                    <View>
                        <Text style={styles.formLabel}>Email</Text>
                        <TextInput
                            keyboardType="email-address"
                            style={styles.formControl}
                        />
                    </View>

                    <View>
                        <Text style={styles.formLabel}>Password</Text>
                        <View style={styles.formPasswordControl}>
                            <TextInput style={styles.passwordControl} secureTextEntry />
                            <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
                        </View>
                    </View>

                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </View>

                {/* Primary Button */}
                <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>

                {/* Divider */}
                <View style={styles.dividerGroup}>
                    <View style={styles.divider}></View>
                    <Text style={styles.dividerText}>OR</Text>
                    <View style={styles.divider}></View>
                </View>

                {/* Social Buttons */}
                <View style={styles.secondaryButtonGroup}>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Image source={require("@/assets/images/google.png")} />
                        <Text style={styles.secondaryButtonText}>Continue with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.secondaryButton}>
                        <Image source={require("@/assets/images/facebook.png")} />
                        <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
                    </TouchableOpacity>
                </View>

                {/* Sign Up Prompt */}
                <View style={styles.signupgroup}>
                    <Text style={styles.signupTitleText}>Don't have an account? </Text>
                    <Text style={styles.signupSubTitleText}>Join now</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
