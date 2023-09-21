import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useFonts, Raleway_700Bold } from '@expo-google-fonts/raleway'

interface SecondaryButtonProps {
    text: string;
    onPress: (event: GestureResponderEvent) => void,
    type: 'cancel' | 'delete'
}

export default function SecondaryButton({text, onPress, type} : SecondaryButtonProps){
    const [fontsLoaded] = useFonts({
        Raleway_700Bold
      });
    
      if (!fontsLoaded) {
        return null;
      }

      const colorStyle = {
        color: type === 'cancel' ? '#828282' : '#FF4433',
      }

    return(
        <TouchableOpacity 
            onPress={onPress} 
            style={[styles.button]} 
        >
            <Text  style={[styles.textButton, colorStyle]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textButton: {
        fontFamily: 'Raleway_700Bold', 
        fontSize: 16,
        textAlign: 'center'
    },
    button: {
        marginBottom: 5,
        marginHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderRadius: 8,
        background: 'transparent',
        borderColor: '#828282'
    }
})