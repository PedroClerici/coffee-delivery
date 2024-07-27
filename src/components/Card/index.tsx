import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import Expresso from '../../assets/coffees/espresso.png'
import {
  Container,
  CoffeeImg,
  Tags,
  Title,
  Description,
  Controls,
  Price,
} from './styles'

export function Card() {
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
        <div>
          <button>
            <Minus size={14} weight="bold" />
          </button>
          1
          <button>
            <Plus size={14} weight="bold" />
          </button>
        </div>
        <button className="add-to-cart">
          <ShoppingCartSimple size={22} weight="fill" />
        </button>
      </Controls>
    </Container>
  )
}
