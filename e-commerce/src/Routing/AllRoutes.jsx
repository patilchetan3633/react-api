
import { Routes, Route } from "react-router-dom"
import Product from '../Components/product.jsx'
import AddProduct from '../Components/Addproduct.jsx'
import EditPage from '../Components/Editpage.jsx'
import Login from '../Components/Login.jsx'
import PrivateComponent from '../Components/PrivateComponent.jsx'
import Description from '../Components/Description.jsx'
import Home from "../Components/Home.jsx"

export function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={
         <PrivateComponent>
          <Product />
         </PrivateComponent>
        } />
        <Route path='/addproduct/:id' element={<AddProduct />} />
        <Route path='/edit' element={<EditPage />} />
        <Route path='/login' element={<Login />} />
        <Route path="/description/:id" element={<Description />} />
      </Routes>
    </div>
  )
}

