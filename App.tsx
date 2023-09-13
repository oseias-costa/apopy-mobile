import Routes from './presentation/routes';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './presentation/redux/stores';
import { useFonts, Raleway_700Bold, Raleway_600SemiBold, Raleway_500Medium } from '@expo-google-fonts/raleway';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Raleway_700Bold,
    Raleway_600SemiBold,
    Raleway_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
