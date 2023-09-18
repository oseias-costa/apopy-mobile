import { StyleSheet, Text, View } from "react-native";
import Title from "../../components/Title";
import { useGetCategories } from "../../hooks/useGetCategories";
import ListOneItem from "./components/CategoryItem";

export default function Category(){
    const { categories, loading } = useGetCategories()

    return(
        <View style={styles.container}>
            <Title>Category</Title>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFCFC',
        flex: 1
    }
})