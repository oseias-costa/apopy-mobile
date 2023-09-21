import { SetStateAction } from "react";
import { StyleSheet, View } from "react-native";
import { Modal } from "react-native";
import { useDispatch } from "react-redux";
import { deleteSuplierUseCase } from "../../../../application/suplier.usecase";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Input from "../../../components/Input/Input";
import SecondaryButton from "../../../components/SecondaryButton";
import TitleModal from "../../../components/TitleModal";
import { removeSuplier } from "../../../redux/slice/suplierSlice";
import { SuplierState } from "../Supliers";

export default function ModalDelete({
  visible,
  value,
  suplierState,
  setSuplierState
}: {
  visible: boolean;
  value: string,
  suplierState: SuplierState,
  setSuplierState: React.Dispatch<SetStateAction<SuplierState>>
}) {
  const dispatch = useDispatch()

  const deleteSuplierItem = async () => {
    loadingAction(true);
    const deleteSup = await deleteSuplierUseCase(suplierState._id);

    if (deleteSup.data.data) {
      dispatch(removeSuplier(deleteSup.data.data.deleteSuplier));
      loadingAction(false);
      setSuplierState({ ...suplierState, delete: false })
    }
  };

  const loadingAction = (isLoading: boolean) =>
  isLoading
    ? setSuplierState({ ...suplierState, loading: true })
    : setSuplierState({ ...suplierState, loading: false });

  return (
    <Modal
        animationType="fade"
        visible={visible}
        transparent={true}
      >
    <View style={styles.container}>
        <View style={styles.modalContainer}>
          <TitleModal>Deseja realmente excluir o fornecedor?</TitleModal>
          <Input value={value} editable={false} />
          <CustomButton 
            onPress={deleteSuplierItem} 
            text="Excluir fornecedor" 
            disabled={suplierState.loading}
            loading={suplierState.loading}
          />
          <SecondaryButton type='cancel' onPress={() => setSuplierState({ ...suplierState, delete: false })} text="Cancelar" />
        </View>
    </View>
      </Modal>
  );
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
