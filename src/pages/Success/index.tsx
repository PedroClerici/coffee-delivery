import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { Container, Heading, Info, InfoContent, Order } from './styles'

import Delivery from '../../assets/delivery.svg'
import { useTheme } from 'styled-components'

export function Success() {
  const theme = useTheme()
  console.log(theme)
  return (
    <Container>
      <Order>
        <Heading>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Heading>

        <Info>
          <InfoContent>
            <div>
              <MapPin
                color={theme.white}
                style={{ backgroundColor: theme.purple }}
                size={32}
              />

              <div>
                <span>
                  Entrega em Entrega em
                  <strong>Rua João Daniel Martinelli, 102</strong>
                </span>

                <span>Farrapos - Porto Alegre, RSh</span>
              </div>
            </div>

            <div>
              <Timer
                color={theme.white}
                style={{ backgroundColor: theme.yellow }}
                size={32}
              />

              <div>
                <span>Previsão de entrega</span>

                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar
                color={theme.white}
                style={{ backgroundColor: theme.yellowDark }}
                size={32}
              />

              <div>
                <span>Pagamento na entrega</span>

                <strong>Cartão de Credito</strong>
              </div>
            </div>
          </InfoContent>
        </Info>
      </Order>

      <img src={Delivery} alt="Pedido concluído" />
    </Container>
  )
}
