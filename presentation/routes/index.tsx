import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/stores";
import AuthStack from "./AuthStack";
import DrawerRoutes from "./drawer.routes";

export default function Routes(){
    const user = useSelector((state: RootState) => state.user.user);
    return(
        <NavigationContainer>
            { user._id !== '' ? <DrawerRoutes /> : <AuthStack /> }
        </NavigationContainer>
    )
}