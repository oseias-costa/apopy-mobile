import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface LinkAcess {
    question: string;
    linkText: string;
    path: string;
    onPress: ((event: GestureResponderEvent) => void) | undefined
}

export default function LinkAcess({
    question, 
    linkText, 
    path, 
    onPress 
}: LinkAcess){
    return(
        <View style={styles.container}>
            <Text style={styles.questionText}>{question}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.link}>{linkText}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 20,
        justifyContent: 'center',
        paddingBottom: 40
    },
    questionText: {
        paddingRight: 10,
        fontFamily: 'Raleway_500Medium',
        fontSize: 16,
        color: '#8A8887'
    },
    link: {
        fontFamily: 'Raleway_700Bold',
        fontSize: 16,
        color: '#049FB1'
    }
})
