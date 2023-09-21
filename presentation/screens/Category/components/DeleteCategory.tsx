import { SetStateAction } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { deleteCategoryUseCase } from "../../../../application/categories.usecase";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Input from "../../../components/Input/Input";
import SecondaryButton from "../../../components/SecondaryButton";
import TitleModal from "../../../components/TitleModal";
import { deleteCategory } from "../../../redux/slice/categorySlice";
import { CategoryStateProps, initialCategoryState } from "../Category";

interface DeleteCategoryProps{
    visible: boolean,
    value: string, 
    categoryState: CategoryStateProps, 
    setCategoryState: React.Dispatch<SetStateAction<CategoryStateProps>>
}

export default function DeleteCategory({visible, value, categoryState, setCategoryState}: DeleteCategoryProps){
    const dispatch = useDispatch()
    
    const handleDeleteCategory = async () => {
        setCategoryState({ ...categoryState, loading: true})
        const deleteCategoryReq = await deleteCategoryUseCase(categoryState._id)

        if(deleteCategoryReq.data.data){
            dispatch(deleteCategory(deleteCategoryReq.data.data.deleteCategory))
            setCategoryState(initialCategoryState)
        }
    }

    return(
        <Modal 
            transparent={true}
            visible={visible}
            animationType='fade'
        >
            <View style={styles.container}>
                <View style={styles.modalContainer}>
                    <TitleModal>Deseja realmente excluir o fornecedor?</TitleModal>
                    <Input value={value} editable={false} secureTextEntry={false} />
                    <CustomButton 
                        disabled={categoryState.loading} 
                        loading={categoryState.loading} 
                        onPress={handleDeleteCategory} 
                        text='Excluir Categoria'
                    />
                    <SecondaryButton onPress={() => setCategoryState(initialCategoryState)} text='Cancelar' type="cancel"/>
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
  