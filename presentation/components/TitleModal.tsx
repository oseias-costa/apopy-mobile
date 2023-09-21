import { StyleSheet, Text } from "react-native";

export default function TitleModal({ children }: { children: string }){
    return(
        <Text style={styles.title} >{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        marginHorizontal: 20,
        paddingBottom: 15,
        paddingTop: 10,
        fontSize: 16,
        fontFamily: 'Raleway_500Medium',
        color: '#8A8887'
    }
})