import { Flex, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PanelProps {
  children?: ReactNode;
}

export function Panel({ children }: PanelProps) {
  return (
    <Flex maxWidth="1440px" mt={10} mx='auto' h="100%" bg=' var(--bg - portal)'>
      < SimpleGrid flex="3" bg='#EFF6FF' borderRadius='1rem' >
        {children}
      </SimpleGrid >
    </Flex >
  )
}

// left="65px" ml="65px"
