import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../../../../domain/product";
import Container from "../../../components/Container";

interface ProductItemProps {
    onPress: (event: GestureResponderEvent) => void;
    product: Product
}

export default function ProductItem({onPress, product}: ProductItemProps){
    return(
        <TouchableOpacity onPress={onPress}>
            <Container>
                <View style={styles.container}>
                    <Text style={styles.textDestak}>{product?.name}</Text>
                    <Text style={styles.text}>{product?.category}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>{product?.subcategory}</Text>
                    <Text style={styles.text}>{product?.suplier}</Text>
                </View>
                <Text style={styles.updateText}>Editar</Text>
            </Container>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 15
    },
    textDestak: {
        fontSize: 22,
        fontFamily: 'Raleway_600SemiBold',
        color: '#4C4A51'
    },
    text: {
        fontSize: 18,
        fontFamily: 'Raleway_600SemiBold',
        color: '#939295'
    },
    updateText: {
        color: '#049FB1',
        fontFamily: 'Raleway_700Bold',
        fontSize: 14,
        alignSelf: 'flex-end'
    },
})