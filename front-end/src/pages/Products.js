import React, { useEffect, useState } from 'react'
import Card from '../components/card/Card';
import {Section} from '../components/GlobalStyles';
import {CardData} from '../components/card/CardData';
import axios from 'axios';


function Products() {
    const [shoes, setShoes]= useState([]);
    useEffect(()=>{
        async function getShoes(){
            const res = await axios.get("http://localhost:8080/shoes");
            console.log(res);
            setShoes(res.data);
            
        } 
        getShoes();
    },[])    
    console.log(shoes.data);
    
    return (
        <div id="products">
            <Section>
                {shoes.data && shoes.data.map((e, index)=>
                    <Card 
                    key={index}
                    id={e.id}
                    name={e.name}
                    brandname={e.brandname}
                    price={e.price}
                    image={e.image}
                    color={e.color}
                    lightbg={e.bg}
                    flip={e.flip}
                    />
                    )}
            </Section>
        </div>
    )
}

export default Products;
