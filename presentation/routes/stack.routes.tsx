import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from '../screens/Category/Category';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Settings}
            />
            <Stack.Screen
                name='Categoria'
                component={Category}
            />
        </Stack.Navigator>
    )
}