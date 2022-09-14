import React from "react";
import { Modal, View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  modalBG: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "space-between",
  },
  modalMessage: { marginBottom: 25 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const CustomModal = ({
  visible,
  animationType,
  onPress,
  onDelete,
  selectedTask,
}) => {
  return (
    <Modal animationType={animationType} visible={visible} transparent>
      <View style={styles.modalBG}>
        <View style={styles.modalContainer}>
          <View style={styles.modalMessage}>
            <Text>
              Estas seguro de que queres eliminar "{selectedTask?.name}" con
              estado {selectedTask?.isDone ? "realizado" : "por hacer"} de la
              lista?
            </Text>
            {selectedTask?.description && (
              <>
                <Text>Aclaraciones del producto:</Text>
                <Text>{selectedTask?.description}</Text>
              </>
            )}
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Cancel" color="#00796B" onPress={onPress} />
            <Button title="Delete" color="#9f111b" onPress={onDelete} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
