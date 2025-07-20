import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { FACEBOOK, GOOGLELOGO, HEROLOGOGREEN } from "@/constants";
import { useRouter } from "expo-router";

export default function SignIn() {
    const router = useRouter();
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                {/* Header with Back Icon and Logo */}
                <View style={styles.iconsection}>
                    <Ionicons name="arrow-back" size={25} />
                    <Image source={HEROLOGOGREEN} />
                </View>

                {/* Title */}
                <View style={styles.titleTextGroup}>
                    <Text style={styles.titleText}>Sign in to your</Text>
                    <Text style={styles.titleText}>Account</Text>
                    <Text style={styles.subText}>
                        Enter your email and password to sign in.
                    </Text>
                </View>

                {/* Form */}
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
                            <TextInput
                                style={styles.passwordControl}
                                secureTextEntry
                            />
                            <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
                        </View>
                    </View>

                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </View>

                {/* Sign In Button */}
                <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>

                {/* Divider */}
                <View style={styles.dividerGroup}>
                    <View style={styles.divider}></View>
                    <Text style={styles.dividerText}>OR</Text>
                    <View style={styles.divider}></View>
                </View>

                {/* Social Media Buttons */}
                <View style={styles.secondaryButtonGroup}>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Image source={GOOGLELOGO} />
                        <Text style={styles.secondaryButtonText}>Continue with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.secondaryButton}>
                        <Image source={FACEBOOK} />
                        <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
                    </TouchableOpacity>
                </View>

                {/* Join Now Link */}
                <View style={styles.signupgroup}>
                    <Text style={styles.signupTitleText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => router.push("/join")}>
                        <Text style={styles.signupSubTitleText}>Join</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
