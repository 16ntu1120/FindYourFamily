import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useRouter } from "expo-router";

export default function VerifyOtpScreen() {
  const router = useRouter();
  const [otp, setOtp] = useState("");   

  const handleVerifyOtp = () => {
    router.push("/(auth)/login"); 
  };

  return (
    <View style={styles.container}>

      <View style={styles.iconBox}>
        <Text style={styles.iconText}>🛡️</Text>
      </View>

      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>Enter the code sent to your phone</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Enter OTP"
        placeholderTextColor="#4b5563"
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>

        <TouchableOpacity>
        <Text style={styles.resendText}>
          Didn't receive code? <Text style={styles.resendLink}>Resend</Text>
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
    borderRadius: 18,  
    backgroundColor: "#064e3b", 
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14, 
  },
  iconText: {
    fontSize: 28,   
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    color: "#ffffff",
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
    borderRadius: 10,
    
    color: "#ffffff",  
    paddingHorizontal: 16,
    paddingVertical: 12,
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
  resendText: {
    color: "#6b7280", 
    fontSize: 13,
  },
  resendLink: {
    color: "#10b981",
    fontWeight: "500",
  },
});