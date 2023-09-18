import { Button, GestureResponderEvent, View } from "react-native";
import { Modal, Text } from "react-native";

export default function ModalDelete({visible, onPress}: {visible: boolean, onPress: (event: GestureResponderEvent) => void}){
    return(
        <Modal 
            animationType="fade"
            visible={visible}
            style={{ backgroundColor: 'black'}}
            transparent={true}
        >
            <View style={{ height: 200, width: 200, backgroundColor: 'red'}}>
                <Text>Teste</Text>
                <Button onPress={onPress} title='fechar' />
            </View>
        </Modal>
    )
}