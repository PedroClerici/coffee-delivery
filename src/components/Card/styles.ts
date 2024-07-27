import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  width: 16rem;
  position: relative;
  display: flex;
  padding: 0rem 1.5rem 1rem 1.5rem;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.baseCard};
  border-radius: 6px 36px 6px 36px;
`

export const CoffeeImg = styled.img`
  position: relative;
  width: 45%;
  top: -1rem;
`

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;

  span {
    ${mixins.fonts.tag}
    padding: 0.25rem 0.5rem;
    background: ${(props) => props.theme.yellowLight};
    color: ${(props) => props.theme.yellow};
    border-radius: 1rem;
  }
`

export const Title = styled.h3`
  ${mixins.fonts.titleS}
  color: ${(props) => props.theme.baseSubtitle};
  margin-block: 0.75rem;
`

export const Description = styled.p`
  display: block;
  text-align: center;
  ${mixins.fonts.textS}
  color: ${(props) => props.theme.baseLabel};
`

export const Controls = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.baseTitle};
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.baseButton};
    padding: 0.5rem;
    gap: 0.5rem;
    border-radius: 6px;
  }

  button {
    border: none;
    background: none;
    color: ${(props) => props.theme.purple};
    line-height: 0;
  }
`
export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${(props) => props.theme.baseText};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${(props) => props.theme.baseText};
  }
`
