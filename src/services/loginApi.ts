import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const loginApi = {
    async handleLogin(email: string, senha: string) {
        try {
            console.log('Iniciando chamada à API de login'); // Log para depuração

            const response = await axios.post(`${apiBaseUrl}/user/login`, {
                Email: email,
                Senha: senha,
            });

            console.log('Resposta da API:', response.data); // Log para verificar a resposta da API

            if (response.status === 200 && response.data.token) {
                return response.data;
            } else {
                throw new Error('Login inválido');
            }
        } catch (error) {
            console.error('Erro na chamada da API:', console.error()) // Log de erro
            throw new Error('Erro ao fazer login: ' + console.error())
        }
    },
};
