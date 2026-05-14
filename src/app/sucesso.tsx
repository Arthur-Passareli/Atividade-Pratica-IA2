import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Buttons";
import { THEME } from "../styles/constants";

export default function SucessoScreen() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Cartão criado com sucesso!</Text>
                    <Text style={styles.subtitle}>
                        Seu cartão de visita digital está pronto. 
                        Compartilhe com a galera!
                    </Text>
                </View>

                <View style={styles.footerContainer}>
                    <Button label="Criar outro cartão"/>
                    <Button variant="secondary" label="Voltar ao início"/>
                </View>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        paddingHorizontal: 24,
    },

    headerContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 580,
        gap: 12
    },

    title: {
        color: THEME.colors.heading,
        fontWeight: "bold",
        fontSize: THEME.text.heading.h2,
        width: 200,
        textAlign: "center"
    },

    subtitle: {
        color: THEME.colors.subtitle,
        fontWeight: "400",
        fontSize: 16,
        width: 200,
        textAlign: "center"
    },
    
    footerContainer: {
        flexDirection: "column",
        gap: 12
    } 
})