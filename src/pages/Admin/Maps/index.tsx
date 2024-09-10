import { Heading } from "../../../components/Heading"
import { Background, ContainerMap, Div } from "./styles"


export const Maps = () => {
    return (
        <Background>
            <Heading css={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>Mapa</Heading>
            <Div>
                <ContainerMap></ContainerMap>
            </Div>
        </Background>
    )
}
