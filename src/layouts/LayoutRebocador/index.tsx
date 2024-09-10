import { Outlet } from "react-router"
import { Menu } from "../../components/Menu"
import { Container } from "./styles"

export function LayoutRebocador() {
    return (
        <Container>
            <Outlet />
            <Menu />
        </Container>
    )
}
