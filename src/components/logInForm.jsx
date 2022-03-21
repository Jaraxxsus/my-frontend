
import React, { useState } from "react";
import  "./components_css/loginForm.css"
import LogInState from "./LogIn.jsx";
import Registration from "./registration";
import { useDispatch, useSelector } from "react-redux";



 const LogIn = (state)=>{

    const dispatch = useDispatch()
    const logIn = useSelector(state=>state.logIn)
    console.log(logIn)

    function show(){
       if(logIn){
            return <LogInState  />
        }else{
            return <Registration />
        }
    }
    return(
        <div>
           {show()}
        </div>
    )
}
export default LogIn