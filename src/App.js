import logo from './logo.svg';
import './App.css';
import Home from './components/screens/home/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Provider store={store}>
    <Home></Home>
    </Provider>
    </>
  );
}

export default App;
