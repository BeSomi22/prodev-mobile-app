import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { FACEBOOK, GOOGLELOGO, HEROLOGOGREEN } from "@/constants";

export default function JoinUs() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                {/* Navigation Header */}
                <View style={styles.iconsection}>
                    <Ionicons name="arrow-back" size={25} />
                    <Image source={HEROLOGOGREEN} />
                </View>

                {/* Header Text */}
                <View style={styles.titleTextGroup}>
                    <Text style={styles.titleText}>Join us</Text>
                    <Text style={styles.subText}>
                        Create your account to get started.
                    </Text>
                </View>

                {/* Form Section */}
                <View style={styles.formGroup}>
                    {/* Full Name */}
                    <View>
                        <Text style={styles.formLabel}>Full Name</Text>
                        <TextInput
                            style={styles.formControl}
                            placeholder="John Doe"
                        />
                    </View>

                    {/* Email */}
                    <View>
                        <Text style={styles.formLabel}>Email</Text>
                        <TextInput
                            keyboardType="email-address"
                            style={styles.formControl}
                            placeholder="example@mail.com"
                        />
                    </View>

                    {/* Password */}
                    <View>
                        <Text style={styles.formLabel}>Password</Text>
                        <View style={styles.formPasswordControl}>
                            <TextInput
                                style={styles.passwordControl}
                                secureTextEntry
                                placeholder="Enter your password"
                            />
                            <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
                        </View>
                    </View>
                </View>

                {/* Join Button */}
                <TouchableOpacity style={styles.primaryButton} >
                    <Text style={styles.buttonText}>Join us</Text>
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

                {/* Already have an account */}
                <View style={styles.signupgroup}>
                    <Text style={styles.signupTitleText}>Already have an account? </Text>
                    <Text style={styles.signupSubTitleText}>Sign in</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
