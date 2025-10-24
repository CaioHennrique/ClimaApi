import styled from "styled-components";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { FaWind } from "react-icons/fa6";


const Container = styled.div`

background: linear-gradient(
  135deg,
  rgba(255, 223, 86, 0.4),   /* amarelo claro (sol) */
  rgba(255, 183, 76, 0.84),   /* laranja suave */
  rgba(23, 57, 207, 0.7)   /* azul céu no fundo */
);
backdrop-filter: blur(12px);
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

const Input = styled.input`

font-size: .8rem;
padding: .5rem 0;
width: 100%;
background: rgba(116, 105, 105, 0.29);
border: 2px solid rgba(85, 76, 76, 0.06); 
border-radius: 10px;                
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.24); 
backdrop-filter: blur(10px); 
margin-bottom: 1rem;

`








const Tempo = styled.div`

display: flex;
align-items: center;
margin:.5rem 0;

height: 100px;
padding: 4rem 0;
background: rgba(116, 105, 105, 0.29);
backdrop-filter: blur(10px);   
border: 2px solid rgba(85, 76, 76, 0.06); 
border-radius: 16px;                 
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.16);

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
Informacao, Marcacao, IconTempAlta, IconTempBaixa, IconAgua, IconVento, GrauInfo, Previsao}