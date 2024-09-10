import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../services/loginApi';

interface AuthContextProps {
    user: any;
    token: string | null;
    isAuthenticated: boolean;
    login: (email: string, senha: string) => Promise<void>;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<any>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false); // Estado de carregamento
    const navigate = useNavigate();

    // Verifica localStorage ao iniciar para restaurar a sessão
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
            console.log('Token e usuário restaurados do localStorage:', storedToken, storedUser);
        } else {
            console.log('Nenhum token ou usuário encontrado no localStorage');
        }
    }, []);

    // Função de login
    const login = async (email: string, senha: string) => {
        setLoading(true); // Ativa o estado de carregamento
        try {
            const response = await loginApi.handleLogin(email, senha);

            if (response.token) {
                setToken(response.token);
                setUser({ email, role: response.role });

                console.log('Login bem-sucedido:', response);

                // Armazenar no localStorage
                localStorage.setItem('token', response.token);
                localStorage.setItem('user', JSON.stringify({ email, role: response.role }));

                // Redirecionar com base no role
                if (response.role === 'admin') {
                    navigate('/adm/home');
                } else if (response.role === 'rebocador') {
                    navigate('/rebocador/home');
                }
            } else {
                console.error('Login falhou: Token não encontrado na resposta');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        } finally {
            setLoading(false); // Desativa o estado de carregamento
        }
    };

    return (
        <AuthContext.Provider value={{ user, token, isAuthenticated: !!token, login, logout: () => { } }}>
            {loading ? <p>Carregando...</p> : children} {/* Mostra "Carregando..." enquanto a API está sendo chamada */}
        </AuthContext.Provider>
    );
};
