import { StyleSheet, Text, View } from "react-native";
import Container from "../../../components/Container";

export default function LastSales(){
    const data = [
        {
            id: 1,
            date: '10/09/23',
            product: 'Luna',
            value: 699.99
        },
        {
            id: 2,
            date: '06/09/23',
            product: 'Estrela',
            value: 789.99
        },
        {
            id: 3,
            date: '01/09/23',
            product: 'Hanover',
            value: 1899.99
        },
    ]

    const rowSales = data.map(item => (
        <LastSalesRow 
            key={item.id} 
            date={item.date} 
            product={item.product}
            value={item.value}
        />))

    return(
        <Container>
            <Text style={styles.description}>
                Últimas Vendas Setembro
            </Text>
            {rowSales}
        </Container>
    )
}

const LastSalesRow = ({date, product, value}: {date: string, product: string, value: number}) => {
    return(
        <View style={styles.row}>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.product}>{product}</Text>
            <View style={styles.valueContainer}>
                <Text style={styles.valueContainer}>R$</Text>
                <Text style={styles.date}>{value}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, 
    date: {
        fontFamily: 'Raleway_700Bold',
        color: '#4C4A51',
        fontSize: 18
    },
    product: {
        fontFamily: 'Raleway_700Bold',
        color: '#8A8887',
        fontSize: 18
    },
    valueContainer: {
        flexDirection: 'row'
    },
    valueReal: {
        fontFamily: 'Raleway_700Bold',
        color: '#4C4A51',
        fontSize: 14
    },
    description: {
        color: '#049FB1',
        fontFamily: 'Raleway_600SemiBold'
    }
})