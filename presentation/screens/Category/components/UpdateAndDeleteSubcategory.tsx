import React, { SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSubcategoryUseCase } from "../../../../application/subcategory.usecase";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Input from "../../../components/Input/Input";
import Modalize from "../../../components/Modalize";
import SecondaryButton from "../../../components/SecondaryButton";
import { RootState } from "../../../redux/stores";
import { SubcategoryState } from "./CategoryItem";
import { updateSubcategory } from "../../../redux/slice/categorySlice";

export interface UpdateAndDeleteSubcategoryProps {
    subcategoryState: SubcategoryState
    setSubcategoryState: React.Dispatch<SetStateAction<SubcategoryState>>
}

export default function UpdateAndDeleteSubcategory({subcategoryState, setSubcategoryState }: UpdateAndDeleteSubcategoryProps){
    const dispatch = useDispatch()
    const { newSubcategory, categoryId, subcategoryName } = subcategoryState
    const categorySelected = useSelector((state: RootState) => state.category.categories)
    
    const categoryName = categorySelected.filter(item => 
        item._id === subcategoryState.categoryId)[0]
    
    const handleWithUpdate = async () => {
        setSubcategoryState({...subcategoryState, loading: true, disable: true})
        const updateSub = await updateSubcategoryUseCase(newSubcategory, categoryId, subcategoryName)

        if(updateSub.data.data){
            dispatch(updateSubcategory({
                _id: subcategoryState.categoryId,
                oldSubcategory: subcategoryState.subcategoryName,
                newSubcategory: subcategoryState.newSubcategory
            }))
        }
        setSubcategoryState({...subcategoryState, loading: false, disable: false, visible: false})
    }

    return(
        <Modalize
            toggleBottomNavigationView={() => setSubcategoryState({...subcategoryState, visible: false})}
            visible={subcategoryState.visible}
        >
            <Input value={categoryName?.name} editable={false} />
            <Input 
                value={subcategoryState.newSubcategory} 
                onChange={(e) => setSubcategoryState({...subcategoryState, newSubcategory: e.nativeEvent.text})} 
                editable={true} 
                placeholder='Digite a Subcategoria'
            />
            <CustomButton 
                text="Editar Subcategoria" 
                disabled={false} 
                loading={false}
                onPress={handleWithUpdate}
            />
            <SecondaryButton 
                onPress={() => setSubcategoryState({ ...subcategoryState, visible: false, delete: true })}
                text="Excluir subcategoria"
                type="delete"
            />
        </Modalize>
    )
}