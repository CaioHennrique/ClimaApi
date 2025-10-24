import api from "./api";

async function Clima() {

    const clima = await api.get("/forecast.json", {
        params:{
        key:"8bb90a449309494eb5f220949252310",
        q: "São Paulo", 
        lang: "pt",
        day:1
    }})

    return clima.data

    
}



export {Clima}