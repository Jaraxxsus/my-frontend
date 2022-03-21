import React from "react";
import { useDispatch } from "react-redux";
import  "../components/components_css/loginForm.css"


const  Registration = ()=>{
    const dispatch = useDispatch()
        const showLogInPage = ()=>{
            dispatch({type: "SHOW_LOGIN_STATE"})
        }
   
    return(
        <div className="mainBlock">
            <form method = "post"> 
            <i className="fas fa-long-arrow-alt-left" 
            style={{fontSize : "2em" , padding : "0 0 0 1em"}}
            onClick={showLogInPage}>

            </i>
                <input type="email" className="form-control input" placeholder="Адрес электронной почты"></input>
                <input type="password" className="form-control input" placeholder=" Придумайте пароль"></input>
                <input type="password" className="form-control input" placeholder="Повторите пароль"></input>
                
                <div className="btn-group">
                     <button type="submit" className="btn btn-primary">Зарегестрироваться</button>
                </div>
            </form>
        </div>
    )
}
export default Registration