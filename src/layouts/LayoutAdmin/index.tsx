import { Sidebar } from "../../components/Sidebar"
import { Container } from "./styles"

export function LayoutAdmin({ children }: { children: React.ReactNode }) {
    return (
        <Container>
            <Sidebar />
            {children}
        </Container>
    )
}
