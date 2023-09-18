import { StyleSheet, Text, View } from "react-native";
import Title from "../../components/Title";
import ToManageContent from "./components/ToManageContent";

export default function ToManage({navigation}:{navigation: any}){
    return(
        <View style={styles.container}>
            <Title>Gerenciar</Title>
            <ToManageContent 
                text='Categorias' 
                onPress={() => navigation.push('category')} 
            />
            <ToManageContent 
                text='Fornecedores' 
                onPress={() => navigation.navigate('supliers')} 
            />
            <ToManageContent text='Produtos' 
                onPress={() => navigation.navigate('products')} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFCFC',
        flex: 1
    }
})