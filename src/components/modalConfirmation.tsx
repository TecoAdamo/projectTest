import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "./button";

type Props = {
  titleOnModal?: string;
  titleButtonClosedModal?: string;
  descriptionModal: string;
  open?: boolean;
  onClose?: () => void;
  onOk?: () => void;
};

export function ModalConfirmation({
  titleOnModal,
  titleButtonClosedModal,
  open,
  onClose,
  onOk,
  descriptionModal,
  ...rest
}: Props) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={open}
          {...rest}
        >
          <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                {titleOnModal && (
                  <Text style={styles.modalText}>{titleOnModal}</Text>
                )}
                <Text style={styles.modalText}>{descriptionModal}</Text>
                <View style={styles.containerButtons}>
                  <Button title="Confirmar Cadastro" onPress={onOk} />
                  <Button title="Cancelar Cadastro" onPress={onClose} />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
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
  containerButtons: {
    flexDirection: "row",
    gap: 18,
  },
});
