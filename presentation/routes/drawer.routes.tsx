import { createDrawerNavigator } from '@react-navigation/drawer'
import StackRoutes from './stack.routes';

import TabRoutes from './tab.routes'

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name='Home'
                component={TabRoutes}
                options={{
                    drawerLabel: 'Início'
                }}
            />
            <Drawer.Screen
                name='settings'
                component={StackRoutes}
                options={{
                    drawerLabel: 'Settings'
                }}
            />
        </Drawer.Navigator>
    )
}