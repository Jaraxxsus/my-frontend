import React from "react";
import Greating from "../components/greating";
import LogIn from "../components/logInForm";
import Navbar from "../components/navbar"

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