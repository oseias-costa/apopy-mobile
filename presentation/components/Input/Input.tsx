import { KeyboardTypeOptions, NativeEventEmitter, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { StyleSheet, TextInput } from "react-native";
import { useFontRaleway } from "../../hooks/useFontRaleway";

interface InputProps{ 
    value: string;
    placeholder: string;
    keyboardType?: KeyboardTypeOptions | undefined;
    onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void | undefined;
    secureTextEntry?: boolean
}

export default function Input({value, placeholder, keyboardType, onChange, secureTextEntry}: InputProps){

    return  <TextInput 
                style={styles.input} 
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                keyboardType={keyboardType}
                placeholderTextColor="#C0B4AD"
                secureTextEntry={secureTextEntry}
            />
}

const styles = StyleSheet.create({
    input: {
        borderColor: '#D8D8D8',
        borderRadius: 15,
        borderWidth: 1,
        height: 60,
        marginHorizontal: 20,
        marginBottom: 10,
        padding: 12,
        backgroundColor: '#F8F8F8',
        fontSize: 18,
        paddingLeft: 18,
        fontFamily: 'Raleway_600SemiBold'
      }
})