import { createDrawerNavigator } from '@react-navigation/drawer'
import Category from '../screens/Category/Category';
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
                name='category'
                component={Category}
                options={{
                    drawerLabel: 'Categorias'
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