import React from "react";
import axios from "axios";


export default class BookService {
    static async getBooks(){
    const response = await axios.get('http://127.0.0.1:8000/book/')
    return response.data
    }
}
 
      
    
    

