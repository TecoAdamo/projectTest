import { router } from "expo-router";
import { Text, View } from "react-native";
import { Header } from "../components/header";
import { ModalConfirmation } from "../components/modalConfirmation";

export default function Two() {
  function HandleGoBack() {
    router.back();
  }

  return (
    <View>
      <Header title="Header Two" onPress={HandleGoBack} />
      <View style={{ paddingHorizontal: 16, gap: 24 }}>
        <Text>Two</Text>
        <ModalConfirmation
          titleOnModal="Abrir Modalzinho"
          titleButtonClosedModal="AAAAAA"
          descriptionModal="Descrição do modal home two"
        />
      </View>
    </View>
  );
}
