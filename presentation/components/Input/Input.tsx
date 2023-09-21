import { KeyboardTypeOptions, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { StyleSheet, TextInput } from "react-native";

interface InputProps{ 
    value: string;
    placeholder?: string;
    keyboardType?: KeyboardTypeOptions | undefined;
    onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void | undefined;
    secureTextEntry?: boolean,
    editable?: boolean
}

export default function Input({ value, placeholder, keyboardType, onChange, secureTextEntry, editable}: InputProps){

    return  <TextInput 
                style={styles.input} 
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                keyboardType={keyboardType}
                placeholderTextColor="#C0B4AD"
                secureTextEntry={secureTextEntry}
                editable={editable}
            />
}

const styles = StyleSheet.create({
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
})