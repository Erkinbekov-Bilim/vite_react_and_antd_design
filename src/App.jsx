import './App.css'
import {Routes, Route} from "react-router-dom"
import Layout from './pages/layout/Layout'
import UsersPage from './pages/usersPage/UsersPage'
import UserPage from './pages/userPage/UserPage'
import MainPage from './pages/mainPage/MainPage'
import ProductsPage from './pages/productsPage/ProductsPage'
import ProductPage from './pages/productPage/ProductPage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/users' element={<UsersPage/>}/>
          <Route path='/users/:id' element={<UserPage/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/products/:id' element={<ProductPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
