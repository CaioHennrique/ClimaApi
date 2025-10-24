import { Container, ContainerWeather, Tempo, Grau, IconTempo, Input,
Informacao,Marcacao, IconTempAlta, IconTempBaixa, IconAgua,
 IconVento, GrauInfo, Previsao } from "./style"




function Home() {

    return (

        <Container>

            <h1>WEATHER</h1>

            <ContainerWeather>

                <Input />
                <h2>São Paulo, Br</h2>

                <Tempo>
                    <IconTempo />
                    <div>
                        <Grau>23,4 <sup>°C</sup></Grau>
                        <Previsao>nublado</Previsao>
                    </div>
                </Tempo>

                <Informacao>

                    <Marcacao>
                        <IconTempAlta />
                        <div>
                            <GrauInfo>Temp. max</GrauInfo>
                            <p>28,4 <sup>°C</sup></p>
                        </div>
                    </Marcacao>
                    <Marcacao>
                        <IconTempBaixa />
                       <div>
                            <GrauInfo>Temp. min</GrauInfo>
                            <p>23,4 <sup>°C</sup></p>
                        </div>
                    </Marcacao>
                    <Marcacao>
                        <IconAgua />
                        <div>
                            <GrauInfo>Humidade</GrauInfo>
                            <p>60%</p>
                        </div>
                    </Marcacao>
                     <Marcacao>
                        <IconVento/>
                        <div>
                            <GrauInfo>Vento</GrauInfo>
                            <p>2.4km/h</p>
                        </div>
                    </Marcacao>


                </Informacao>



            </ContainerWeather>
        </Container>

    )
}

export default Home