import { Trash } from 'phosphor-react'
import Expresso from '../../assets/coffees/espresso.png'
import { QuantityInput } from '../Form/QuantityInput'
import {
  Container,
  Info,
  CoffeeImg,
  Details,
  Title,
  Controls,
  Price,
  Remove,
} from './styles'

export function Coffee() {
  return (
    <Container>
      <Info>
        <CoffeeImg src={Expresso} alt="expresso" />
        <Details>
          <Title>Expresso Tradicional</Title>
          <Controls>
            <QuantityInput />
            <Remove>
              <Trash />
              <span>REMOVER</span>
            </Remove>
          </Controls>
        </Details>
      </Info>
      <Price>R$ 9,90</Price>
    </Container>
  )
}
