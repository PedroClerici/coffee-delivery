import { MapPin, CurrencyDollar, Money, CreditCard, Bank } from 'phosphor-react'
import { Coffee } from '../../components/Coffee'
import { TextInput } from '../../components/Form/TextInput'
import {
  Container,
  Info,
  Address,
  AddressHeading,
  AddressForm,
  Payment,
  PaymentHeading,
  PaymentForm,
  CartContainer,
  Cart,
  Total,
  Confirm,
} from './styles'
import { Radio } from '../../components/Form/Radio'

export function Checkout() {
  return (
    <Container>
      <Info>
        <h4>Complete seu pedido</h4>
        <Address>
          <AddressHeading>
            <MapPin size={22} />
            <div>
              <span>Endereço de Entrega</span>

              <p>Informe o endereço onde deseja receber o seu pedido</p>
            </div>
          </AddressHeading>

          <AddressForm>
            <TextInput
              placeholder="CEP"
              containerProps={{ style: { gridArea: 'cep' } }}
            />
            <TextInput
              placeholder="Rua"
              containerProps={{ style: { gridArea: 'street' } }}
            />
            <TextInput
              placeholder="Número"
              containerProps={{ style: { gridArea: 'number' } }}
            />
            <TextInput
              placeholder="Complemento"
              containerProps={{ style: { gridArea: 'fulladdress' } }}
              optional
            />
            <TextInput
              placeholder="Bairro"
              containerProps={{ style: { gridArea: 'neighborhood' } }}
            />
            <TextInput
              placeholder="Cidade"
              containerProps={{ style: { gridArea: 'city' } }}
            />
            <TextInput
              placeholder="UF"
              containerProps={{ style: { gridArea: 'state' } }}
            />
          </AddressForm>
        </Address>

        <Payment>
          <PaymentHeading>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>

              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentHeading>
          <PaymentForm>
            <Radio>
              <CreditCard size={22} />
              <span>CARTÃO DE CREDITO</span>
            </Radio>
            <Radio>
              <Bank size={22} />
              <span>CARTÃO DE DÉBITO</span>
            </Radio>
            <Radio>
              <Money size={22} />
              <span>DINHEIRO</span>
            </Radio>
          </PaymentForm>
        </Payment>
      </Info>

      <CartContainer>
        <h4>Cafés selecionados</h4>
        <Cart>
          <Coffee />
          <Coffee />
          <Total>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </Total>
          <Confirm to="/success">CONFIRMAR PEDIDO</Confirm>
        </Cart>
      </CartContainer>
    </Container>
  )
}
