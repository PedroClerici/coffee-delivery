import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import Logo from '../../assets/logo.svg'
import { Cart, HeaderContainer, Location } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <div>
        <Location>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </Location>
        <Cart to="/checkout">
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </div>
    </HeaderContainer>
  )
}
