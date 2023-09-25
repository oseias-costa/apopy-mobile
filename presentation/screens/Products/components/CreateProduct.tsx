import { SetStateAction, useState } from "react";
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import Input from "../../../components/Input/Input";
import Modalize from "../../../components/Modalize";
import SecondaryButton from "../../../components/SecondaryButton";
import { RootState } from "../../../redux/stores";
import { ProductState } from "../Products";
import Select from "./Select";

export interface ProductStateProps {
    productState: ProductState,
    setProductState: React.Dispatch<SetStateAction<ProductState>>
}

export default function CreateProduct({productState, setProductState}: ProductStateProps){
    const [ selectProduct, setSelectProduct ] = useState({
        selected: {
            name: '',
            _id: ''
        },
        visible: false,
        
    })
    const categoryList = useSelector((state: RootState) => state.category.categories)
    let category = []
    const convertedCategory = categoryList.map(item => category.push({_id: item._id, name: item.name}))
    console.log(convertedCategory)
    return(
        <Modalize 
            toggleBottomNavigationView={() => setProductState({...productState, create: false})}
            visible={productState.create}
        >
           <Select selectState={selectProduct} setSelectedState={setSelectProduct} 
            data={category}
            placeholder='Selecione a categoria'
            />
       
            <Input 
                value={productState.product.name} 
                onChange={(e) => setProductState({...productState, product: {...productState.product, name: e.nativeEvent.text }})
            } 
            />

        </Modalize>
    )
}