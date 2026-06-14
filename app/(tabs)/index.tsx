import {useEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import {useRouter} from "expo-router";
 
export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() =>  {
    router.replace("/(tabs)/signup");  
    }, 2000);
    return () => clearTimeout(timer);
 }, []);

 return(
  <View style={styles.container}>
  <View style={styles.iconBox}>
  <Text style={styles.icon}>📍</Text>
  </View>
  <Text style={styles.title}>Find Your Family</Text>
  <Text style={styles.subtitle}>Stay Connected.Never Get lost.</Text>
  </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0f1a",
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBox: {
    width: 80,
    height: 80,
    backgroundColor: "#064e3b",
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 36,
  },
  title: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: '500',
    marginBottom: 8,
  },
  subtitle: {
    color: "#10b981",
    fontSize: 16,
  },
  
});