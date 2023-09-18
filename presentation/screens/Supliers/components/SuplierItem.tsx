import { GestureResponderEvent, TouchableOpacity, Text, StyleSheet } from "react-native";
import Container from "../../../components/Container";

interface SuplierItemProps {
    item: string;
    onPress: (event: GestureResponderEvent) => void
}

export default function SuplierItem({item, onPress}: SuplierItemProps){
    return(
        <Container>
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <Text style={styles.text}>{item}</Text>
                <Text style={styles.updateText}>editar</Text>
            </TouchableOpacity>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 22,
        fontFamily: 'Raleway_600SemiBold',
        color: '#4C4A51'
    },
    updateText: {
        color: '#049FB1',
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 18,
    }
})