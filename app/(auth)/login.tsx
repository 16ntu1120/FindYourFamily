import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleGetOtp = () => {
    router.push("/(auth)/verify-otp");
  };
 

  return (
    <View style={styles.container}>

      <View style={styles.iconBox}>
        <Text style={styles.iconText}>📍</Text>
      </View>

      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Welcome back! Please enter your details.</Text>

      <TextInput
        style={styles.inputBox}
        placeholder="phone Number"
        placeholderTextColor="#4b5563"
        keyboardType="phone-pad"
        autoCapitalize="none"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

   

      <TouchableOpacity style={styles.button} onPress={handleGetOtp}>
        <Text style={styles.buttonText}>Get OTP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
        <Text style={styles.signupLink}>
          Don't have an account?{" "}
          <Text style={styles.signupLinkGreen}>Sign Up</Text>
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0f1a",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  iconBox: {
    width: 64,
    height: 64,
    backgroundColor: "#064e3b",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  iconText: {
    fontSize: 28,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 24,
  },
  inputBox: {
    width: "100%",
    backgroundColor: "#1f2937",
    color: "#ffffff",
    borderRadius: 10,
    padding: 13,
    marginBottom: 12,
  },
  button: {
    width: "100%",
    backgroundColor: "#10b981",
    borderRadius: 10,
    padding: 14,
    alignItems: "center",
    marginTop: 6,
    marginBottom: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "500",
  },
  signupLink: {
    color: "#4b5563",
    fontSize: 13,
  },
  signupLinkGreen: {
    color: "#10b981",
    fontWeight: "500",
  },
});
