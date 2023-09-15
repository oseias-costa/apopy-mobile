import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardUseCase } from '../../../application/dashboard.usecase';
import Title from '../../components/Title';
import { useGetSales } from '../../hooks/useGetSales';
import { fetchDashboardData } from '../../redux/slice/dashboardSlice';
import { fetchUser, initialUserState } from '../../redux/slice/userSlice';
import { RootState } from '../../redux/stores';
import { salesMonthChartData } from './components/dashboard-utils';
import DashboardChart from './components/DashboardChart';
import DashboardNumbers from './components/DashboardNumbers';
import LastSales from './components/LastSales';
import WelcomeMessage from './components/WelcomeMessage';

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
    <ScrollView style={styles.container}>
      <Title>Dashboard</Title>
      <WelcomeMessage />
      <DashboardNumbers 
        description='Total em Estoque'
        number={dashboardData.totalValue}
        linkDescription='ver estoque'
      />
      <DashboardNumbers 
        description='Vendas Setembro'
        number={dashboardData.products}
        linkDescription='ver vendas'
      />
      <DashboardChart />
      <LastSales />
      <Button onPress={clearStorage} title='logout' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
