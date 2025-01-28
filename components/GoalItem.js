import { Text, View, Pressable, StyleSheet } from "react-native";

function GoalItem(props) {
  //using bind to preconfigure a function with a specific argument

  return (
    <View style={styles.goalsListText}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.key)}
        style={(pressed) => pressed && styles.pressedItemiOS}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalsListText: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItemiOS: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
