import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardUseCase } from '../../../application/dashboard.usecase';
import { useGetSales } from '../../hooks/useGetSales';
import { fetchDashboardData } from '../../redux/slice/dashboardSlice';
import { fetchUser, initialUserState } from '../../redux/slice/userSlice';
import { RootState } from '../../redux/stores';
import { salesMonthChartData } from './components/dashboard-utils';

export default function Dashboard() {
  const dispatch = useDispatch();
  const dashboardData = useSelector((state: RootState) => state.dashboard);
  const { sales } = useGetSales()
  const data = salesMonthChartData(sales, 7);

  const clearStorage = async () => {
    dispatch(fetchUser(initialUserState.user))
    await AsyncStorage.removeItem('apopyToken')
  }

  useEffect(() => {
    getDashboardUseCase().then((res) =>{
      dispatch(fetchDashboardData(res.data.data.dashboard))}
    );
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <View>
        <Text>Produtos</Text>
        <Text>{dashboardData.products}</Text>
      </View>
      <View>
        <Text>Total Produtos</Text>
        <Text>{dashboardData.totalItems}</Text>
      </View>
      <View>
        <Text>Total Itens</Text>
        <Text>{dashboardData.totalValue}</Text>
      </View>
      <Button onPress={clearStorage} title='logout' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
