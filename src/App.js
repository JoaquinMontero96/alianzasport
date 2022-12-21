import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';

export default function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greetings='Bienvenidos a Alianza Sport'/>
    </div>
  );
}
