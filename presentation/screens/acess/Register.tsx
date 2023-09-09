import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from "react-native";
import { useDispatch } from "react-redux";
import { registerUseCase } from "../../../application/register.usecase";
import { RegisterUser } from "../../../domain/user";
import { fetchUser } from "../../redux/slice/userSlice";

export default function Register(){
    const dispatch = useDispatch()
    const [register, setRegister] = useState<RegisterUser>({
        name: "", email: "", password: "", phone: "",
      });

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
        <View>
            <Text>Registrar</Text>
            <TextInput 
                value={register.name}
                placeholder='Nome'
                style={styles.input}
                onChange={ (e: NativeSyntheticEvent<TextInputChangeEventData>) => 
                    setRegister({ ...register, name: e.nativeEvent.text })
                }
            />
            <TextInput 
                value={register.email}
                placeholder='Email'
                keyboardType='email-address'
                style={styles.input}
                onChange={ (e: NativeSyntheticEvent<TextInputChangeEventData>) => 
                    setRegister({ ...register, email: e.nativeEvent.text })
                }
            />
            <TextInput 
                value={register.phone}
                placeholder='Telefone'
                style={styles.input}
                onChange={ (e: NativeSyntheticEvent<TextInputChangeEventData>) => 
                    setRegister({ ...register, password: e.nativeEvent.text })
                }
            />
            <TextInput 
                value={register.password}
                placeholder='password'
                style={styles.input}
                onChange={ (e: NativeSyntheticEvent<TextInputChangeEventData>) => 
                    setRegister({ ...register, password: e.nativeEvent.text })
                }
            />
            <Button onPress={handleRegister} title='Registrar' />
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