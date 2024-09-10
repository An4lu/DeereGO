import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Centro, DivButton, Fundo, Image, Inputs, Title } from "./styles";
import icon from '/logotipo.png';
import { Loading } from "../../components/Loading";
import { User } from "../../types/User";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

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

        if (response.ok) {
          const userData: User = await response.json();
          localStorage.setItem('userData', JSON.stringify(userData));

          if (userData.Role === 'admin' || userData.role === 'admin') {
            navigate('/adm/home');
          } else if (userData.Role === 'rebocador' || userData.role === 'rebocador') {
            navigate('/rebocador/home');
          } else {
            toast.error('Função desconhecida');
          }
        } else {
          const errorData = await response.json();
          console.log('Erro no login:', errorData.message);
          toast.error(errorData.message || 'Erro no login');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
        toast.error('Erro ao tentar fazer login');
      }
    } else {
      toast.error('Por favor, preencha os campos de email e senha.');
    }

    setIsLoading(false);
  };

  return (
    <>
      <ToastContainer />
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
              {isLoading ? <Loading /> : <Image src={icon} alt="" />}
            </Button>
          </DivButton>
          {errorMessage && <span>{errorMessage}</span>}
        </Centro>
      </Fundo>
    </>
  );
};
