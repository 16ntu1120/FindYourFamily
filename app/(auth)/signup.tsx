import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useRouter } from "expo-router";

export default function SignupScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>

      <View style={styles.iconBox}>
        <Text style={styles.iconText}>📍</Text>
      </View>

      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Join Find Your Family</Text>

      <TextInput
        style={styles.inputBox}
        placeholder="Full name"
        placeholderTextColor="#4b5563"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.inputBox}
        placeholder="Email address"
        placeholderTextColor="#4b5563"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.inputBox}
        placeholder="Phone number"
        placeholderTextColor="#4b5563"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TextInput
        style={styles.inputBox}
        placeholder="Password"
        placeholderTextColor="#4b5563"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.inputBox}
        placeholder="Confirm password"
        placeholderTextColor="#4b5563"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
        <Text style={styles.loginLink}>
          Already have an account?{" "}
          <Text style={styles.loginLinkGreen}>Login</Text>
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
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 4,
  },
  subtitle: {
    color: "#6b7280",
    fontSize: 13,
    marginBottom: 20,
  },
  inputBox: {
    width: "100%",
    backgroundColor: "#1f2937",
    color: "#ffffff",
    borderRadius: 10,
    padding: 13,
    marginBottom: 10,
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
  loginLink: {
    color: "#4b5563",
    fontSize: 13,
  },
  loginLinkGreen: {
    color: "#10b981",
    fontWeight: "500",
  },
});
