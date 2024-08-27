import { Trophy } from "@phosphor-icons/react"
import { ProfileCard } from "../../../components/ProfileCard"
import { Record } from "../../../components/Record"
import { Button } from "../../../components/Buttons/styles"

export const Perfil = () => {
    return (
        <>
            <ProfileCard/>
            <Button><Trophy weight='bold'/>Metas
            </Button>
            <Record/>
        </>
    )
}
