// import './App.css';
// import Nav from './components/nav';
// import { BrowserRouter } from 'react-router-dom';
// import Home from './components/screens/home/Home';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <Provider store={store}>
//     <BrowserRouter>
//         <div className="App">
//             <Nav />
//         </div>
//     </BrowserRouter>
// </Provider>
// );
// }

// export default App;




// import './App.css';
// import Nav from './components/nav';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/screens/home/Home';
// import { Provider, useSelector } from 'react-redux';
// import store from './redux/store';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import BakingOven from './components/screens/bakingOven/BakingOven';
// import Product from './components/screens/home/Product';
// import Receipes from './components/screens/recepies/ReceipessGallery';
// import Special from './components/screens/special/Special';
// import { EnlargedView } from './components/screens/home/EnlargedView';
// import ReceipessGallery from './components/screens/recepies/ReceipessGallery';
// import Recepie from './components/screens/recepies/Recepie';

// function App() {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <AppRoutes />
//       </BrowserRouter>
//     </Provider>
//   );
// }

// function AppRoutes() {
//   const cakeList = useSelector((state) => state.cakesList);

//   return (
//     <div className="App">
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/product" element={<Product />} />
//         <Route path="/bigViewe/:id" element={<EnlargedView />} />
//         <Route path="/Recepie/:id" element={<Recepie />} />
//         <Route path="/Home" element={<Home />} />
//         <Route path="/Receipes" element={<ReceipessGallery />} />
//         <Route path="/Special" element={<Special />} />
//         <Route path="/BakingOven" element={<BakingOven />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import './App.css';
import Nav from './components/nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/screens/home/Home';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import BakingOven from './components/screens/bakingOven/BakingOven';
import Product from './components/screens/home/Product';
import ReceipessGallery from './components/screens/recepies/ReceipessGallery';
import Special from './components/screens/special/Special';
import { EnlargedView } from './components/screens/home/EnlargedView';
import Recepie from './components/screens/recepies/Recepie';
import ShopingCartGallery from './components/screens/bakingOven/ShopingCartGallery';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // ודא שזה הנתיב לקובץ theme.js שלך

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

function AppRoutes() {
  const cakeList = useSelector((state) => state.cakesList);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/bigViewe/:id" element={<EnlargedView />} />
        <Route path="/Recepie/:id" element={<Recepie />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Receipes" element={<ReceipessGallery />} />
        <Route path="/Special" element={<Special />} />
        <Route path="/BakingOven" element={<ShopingCartGallery />} />
      </Routes>
    </div>
  );
}

export default App;
