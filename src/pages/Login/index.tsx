import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Centro, DivButton, Fundo, Image, Inputs, Title } from './styles';
import icon from '/logotipo.png';
import { useAuth } from '../../contexts/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from '../../components/Loading';
import { User } from '../../types/User';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginClick = async () => {
    setIsLoading(true);

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
          const loginResponse = await response.json();
          console.log('Resposta da API (login):', loginResponse);

          const nome = loginResponse.Nome || loginResponse.nome;

          if (nome) {
            const userResponse = await fetch(`${apiBaseUrl}/user?nome=${nome}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });

            if (userResponse.ok) {
              const userDetails = await userResponse.json();
              console.log('Resposta da API (detalhes do usuário):', userDetails);

              // Mapeie os dados completos para o objeto User.
              const userData: User = {
                id: loginResponse._id || '',
                nome: loginResponse.Nome || '',
                email: loginResponse.Email || '',
                role: loginResponse.Role || '',
                fabrica: loginResponse.Fabrica || '',
                telefone: loginResponse.Telefone || '',
                status: loginResponse.Status || false,
                rebocadores: userDetails.rebocadores || [],
              };

              console.log('Dados do usuário mapeados:', userData);

              // Realizar o login com os dados mapeados
              login(userData);

              // Redirecionamento
              if (userData.role === 'admin') {
                navigate('/adm/home');
              } else if (userData.role === 'rebocador') {
                navigate('/rebocador/home');
              } else {
                toast.error('Função desconhecida');
              }
            } else {
              toast.error('Erro ao buscar os dados completos do usuário');
            }
          } else {
            toast.error('Nome do usuário não encontrado.');
          }
        } else {
          const errorData = await response.json();
          toast.error(errorData.message || 'Erro no login');
        }
      } catch (error) {
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
        </Centro>
      </Fundo>
    </>
  );
};
