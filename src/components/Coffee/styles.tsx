import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.baseButton};

  & + & {
    padding-top: 1.5rem;
  }
`

export const Info = styled.div`
  display: flex;
  gap: 1.25rem;
`

export const CoffeeImg = styled.img`
  height: 4rem;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.span`
  ${mixins.fonts.textM}
  color: ${(props) => props.theme.baseSubtitle};
`

export const Controls = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Remove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  gap: 0.25rem;
  background: ${(props) => props.theme.baseButton};
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.purple};
  cursor: pointer;

  span {
    ${mixins.fonts.buttonM}
    color: ${(props) => props.theme.baseText};
  }
`

export const Price = styled.span`
  ${mixins.fonts.textM};
  font-weight: 700;
  color: ${(props) => props.theme.baseText};
`
