import { StyleSheet, Text, View } from "react-native";
import Container from "../../../components/Container";

interface DashboardProps {
    description: string,
    number: number,
    linkDescription: string
}

export default function DashboardNumbers({ description, number, linkDescription }: DashboardProps){
    return(
        <Container>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.real}>R$</Text>
            <View style={styles.numberContainer}>
                <Text style={styles.number}>{number}</Text>
                <Text style={styles.link}>{linkDescription}</Text>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    description: {
        color: '#049FB1',
        fontFamily: 'Raleway_600SemiBold'
    },
    real: {
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 14,
        paddingTop: 18,
        position: 'relative',
        top: 10,
        color: '#8A8887',
    },
    numberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    number: {
        color: '#8A8887',
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 36
    },
    link: {
        fontFamily: 'Raleway_700Bold',
        color: '#4C4A51',
    }
})