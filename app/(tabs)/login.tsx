import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return(
    <View style = {styles.containner}>

      <View style = {styles.iconBox}>
       <Text style = {styles.iconText}>📍</Text>
      </View>

       <Text style = {styles.title}>Login</Text>
       <Text style = {styles.subtitle}>Welcome back! Please enter your details.</Text>

      <TextInput
      style={styles.inputBox}
        placeholder="Email Address"
        placeholderTextColor="#4b5563"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

       <TextInput
        style={styles.inputBox}
        placeholder="Password"
        placeholderTextColor="#4b5563"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style= {styles.button}>
        <Text style= {styles.buttonText}>Login</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create ({
  containner: {
    flex: 1,
    backgroundColor: "#0a0f1a",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },

  subtitle: {
    fontSize: 16,
    color: "#ccc",
    textAlign: "center",
    marginTop: 10,
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
  inputBox: {
    width: "80%",
    backgroundColor: "#1f2937",
     color: "#ffffff",
    borderRadius: 10,
    padding: 13,
    marginTop: 20,
  },

  inputText: {
    color: "#4b5563",
    fontSize: 14,
  },
  
 button: {
    width: "80%",
    backgroundColor: "#10b981",
    borderRadius: 10,
    padding: 14,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "500",
  },
});