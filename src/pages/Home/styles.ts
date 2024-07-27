import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Intro = styled.main`
  display: flex;
  margin-block: 6.5rem;
  gap: 5rem;

  figure {
    flex: 85%;
    img {
      width: 100%;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme.baseTitle};
  }

  p {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme.baseSubtitle};
  }
`

export const Items = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
`

export type ItemColors = 'yellow' | 'yellowDark' | 'purple' | 'gray'

interface ItemProps {
  color: ItemColors
}

const itemColors = {
  yellow: 'yellow',
  yellowDark: 'yellowDark',
  purple: 'purple',
  gray: 'baseText',
}

export const Item = styled.div<ItemProps>`
  ${mixins.fonts.textM}
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    margin: 0;
    border-radius: 50%;
    ${(props) => {
      return `background: ${props.theme[itemColors[props.color]]}`
    }};
    color: white;
  }
`
