import { Box, CloseButton, Flex } from '@chakra-ui/react'
import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'
import React, { useRef } from 'react'
import { Span } from './styles'
import { useProject } from './useProjects'

interface ProjectDetailsProps {
  id: string
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ id }) => {
  const { data } = useProject(id)

  return (
    <Flex
      fontSize="1rem"
      w="40rem"
      bg="var(--bg-secondary)"
      color="white"
      direction="column"
      p="1rem"
      borderRadius="8px"
      gap="2rem"
      align="center"
    >
      <Flex fontSize="1rem" align="center" w="100%" justify="space-between">
        <Box w="2rem"></Box>
        <h1>{data?.name}</h1>
        <Popover.Button>
          <X weight="bold" />
        </Popover.Button>
      </Flex>
      <Flex justify="space-around" w="100%" align="center">
        <Flex direction="column" gap="3rem">
          <Flex direction="column" h="2rem" gap="0.25rem">
            <Span>Ativo:</Span>
            <span>{data?.active}</span>
          </Flex>
          <Flex direction="column" h="2rem" gap="0.25rem">
            <Span>Valor Negociado:</Span>
            <p>{data?.negotiated_value}</p>
          </Flex>
          <Flex direction="column" h="2rem" gap="0.25rem">
            <Span>Data de Início:</Span>
            <p>{data?.date_start}</p>
          </Flex>
          <Flex direction="column" h="2rem" gap="0.25rem">
            <Span>Status:</Span>
            <p>{data?.status.name}</p>
          </Flex>
        </Flex>
        <Flex direction="column" gap="3rem">
          <Flex direction="column" h="2rem" gap="0.25rem">
            <Span>Progresso:</Span>
            <p>{data?.progress}</p>
          </Flex>
          <Flex direction="column" h="2rem" gap="0.25rem">
            <Span>Custo Real:</Span>
            <p>{data?.real_cost}</p>
          </Flex>
          <Flex direction="column" h="2rem" gap="0.25rem">
            <Span>Data de Finalização:</Span>
            <p>{data?.date_end}</p>
          </Flex>
          <Flex direction="column" h="2rem" gap="0.25rem">
            <Span>Responsável:</Span>
            <p>{data?.user.name}</p>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" gap="0.25rem">
        <Span>Descrição:</Span>
        <p>{data?.description}</p>
      </Flex>
    </Flex>
  )
}

export default ProjectDetails
