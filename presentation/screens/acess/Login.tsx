import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, Dimensions, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from "react-native";
import { useDispatch } from "react-redux";
import { loginUseCase } from "../../../application/login.usecase";
import CustomButton from "../../components/CustomButton/CustomButton";
import Description from "../../components/Description";
import Input from "../../components/Input/Input";
import LinkAcess from "../../components/LinkAcess";
import Title from "../../components/Title";
import { fetchUser } from "../../redux/slice/userSlice";
import { Image } from "expo-image";

export interface LoginStateInterface {
    email: string,
    password: string
}

export default function Login({ navigation }: {navigation: any}){
    const dispatch = useDispatch();
    const [ loginState, setLoginState ] = useState({
        email: '', password: ''
    })
    const [ isLoading, setIsLoading ] = useState(false)
    const screenDimensions = {
        width: Dimensions.get('screen').width
    }

    const handleLogin = async () => {
        setIsLoading(true)
        const login = await loginUseCase(loginState.email, loginState.password)
        if(login.data.data){
            await AsyncStorage.setItem('apopyToken', JSON.stringify("Bearer " + login.data.data.loginUser.token))
            dispatch(fetchUser(login.data.data.loginUser));
            setIsLoading(false)
        }
    }

    return(
        <View style={styles.container}>
            <Image 
                source={require('../../../assets/apopy-mobile-register.png')} 
                contentFit="cover"
                style={{
                    width: screenDimensions.width, 
                    height: screenDimensions.width / 1.32
                }}
            />
            <Title>Bem vindo</Title>
            <Description>Apopy é um controle de estoque para lojas de estofados. Organize seu estoque com uma ferramenta simples.</Description>
            <Input 
                value={loginState.email}
                placeholder='Email'
                keyboardType='email-address'
                onChange={ (e: NativeSyntheticEvent<TextInputChangeEventData>) => 
                    setLoginState({ ...loginState, email: e.nativeEvent.text })
                }
            />
            <Input 
                secureTextEntry={true}
                value={loginState.password}
                placeholder='Senha'
                onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => 
                    setLoginState({...loginState, password: e.nativeEvent.text})
                }
            />
            <CustomButton onPress={handleLogin} text="Entrar" disabled={isLoading} />
            <LinkAcess 
                question="Não possue uma conta?"  
                linkText="Registrar"
                path="Register"
                onPress={() => navigation.navigate('Register')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    input: {
      borderWidth: 0,
      height: 40,
      marginHorizontal: 20,
      marginBottom: 10,
      padding: 10,
      backgroundColor: '#F8F8F8'
    },
  });
  