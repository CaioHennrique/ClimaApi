import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { MdPlace } from "react-icons/md";

import { FaTemperatureHigh } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { FaWind } from "react-icons/fa6";


const Container = styled.div`

padding: 1.5rem ;
width: 80%;
margin: 0 auto;
border-radius: 10px;
max-width: 550px;

h1{
   text-align: center;
}

     @media screen  and (min-width:600px){

    h1{
        font-size: 2rem;
        margin: .5rem 0;
    }

 };

`





const ContainerWeather = styled.div`

display: flex;
align-items: center;
flex-direction: column;

h2{
    text-align: center;
   
}

 @media screen  and (min-width:600px){

    h2{
        font-size: 2rem;
        margin: .5rem 0;
    }

 };

`

const ContainerInput = styled.div`

display: flex;
align-items: center;
position: relative;
background: rgba(116, 105, 105, 0.29);
border: 2px solid rgba(85, 76, 76, 0.06); 
border-radius: 10px;                
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.24); 
backdrop-filter: blur(10px); 
margin-bottom: 1rem;


`

const Input = styled.input`

background-color: transparent;
z-index: 1;
padding:.5rem ;
padding-right: 0;
font-size: 1rem;
margin: 0 1.8rem ;
width: 80%;

`

const IconSearch = styled(FaSearch)`

position: absolute;
content: "";
width: fit-content;
font-size: 1.2rem;
right: 0;
cursor: pointer;
padding: .5rem 1rem;
`

const IconPlace = styled(MdPlace)`

position: absolute;
content: "";
width: fit-content;
font-size: 1.5rem;
left: 1%;

`


const Tempo = styled.div`

display: flex;
align-items: center;
gap: 5%;
margin:.5rem 0;

height: 100px;
padding: 4rem 0;
background: rgba(116, 105, 105, 0.29);
backdrop-filter: blur(10px);   
border: 2px solid rgba(85, 76, 76, 0.06); 
border-radius: 16px;                 
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.16);



img{
   

    @media screen  and (min-width:600px){

      height: 220px;
      width: 220px;

    }
}

 @media screen  and (min-width:500px){

   margin-bottom: 2rem;
 };
 


`
const Grau = styled.p`

font-weight: bold;
font-size: 2.5rem;

 @media screen  and (min-width:500px){

    font-size: 3.5rem;

 };
 

`

const Previsao = styled.p`

font-size: 1.5rem;

 @media screen  and (min-width:500px){

    font-size: 2rem;

 };

`

const Informacao = styled.div`
 display: grid;
 grid-template-columns: repeat(1, 1fr);
 gap:.5rem;

 @media screen  and (min-width:500px){

    grid-template-columns: repeat(2, 1fr);
    gap:1rem;

 };
 

`
const Marcacao = styled.div`

display: flex;
align-items: center;

border-radius: 10px;
background: rgba(116, 105, 105, 0.29);
backdrop-filter: blur(10px);   
border: 2px solid rgba(85, 76, 76, 0.06); 
padding: .3rem 0;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

div{
   display: flex;
   flex-direction: column;
   gap:.2rem; 
}


`
const IconTempAlta = styled(FaTemperatureHigh)`
color: red;

width: fit-content;
font-size:2.5rem;
padding: 0 1.5rem;

`
const IconTempBaixa = styled(FaTemperatureLow)`
color: blue;

width: fit-content;
font-size:2.5rem;
padding: 0 1.5rem;

`
const IconAgua = styled(IoIosWater)`
color: Blue;

width: fit-content;
font-size:2.5rem;
padding: 0 1.5rem;

`
const IconVento = styled(FaWind)`
color: purple;

width: fit-content;
font-size:2.5rem;
padding: 0 1.5rem;

`
const GrauInfo = styled.p`

font-weight: bold;
font-size: 1.2rem;

`
export { Container, ContainerWeather, Tempo,Grau, Input, 
Informacao, Marcacao, IconTempAlta, IconTempBaixa, IconAgua,
 IconVento, GrauInfo, Previsao, IconSearch, IconPlace, ContainerInput}