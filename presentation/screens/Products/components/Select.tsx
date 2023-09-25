import React, { SetStateAction } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Modal, View } from "react-native";
import SecondaryButton from "../../../components/SecondaryButton";

interface SelectProps {    
    selectState: any,
    setSelectedState: React.Dispatch<SetStateAction<any>>
    data: {
        _id: string,
        name: string
    }[],
    placeholder: string
}

export default function Select({ data, selectState, setSelectedState, placeholder}: SelectProps){
    const selectItems = data?.map(item => {
        return (
            <TouchableOpacity key={item._id} onPress={() => setSelectedState({...selectState, selected: item})}>
                <Text style={styles.selectItem}>{item.name}</Text>
            </TouchableOpacity>
        )
    })

    return(
        <>
        <TouchableOpacity onPress={() => setSelectedState({...selectState, visible: true})}>
            <Text style={styles.input}>
                {   selectState.selected.name === '' ?
                    placeholder : selectState.selected.name
                }
            </Text>
        </TouchableOpacity>
        <Modal visible={selectState.visible} transparent={true} animationType='fade'>
        <View style={styles.screen} id="screen">
            <View style={styles.modalContainer}>
                <ScrollView style={styles.selectBody}>
                    {selectItems}
                </ScrollView>
                <SecondaryButton 
                    onPress={() => setSelectedState({...selectState, visible: false})} 
                    text='Fechar'
                    type="cancel"
                />
            </View>
        </View>
    </Modal>
    </>
    )
}

const styles = StyleSheet.create({
    screen: {
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
      paddingBottom: 20,
      paddingTop: 20,
    },
    selectBody: {
        backgroundColor: "white",
        // borderRadius: 10,
        margin: 20,
        maxHeight: 200,
        // borderColor: '#CECACA',
        // borderWidth: 1,
        paddingTop: 20
    },
    selectItem: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: '#CECACA',
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 3
    },
    input: {
        borderColor: '#D8D8D8',
        borderRadius: 8,
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        marginHorizontal: 20,
        marginBottom: 10,
        padding: 12,
        backgroundColor: '#F8F8F8',
        fontSize: 16,
        paddingLeft: 18,
        fontFamily: 'Raleway_600SemiBold'
      }
  });