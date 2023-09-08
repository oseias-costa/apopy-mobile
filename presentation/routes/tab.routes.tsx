import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Dashboard from "../screens/Dashboard";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen
                name="dashboard"
                component={Dashboard}
                options={{
                    tabBarLabel: 'Dashboard'
                }}
            />
            <Tab.Screen
                name="settings"
                component={Settings}
                options={{
                    tabBarLabel: 'Configurações'
                }}
            />
        </Tab.Navigator>
    )
}