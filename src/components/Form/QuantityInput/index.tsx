import { Minus, Plus } from 'phosphor-react'
import { Container, Amount, Button } from './styles'

export function QuantityInput() {
  return (
    <Container>
      <Button>
        <Minus size={14} weight="bold" />
      </Button>

      <Amount>1</Amount>

      <Button>
        <Plus size={14} weight="bold" />
      </Button>
    </Container>
  )
}
