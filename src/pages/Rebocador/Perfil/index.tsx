import { Trophy } from "@phosphor-icons/react"
import { ProfileCard } from "../../../components/ProfileCard"
import { Record } from "../../../components/Record"
import { ButtonMetas } from "../../../components/Buttons/styles"
import { Container } from "../Dashboard/styles"

export const Perfil = () => {
    return (
        <Container>
            <ProfileCard/>
            <ButtonMetas style={{marginTop: '1rem', fontSize: '1rem'}}><Trophy weight='bold'/>Metas</ButtonMetas>
            <Record/>
        </Container>
    )
}
