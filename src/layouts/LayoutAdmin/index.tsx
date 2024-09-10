import { Outlet } from "react-router"
import { Sidebar } from "../../components/Sidebar"
import { Container } from "./styles"

export function LayoutAdmin() {
    return (
        <Container>
            <Sidebar />
            <Outlet />
        </Container>
    )
}
