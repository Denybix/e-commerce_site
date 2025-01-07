import './App.css'
import Home from './Home'
import Contact from './ContactUs'
import About from './AboutUs'
import BestSoldProducts from './BestSoldProducts'
import Clothing from './Clothing'
import Electronics from './Electronics'
import ProductDescription from './ProductDescription'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/bestsoldproducts' element={<BestSoldProducts/>}/>
        <Route path='/clothing' element={<Clothing/>}/>
        <Route path='/electronics' element={<Electronics/>}/>
        <Route path='/product/:id' element={<ProductDescription/>}/>
      </Routes>
    </>
  )
}

export default App;
