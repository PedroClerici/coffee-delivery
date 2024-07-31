import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const Container = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  background: ${(props) => props.theme.baseButton};
  padding: 1rem;
  border-radius: 6px;

  transition: all 0.2s;
  cursor: pointer;

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }

  span {
    ${mixins.fonts.buttonM}
  }

  &:hover {
    background: ${(props) => props.theme.baseHover};
  }

  &[data-state='true'] {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme.purpleLight};
  }
`
