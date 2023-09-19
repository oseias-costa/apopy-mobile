import { SetStateAction } from "react";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import { useDispatch } from "react-redux";
import { updateSuplierUseCase } from "../../../../application/suplier.usecase";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Input from "../../../components/Input/Input";
import Modalize from "../../../components/Modalize";
import { updateSuplier } from "../../../redux/slice/suplierSlice";
import { SuplierState } from "../Supliers";

export interface PropsSuplier {
    propsSuplier : {
        visible: boolean;
        toggleBottomNavigationView: ()=> void;
        setSuplierState: React.Dispatch<SetStateAction<SuplierState>>
        suplierState: SuplierState
    }
}

export default function UpdateAndDeleteButtonSheet({ propsSuplier }: PropsSuplier){

    const dispatch = useDispatch();
    const updateSuplierItem = async () => {
        loadingAction(true);
        const update = await updateSuplierUseCase(
            propsSuplier.suplierState._id,
            propsSuplier.suplierState.name,
        );
    
        if (update.data.data) {
          dispatch(updateSuplier(update.data.data.updateSuplier));
          propsSuplier.toggleBottomNavigationView();
          loadingAction(false);
        }
      };

      const loadingAction = (isLoading: boolean) =>
      isLoading
        ? propsSuplier.setSuplierState({ ...propsSuplier.suplierState, loading: true })
        : propsSuplier.setSuplierState({ ...propsSuplier.suplierState, loading: false });

    return(
        <Modalize 
            toggleBottomNavigationView={propsSuplier.toggleBottomNavigationView}
            visible={propsSuplier.visible}
        >
          <Input
            value={propsSuplier.suplierState.name}
            onChange={(e: NativeSyntheticEvent<TextInputFocusEventData>) =>
                propsSuplier.setSuplierState({ ...propsSuplier.suplierState, name: e.nativeEvent.text })
            }
            placeholder="Digite um fornecedor"
          />
          <CustomButton
            text="Editar"
            disabled={propsSuplier.suplierState.loading}
            onPress={updateSuplierItem}
          />
          <CustomButton
            text="Excluir"
            disabled={false}
            onPress={() => {
                propsSuplier.toggleBottomNavigationView();
                propsSuplier.setSuplierState({ ...propsSuplier.suplierState, delete: true });
            }}
          />
        </Modalize>
      )
    }

