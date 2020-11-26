import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Home } from './components/home/Home';
import { Favorites } from './components/favorites/Favorites';
import { AboutUs } from './components/aboutUs/AboutUs';
import { Layout } from './components/layout/Layout';
import { AppRouter } from './router/AppRouter';
import  PerType from './components/perType/perType';
import DetailPokemon from './components/detailPokemon/DetailPokemon';


function App() {
  return (
    <>
      <AppRouter/>
      <Layout/>
      <DetailPokemon/>
      
    </>
  );
}

export default App;
