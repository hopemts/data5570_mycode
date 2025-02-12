import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const HomePage = () => {
  const handlePress = () => {
    console.log("Login/Register button pressed");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("/home/ubuntu/data5570_mycode/expo-app/assets/images/MTS_NoBackground_NoWords.png")} // Adjust path as needed
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.welcomeText}>Welcome to Metric Tracking Solutions</Text>
      <Text style={styles.infoText}>
        Online fieldwork tracking tool for aspiring Behavior Analysts in ABA.
      </Text>
      <TouchableOpacity style={styles.authButton} onPress={handlePress}>
        <Text style={styles.authButtonText}>Login/Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#21242A",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
  },
  authButton: {
    backgroundColor: "#4A6D56",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  authButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default HomePage;
