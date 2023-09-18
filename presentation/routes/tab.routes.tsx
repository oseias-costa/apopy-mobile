import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard/Dashboard";
import Settings from "../screens/Settings";
import ToManageRoutes from "./ToManageRoutes";

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
            <Tab.Screen
                name="settings2"
                component={Settings}
                options={{
                    tabBarLabel: 'Configurações'
                }}
            />
            <Tab.Screen
                name="toManage"
                component={ToManageRoutes}
                options={{
                    tabBarLabel: 'Gerenciar'
                }}
            />
        </Tab.Navigator>
    )
}