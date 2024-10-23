import { Heading } from "../../../components/Heading"
import { Img } from "../DashboardAdmin/styles"
import { Background, ContainerM, Div } from "./styles"
import { MapaSlider } from "../../../components/MapaSlider/MapaSlider"
import mapa from "/mapa-2.png"

export const Maps = () => {
    return (
        <Background>
            <Heading css={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>Mapa</Heading>
            <Div>
                <ContainerM>
                    <Img src={mapa} alt="" />
                </ContainerM>
                <MapaSlider />
            </Div>
        </Background>
    )
}
