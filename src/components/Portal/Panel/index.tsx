import { Flex, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PanelProps {
  children?: ReactNode;
}

export function Panel({ children }: PanelProps) {
  return (
    <Flex direction="column" h="100vh">
      <Flex w="100%" maxWidth="auto" mt={60}>
        <SimpleGrid flex="3" gap="780" minChildWidth="240px" alignItems="flex-start">
          {children}
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

// left="65px" ml="65px"
