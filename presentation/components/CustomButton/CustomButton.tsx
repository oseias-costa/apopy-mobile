import { ActivityIndicator, GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useFonts, Raleway_700Bold } from '@expo-google-fonts/raleway'

interface CustomButton {
    text: string;
    onPress: (event: GestureResponderEvent) => void,
    disabled?: boolean
}

export default function CustomButton({text, onPress, disabled} : CustomButton){
    const [fontsLoaded] = useFonts({
        Raleway_700Bold
      });
    
      if (!fontsLoaded) {
        return null;
      }

      const colorStyle = {
        backgroundColor: disabled ? "#828282" : '#049FB1',
        paddingTop: disabled ? 11 : 16,
        paddingBottom: disabled ? 11 : 16,
      }

    return(
        <TouchableOpacity 
            onPress={onPress} 
            style={[styles.button]} 
            disabled={disabled}
        >
            <Text 
                style={[styles.textButton, colorStyle]} 
                disabled={false}
            >
                { disabled 
                    ? <ActivityIndicator size="large" color="#fff" /> 
                    : text
                }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textButton: {
        fontFamily: 'Raleway_700Bold', 
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        borderRadius: 15,
    },
    button: {
        marginBottom: 5,
        height: 60,
        marginHorizontal: 20,
    }
})