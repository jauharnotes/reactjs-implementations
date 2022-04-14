// import React, { useState } from 'react';
import { createContext, useReducer } from 'react';
import HookReduser from './components/HookReduser';
// import LoginUseReducer from './components/LoginReducer';

// import './App.css';
// import ParentComp from './Component/Classes/ParentComp';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Keranjang from './pages/Keranjang';
// import HomePage from './materi01/Functional/HomePage';
// import AboutComp from './materi01/Functional/AboutComp';
// import NavbarComp from './materi01/Classes/NavbarComp';
// import ListMahasiswa from './materi01/Classes/ListMahasiswa';
// import TambahComp from './materi01/Classes/TambahComp';
// import EditComp from './materi01/Classes/EditComp';
// import FuncHook from './materi01/Hooks/Functional/FuncHook';
// import HooksComp from './materi01/Hooks/Class/HooksComp';
// // import HooksEffects from './materi01/Hooks/Functional/HooksEffects';
// import HooksUseEffects from './materi01/Hooks/Functional/HooksUseEffects';
// import ProductComp from './materi01/Hooks/Functional/productComp';
// import { CartContext } from './CartContext';
// import InputFile from './components/InputFile';

export const shoppingContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
        hargatotal: state.hargasatuan + state.hargasatuan * state.count,
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
        hargatotal: state.hargasatuan * state.count - state.hargasatuan,
      };
    default:
      throw new Error();
  }
}

const initialState = {
  count: 1,
  hargasatuan: 10000,
  hargatotal: 10000,
  disabled: false
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const[value, setValue] = useState(1)

  return (
    <shoppingContext.Provider value={{shoppingState: state, shoppingDispatch: dispatch}}> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/detail' element={<HookReduser />}/>
        <Route path='/cart' element={<Keranjang />}/>
      </Routes>
    </shoppingContext.Provider>
    // <BrowserRouter>
     
    //  <CartContext.Provider value={{value,setValue}}>
    //     <NavbarComp />
        
    //     <Switch>
    //       <Route exact path="/" component={HomePage} />
    //       <Route exact path="/about" component={AboutComp} />
    //       <Route exact path="/mahasiswa" component={ListMahasiswa} />
    //       <Route exact path="/mahasiswa/tambah" component={TambahComp} />
    //       <Route exact path="/mahasiswa/edit" component={EditComp} />
    //       <Route exact path="/class" component={HooksComp} />
    //       <Route exact path="/hook" component={FuncHook} />
    //       <Route exact path="/hookeffects" component={HooksUseEffects} />
    //       <Route exact path="/produk" component={ProductComp} />
    //     </Switch>
    //   </CartContext.Provider>
    // </BrowserRouter>
    // <InputFile />
    // <LoginUseReducer />
  );
}

export default App;
