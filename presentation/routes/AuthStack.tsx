import Login from "../screens/acess/Login"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from "../screens/acess/Register";

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                component={Login}
                options={{
                    headerStyle: {
                        backgroundColor: '#012E40',
                    },
                    headerShown: false,
                    statusBarColor: '#012E40',
                    statusBarStyle: "light"
                }}
            />
            <Stack.Screen
                name='Register'
                component={Register}
                options={{
                    headerStyle: {
                        backgroundColor: '#012E40',
                    },
                    headerShown: false,
                    statusBarColor: '#012E40',
                    statusBarStyle: "light"
                }}
            />
        </Stack.Navigator>
    )
}