import { SetStateAction, useEffect, useState } from "react";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateCategoryUseCase } from "../../../../application/categories.usecase";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Input from "../../../components/Input/Input";
import Modalize from "../../../components/Modalize";
import SecondaryButton from "../../../components/SecondaryButton";
import { updateCategory } from "../../../redux/slice/categorySlice";
import { RootState } from "../../../redux/stores";
import { CategoryStateProps } from "../Category";

export interface PropsCategory {
    propsCategory : {
        visible: boolean;
        toggleBottomNavigationView: ()=> void;
        setCategoryState: React.Dispatch<SetStateAction<CategoryStateProps>>
        categoryState: CategoryStateProps
    }
}

export default function UpdateAndDeleteCategory({ propsCategory }: PropsCategory){
  const dispatch = useDispatch();
  const supliers = useSelector((state: RootState) => state.suplier.supliers)
    
  const verifyIsEqual = supliers.filter(suplier => suplier._id === propsCategory.categoryState._id)
  const [ disableButton, setDisableButton ] = useState(true)

    useEffect(()=> {
        if(propsCategory.categoryState.name === verifyIsEqual[0]?.name 
          || propsCategory.categoryState.name.length < 3
          || propsCategory.categoryState.loading
        ){
        setDisableButton(true)
      } else {
        setDisableButton(false)
      }
    },[propsCategory.categoryState.name])
  
    const updateCategoryItem = async () => {
        loadingAction(true);
        const update = await updateCategoryUseCase(
            propsCategory.categoryState._id,
            propsCategory.categoryState.name,
        );
    
        if (update.data.data) {
          dispatch(updateCategory(update.data.data.updateCategory));
          propsCategory.toggleBottomNavigationView();
          loadingAction(false);
        }
      };

      const loadingAction = (isLoading: boolean) =>
      isLoading
        ? propsCategory.setCategoryState({ ...propsCategory.categoryState, loading: true })
        : propsCategory.setCategoryState({ ...propsCategory.categoryState, loading: false });

    return(
        <Modalize 
            toggleBottomNavigationView={propsCategory.toggleBottomNavigationView}
            visible={propsCategory.visible}
        >
          <Input
            value={propsCategory.categoryState.name}
            onChange={(e: NativeSyntheticEvent<TextInputFocusEventData>) =>
                propsCategory.setCategoryState({ ...propsCategory.categoryState, name: e.nativeEvent.text })
            }
            placeholder="Digite um fornecedor"
          />
          <CustomButton
            text="Editar Categoria"
            disabled={disableButton}
            loading={propsCategory.categoryState.loading}
            onPress={updateCategoryItem}
          />
          <SecondaryButton
            type="delete"
            text="Excluir Categoria"
            onPress={() => {
                propsCategory.toggleBottomNavigationView();
                propsCategory.setCategoryState({ ...propsCategory.categoryState, delete: true });
            }}
          />
        </Modalize>
      )
    }

