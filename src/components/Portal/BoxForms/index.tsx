import React from 'react';
import { Box, Table, Tbody, Td, Text, Tr } from '@chakra-ui/react';

interface BoxProps {
  title?: string;
  children: React.ReactNode;  //children?: JSX.Element | any;
}

const BoxForms: React.FC<BoxProps> = ({ title, children }) => {
  console.log(title);
  return (
    <Box maxW='lg' mt={70} mx={'auto'} border='10rem solid' borderWidth='10px' borderRadius='1rem' overflow='hidden' w={700} bg={'red'}>
      {/* <Text fontSize='lg' bg={'green'}>{title}</Text> */}
      <Table variant='striped'>
        <Tbody>
          <Tr>
            <Td>text</Td>
          </Tr>
          <Tr>
            <Td>text</Td>
          </Tr>
          <Tr>
            <Td>text</Td>
          </Tr>

        </Tbody>
      </Table>

      {children}
    </Box>
  );
}

export default BoxForms;
