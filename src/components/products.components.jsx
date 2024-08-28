import React, {  useEffect, useState } from 'react';
import './products.css'

const Products = () => {
    const [getproduct , setGetproduct]=useState([])

    useEffect(()=>{
        const fetchProduct = async () => {
            try {
                const res = await fetch("https://react-interview.1putym.easypanel.host/api/product?email=naim.microdeft@gmail.com");                
                const data = await res.json();
                setGetproduct(data); // Set the data directly
                
            } catch (error) {
                console.error("Error fetching the quote:", error);
            }
        }
        fetchProduct();
    },[])
    
    return ( 
      < div className='card'>
        
            <>
             {getproduct.length > 0 ? getproduct.map((product, index) =>( <img key={index} src={product.image} />)) : "loading"}
            </>
           
       
      </div>
     );
}
 
export default Products;