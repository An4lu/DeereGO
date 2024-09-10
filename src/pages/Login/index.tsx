import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Centro, DivButton, Fundo, Image, Inputs, Title } from "./styles";
import icon from '/logotipo.png';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLoginClick = async () => {
    setIsLoading(true);
    setErrorMessage('');

    if (email && senha) {
      try {
        const response = await fetch(`${apiBaseUrl}/user/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ Email: email, Senha: senha }),
        });

        console.log('Response status:', response.status);

        if (response.ok) {
          const data = await response.json();
          const { token, role } = data;

          localStorage.setItem('authToken', token);

          if (role === 'admin') {
            navigate('/adm/home');
          } else if (role === 'rebocador') {
            navigate('/rebocador/home');
          } else {
            setErrorMessage('Função desconhecida');
          }
        } else {
          const errorData = await response.json();
          console.log('Erro no login:', errorData.message);
          setErrorMessage(errorData.message || 'Erro no login');

        }
      } catch (error) {
        console.error('Erro na requisição:', error);
        setErrorMessage('Erro ao tentar fazer login');
      }
    } else {
      setErrorMessage('Por favor, preencha ambos email e senha.');
    }

    setIsLoading(false);
  };

  return (
    <Fundo>
      <Centro>
        <Title>LOGIN</Title>
        <Inputs>
          <Input
            type="email"
            title="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemplo@gmail.com"
          />
          <Input
            type="password"
            title="SENHA"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite a sua senha"
          />
        </Inputs>
        <DivButton>
          <Button type="submit" onClick={handleLoginClick} disabled={isLoading}>
            {isLoading ? 'Carregando...' : <Image src={icon} alt="" />}
          </Button>
        </DivButton>
        {errorMessage && <span>{errorMessage}</span>}
      </Centro>
    </Fundo>
  );
};
