import { Button, GestureResponderEvent, StyleSheet, View } from "react-native";
import { Modal, Text } from "react-native";

export default function ModalDelete({
  visible,
  onPress,
  cancelAction,
}: {
  visible: boolean;
  onPress: (event: GestureResponderEvent) => void;
  cancelAction: (event: GestureResponderEvent) => void;
}) {
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        visible={visible}
        style={{ backgroundColor: "black" }}
        transparent={true}
      >
        <View style={{ height: 200, width: 200, backgroundColor: "red" }}>
          <Text>Teste</Text>
          <Button onPress={cancelAction} title="Cancelar" />
          <Button onPress={onPress} title="Excluir" />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0, 0.5)",
  },
});
