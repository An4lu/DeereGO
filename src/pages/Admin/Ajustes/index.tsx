import { Heading } from "../../../components/Heading"
import { useAuth } from "../../../contexts/AuthContext";
import { Background, ContainerReb, Div, DivGestor, DivInfos, Img, Linha } from "./styles"
import admin from "/admin.jpeg"


export const Ajustes = () => {
    const { user } = useAuth();

    return (
        <Background>
            <Heading css={{ marginBottom: '20px' }}>Ajustes</Heading>
            <Div>
                <Linha>
                    <DivGestor>
                        <Img src={admin} alt="" />
                        <Div css={{ gap: '8px' }}>
                            <DivInfos css={{ fontWeight: '800', fontSize: '30px' }}>{user?.nome}</DivInfos>
                            <DivInfos>{user?.email}</DivInfos>
                        </Div>
                    </DivGestor>
                </Linha>
                <Linha css={{ display: 'flex', flexDirection: 'row ' }}>
                    <ContainerReb>

                    </ContainerReb>
                </Linha>
            </Div>
        </Background>
    )
}
