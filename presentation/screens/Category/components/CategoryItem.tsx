import { GestureResponderEvent, TouchableOpacity, Text, StyleSheet } from "react-native";
import Container from "../../../components/Container";

interface ListOneItemProps {
    item: string;
    onPress: (event: GestureResponderEvent) => void
}

export default function ListOneItem({item, onPress}: ListOneItemProps){
    return(
        <Container>
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    text: {
        fontSize: 22,
        fontFamily: 'Raleway_600SemiBold',
        color: '#4C4A51'
    }
})