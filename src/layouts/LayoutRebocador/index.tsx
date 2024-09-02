import { Menu } from "../../components/Menu"
import { Container } from "./styles"

export function LayoutRebocador({ children }: { children: React.ReactNode }) {
    return (
        <Container>
            {children}
            <Menu />
        </Container>
    )
}
