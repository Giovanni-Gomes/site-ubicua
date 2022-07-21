import { Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { TableCustom } from '../Table/styles';

import { Container, CardHeader, Title, Subtitle, CardContent, CardToolbar } from './styles';

interface CardProps {
  variant?: string; //'blue' | 'beige' | 'white' | 'black' | 'transparent'
  title: string;
  subtitle?: string;
  children?: JSX.Element;
}

const CardProject: React.FC<CardProps> = ({ variant, title, subtitle, children }) => {
  const bg = useColorModeValue('hoverDark', 'hoverLight');

  return (
    <Container className={variant}>
      <Flex bg={bg} borderTopLeftRadius={10} borderTopRightRadius={10} p={2} w={1278}>
        {/* <CardHeader style={{ background: 'red' }}> */}
        <Title>
          {title}
          {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
        </Title>
        {/* <CardToolbar><a href="#">History</a></CardToolbar> */}
        {/* </CardHeader> */}
      </Flex>
      <CardContent>
        {children}
        <TableCustom></TableCustom>
      </CardContent>
    </Container>
  );
}

export default CardProject;
