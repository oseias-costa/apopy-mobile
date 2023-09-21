import { SetStateAction } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SubcategoryState } from "./CategoryItem";


export default function Subcategory({ subcategory, setSubcategoryState, subcategoryState }: { 
    subcategory: string, 
    setSubcategoryState: React.Dispatch<SetStateAction<SubcategoryState>>;
    subcategoryState: SubcategoryState
}){
    return (
            <TouchableOpacity 
                style={styles.container} 
                onPress={() => setSubcategoryState({
                    ...subcategoryState,
                    subcategoryName: subcategory,  
                    newSubcategory: subcategory,  
                    visible: true })
                }
            >
                <Text style={styles.text}>{subcategory}</Text>
                <Text style={styles.updateText}>Editar</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
        backgroundColor: '#F8F8F8',
        margin: 2,
        borderRadius: 4,
        padding: 8,
        borderColor: '#C0B4AD',
        borderWidth: 1
    },
    text: {
        fontSize: 16,
        fontFamily: 'Raleway_600SemiBold',
        color: '#4C4A51'
    },
    updateText: {
        color: '#049FB1',
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 14,
    }
})