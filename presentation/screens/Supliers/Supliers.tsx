import React, { useState } from 'react'
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Title from "../../components/Title";
import { useGetSuplier } from "../../hooks/useGetSupliers";
import SuplierItem from "./components/SuplierItem";
import { BottomSheet } from 'react-native-btr';
import Input from '../../components/Input/Input';
import CustomButton from '../../components/CustomButton/CustomButton';
import { updateSuplierUseCase } from '../../../application/suplier.usecase';
import { useDispatch } from 'react-redux';
import { updateSuplier } from '../../redux/slice/suplierSlice';
import ModalDelete from './components/ModalDelete';

export default function Supliers(){
    const { supliers, loading } = useGetSuplier()
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()
    const [ suplierState, setSuplierState ] = useState({
        name: '', _id: '', loading: false, delete: false
    })

    const updateSuplierItem = async () => {
        setSuplierState({...suplierState, loading: true})
        const update = await updateSuplierUseCase(suplierState._id, suplierState.name) 
      
        if(update.data.data){
            dispatch(updateSuplier(update.data.data.updateSuplier))
            toggleBottomNavigationView()
            setSuplierState({...suplierState, loading: false})
        }
    }

    const listSupliers = supliers.map(suplier => 
        <SuplierItem 
            item={suplier.name} 
            key={suplier._id} 
            onPress={() => {
                setSuplierState({...suplierState, name: suplier.name, _id: suplier._id })
                setVisible(!visible)}}
        />)

        const toggleBottomNavigationView = () => {
            setVisible(!visible);
          };
        

    return(
        <ScrollView style={styles.container}>
            <ModalDelete visible={suplierState.delete} onPress={() => setSuplierState({...suplierState, delete: false})} />
            <Title>Supliers</Title>
            <View>{listSupliers}</View>
            <BottomSheet visible={visible}
                onBackButtonPress={toggleBottomNavigationView}
                onBackdropPress={toggleBottomNavigationView}
            >
                <View style={styles.modalize}>
                    <View style={styles.lineContainer}>
                        <View style={styles.line} />
                    </View>
                    <Input 
                        value={suplierState.name} 
                        onChange={(e: NativeSyntheticEvent<TextInputFocusEventData>) => 
                            setSuplierState({...suplierState, name: e.nativeEvent.text})} 
                        placeholder="Digite um fornecedor"
                    />
                    <CustomButton 
                        text='Editar' 
                        disabled={suplierState.loading} 
                        onPress={updateSuplierItem}
                    />
                    <CustomButton 
                        text='Excluir' 
                        disabled={false} 
                        onPress={()=> {
                            toggleBottomNavigationView()
                            setSuplierState({...suplierState, delete: true})
                        }}
                    />
                </View>
            </BottomSheet>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFCFC',
    },
    modalize: {
        backgroundColor: '#FCFCFC',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    lineContainer: {
        marginVertical: 10,
        alignItems: 'center',
        paddingBottom: 20
    },
    line: {
        width: 50,
        height: 4,
        backgroundColor: 'black',
        borderRadius: 20
    }
})