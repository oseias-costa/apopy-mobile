import { GestureResponderEvent, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import Container from "../../../components/Container";

export default function ToManageContent({ 
    text, onPress }: { 
    text: string, onPress: (event: GestureResponderEvent) => void
}){
    return(
        <TouchableOpacity onPress={onPress}>
            <Container>
                    <Text style={styles.textContent}>{text}</Text>
            </Container>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textContent: {
        fontSize: 22,
        fontFamily: 'Raleway_600SemiBold',
        color: '#4C4A51',
        paddingLeft: 5
    }
})