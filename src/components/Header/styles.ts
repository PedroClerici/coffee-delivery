import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  padding-block: 2rem;

  img {
    display: block;
  }

  & > div {
    display: flex;
    gap: 0.75rem;
    margin-left: auto;
  }
`

export const Location = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background: ${(props) => props.theme.purpleLight};
  color: ${(props) => props.theme.purple};
  border-radius: 6px;
`

export const Cart = styled(Link)`
  padding: 0.5rem;
  background: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellow};
  border-radius: 6px;
  line-height: 0;
`
