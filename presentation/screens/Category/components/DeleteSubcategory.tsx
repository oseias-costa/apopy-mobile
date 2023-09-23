import React, { SetStateAction } from "react";
import { View } from "react-native";
import { Modal, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { deleteSubcategoryUseCase } from "../../../../application/subcategory.usecase";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Input from "../../../components/Input/Input";
import SecondaryButton from "../../../components/SecondaryButton";
import TitleModal from "../../../components/TitleModal";
import { deleteSubcategory } from "../../../redux/slice/categorySlice";
import { SubcategoryState } from "./CategoryItem";

interface DeleteSubcategoryProps{
    subcategory: SubcategoryState;
    setSubcategory: React.Dispatch<SetStateAction<SubcategoryState>>
}

export default function DeleteSubcategory({ subcategory, setSubcategory }: DeleteSubcategoryProps){
    const dispatch = useDispatch()
    const { categoryId, subcategoryName } = subcategory

    const handleDeleteSubcategory = async () => {
        setSubcategory({...subcategory, loading: true})
        const deleteSub = await deleteSubcategoryUseCase(categoryId, subcategoryName)

        if(deleteSub.data.data){
            dispatch(deleteSubcategory({ _id: categoryId, oldSubcategory: subcategoryName}))
            setSubcategory({...subcategory, loading: false, delete: false})
        }
    }

    return(
        <Modal 
            transparent={true}
            visible={subcategory.delete}
            animationType='fade'
        >
            <View style={styles.container}>
                <View style={styles.modalContainer}>
                    <TitleModal>Deseja realmente excluir a subcategoria?</TitleModal>
                    <Input value={subcategory.subcategoryName} editable={false} secureTextEntry={false} />
                    <CustomButton 
                        disabled={subcategory.loading} 
                        loading={subcategory.loading} 
                        onPress={handleDeleteSubcategory} 
                        text='Excluir Subcategoria'
                    />
                    <SecondaryButton onPress={() => setSubcategory({...subcategory, delete: false})} text='Cancelar' type="cancel"/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "rgba(0,0,0, 0.5)",
      width: '100%',
      height: "100%",
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20
    },
    modalContainer: { 
      width: '100%',
      backgroundColor: "white",
      borderRadius: 10,
      paddingTop: 20,
      paddingBottom: 20
    }
    
  });