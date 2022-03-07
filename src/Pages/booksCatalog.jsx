import React , {useEffect , useState } from "react";
import BookService from "../api/apiBooks";
import BookItem from "../components/bookItem";
import axios from "axios";

const Catalog = ()=>{

    const[booksData, setBooksData] = useState([])
    async function fetchP(){
        const books =  await BookService.getBooks()
        setBooksData(books)
    }
    useEffect(()=>{
        fetchP()
    }, [])

  
    return(
       <div>
           <h1>Каталог</h1>
           {booksData.length !== 0
               ? <BookItem   titleItem = {booksData[0].name} priceItem ={booksData[0].price} />
               : <h1>Данные не найдены(</h1>
           }
           
       </div>

    )
}
export default Catalog