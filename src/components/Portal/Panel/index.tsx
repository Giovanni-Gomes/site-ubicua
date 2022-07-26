import { Flex, SimpleGrid, Text, useColorMode, Link, useColorModeValue, Spacer, Input, Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaFileImport, FaPlus } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link as RouterLink } from 'react-router-dom';

interface PanelProps {
  children?: ReactNode;
  title?: string;
  back?: string;
  next?: string;
  search?: boolean;
  importFile?: string;
  create?: string;
  //variant: string;
}

export function Panel({ children, title, back, next, search, importFile, create, ...rest }: PanelProps) {
  const bg = useColorModeValue('hoverDark', 'hoverLight');

  return (
    <Flex position='relative' width='90%' direction='column' mt={'5rem'} mb='2rem' marginInlineEnd={0} mx={'auto'} h="100%" bg='tertiary' borderRadius={10} p={3} >
      <Flex align='center' justifyContent='space-between' mb='2rem'>
        <Flex gap='0.3rem' height='30px' w='275.6px'>
          {back &&
            <Link as={RouterLink} to={back} display='flex' alignItems='center' justifyContent='center' p='0 0.5rem' bg={bg} borderRadius={10} _hover={{ opacity: 0.5 }}>
              <FiArrowLeft />
            </Link>
          }{next &&
            <Link as={RouterLink} to={next} display='flex' alignItems='center' justifyContent='center' p='0 0.5rem' bg={bg} borderRadius={10} _hover={{ opacity: 0.5 }}>
              <FiArrowRight />
            </Link>
          }{search &&
            <Input maxW={250} placeholder='search' size='sm' name="search" borderRadius={20} color='tomato' _placeholder={{ opacity: 0.6, color: 'gray.600' }} backgroundColor={bg} focusBorderColor={bg} />
          }
        </Flex>
        {/* <Spacer /> */}
        <Text fontSize='xl' align='center' variant='primary'>{title}</Text>
        <Flex w='18rem' justify='flex-end'>
          {importFile &&
            <Link as={RouterLink} to={importFile} bg={bg} mr={1} p={2} borderRadius={10} _hover={{ opacity: 0.5 }}>
              <FaFileImport />
            </Link>
          }{create &&
            <Link as={RouterLink} to={create} bg={bg} mr={1} p={2} borderRadius={10} _hover={{ opacity: 0.5 }}>
              <FaPlus />
            </Link>
          }
        </Flex>
      </Flex >
      {children}
    </Flex >
  )
}

// left="65px" ml="65px"
