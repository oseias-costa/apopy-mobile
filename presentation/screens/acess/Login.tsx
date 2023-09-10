import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from "react-native";
import { loginUseCase } from "../../../application/login.usecase";

export default function Login({ navigation }){
    const [ loginState, setLoginState ] = useState({
        email: '', password: ''
    })

    const handleLogin = async () => {
        const login = await loginUseCase(loginState.email, loginState.password)
        if(login.data.data){
            await AsyncStorage.setItem('apopyApi', JSON.stringify(login.data.data))
        }
    }

    return(
        <View>
            <Text>Login</Text>
            <TextInput 
                value={loginState.email}
                placeholder='Email'
                keyboardType='email-address'
                style={styles.input}
                onChange={ (e: NativeSyntheticEvent<TextInputChangeEventData>) => 
                    setLoginState({ ...loginState, email: e.nativeEvent.text })
                }
            />
            <TextInput 
                value={loginState.password}
                placeholder='Senha'
                style={styles.input}
                onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => 
                    setLoginState({...loginState, password: e.nativeEvent.text})
                }
            />
            <Button onPress={handleLogin} title="Entrar" />
            <Button onPress={() => navigation.navigate('Register')} title="Registar" />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  