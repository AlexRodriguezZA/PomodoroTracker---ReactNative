import { View, Text, Pressable, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];

const Header = ({ setTime, time, CurrentTime, setCurrentTime }) => {
  const handlePress = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  };

  return (
    <View style={styles.container}>
      {options.map((item, index) => (
        <Pressable
          onPress={() => handlePress(index)}
          style={[
            styles.itemStyle,
            CurrentTime !== index && { borderColor: "transparent" },
          ]}
          key={index}
        >
          <Text style={styles.itemStyleText}>{item}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  itemStyle: {
    width: "33%",
    borderWidth: 2,
    height: 30,
    borderRadius: 4,
    padding: 5,
    marginVertical: 20,
    borderColor: "white"
  },
  itemStyleText: {
    textAlign: "center",
    fontWeight: "bold"
  },
});
