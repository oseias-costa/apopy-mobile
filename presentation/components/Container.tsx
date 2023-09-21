import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";

export default function Container({ children }:{ children: ReactNode }){
    const shadow = {
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity:  0.2,
        shadowRadius: 3,
        elevation: 1.2
    }
    return <View style={[style.container, shadow]}>{children}</View>
}

const style = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        shadowColor: "#a9a5a5",
        padding: 15,
        shadowRadius: 1.51,
        borderColor: '#a9a5a5',
        borderRadius: 5,
        marginBottom: 10
    }
})