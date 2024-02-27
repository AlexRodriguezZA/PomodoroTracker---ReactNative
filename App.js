import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Header from "./src/components/Header";
import Timer from "./src/components/Timer";
import Button from "./src/components/Button";
//import { Audio } from "expo-av";
const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [isWorking, setisWorking] = useState(false);
  const [Time, setTime] = useState(25 * 60);
  const [CurrentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(Time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    
    if (Time === 0){
      setIsActive(false)
      setisWorking((prev)=>!prev)
      setTime(isWorking ? 300 : 1500)
    }
    return () => clearInterval(interval);
    
  }, [isActive, Time]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors[CurrentTime] }]}>
      <Text style={styles.title}>Pomodoro</Text>
      <Header
        setTime={setTime}
        setCurrentTime={setCurrentTime}
        CurrentTime={CurrentTime}
      />
      <Timer Time={Time} />
      <Button isActive={isActive} handleStartStop={handleStartStop} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  title: {
    fontWeight: "bold",
    fontSize: 32,
    paddingLeft: 12,
    paddingTop: 30,
  },
});
