import { GestureResponderEvent, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export default function AddButton({onPress}:{onPress: (event: GestureResponderEvent) => void}){

    const shadow = {
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity:  0.2,
        shadowRadius: 3,
        elevation: 3.2
    }

    return(
        <TouchableOpacity style={[styles.container, shadow]} onPress={onPress}>
            <AntDesign name="plus" size={26} color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#049FB1',
        height: 46,
        width: 46,
        borderRadius: 400,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 20,
        top: 20
    }
})