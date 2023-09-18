import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ToManage from "../screens/ToManage/ToManage"
import Category from '../screens/Category/Category'
import Supliers from "../screens/Supliers/Supliers"
import Products from "../screens/Products/Products"

const Stack = createNativeStackNavigator()

export default function ToManageRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="ToManage"
                component={ToManage}
                options={{
                    headerShown: false 
                }}
            />
            <Stack.Screen
                name="category"
                component={Category}
                options={{
                    headerShown: false 
                }}
            />
            <Stack.Screen
                name="supliers"
                component={Supliers}
                options={{
                    headerShown: false 
                }}
            />
            <Stack.Screen
                name="products"
                component={Products}
                options={{
                    headerShown: false 
                }}
            />
        </Stack.Navigator>
    )
}