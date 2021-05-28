import React, {useState, useEffect} from 'react'
import {Section} from '../components/GlobalStyles';
import Bigcard from '../components/card/Bigcard';
import {Bigcarddata} from '../components/card/Bigcarddata'
import styled, {keyframes} from 'styled-components';
import axios from 'axios';

const floating = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 18px); }
    100%   { transform: translate(0, -0px); }
`;


const Container = styled.div`

    font-family: 'Open Sans', sans-serif;   
    margin: 30px;
    padding: 20px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    
    @media screen and (max-width: 768px){
        grid-template-row: 1fr;
    }
`;

const RowTop = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 2rem;


h1{
    margin-bottom: 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    color: #fff;
}

p{
    text-align: center;
    margin: 2rem 0;
    text-align: center;
    font-size: 3rem;
    line-height: 1.1;
    color: #fff;
}

`;

const RowBottom= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;

    h3{
        animation: ${floating} 3s ease-in-out infinite;
        font-size: 3rem;
        color: white;
        padding: 30px 60px;
        text-align: center;
        background: #0000FF;
        border-radius: 7px;
    }

    @media screen and (max-width: 768px){
        h3{
        font-size: 2rem;
    }
    }
`;


function Landing() {

    const [shoes, setShoes]= useState([]);
    useEffect(()=>{
        async function getShoes(){
            const res = await axios.get("http://localhost:8080/shoesinfo");
            console.log(res);
            setShoes(res.data);
            
        } 
        getShoes();
    },[])    
    console.log(shoes);
    return (
        <div id="landing">
            <Section primary>
                <Container>
                <RowBottom>
                    <h3>NEW ARRIVAL</h3>
                            
                            <Bigcard 
                            id={shoes.id}
                            name={shoes.name}
                            brandname={shoes.brandname}
                            price={shoes.price}
                            image={shoes.image}
                            color={shoes.color}
                            lightbg={shoes.bg}
                            flip={shoes.flip}
                            />
                            
                    </RowBottom>
                    <RowTop>
                        <h1>WELCOME TO THE NUMBER 1 SHOE STORE</h1>
                        <p>LET'S DIVE IN</p>
                    </RowTop>
                    
                </Container>
            </Section>
        </div>
    )
}

export default Landing;