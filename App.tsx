import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [outputButtonText, setButtonText] = useState("First state");
  const [status, setStatus] = useState(true);
  return (
    <View style={styles.container}>
      <Text>{outputButtonText}</Text>
      <Button
        title="Change text!"
        onPress={() => {
          if (status) {
            setButtonText("State changed!");
            setStatus(false);
          } else {
            setButtonText("First state");
            setStatus(true);
          }
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
