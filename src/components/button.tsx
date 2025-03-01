import { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  onPress?: () => void;
};

export function Button({ title, onPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.buttonClosedModal}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "auto",
    width: "80%",
  },
  buttonClosedModal: {
    height: 40,
    backgroundColor: "#2196F3",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 8,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "800",
    fontSize: 16,
  },
  modalBtnView: {
    flexDirection: "row",
    gap: 20,
  },
});
