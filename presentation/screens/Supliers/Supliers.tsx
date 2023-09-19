import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Title from "../../components/Title";
import { useGetSuplier } from "../../hooks/useGetSupliers";
import SuplierItem from "./components/SuplierItem";
import {
  deleteSuplierUseCase,
} from "../../../application/suplier.usecase";
import { useDispatch } from "react-redux";
import {
  removeSuplier,
} from "../../redux/slice/suplierSlice";
import ModalDelete from "./components/ModalDelete";
import AddButton from "../../components/AddButton";
import UpdateAndDeleteButtonSheet from "./components/UpdateAndDeleteButtonSheet";
import CreateSuplier from "./components/CreateSuplier";

export interface SuplierState {
  name: string,
  _id: string,
  loading: boolean,
  delete: boolean,
  create: boolean,
}

export default function Supliers() {
  const { supliers, loading } = useGetSuplier();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const [suplierState, setSuplierState] = useState<SuplierState>({
    name: "",
    _id: "",
    loading: false,
    delete: false,
    create: false
  });

  const listSupliers = supliers.map((suplier) => (
    <SuplierItem
      item={suplier.name}
      key={suplier._id}
      onPress={() => {
        setSuplierState({ ...suplierState, name: suplier.name, _id: suplier._id });
        setVisible(!visible);
      }}
    />
  ));

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  const propsSuplier = {
    setSuplierState: setSuplierState,
    suplierState: suplierState,
    toggleBottomNavigationView: toggleBottomNavigationView,
    visible: visible
  }

  return (
    <ScrollView style={styles.container}>
      <Title>Supliers</Title>
      <View>{listSupliers}</View>
      <UpdateAndDeleteButtonSheet propsSuplier={propsSuplier} />
      <CreateSuplier propsSuplier={propsSuplier} />
      <AddButton onPress={() => setSuplierState({ ...suplierState, create: true, name: '' })} />
      <ModalDelete
        suplierState={suplierState}
        setSuplierState={setSuplierState}
        visible={suplierState.delete}
        value={suplierState.name}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCFCFC",
    height: '100%'
  }
});
