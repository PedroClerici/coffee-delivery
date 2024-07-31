import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0.75rem;

  background: ${(props) => props.theme.baseInput};
  border: 1px solid ${(props) => props.theme.baseButton};
  border-radius: 4px;

  color: ${(props) => props.theme.baseLabel};

  span {
    ${mixins.fonts.buttonM}
    font-style: italic;
  }
`

export const Input = styled.input`
  color: ${(props) => props.theme.baseText};
  ${mixins.fonts.textS}
  background: none;
  border: none;
  flex: 1;
`
