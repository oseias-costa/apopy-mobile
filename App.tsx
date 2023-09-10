import Routes from './presentation/routes';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './presentation/redux/stores';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
