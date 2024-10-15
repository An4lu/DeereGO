import { Trophy } from "@phosphor-icons/react"
import { ProfileCard } from "../../../components/ProfileCard"
import { Record } from "../../../components/Record"
import { Button } from "../../../components/Buttons/styles"

export const Perfil = () => {
    return (
        <>
            <ProfileCard/>
            <Button style={{marginTop: '1rem', fontSize: '1rem'}}><Trophy weight='bold'/>Metas</Button>
            <Record/>
        </>
    )
}
