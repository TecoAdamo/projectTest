import {
  View,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native";

type Props = {
  title: string;
  onPress?: () => void;
};

export function Header({ title, onPress }: Props) {
  return (
    <View style={styles.container}>
      {onPress ? (
        <TouchableOpacity style={styles.containerbtn} onPress={onPress}>
          <Text style={styles.iconHeader}> {"<"} </Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.viewInvisivble} />
      )}

      <Text style={styles.titleText}> {title} </Text>

      <View style={styles.viewInvisivble} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 8,
    paddingRight: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    color: "blue",
    fontSize: 20,
  },
  iconHeader: {
    fontSize: 18,
  },
  containerbtn: {
    height: 24,
    width: 24,
  },
  viewInvisivble: {
    height: 24,
    width: 24,
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
