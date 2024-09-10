import { Container } from './styles'
import trator from '/loggif.gif'

export function Loading() {
  return (
    <Container>
      <img src={trator} alt="Loading" />
    </Container>
  )
}
