import './App.css';
import { BrowserRouter, Navigate, Route, Routes,Outlet, Link } from 'react-router-dom';

import Home from './components/home'
import Materias from './components/materias'
import Notas from "./components/notas"
import NavBarExample from './layouts/navbar'

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <home /> } />
    <Route path='materias' element={ <materias /> } />
    <Route path='Notas' element={ <notas /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>

    </div>
  );
}

export default App;
