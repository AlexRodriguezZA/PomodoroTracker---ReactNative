import { Text, View, StyleSheet } from "react-native";

const Timer = ({ Time }) => {
  
  
  const formattedTime = `${Math.floor(Time / 60)
    .toString()
    .padStart(2, "0")}:${(Time % 60).toString().padStart(2, "0")}`;
  
    return (
    <View style={styles.container}>
      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    padding: 15,
    justifyContent: "center",
    borderRadius: 15,
    flex: 0.3,
  },
  time: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
  },
});
