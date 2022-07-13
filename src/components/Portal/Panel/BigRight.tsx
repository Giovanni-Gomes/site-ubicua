import { ReactNode } from "react";

import { Box } from "@chakra-ui/react";

interface BigRightProps {
  children?: ReactNode;
}

export function BigRight({ children }: BigRightProps) {
  return (
    <Box p={['4', '6']} bg="#2C2D30" overflowY="auto" left={720}>
      {children}
    </Box>
  )
}
