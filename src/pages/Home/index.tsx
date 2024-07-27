import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import Illustration from '../../assets/illustration.jpg'
import { Intro, Item, Items, Title } from './styles'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <>
      <Intro>
        <section>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Title>

          <Items>
            <Item color="yellowDark">
              <div>
                <ShoppingCart size="16" weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </Item>
            <Item color="gray">
              <div>
                <Package size="16" weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item color="yellow">
              <div>
                <Timer size="16" weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </Item>
            <Item color="purple">
              <div>
                <Coffee size="16" weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </Item>
          </Items>
        </section>
        <figure>
          <img src={Illustration} alt="ilustração de um café" />
        </figure>
      </Intro>
      <section>
        <Card />
      </section>
    </>
  )
}
