import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import axios from "axios";

const Post = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePostRequest = async () => {
    try {
      const response = await axios.post("http:// 192.168.88.230:3000/post/createPost", {
        title : title,
        content: content,
      });

      Alert.alert("Амжилттай!", `Response: ${JSON.stringify(response.data)}`);
    } catch (error) {
      Alert.alert("Алдаа!", `Error: ${error.message}`);
      console.log(error)
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>title:</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
        value={title}
        onChangeText={setTitle}
      />
      <Text>content:</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
        value={content}
        onChangeText={setContent}
      />
      <Button title="Мэдээлэл илгээх" onPress={handlePostRequest} />
    </View>
  );
};

export default Post;

