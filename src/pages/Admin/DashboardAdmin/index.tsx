import { Heading } from "../../../components/Heading"
import { useAuth } from "../../../contexts/AuthContext";
import { Container } from "./styles"

export const DashboardAdmin = () => {
    const { user } = useAuth();

    return (
        <Container>
            <Heading>Olá {user?.Nome}</Heading>
        </Container>
    )
}
