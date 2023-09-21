import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CategoryInterface } from "../../../domain/category";
import AddButton from "../../components/AddButton";
import Title from "../../components/Title";
import { useGetCategories } from "../../hooks/useGetCategories";
import CategoryItem from "./components/CategoryItem";
import CreateCategory from "./components/CreateCategory";
import DeleteCategory from "./components/DeleteCategory";
import UpdateAndDeleteCategory from "./components/UpdateAndDeleteCategory";

export interface CategoryStateProps {
    name: string;
    _id: string;
    subcategory: string[];
    loading: boolean,
    delete: boolean,
    create: boolean
}

export default function Category(){
    const [ categoryState, setCategoryState ] = useState<CategoryStateProps>(initialCategoryState)
    const { categories, loading } = useGetCategories()
    const [ visibleBotton, setVisibleBotton] = useState(false)

    const listCategories = categories.map((category: CategoryInterface) => {
        return(
            <CategoryItem 
                key={category._id} 
                item={category} 
                onPress={() => {
                    setCategoryState({...categoryState, _id: category._id, name: category.name })
                    setVisibleBotton(true)
                }} 
            />
        )
    })

    const toggleBottomNavigationView = () => {
        return setVisibleBotton(!visibleBotton)
    }

    const propsCategory = {
        visible: visibleBotton,
        toggleBottomNavigationView: toggleBottomNavigationView,
        setCategoryState: setCategoryState,
        categoryState: categoryState
    }

    return(
        <ScrollView style={styles.container}>
            <Title>Category</Title>
            <View>{listCategories}</View>
            <AddButton onPress={() => setCategoryState({ ...initialCategoryState, create: true})} />
            <UpdateAndDeleteCategory propsCategory={propsCategory} />
            <CreateCategory propsCategory={propsCategory} />
            <DeleteCategory 
                value={categoryState.name}
                visible={categoryState.delete}
                categoryState={categoryState}
                setCategoryState={setCategoryState}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFCFC',
        flex: 1
    }
})

export const initialCategoryState = {
    name: '', 
    _id: '', 
    subcategory: [], 
    loading: false, 
    delete: false,
    create: false
}