import React from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./style";

const AddTask = ({ item, onChangeText, addItem, cancel }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Producto"
        style={styles.input}
        selectionColor="#00796B"
        placeholderTextColor="#00796B"
        onChangeText={(name) => onChangeText(name, "name")}
        value={item.name}
      />
      <TextInput
        placeholder="Aclaraciones"
        style={styles.input}
        selectionColor="#00796B"
        placeholderTextColor="#00796B"
        onChangeText={(name) => onChangeText(name, "description")}
        value={item.description}
      />
      <View style={styles.buttonContainer}>
        <Button title="cancelar" color="#9f111b" onPress={cancel} />
        <Button color="#00796B" title="agregar a la lista" onPress={addItem} />
      </View>
    </View>
  );
};

export default AddTask;
