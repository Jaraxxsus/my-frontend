import React from "react";
import Greating from "../components/greating.tsx";
import LogIn from "../components/logInForm.tsx";
import Navbar from "../components/navbar.tsx";
import Registration from "../components/registration.tsx";
import Baza from '../components/baza.jsx'
import BookItem from "../components/book";
import BooksCatalog from "../components/books";

const MainPage = ()=>{
return(
    <div className="App">
        <Navbar />
        <Greating />
        <LogIn />
     
    </div>
    
)
}
export default MainPage