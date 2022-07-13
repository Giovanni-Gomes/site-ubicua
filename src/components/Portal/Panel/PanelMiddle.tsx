import { ReactNode } from "react";

import { Box } from "@chakra-ui/react";

interface PanelMiddleProps {
  children?: ReactNode;
}

export function PanelMiddlePart({ children }: PanelMiddleProps) {
  return (
    <Box p={['4', '4']} bg="tomato">
      {children}
    </Box>
  )
}

// width="1020px" overflowY="auto" maxHeight={1480} minHeight={1480}
