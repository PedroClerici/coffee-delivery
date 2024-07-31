import styled from 'styled-components'
import { mixins } from '../../styles/mixins'
import { Link } from 'react-router-dom'

export const Container = styled.main`
  display: flex;
  gap: 2rem;

  h4 {
    ${mixins.fonts.titleXS}
    color: ${(props) => props.theme.baseSubtitle};
    margin-bottom: 1rem;
  }
`

export const Info = styled.div`
  display: flex;
  flex: 1.5;
  flex-direction: column;
`

export const Address = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${(props) => props.theme.baseCard};
  border-radius: 6px;
  margin-bottom: 0.75rem;
  padding: 2rem;
`
export const Heading = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.yellowDark};
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      ${mixins.fonts.textM}
      color: ${(props) => props.theme.baseSubtitle};
    }

    p {
      ${mixins.fonts.textS}
      color: ${(props) => props.theme.baseSubtitle};
    }
  }
`

export const AddressHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme.yellowDark};
  }
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr 10%;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fulladdress fulladdress'
    'neighborhood city state';
  gap: 1rem 0.75rem;
`

export const Payment = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${(props) => props.theme.baseCard};
  border-radius: 6px;
  padding: 2rem;
`

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`

export const CartContainer = styled.div`
  flex: 1;
`

export const Cart = styled.section`
  background: ${(props) => props.theme.baseCard};
  padding: 2.5rem;
  height: 30rem;
  border-radius: 6px 44px 6px 44px;
`

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-block: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;

    span:first-child {
      ${mixins.fonts.textS}
    }

    span:last-child {
      ${mixins.fonts.textM}
    }
  }

  div:last-child {
    span {
      ${mixins.fonts.textL}
      font-weight: 700;
      color: ${(props) => props.theme.baseSubtitle};
    }
  }
`

export const Confirm = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  border-radius: 6px;
  padding-block: 0.75rem;
  background: ${(props) => props.theme.yellow};
  ${mixins.fonts.buttonG}
  color: ${(props) => props.theme.white};
  text-decoration: none;
  cursor: pointer;
`
