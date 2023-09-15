import { StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/stores";

export default function WelcomeMessage(){
    const user = useSelector((state: RootState) => state.user.user)

    return <Text style={styles.text}>Olá, {user.name.split(' ')[0]}.</Text>
}

const styles = StyleSheet.create({
    text: {
        paddingHorizontal: 20,
        position: 'relative',
        bottom: 12,
        color: '#4C4A51',
        fontFamily: 'Raleway_500Medium'
    }
})