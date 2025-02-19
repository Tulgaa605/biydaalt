import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import axios from "axios";

const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    if (!firstName || !lastName || !email || !phone || !password || !retypePassword) {
      setError("Бүх талбарыг бөглөнө үү!");
      return;
    }

    if (password !== retypePassword) {
      setError("Нууц үг таарахгүй байна!");
      return;
    }

    if (!/^\d+$/.test(phone)) {
      setError("Утасны дугаар зөвхөн тооноос бүрдэх ёстой!");
      return;
    }

    try {
      const response = await axios.post("http://192.168.88.201:3000/user/register", {
        firstName,
        lastName,
        email,
        phone,
        password,
      });

      if (response.data.user) {
        console.log("Бүртгэл амжилттай:", response.data);
        navigation.navigate("Login");
      }
    } catch (error) {
      setError("Бүртгүүлэхэд алдаа гарлаа. Дахин оролдоно уу.");
      console.log(error.response ? error.response.data : error.toString());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
      <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Retype Password" secureTextEntry value={retypePassword} onChangeText={setRetypePassword} />
      
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.linkText}>
        If you have an account{"\n"}
        you can{" "}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.linkButtonText}>Login here!</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 30, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: { height: 40, borderColor: "#ccc", borderWidth: 1, marginBottom: 10, paddingLeft: 10, borderRadius: 5 },
  error: { color: "red", marginBottom: 10 },
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

export default SignUp; 