import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import Logo from '../../assets/logo.svg'
import { Cart, Container, Aside, Location } from './styles'

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>

      <Aside>
        <Location>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </Location>

        <Cart to="/checkout">
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </Aside>
    </Container>
  )
}
