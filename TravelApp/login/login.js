import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import axios from "axios";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");  
    if (!email || !password) {
      setError("Имэйл болон нууц үгээ оруулна уу.");
      return;
    }
  
    try {
      const response = await axios.post("http://192.168.88.201:3000/user/login", {
        email,
        password,
      });
  
      if (response.data.token) {
        console.log("Нэвтрэлт амжилттай:", response.data);
        navigation.navigate("Home");
      } else {
        setError("Буруу мэдээлэл. Дахин оролдоно уу.");
      }
    } catch (error) {
      setError("Нэвтрэхэд алдаа гарлаа. Дахин оролдоно уу.");
      console.log(error.message);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.linkText}>
        if you don’t an account{"\n"}
        you can {" "}
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.linkButtonText}>Register here!     
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "rgba(92, 167, 155, 1)",
    padding: 13,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 23,
  },
  linkButtonText: {
    color: "rgba(92, 167, 155, 1)",
    fontSize: 23,
  },
});

export default Login;