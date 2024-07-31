import { ShoppingCartSimple } from 'phosphor-react'
import Expresso from '../../assets/coffees/espresso.png'
import {
  Container,
  CoffeeImg,
  Tags,
  Title,
  Description,
  Controls,
  Price,
  Order,
} from './styles'
import { QuantityInput } from '../Form/QuantityInput'
import { useTheme } from 'styled-components'

export function Card() {
  const theme = useTheme()

  return (
    <Container>
      <CoffeeImg src={Expresso} alt="expresso" />

      <Tags>
        <span>TRADICIONAL</span>
        <span>COM LEITE</span>
      </Tags>

      <Title>Expresso Tradicional</Title>

      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <Controls>
        <Price>
          <span>R$</span>
          <span>9,90</span>
        </Price>

        <QuantityInput />

        <Order>
          <ShoppingCartSimple size={22} weight="fill" color={theme.white} />
        </Order>
      </Controls>
    </Container>
  )
}
