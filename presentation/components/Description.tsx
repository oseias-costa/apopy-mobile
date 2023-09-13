import { StyleSheet, Text } from "react-native";

export default function Description({ children }: {children : string}){
    return(
        <Text style={styles.text}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontFamily: 'Raleway_500Medium',
        color: '#8A8887',
        marginHorizontal: 20,
        paddingBottom: 15
    }
})