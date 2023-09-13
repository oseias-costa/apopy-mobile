import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import { useState } from "react";
import { Dimensions, NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { registerUseCase } from "../../../application/register.usecase";
import { RegisterUser } from "../../../domain/user";
import CustomButton from "../../components/CustomButton/CustomButton";
import Description from "../../components/Description";
import Input from "../../components/Input/Input";
import LinkAcess from "../../components/LinkAcess";
import Title from "../../components/Title";
import { fetchUser } from "../../redux/slice/userSlice";

export default function Register({navigation}: {navigation: any}){
    const dispatch = useDispatch()
    const [register, setRegister] = useState<RegisterUser>({
        name: "", email: "", password: "", phone: "",
      });
      const screenDimensions = {
        width: Dimensions.get('screen').width
    }

      async function handleRegister() {
        const registerUser = await registerUseCase({
          name: register.name,
          email: register.email,
          password: register.password,
          phone: register.phone,
        });

        if (registerUser.data.data.registerUser) {
            AsyncStorage.setItem(
              "apopyToken",
              JSON.stringify("Bearer " + registerUser.data.data.registerUser.token)
            );
            dispatch(fetchUser(registerUser.data.data.user));
          }
      
          if (registerUser.data.errors) {
            const err = registerUser.data.errors[0].message;
          }
        }

    return(
        <ScrollView style={styles.container}>
           <Image 
                source={require('../../../assets/apopy-mobile-register.png')} 
                contentFit="cover"
                style={{
                    width: screenDimensions.width, 
                    height: screenDimensions.width / 1.32
                }}
            />
            <Title>Registrar-se</Title>
            <Description>Apopy é um controle de estoque para lojas de estofados. Organize seu estoque com uma ferramente simples.</Description>
            <Input 
                value={register.name}
                placeholder='Nome'
                onChange={ (e: NativeSyntheticEvent<TextInputChangeEventData>) => 
                    setRegister({ ...register, name: e.nativeEvent.text })
                }
            />
            <Input 
                value={register.email}
                placeholder='Email'
                keyboardType='email-address'
                onChange={ (e: NativeSyntheticEvent<TextInputChangeEventData>) => 
                    setRegister({ ...register, email: e.nativeEvent.text })
                }
            />
            <Input 
                value={register.phone}
                placeholder='Telefone'
                onChange={ (e: NativeSyntheticEvent<TextInputChangeEventData>) => 
                    setRegister({ ...register, password: e.nativeEvent.text })
                }
            />
            <Input 
                value={register.password}
                secureTextEntry={true}
                placeholder='Senha'
                onChange={ (e: NativeSyntheticEvent<TextInputChangeEventData>) => 
                    setRegister({ ...register, password: e.nativeEvent.text })
                }
            />
            <CustomButton onPress={handleRegister} text='Registrar' disabled={false} />
            <LinkAcess
                question="Já possue uma conta?"  
                linkText="Login"
                path="Login"
                onPress={() => navigation.navigate('Login')}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
      flex: 1
  }
});
