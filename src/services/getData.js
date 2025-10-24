import api from "./api";

async function testeClima() {

    const clima = await api.get("/current.json", {
        params:{
        key:"8bb90a449309494eb5f220949252310",
        q: "São Paulo", 
        lang: "pt"
    }})

    console.log(clima.data)
    return clima.data
    
}

export { testeClima}