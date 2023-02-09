import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import { CartContextProvider } from './storage/cartContext';
import Cart from './components/Cart/Cart';
import { obtenerProductoUnico } from './services/db';

export default function App() {
  obtenerProductoUnico();

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/marca/:marcaid' element={<ItemListContainer />}/>
          <Route path='/item/:itemid' element={<ItemDetailContainer />}/>
          <Route path='*' element={<h2>Error 404: Page not found</h2>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}
