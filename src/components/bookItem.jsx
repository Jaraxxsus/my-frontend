import React from "react";


const BookItem = (props)=>{
    return(
        <div>
            <div className="itemHeader"></div>
            <div className="itemBody">
                <h3>{props.titleItem}</h3>
                <p>{props.priceItem}</p>
            </div>
        </div>
    )
}
export default  BookItem