import React from 'react';
import { Card, CardText, CardTitle, Container } from './styles';

export function Cards() {
    return (
        <Container>
            <Card>
                <CardTitle>Tempo Médio</CardTitle>
                <CardText>15m</CardText>
            </Card>
            <Card>
                <CardTitle>Tempo Médio</CardTitle>
                <CardText>15m</CardText>
            </Card>
            <Card>
                <CardTitle>Tempo Médio</CardTitle>
                <CardText>15m</CardText>
            </Card>
        </Container>
    );
}
