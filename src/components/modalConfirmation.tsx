import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

type Props = {
  titleOnModal?: string;
  titleButtonClosedModal?: string;
  descriptionModal: string;
  open?: boolean;
  onClose?: boolean;
  onOk?: () => void;
};

export function ModalConfirmation({
  titleOnModal,
  titleButtonClosedModal,
  open,
  onClose,
  onOk,
  descriptionModal,
}: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  function handleOpenModal() {
    setModalVisible(true);
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <TouchableWithoutFeedback onPress={handleCloseModal}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>{descriptionModal}</Text>
                <View style={styles.modalBtnView}>
                  <TouchableOpacity
                    style={[styles.buttonClosedModal]}
                    onPress={() => setModalVisible(!modalVisible)}
                    activeOpacity={0.6}
                  >
                    <Text style={styles.textStyle}>
                      {titleButtonClosedModal}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.buttonClosedModal]}
                    onPress={() => setModalVisible(!modalVisible)}
                    activeOpacity={0.6}
                  >
                    <Text style={styles.textStyle}>
                      {titleButtonClosedModal}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <TouchableOpacity
          style={[styles.button, styles.buttonOpen]}
          onPress={handleOpenModal}
          activeOpacity={0.6}
        >
          <Text style={styles.textStyle}>{titleOnModal}</Text>
        </TouchableOpacity>
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
    padding: 16,
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
  button: {
    borderRadius: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
    height: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
/*
- Nome componente HeaderScreen
- Espaçamento top e bootom de 32 e left e rigt 8
- Dentro dele vai ter um Titulo, passe o titulo via propriedade
- titulo tem que ter tamanho 20, cor dele Blue
- titulo tem que estar centralizado.

- Home tu  criar uma função handleclick d entro dela tu vai colcaor um console.log('clicou') e vai passar esta função 
apra teu component Header.
- Proriedade Função ele nao é borigatrio, se mandar esta função tu vai criar um botão de 
    tamanho 24 por 24 com uma < ao clicar ele executa estão função que tu passou la da tela home.
*/
// Criar um componente Chamado "ModalConfirmation" este modal vai ter as
// proprierdades: open que é um bolean de abrir e fechar, onClose:
// receberuma função para fechar o modal, Titulo: Descrição do modal, onOk:
// recebe uma função quando ele clicar no botão ok.

// STYLES

// Ele vai ser um quadrado branco ela tem que ter 80% de tamanho largura e a
// altura eu quero auto  e dentro paddgin 16, com o titulo e embaixo os dois
// botões um ao lado do outro.
