import { Bell } from '@phosphor-icons/react';
import {
    Bottom,
    BtnHistoric,
    Detalhes,
    Head,
    IconeProfile,
    ImgProfile,
    ImgText,
    ProfileContainer,
    Text,
    TextProfile
} from './styles';

export function ProfileCard() {
    return (
        <ProfileContainer>
            <Head>
                <Detalhes>
                    <ImgText>
                        <ImgProfile
                            src="https://plus.unsplash.com/premium_photo-1682148403197-69741357d444?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Homem"
                        />
                        <TextProfile>
                            <h2>Gerson Anderson</h2>
                            <p>ID: 2384784</p>
                        </TextProfile>
                    </ImgText>
                    <IconeProfile>
                        <Bell size={32} />
                    </IconeProfile>
                </Detalhes>
            </Head>
            <Bottom>
                <Text>
                    <p>Carros-Kit Entregues</p>
                    <h2>17</h2>
                </Text>
                <BtnHistoric>Histórico</BtnHistoric>
            </Bottom>
        </ProfileContainer>
    );
}
