import { useAuth } from '../../contexts/AuthContext';
import { Card, CardText, CardTitle, Container } from './styles';
import { useEffect, useState } from 'react';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

interface Entregas {
    _id: string;
    IdCarrinho: string[];
    IdUser: string;
    Partida: string;
    Destino: string;
    HoraPartida: string;
    HoraEntrega: string;
    Tempo: string;
    Status: string;
}


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

    const [entregas, setEntregas] = useState<Entregas[]>([]);
    useEffect(() => {
        fetch(`${apiBaseUrl}/rebocador/entrega`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setEntregas(data.filter((data: Entregas) => data.IdUser === user?.id));
                }
            });
    }, []);

    console.log('Número de entregas:', entregas.length);

    // Verificação da data de criação antes do cálculo
    console.log('Data de criação:', user?.dataCriacao);

    // Utilizando o campo correto "DataCriacao" para calcular o tempo de experiência
    const tempoDeCriacao = user?.dataCriacao
        ? calcularTempoDeCriacao(new Date(user.dataCriacao))
        : 'Data não disponível';

    return (
        <Container>
            <Card>
                <CardTitle>Entregas Realizadas</CardTitle>
                <CardText>{entregas.length}</CardText>
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
