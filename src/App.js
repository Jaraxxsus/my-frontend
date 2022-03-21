import './index.css';
import {Routes , Route } from "react-router-dom"
import About from './Pages/about';
import MainPage from './Pages/MainPage';
import PageNotFound from './Pages/PageNotFound';
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
