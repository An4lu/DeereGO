import { Outlet } from "react-router"
import { Sidebar } from "../../components/Sidebar"
import { Container, Fundo } from "./styles"

export function LayoutAdmin() {
    return (
        <Container>
            <Sidebar />
            <Fundo>
                <Outlet />
            </Fundo>
        </Container>
    )
}
