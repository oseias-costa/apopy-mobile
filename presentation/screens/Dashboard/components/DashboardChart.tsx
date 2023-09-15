import { useWindowDimensions } from "react-native";
import { StyleSheet, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import Container from "../../../components/Container";

export default function DashboardChart(){
    const window = useWindowDimensions()
    const width = window.width - 40
    const barData = [
        {value: 230,label: 'Jan',frontColor: '#049FB1'},
        {value: 180,label: 'Feb',frontColor: '#049FB1'},
        {value: 195,label: 'Mar',frontColor: '#049FB1'},
        {value: 250,label: 'Apr',frontColor: '#049FB1'},
        ];
        return (
            <Container>
                <View style={styles.chartContainer}>
                <BarChart
                    barBorderTopLeftRadius={5}
                    barBorderTopRightRadius={5}
                    barWidth={width / 9}
                    yAxisTextStyle={styles.chartY}
                    xAxisLabelTextStyle={styles.chartY}
                    xAxisColor='#D8D8D8'
                    yAxisColor='#D8D8D8'
                    noOfSections={5}
                    maxValue={350}
                    data={barData}
                    isAnimated
                    yAxisLabelWidth={40}
                />
                </View>
             </Container>     
    )
}

const styles = StyleSheet.create({
    chartContainer: {
        paddingTop: 20,
        alignItems: "center"
    },
    chartY: {
            color: '#8A8887',
            fontFamily: 'Raleway_500Medium',
            borderColor: '#8A8887'
    }
})