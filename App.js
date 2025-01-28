import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    //adding into an array the enteredGoalText typed by the users, using a function to automatically receive the existing state by react
    //using an arrow function to get the current state and then adding the new state to it
    //using the key property by Math.random().toString() to generate a random key for each goal
    setListOfGoals((currentGoal) => [
      ...currentGoal,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setListOfGoals((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      {/*StatusBar is a component that allows you to control the appearance of the status bar*/}
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color={"#5e0acc"}
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          {/*always bounce vertical is a prop for ios devices to make the scroll
        view always bounce vertically*/}
          <FlatList
            data={listOfGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.key}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.key;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
