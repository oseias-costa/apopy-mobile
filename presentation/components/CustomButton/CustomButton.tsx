import { ActivityIndicator, GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useFonts, Raleway_700Bold } from '@expo-google-fonts/raleway'

interface CustomButton {
    text: string;
    onPress: (event: GestureResponderEvent) => void,
    disabled?: boolean,
    loading?: boolean
}

export default function CustomButton({text, onPress, disabled, loading} : CustomButton){
    const [fontsLoaded] = useFonts({
        Raleway_700Bold
      });
    
      if (!fontsLoaded) {
        return null;
      }

      const colorStyle = {
        backgroundColor: disabled ? "#828282" : '#049FB1',
        borderColor:  disabled ? "#828282" : '#049FB1'
      }

    return(
        <TouchableOpacity 
            onPress={onPress} 
            style={[styles.button, colorStyle]} 
            disabled={disabled}
        >
            <Text 
                style={styles.textButton} 
                disabled={false}
            >
                { loading 
                    ? <ActivityIndicator size="small" color="#fff" /> 
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
        fontSize: 16,
        textAlign: 'center',
    },
    button: {
        marginBottom: 5,
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 10
    }
})