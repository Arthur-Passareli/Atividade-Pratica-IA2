import { Text, View } from "react-native";
import { styles } from "./styles";

export function DevCard() {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardAvatarContainer}>
                <View style={styles.cardAvatarSubContainer}>
                    <Text style={styles.cardAvatarLetter}>A</Text>
                </View>
            </View>

            <View style={styles.cardTextGroup}>
                <Text style={styles.cardTitle}>Arthur Passareli Moretti</Text>
                <View style={styles.cardTextGroup}>
                    <Text style={styles.cardText}>Analista de Dados</Text>
                    <Text style={styles.cardSubtitle}>SEFAZ</Text>
                </View>
            </View>

            <View style={styles.cardSeparator} />

            <View style={styles.cardTextGroup}>
                <Text style={styles.cardSubtitle}>Estagiário em</Text>
                <Text style={styles.cardRole}>Análise de Dados</Text>
            </View>

            <View style={[styles.cardBadgeContainer, { marginTop: 8 }]}>
                <Text style={styles.cardBadgeText}>Estagiário</Text>
            </View>

            <Text style={styles.cardSubtitle}>2 meses de experiência</Text>

        </View>
    )
}

