import { useState } from "react";
import { View } from "react-native";
import { GestureResponderEvent, TouchableOpacity, Text, StyleSheet } from "react-native";
import { CategoryInterface } from "../../../../domain/category";
import Container from "../../../components/Container";
import CreateSubcategory from "./CreateSubcategory";
import Subcategory from "./Subcategory";
import UpdateAndDeleteSubcategory from "./UpdateAndDeleteSubcategory";

interface ListOneItemProps {
    item: CategoryInterface;
    onPress: (event: GestureResponderEvent) => void
}

export default function CategoryItem({item, onPress}: ListOneItemProps){
    const initialSubcategoryState: SubcategoryState = {
        loading: false,
        disable: false,
        subcategoryName: '',
        newSubcategory: '',
        visible: false,
        categoryId: item._id,
        delete: false,
        create: false
    }
    const [ subcategoryState, setSubcategoryState ] = useState(initialSubcategoryState)

    const listSubcategories = item.subcategory?.map((subcategory: string) => 
         <Subcategory 
            key={subcategory} 
            subcategory={subcategory} 
            setSubcategoryState={setSubcategoryState} 
            subcategoryState={subcategoryState}
         />)

    return(
        <Container>
            <View style={styles.container}>
                <Text style={styles.text}>{item.name}</Text>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.updateText}>Editar</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setSubcategoryState({...subcategoryState, create: true, newSubcategory: ''})}>
                <Text style={styles.createSubcategory}>Criar Subcategoria</Text>
            </TouchableOpacity>
            <View>{listSubcategories}</View>
            <UpdateAndDeleteSubcategory 
                setSubcategoryState={setSubcategoryState}  
                subcategoryState={subcategoryState}
            />
            <CreateSubcategory 
                setSubcategoryState={setSubcategoryState}  
                subcategoryState={subcategoryState}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 15
    },
    text: {
        fontSize: 22,
        fontFamily: 'Raleway_600SemiBold',
        color: '#4C4A51'
    },
    updateText: {
        color: '#049FB1',
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 14,
    },
    createSubcategory: {
        color: '#049FB1',
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 14,
        paddingLeft: 20,
        paddingBottom: 10
    }
})

export interface SubcategoryState {
    loading: boolean,
    disable: boolean,
    subcategoryName: string,
    visible: boolean,
    categoryId: string,
    newSubcategory: string,
    delete: boolean,
    create: boolean
}