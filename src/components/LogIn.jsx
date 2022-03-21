import React from "react"
import { useDispatch } from "react-redux"


const LogInState = ()=>{

    const dispatch = useDispatch()
    
    function showRegistrationWindow(){
        dispatch({type : "SHOW_SIGNIN_STATE"})
    }

    function showLogInWindow(){
        dispatch({type : "SHOW_SIGNIN_STATE"})
    }

    const f =fetch('https://api.nomoreparties.co/beatfilm-movies')
    .then(res=>res.json())
   console.log(f)
   
    return(
        <div className="mainBlock">
            <form>
                <input type="email" className="form-control input" placeholder="Адрес электронной почты"></input>
                <input type="password" className="form-control input" placeholder="Пароль"></input>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary" onClick={showRegistrationWindow}>Зарегестрироваться</button>
                     <button type="button" className="btn btn-primary">Войти</button>
                </div>
            </form>
        </div>
        )
}
export default LogInState

