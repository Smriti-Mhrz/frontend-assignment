import './App.scss';
import { Footer, NavBar } from './layouts';
import { Homepage, ProductPage, SingleProduct } from './pages';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <NavBar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/singleproduct:id' element={<SingleProduct/>}/>  
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
