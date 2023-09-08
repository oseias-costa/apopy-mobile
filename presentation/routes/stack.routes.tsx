import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../screens/Settings';

import TabRoutes from './tab.routes'

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Settings}
            />
        </Stack.Navigator>
    )
}