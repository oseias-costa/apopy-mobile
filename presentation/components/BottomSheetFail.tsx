import { useCallback, forwardRef, useImperativeHandle } from "react";
import { Dimensions, useWindowDimensions } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";

const BottomSheet = forwardRef(({activeHeight}: {activeHeight: number}, ref) => {
    const { height } = Dimensions.get('window')
    // const topAnimation = useSharedValue(height)
    // const animationStyle = useAnimatedStyle(() => {
    //     const top = topAnimation.value;
    //     return {
    //         top,
    //     }
    // })
    console.log(height)

    return(
        <Animated.View style={[styles(height).container]}>
            <View style={styles(height).lineContainer}>
                <View style={styles(height).line} />
            </View>
                <Text>Ola</Text>
        </Animated.View>
    )
})

export default BottomSheet

const styles = (height: number) => StyleSheet.create({
    container: {
        backgroundColor: 'red',
        position: 'absolute',
        width: '100%',
        height: 1200,
        top: 350,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    lineContainer: {
        marginVertical: 10,
        alignItems: 'center'
    },
    line: {
        width: 50,
        height: 4,
        backgroundColor: 'black',
        borderRadius: 20
    }
})