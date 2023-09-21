import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { BottomSheet } from "react-native-btr";

interface ModalizeProps {
  visible: boolean;
  toggleBottomNavigationView: ()=> void,
  children: ReactNode
}

export default function Modalize({ 
  visible, toggleBottomNavigationView, children 
}: ModalizeProps){
  
    return(
        <BottomSheet
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}
        >
          <View style={styles.modalize}>
            <View style={styles.lineContainer}>
              <View style={styles.line} />
            </View>
            {children}
          </View>
        </BottomSheet>
    )
}

const styles = StyleSheet.create({
    modalize: {
        backgroundColor: "#FCFCFC",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingBottom: 20
      },
      lineContainer: {
        marginVertical: 10,
        alignItems: "center",
        paddingBottom: 20,
      },
      line: {
        width: 50,
        height: 4,
        backgroundColor: "#049FB1",
        borderRadius: 20,
      },
    });