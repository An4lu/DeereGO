import { useAuth } from '../../contexts/AuthContext';
import { Card, CardText, CardTitle, Container } from './styles';

function calcularTempoDeCriacao(dataCriacao: Date) {

    const now = new Date();  // Data atual
    const diffInMs = now.getTime() - dataCriacao.getTime(); // Diferença em milissegundos
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)); // Diferença em dias

    if (diffInDays < 30) {
        return `${diffInDays} dia(s)`;
    } else if (diffInDays < 365) {
        const diffInMonths = Math.floor(diffInDays / 30); // Aproximando meses
        return `${diffInMonths} mês(es)`;
    } else {
        const diffInYears = Math.floor(diffInDays / 365);
        return `${diffInYears} ano(s)`;
    }
}

export function Cards() {
    const { user } = useAuth();

    // Verificação da data de criação antes do cálculo
    console.log('Data de criação:', user?.dataCriacao);

    // Utilizando o campo correto "DataCriacao" para calcular o tempo de experiência
    const tempoDeCriacao = user?.dataCriacao
        ? calcularTempoDeCriacao(new Date(user.dataCriacao))
        : 'Data não disponível';

    return (
        <Container>
            <Card>
                <CardTitle>Carrinhos Entregues</CardTitle>
                <CardText>15m</CardText>
            </Card>
            <Card>
                <CardTitle>Status</CardTitle>
                <CardText>{user?.status ? 'Operando' : 'Inativo'}</CardText>
            </Card>
            <Card>
                <CardTitle>Experiência</CardTitle>
                <CardText>{tempoDeCriacao}</CardText>
            </Card>
        </Container>
    );
}
