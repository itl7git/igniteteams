import { TouchableOpacityProps } from 'react-native'

import { Container, Title, ButtonTypeStylesProps } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  type?: ButtonTypeStylesProps
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container
      type={type}
      {...rest}
    >
      <Title>
        {title}
      </Title>
    </Container>
  )
}