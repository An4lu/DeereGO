import { Heading } from "../../../components/Heading"
import { useAuth } from "../../../contexts/AuthContext";
import { Background, Column01, Div, Row01, Row02 } from "./styles";

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
            <Div>
                <Column01></Column01>
                <Row01></Row01><Row02></Row02>
            </Div>
        </Background>
    )
}
