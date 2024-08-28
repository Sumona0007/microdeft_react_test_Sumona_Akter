import React, {  useEffect, useState } from 'react';
import './form.css';


const Form=()=> {
    const [post , setPost]=useState([])

    useEffect(()=>{
        const fetchpost = async () => {
            try {
                const res = await fetch("https://react-interview.1putym.easypanel.host/api/product?email=naim.microdeft@gmail.com");                
                const data = await res.json();
                setPost(data); // Set the data directly
                console.log(data)
            } catch (error) {
                console.error("Error fetching the quote:", error);
            }
        }
        fetchpost();
    },[])
     
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
               
            <div className='form'>
                <input type='text' placeholder='Enter your product title'/>
                <input type='int' placeholder='Enter stock'/>
                <input type='float' placeholder='Enter Price' />
                <input  type='float' placeholder='Enter discount'/>
                <input  type='text' placeholder='Enter you Email'/>
                <div className='button'>
                    <button>Submit</button>
                </div>
            </div>
            </div>
            </nav>
        );
    
}
 
export default Form;