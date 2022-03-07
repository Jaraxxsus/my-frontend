import './index.css';
import Greating from './components/greating.tsx';
import Navbar from './components/navbar.tsx';
import {Routes , Route } from "react-router-dom"
import About from './Pages/about.tsx';
import MainPage from './Pages/MainPage.tsx';
import PageNotFound from './Pages/PageNotFound.tsx';
import Catalog from './Pages/booksCatalog';



function App() {
  return (
    <div className="App">
    
      
      <Routes>
        <Route path = "/"  element = {<MainPage/>} />
        <Route path = "/about" element={<About />} />
        <Route path = "/books" element={<Catalog />} />
        <Route path = "*" element={<PageNotFound />} />
   
      </Routes >
      
    </div>
  );
}

export default App;
