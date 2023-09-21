import { useEffect, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData, TextInputTextInputEventData } from "react-native";
import { useDispatch } from "react-redux";
import { createCategoryUseCase } from "../../../../application/categories.usecase";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Input from "../../../components/Input/Input";
import Modalize from "../../../components/Modalize";
import { createCategory } from "../../../redux/slice/categorySlice";
import { initialCategoryState } from "../Category";
import { PropsCategory } from "./UpdateAndDeleteCategory";

export default function CreateCategory({ propsCategory }: PropsCategory){
    const dispatch = useDispatch()
    const [ disableButton, setDisableButton ] = useState(true)

    useEffect(() => {
        if(propsCategory.categoryState.name.length >= 3 && !propsCategory.categoryState.loading){
            setDisableButton(false)
        } else {
            setDisableButton(true)
        }
    },[propsCategory])

    const handleCreateCategory = async () => {
        propsCategory.setCategoryState({...propsCategory.categoryState, loading: true})
        const createReq = await createCategoryUseCase(propsCategory.categoryState.name)

        if(createReq.data.data){
            dispatch(createCategory(createReq.data.data.createCategory))
            propsCategory.setCategoryState(initialCategoryState)
        }
    } 

    return(
        <Modalize 
            toggleBottomNavigationView={() => propsCategory.setCategoryState({...propsCategory.categoryState, create: false})}
            visible={propsCategory.categoryState.create}
        >
            <Input 
                placeholder="Digite uma nova categoria"
                value={propsCategory.categoryState.name} 
                onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => 
                    propsCategory.setCategoryState({...propsCategory.categoryState, name: e.nativeEvent.text })
                } 
            />
            <CustomButton 
                text="Criar Categoria" 
                disabled={disableButton} 
                onPress={handleCreateCategory} 
                loading={propsCategory.categoryState.loading}
            />
        </Modalize>
    )
}