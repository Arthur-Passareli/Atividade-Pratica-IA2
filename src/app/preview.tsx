import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Buttons";
import { THEME } from "../styles/constants";
import { DevCard } from "../components/DevCard";

export default function PreviewScreen() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Seu Cartão</Text>
                </View>

                <DevCard />

                <View style={styles.footerContainer}>
                    <Button variant="outline" label="Editar"/>
                    <Button label="Finalizar"/>
                </View>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        paddingHorizontal: 24,
        gap: 12,
    },

    headerContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 16
    },

    title: {
        color: THEME.colors.heading,
        fontWeight: "bold",
        fontSize: THEME.text.heading.h3,
        textAlign: "center"
    },
    
    footerContainer: {
        flexDirection: "column",
        gap: 12
    },

})