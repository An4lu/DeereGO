import { Heading } from "../../../components/Heading"
import { useAuth } from "../../../contexts/AuthContext";
import { Background, Column01, Column02, ContainerEntregas, Div, DivContainer, Linha, Map, Row01, Row02 } from "./styles";

export const DashboardAdmin = () => {
    const { user } = useAuth();

    console.log('Usuário no Dashboard:', user);

    return (
        <Background>
            {user ? (
                <Heading css={{ marginBottom: '20px' }}>Olá, {user.nome}</Heading>
            ) : (
                <Heading>Olá Administrador</Heading>
            )}
            <DivContainer>
                <Div css={{ width: '20%' }}>
                    <Column01></Column01>
                    <Column02></Column02>
                </Div>
                <Div css={{ width: '80%' }}>
                    <Linha>
                        <Row01></Row01><Row02></Row02>
                    </Linha>
                    <Linha>
                        <Map></Map>
                        <ContainerEntregas></ContainerEntregas>
                    </Linha>
                </Div>
            </DivContainer>
        </Background>
    )
}
