import { Flex, SimpleGrid, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PanelProps {
  children?: ReactNode;
  title?: string;
  //variant: string;
}

export function Panel({ children, title, ...rest }: PanelProps) {
  return (
    <Flex maxWidth={1320} mt={'5rem'} marginInlineEnd={0} mx={'auto'} h="100%" bg='tertiary' borderRadius={10} p={3} align='center'>
      <SimpleGrid flex="2">
        <Text fontSize='xl' align='center' variant='primary'>{title}</Text>
        {children}
      </SimpleGrid >
    </Flex >
  )
}

// left="65px" ml="65px"
