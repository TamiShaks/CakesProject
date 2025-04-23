import './App.css';
import Nav from './components/nav';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/screens/home/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
        <div className="App">
            <Nav />
            <Home />
        </div>
    </BrowserRouter>
</Provider>
);
}

export default App;
