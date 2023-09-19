import { SetStateAction } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useDispatch } from "react-redux";
import { createSuplierUseCase } from "../../../../application/suplier.usecase";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Input from "../../../components/Input/Input";
import Modalize from "../../../components/Modalize";
import { createSuplier } from "../../../redux/slice/suplierSlice";
import { SuplierState } from "../Supliers";


interface UpdateAndDeleteButtonSheetProps {
    propsSuplier : {
        visible: boolean;
        toggleBottomNavigationView: ()=> void;
        setSuplierState: React.Dispatch<SetStateAction<SuplierState>>
        suplierState: SuplierState
    }
}

export default function CreateSuplier({propsSuplier}: UpdateAndDeleteButtonSheetProps){
    const dispatch = useDispatch()

    const createSuplierItem = async () => {
        loadingAction(true);
        const create = await createSuplierUseCase(propsSuplier.suplierState.name);
    
        if (create.data.data) {
          dispatch(createSuplier(create.data.data.createSuplier));
          loadingAction(false);
          propsSuplier.setSuplierState({...propsSuplier.suplierState, create: false})
        }
      };

      const isValidWord = () => propsSuplier.suplierState.name.length <= 3 ? true : false

      const loadingAction = (isLoading: boolean) =>
      isLoading
        ? propsSuplier.setSuplierState({ ...propsSuplier.suplierState, loading: true })
        : propsSuplier.setSuplierState({ ...propsSuplier.suplierState, loading: false });

    return(
        <Modalize 
            toggleBottomNavigationView={() => propsSuplier.setSuplierState({...propsSuplier.suplierState, create: false})}
            visible={propsSuplier.suplierState.create}
        >
            <Input 
                placeholder="Digite um fornecedor"
                onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => 
                    propsSuplier.setSuplierState({ ...propsSuplier.suplierState, name: event.nativeEvent.text})
                }
                value={propsSuplier.suplierState.name}
            />
            <CustomButton 
                text='Adicionar Fornecedor' 
                disabled={isValidWord()} 
                onPress={createSuplierItem} 
            />
        </Modalize>
    )
}