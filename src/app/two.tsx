import { router } from "expo-router";
import { Text, View } from "react-native";
import { Header } from "../components/header";
import { ModalConfirmation } from "../components/modalConfirmation";
import { Button } from "../components/button";
import { useState } from "react";

export default function Two() {
  const [modalVisible, setModalVisible] = useState(false);

  function HandleGoBack() {
    router.back();
  }
  function handleOpenModal() {
    setModalVisible(true);
  }
  function handleClosedModal() {
    setModalVisible(false);
  }
  function handleOnOk() {
    console.log("Esse button na tela Two esta OK");
  }

  return (
    <View>
      <Header title="Header Two" onPress={HandleGoBack} />
      <View style={{ paddingHorizontal: 16, gap: 24 }}>
        <Text>Two</Text>
        <ModalConfirmation
          titleOnModal="Modal Tela Two"
          titleButtonClosedModal="Fechar modal"
          descriptionModal="Descrição do modal"
          open={modalVisible}
          onClose={handleClosedModal}
          onOk={handleOnOk}
        />
        <Button title="Abrir Modal" onPress={handleOpenModal} />
      </View>
    </View>
  );
}
