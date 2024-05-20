import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin'
import Add from './pages/Add/Add'
import Basket from './pages/Basket/Basket';
import WishList from './pages/WishList/WishList';
import Detail from './pages/Detail/Detail';
import MainProvider from './context/MainProvider';
function App() {


  return (
    <>
    <MainProvider>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
       <Route path='/add' element={<Add/>}/>
       <Route path='/basket' element={<Basket/>}/>
       <Route path='/wishlist' element={<WishList/>}/>
       <Route path='/detail/:id' element={<Detail/>}/>
       </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </>
  )
}

export default App
