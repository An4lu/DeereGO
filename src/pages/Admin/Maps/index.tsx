import { Heading } from "../../../components/Heading"
import { Img } from "../DashboardAdmin/styles"
import { Background, ContainerM, Div } from "./styles"
import mapa from "/mapinha.png"

export const Maps = () => {
    return (
        <Background>
            <Heading css={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>Mapa</Heading>
            <Div>
                <ContainerM><Img src={mapa} alt="" /></ContainerM>
            </Div>
        </Background>
    )
}
