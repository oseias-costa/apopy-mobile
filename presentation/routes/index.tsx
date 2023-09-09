import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import DrawerRoutes from "./drawer.routes";

export default function Routes(){
    const auth = false
    return(
        <NavigationContainer>
            { auth ? <DrawerRoutes /> : <AuthStack /> }
        </NavigationContainer>
    )
}