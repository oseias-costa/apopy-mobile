import { useDispatch, useSelector } from "react-redux";
import { createSubcategoryUseCase } from "../../../../application/subcategory.usecase";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Input from "../../../components/Input/Input";
import Modalize from "../../../components/Modalize";
import { createSubcategory } from "../../../redux/slice/categorySlice";
import { RootState } from "../../../redux/stores";
import { UpdateAndDeleteSubcategoryProps } from "./UpdateAndDeleteSubcategory";

export default function CreateSubcategory({ subcategoryState, setSubcategoryState }: UpdateAndDeleteSubcategoryProps){
    const dispatch = useDispatch()
    const categoryName = useSelector((state: RootState) => 
    state.category.categories.filter(item => 
        item._id === subcategoryState.categoryId))[0]

        console.log(categoryName)

    const handleCreateSubcategory = async () => {
        setSubcategoryState({ ...subcategoryState, loading: true, disable: true})
        const createSubcategoryReq = await createSubcategoryUseCase(subcategoryState.categoryId, subcategoryState.newSubcategory)
        
        if(createSubcategoryReq.data.data){
            dispatch(createSubcategory({ newSubcategory: subcategoryState.newSubcategory, _id: subcategoryState.categoryId}))
            setSubcategoryState({ ...subcategoryState, newSubcategory: '', loading: false, disable: false, create: false})
        }
    }
    return(
        <Modalize visible={subcategoryState.create} toggleBottomNavigationView={() => setSubcategoryState({...subcategoryState, create: false})}>
            <Input 
                value={categoryName.name}
                editable={false}
                placeholder='Digite a nova subcategoria'
            />
            <Input 
                value={subcategoryState.newSubcategory}
                onChange={(e) => setSubcategoryState({...subcategoryState, newSubcategory: e.nativeEvent.text})} 
                placeholder='Digite a nova subcategoria'
            />
            <CustomButton 
                onPress={handleCreateSubcategory}
                text='Criar Subcategoria'
                disabled={subcategoryState.disable}
                loading={subcategoryState.loading}
            />
        </Modalize>
    )
}