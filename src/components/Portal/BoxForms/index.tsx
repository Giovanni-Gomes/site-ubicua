import React from 'react';
import { Box, Container, Table, Tbody, Td, Text, Tr } from '@chakra-ui/react';

interface BoxProps {
  title?: string;
  children: React.ReactNode;  //children?: JSX.Element | any;
}

const BoxForms: React.FC<BoxProps> = ({ title, children }) => {
  return (
    <Container maxW='90%' maxH={700} h={520} mt={70} bg='var(--bg-portal)' color='white' borderRadius={8}>
      <Text fontSize='xl' align='center' p={[3]} color='var(--bg-dark)'>{title}</Text>
      {children}
    </Container>
  );
}

export default BoxForms;
