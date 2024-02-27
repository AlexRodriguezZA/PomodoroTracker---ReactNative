import { Pressable, Text, StyleSheet } from "react-native"


const Button = ({isActive, handleStartStop}) => {
  return (
    <Pressable onPress={handleStartStop} style={styles.button}>
        <Text style={styles.text}>
          {isActive ? "STOP": "START"} 
        </Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  text:{
    color: "white",
    fontWeight: "bold",
  }
});