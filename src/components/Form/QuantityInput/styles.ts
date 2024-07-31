import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.baseButton};
  padding: 0.6rem 0.5rem;
  gap: 0.5rem;
  border-radius: 6px;
`

export const Amount = styled.span`
  ${mixins.fonts.textM}
  color: ${(props) => props.theme.baseTitle};
  line-height: 0;
`
export const Button = styled.button`
  border: none;
  background: none;
  color: ${(props) => props.theme.purple};
  line-height: 0;

  &:hover {
    cursor: pointer;
  }
`
