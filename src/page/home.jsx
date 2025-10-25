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

        fetchDados("sao paulo")

    }, [])


    return (

        <Container>

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