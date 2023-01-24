import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import { CartContextProvider } from './storage/cartContext';

export default function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/division/:divisionid' element={<ItemListContainer />}/>
          <Route path='/item/:itemid' element={<ItemDetailContainer />}/>
          <Route path='*' element={<h2>Error 404: Page not found</h2>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}
