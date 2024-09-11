import { Heading } from "../../../components/Heading"
import { Background, ContainerM, Div } from "./styles"


export const Maps = () => {
    return (
        <Background>
            <Heading css={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>Mapa</Heading>
            <Div>
                <ContainerM></ContainerM>
            </Div>
        </Background>
    )
}
