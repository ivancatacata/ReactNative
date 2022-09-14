import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import CheckBox from "expo-checkbox";
import { CustomModal, AddTask } from "./components";

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  text: { color: "#fff" },
  emptyContainer: {
    marginTop: 20,
    flex: 1,
  },
  emptyText: { color: "#fff", textAlign: "center" },
  items: {
    marginVertical: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderColor: "#fff",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  listContainer: { justifyContent: "center", flex: 1 },
  itemsContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  addButton: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 25,
  },
  addButtonText: { fontSize: 25, color: "#00796B" },
});

export default function App() {
  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState([]);
  const [addItem, setAddItem] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandleText = (text, name) => {
    if (name == "name") {
      setTask({ ...task, name: text });
    } else {
      setTask({ ...task, description: text });
    }
  };
  const onSubmitTasks = () => {
    if (task.name) {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: tasks[tasks.length - 1]?.id + 1 || 1,
          isDone: false,
          ...task,
        },
      ]);
      setTask({});
      setAddItem(false);
    }
  };
  const renderItem = ({ item }) => (
    <View style={styles.items}>
      <CheckBox
        value={item.isDone}
        style={{ backgroundColor: "#fff", alignSelf: "center" }}
        onValueChange={() =>
          setTask(
            tasks.map((task) => {
              if (task.id == item.id) {
                task.isDone = !task.isDone;
              }
              return task;
            })
          )
        }
      />
      <View style={{ marginLeft: 20 }}>
        <Text
          style={{
            ...styles.text,
            textDecorationLine: "underline",
            textTransform: "uppercase",
          }}
        >
          {item.name}
        </Text>
        <Text style={styles.text}>{item.description}</Text>
      </View>

      <TouchableOpacity
        style={{ position: "absolute", right: 0, padding: 10 }}
        onPress={() => handleModal(item.id)}
      >
        <Text style={styles.text}>X</Text>
      </TouchableOpacity>
    </View>
  );
  const handleModal = (id) => {
    setModalVisible(!modalVisible);
    setSelectedTask(tasks.find((item) => item.id == id));
  };

  const onHandleDelete = () => {
    setTasks(tasks.filter((item) => item.id != selectedTask.id));
    setSelectedTask(null);
    setModalVisible(false);
  };

  return (
    <ImageBackground
      source={require("./assets/background.jpg")}
      style={styles.emptyContainer}
    >
      <View style={{ marginTop: 50 }}>
        <Text style={styles.title}>Lista de compras</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setAddItem(true)}
        >
          <Text style={styles.addButtonText}>Agregar item</Text>
        </TouchableOpacity>
      </View>
      {addItem && (
        <AddTask
          item={task}
          onChangeText={onHandleText}
          addItem={onSubmitTasks}
          cancel={() => setAddItem(false)}
        />
      )}
      <View style={styles.listContainer}>
        {tasks.length > 0 ? (
          <FlatList
            style={styles.itemsContainer}
            data={tasks}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text style={styles.emptyText}>No hay datos en la lista</Text>
        )}
      </View>
      <CustomModal
        animationType="fade"
        visible={modalVisible}
        onPress={handleModal}
        onDelete={onHandleDelete}
        selectedTask={selectedTask}
      />
    </ImageBackground>
  );
}
