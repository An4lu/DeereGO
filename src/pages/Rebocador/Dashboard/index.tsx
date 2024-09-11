import { Buttons } from "../../../components/Buttons"
import { Cards } from "../../../components/Cards"
import { ProfileCard } from "../../../components/ProfileCard"
import { Status } from "../../../components/Status"
import { Container } from "./styles"
import { CarrinhosBox } from "../../../components/CarrinhosBox"

export const Dashboard = () => {
    return (
        <Container>
            <ProfileCard/>
            <Buttons/>
            <Cards/>
            <Status/>
            <CarrinhosBox/>
        </Container>
    )
}
