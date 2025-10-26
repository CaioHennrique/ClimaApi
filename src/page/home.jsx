import { useEffect, useRef, useState } from "react"
import {
    Container, ContainerWeather, Tempo, Grau, Input,
    Informacao, Marcacao, IconTempAlta, IconTempBaixa, IconAgua,
    IconVento, GrauInfo, Previsao, IconSearch, IconPlace, ContainerInput
} from "./style"
import Clima from "../services/getData"


function Home() {
    const [clima, setClima] = useState(null);
    const [cidade, setCidade] = useState("");
     const [background, setBackground] = useState("")

    const inputRef = useRef(null);

    const fetchDados = async (cidadeAtual = cidade) => {
        if (!cidadeAtual) return
        const climaAtual = await Clima(cidadeAtual);

        setClima(climaAtual)
        console.log(climaAtual)

        setCidade("");
        inputRef.current.focus();
    }

    useEffect(() => {
    if (!clima) return;

    const condicao = clima.current.condition.text.toLowerCase();

    if (condicao.includes("parcial") || condicao.includes("limpo")) {
      setBackground("linear-gradient(to bottom, #47b3bb, #2d71cf)");
    } else if (condicao.includes("nublado") || condicao.includes("nuvem")) {
      setBackground("linear-gradient(to bottom, #D7D2CC, #304352)");
    } else if (condicao.includes("chuva")) {
      setBackground("linear-gradient(to bottom, #4B79A1, #283E51)");
    } else if (condicao.includes("tempestade") || condicao.includes("trovão")) {
      setBackground("linear-gradient(to bottom, #232526, #414345)");
    } else if (condicao.includes("neblina") || condicao.includes("névoa")  || condicao.includes("nevoeiro") || condicao.includes("neve")) {
      setBackground("linear-gradient(to bottom, #BBD2C5, #536976)");
    } else if (condicao.includes("calor") || condicao.includes("sol")) {
      setBackground("linear-gradient(to bottom, #F2994A, #F2C94C)");
    } else if (condicao.includes("vento")) {
      setBackground("linear-gradient(to bottom, #757F9A, #D7DDE8)");
    } else if (condicao.includes("pôr") || condicao.includes("amanhecer")) {
      setBackground("linear-gradient(to bottom, #FF9966, #FF5E62)");
    } else {
      // padrão (ensolarado)
      setBackground("linear-gradient(to bottom, #56CCF2, #2F80ED)");
    }
  }, [clima]);

    useEffect(() => {

        fetchDados("sao paulo")

    }, [])


    return (

        <Container style={{ background }}>

            <h1>WEATHER</h1>

            <ContainerInput>
                <IconSearch onClick={() => fetchDados(cidade)} />
                <Input onChange={(e) => setCidade(e.target.value)} ref={inputRef} placeholder="Digite uma cidade..."
                    value={cidade} />
                <IconPlace />
            </ContainerInput>

            <ContainerWeather>
                {clima && (
                    <>



                        <h2>{clima.location.name}, {clima.location.country} </h2>

                        <Tempo>
                            <img src={clima.current.condition.icon} alt="sol" />
                            <div>
                                <Grau>{clima.current.temp_c} <sup>°C</sup></Grau>
                                <Previsao>{clima.current.condition.text}</Previsao>
                            </div>
                        </Tempo>

                        <Informacao>

                            <Marcacao>
                                <IconTempAlta />
                                <div>
                                    <GrauInfo>Temp. max</GrauInfo>
                                    <p>{clima.forecast.forecastday[0].day.maxtemp_c} <sup>°C</sup></p>
                                </div>
                            </Marcacao>
                            <Marcacao>
                                <IconTempBaixa />
                                <div>
                                    <GrauInfo>Temp. min</GrauInfo>
                                    <p>{clima.forecast.forecastday[0].day.mintemp_c}<sup>°C</sup></p>
                                </div>
                            </Marcacao>
                            <Marcacao>
                                <IconAgua />
                                <div>
                                    <GrauInfo>Humidade</GrauInfo>
                                    <p>{clima.current.humidity}%</p>
                                </div>
                            </Marcacao>
                            <Marcacao>
                                <IconVento />
                                <div>
                                    <GrauInfo>Vento</GrauInfo>
                                    <p>{clima.forecast.forecastday[0].day.maxwind_kph}km/h</p>
                                </div>
                            </Marcacao>


                        </Informacao>

                    </>
                )}
            </ContainerWeather>
        </Container>
    )
}

export default Home