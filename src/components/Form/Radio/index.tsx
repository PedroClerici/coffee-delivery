import React from 'react'
import { Container } from './styles'

type Props = {
  children: React.ReactNode
}

export function Radio({ children }: Props) {
  return (
    <Container>
      <input type="radio" />
      {children}
    </Container>
  )
}
