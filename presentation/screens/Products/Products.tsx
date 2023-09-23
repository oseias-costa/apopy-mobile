import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Product, ProductCreate } from "../../../domain/product";
import AddButton from "../../components/AddButton";
import Title from "../../components/Title";
import { useGetProducts } from "../../hooks/useGetProducts";
import CreateProduct from "./components/CreateProduct";
import ProductItem from "./components/ProductItem";

export default function Products(){
    const [ productState, setProductState ] = useState(initialProductState)
    const { products } = useGetProducts()

    const productsList = products.map((item: Product) => 
        <ProductItem 
            key={item._id}
            product={item}
            onPress={() => console.log(item)}
        />
    )

    return(
        <ScrollView style={styles.container}>
            <Title>Produtos</Title>
            <AddButton onPress={() => setProductState({...initialProductState, create: true})} />
            <View>
                {productsList}
            </View>
            <CreateProduct productState={productState} setProductState={setProductState} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFCFC',
        flex: 1
    }
})

export const initialProductState: ProductState = {
    product: {
        _id: "", 
        category: "", 
        name: "", 
        subcategory: "", 
        suplier: ""
    },
    visible: false,
    loading: false,
    delete: false,
    create: false
}

export interface ProductState {
    product: Product,
    visible: boolean,
    loading: boolean,
    delete: boolean,
    create: boolean
}