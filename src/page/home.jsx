import { useEffect, useState } from "react"
import {
    Container, ContainerWeather, Tempo, Grau, Input,
    Informacao, Marcacao, IconTempAlta, IconTempBaixa, IconAgua,
    IconVento, GrauInfo, Previsao
} from "./style"
import { Clima } from "../services/getData"





function Home() {
    const [clima, setClima] = useState();


    useEffect(() => {

        const fetchDados = async () => {

            const climaAtual = await Clima();

            setClima(climaAtual)
            console.log(climaAtual)
        }

        fetchDados()
    }, [])


    return (

        <Container>

            <h1>WEATHER</h1>

            <ContainerWeather>
                {clima && (
                    <>
                        <Input />

                        <h2>{clima.location.name}, {clima.location.country} </h2>

                        <Tempo>
                            <img src={clima.current.condition.icon} alt="sol" />
                            <div>
                                <Grau>{clima.current.temp_c} <sup>°C</sup></Grau>
                                <Previsao>nublado</Previsao>
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
                )};
            </ContainerWeather>
        </Container>
    )
}

export default Home