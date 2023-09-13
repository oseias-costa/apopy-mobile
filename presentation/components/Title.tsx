import { StyleSheet, Text } from "react-native";

export default function Title({ children }: { children: string}){
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        color: '#049FB1',
        fontSize: 36,
        fontFamily: 'Raleway_700Bold',
        paddingHorizontal: 20,
        paddingVertical: 15
    }
})