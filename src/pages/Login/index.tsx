import { useState } from "react"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Centro, DivButton, Fundo, Image, Inputs, Redirect, Title } from "./styles"
import icon from '/logotipo.png'

export const Login = () => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  // const [isLoading, setIsLoading] = useState(false)
  // const [errorMessage, setErrorMessage] = useState('')
  // const [inputBorderColor, setInputBorderColor] = useState('')

  // const handleLoginClick = async () => {
  //   setIsLoading(true)
  //   setErrorMessage('')
  //   setInputBorderColor('')

  //   if (email && senha) {
  //     try {
  //       const response = await loginApi.handleLogin(email, senha)

  //       if (response.status && response.data) {
  //         setUserData(response.data)
  //         navigate('/app/home')
  //       } else {
  //         setErrorMessage(response.message || 'Credencial inválida')
  //         setInputBorderColor('red')
  //       }
  //     } catch (error) {
  //       console.error('Erro na requisição:', error)
  //       setErrorMessage('Erro ao tentar fazer login')
  //       setInputBorderColor('red')
  //     }
  //   } else {
  //     setErrorMessage('Por favor, preencha ambos email e senha.')
  //     setInputBorderColor('red')
  //   }

  //   setIsLoading(false)
  // }

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
          // css={{ borderColor: inputBorderColor || '#F0EFEF' }}
          />
          <Input
            type="password"
            title="SENHA"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          // placeholder="Digite a sua senha"
          // css={{ borderColor: inputBorderColor || '#F0EFEF' }}
          />
        </Inputs>
        <DivButton>
          <Redirect to="/rebocador/home">
            <Button type="submit"><Image src={icon} alt="" /></Button>
          </Redirect>
        </DivButton>
      </Centro>
    </Fundo>
  )
}

