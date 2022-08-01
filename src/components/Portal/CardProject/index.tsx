import { Flex, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { TableCustom } from '../Table/styles'

import { Container, Title, Subtitle, CardContent } from './styles'

interface CardProps {
  variant?: string // 'blue' | 'beige' | 'white' | 'black' | 'transparent'
  title: string
  subtitle?: string
  children?: JSX.Element
}

const CardProject: React.FC<CardProps> = ({
  variant,
  title,
  subtitle,
  children,
}) => {
  const bg = useColorModeValue('hoverDark', 'hoverLight')

  return (
    <Container className={variant}>
      <Flex
        bg={bg}
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
        p={2}
        w={1278}
      >
        <Title>{title}</Title>
        {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
      </Flex>
      <CardContent>
        {children}
        <TableCustom></TableCustom>
      </CardContent>
    </Container>
  )
}

export default CardProject
