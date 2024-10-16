import { EntregasBox } from "../../../components/EntregasBox"
import { ProfileCard } from "../../../components/ProfileCard"
import { Container } from "../Dashboard/styles"

export const Entregas = () => {
    return (
        <Container>
            <ProfileCard/>
            <EntregasBox/>
        </Container>
    )
}
