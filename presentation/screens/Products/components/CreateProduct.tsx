import { SetStateAction } from "react";
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Input from "../../../components/Input/Input";
import Modalize from "../../../components/Modalize";
import SecondaryButton from "../../../components/SecondaryButton";
import { ProductState } from "../Products";

export interface ProductStateProps {
    productState: ProductState,
    setProductState: React.Dispatch<SetStateAction<ProductState>>
}

export default function CreateProduct({productState, setProductState}: ProductStateProps){
    return(
        <Modalize 
            toggleBottomNavigationView={() => setProductState({...productState, create: false})}
            visible={productState.create}
        >
            <Modal visible={false} transparent={true} animationType='fade'>
                    <View style={styles.screen} id="screen">
                        <View style={styles.modalContainer}>
                            <ScrollView style={styles.selectBody}>
                                <Text style={styles.selectItem}>Teste</Text>
                                <Text style={styles.selectItem}>Teste</Text>
                                <Text style={styles.selectItem}>Teste</Text>
                                <Text>Teste</Text>
                                <Text>Teste</Text>
                                <Text>Teste</Text>
                                <Text>Teste</Text>
                                <Text>Teste</Text>
                            </ScrollView>
                            <SecondaryButton 
                                onPress={() => console.log('fecgar')} 
                                text='Cancelar'
                                type="cancel"
                                />
                        </View>
                    </View>
            </Modal>
            <Input 
                value={productState.product.name} 
                onChange={(e) => setProductState({...productState, product: {...productState.product, name: e.nativeEvent.text }})
            } 
            />
        </Modalize>
    )
}

const styles = StyleSheet.create({
    screen: {
      backgroundColor: "rgba(0,0,0, 0.5)",
      width: '100%',
      height: "100%",
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20
    },
    modalContainer: { 
      width: '100%',
      backgroundColor: "white",
      borderRadius: 10,
      paddingBottom: 20,
      paddingTop: 20,
    },
    selectBody: {
        backgroundColor: "white",
        // borderRadius: 10,
        margin: 20,
        maxHeight: 200,
        // borderColor: '#CECACA',
        // borderWidth: 1,
        paddingTop: 20
    },
    selectItem: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: '#CECACA',
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 3
    }
  });