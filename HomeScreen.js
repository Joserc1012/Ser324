import React from "react";
import { Alert, StyleSheet, FlatList } from "react-native";
import { View } from "react-native";

import CustomButton from "./CustomButton";

// Navigation is not used in the exercise, but will be helpful in the assignment.
const HomeScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    Alert.alert("Alert", "You tapped the button!");
  };

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={
          (({}) => (
            <CustomButton
              style={styles.button1}
              onPress={handleButtonPress}
              title="My First Button"
              size="sm"
              backgroundColor="#77dd77"
            />
          ),
          (
            <CustomButton
              style={styles.button1}
              onPress={handleButtonPress}
              title="My First Button"
              size="sm"
              backgroundColor="#77dd77"
            />
          ),
          (
            <CustomButton
              style={styles.button3}
              onPress={handleButtonPress}
              title="My Third Button"
              size="sm"
              backgroundColor="#fdfd96"
            />
          ),
          (
            <CustomButton
              style={styles.button4}
              onPress={handleButtonPress}
              title="My Fourth Button"
              size="sm"
              backgroundColor="#84b6f4"
            />
          ),
          (
            <CustomButton
              style={styles.button5}
              onPress={handleButtonPress}
              title="My Fifth Button"
              size="sm"
              backgroundColor="#fdcae1"
            />
          ),
          (
            <CustomButton
              style={styles.button6}
              onPress={handleButtonPress}
              title="My Sixth Button"
              size="sm"
              backgroundColor="#d3bcf6"
            />
          ),
          (
            <CustomButton
              style={styles.button7}
              onPress={handleButtonPress}
              title="My Seventh Button"
              size="sm"
              backgroundColor="#7ff9c7"
            />
          ))
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    margin: 10,
  },
  button2: {
    margin: 10,
    fontSize: 16,
  },
  button3: {
    margin: 10,
    color: "white",
  },
  button4: {
    margin: 10,
    borderRadius: 6,
  },
  button5: {
    margin: 10,
    elevation: 6,
  },
  button6: {
    margin: 10,
    fontWeight: "bold",
  },
  button7: {
    margin: 10,
    letterSpacing: 0.5,
  },
});

export default HomeScreen;
