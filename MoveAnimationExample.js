import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from "react-native-reanimated";

const MoveAnimationExample = () => {
  const translateX = useSharedValue(0); 

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }], 
    };
  });

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          translateX.value = withSpring(translateX.value === 0 ? 200 : 0); 
        }}
      >
        <Animated.View style={[styles.box, animatedStyle]} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "blue", 
  },
});

export default MoveAnimationExample;
