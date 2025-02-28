import { Text, TouchableOpacity, View } from "react-native";
import { Header } from "../components/header";
import { router } from "expo-router";
import { ModalConfirmation } from "../components/modalConfirmation";

export default function Home() {
  function handleClick() {
    console.log("clicou");
  }
  return (
    <View>
      <Header title="Header Home" />

      <View style={{ paddingHorizontal: 16, gap: 24 }}>
        <Text>Alo Mundo</Text>
        <TouchableOpacity
          onPress={() => router.navigate("/two")}
          style={{
            width: "100%",
            padding: 14,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "blue",
            borderRadius: 8,
            marginBottom: 50,
          }}
        >
          <Text style={{ color: "white" }}>Ir para Screen Two</Text>
        </TouchableOpacity>
        <ModalConfirmation
          titleOnModal="Abrir Modal"
          titleButtonClosedModal="Fechar modal"
          descriptionModal="Descrição do modal"
        />
      </View>
    </View>
  );
}

/*
- Nome componente HeaderScreen
- Espaçamento top e bootom de 32 e left e rigt 8
- Dentro dele vai ter um Titulo, passe o titulo via propriedade
- titulo tem que ter tamanho 20, cor dele Blue
- titulo tem que estar centralizado.

*/

// - Home tu  criar uma função handleclick d entro dela tu vai colcaor um console.log('clicou') e vai passar esta função
// apra teu component Header.
// - Proriedade Função ele nao é borigatrio, se mandar esta função tu vai criar um botão de
//     tamanho 24 por 24 com uma < ao clicar ele executa estão função que tu passou la da tela home.
// */
