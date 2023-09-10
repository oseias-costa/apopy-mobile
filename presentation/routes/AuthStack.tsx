import Login from "../screens/acess/Login"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../screens/Settings';
import Register from "../screens/acess/Register";

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                component={Login}
            />
            <Stack.Screen
                name='Register'
                component={Register}
            />
        </Stack.Navigator>
    )
}