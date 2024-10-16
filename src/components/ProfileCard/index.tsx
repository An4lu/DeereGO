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
import { useAuth } from '../../contexts/AuthContext';

export function ProfileCard() {
    const { user } = useAuth();
    console.log(user)

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
                            <h2>{user?.nome}</h2>
                            <p>ID: {user?.id}</p>
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
                    <h2>{user?.rebocadores?.[0]?.totalCarrinhos ?? 'Sem dados'}</h2>
                </Text>
                <BtnHistoric>Histórico</BtnHistoric>
            </Bottom>
        </ProfileContainer>
    );
}
