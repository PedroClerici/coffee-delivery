import { HTMLAttributes } from 'react'
import { Container, Input } from './styles'

type Props = {
  placeholder: string
  optional?: boolean
  containerProps?: HTMLAttributes<HTMLDivElement>
  inputProps?: HTMLAttributes<HTMLInputElement>
}

export function TextInput({
  placeholder,
  optional = false,
  containerProps,
  inputProps,
}: Props) {
  return (
    <Container {...containerProps}>
      <Input type="text" placeholder={placeholder} {...inputProps} />
      {optional && <span>Opcional</span>}
    </Container>
  )
}
