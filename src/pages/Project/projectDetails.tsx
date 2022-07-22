import { Box, CloseButton, Flex } from '@chakra-ui/react';
import React from 'react';
import { useProject } from './useProjects';

interface ProjectDetailsProps {
  id: string;
  state?: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ id, state }) => {
  const { data } = useProject(id)

  return (
    <Flex w='40rem' bg='var(--bg-secondary)' color='white' direction='column' p='2rem' borderRadius='10px' gap='2rem' align='center'>
      <Flex align='center' w='100%' justify='space-between'>
        <Box w='2rem'></Box>
        <h1>{data?.name}</h1>
        <CloseButton w='2rem' onClick={state} />
      </Flex>
      <Flex justify='space-around' w='100%' align='center'>
        <Flex direction='column' gap='2rem'>
          <Box h='2rem'>
            <span>Ativo:</span>
            <span>{data?.active}</span>
          </Box>
          <Box h='2rem'>
            <span>Valor Negociado</span>
            <p>{data?.negotiated_value}</p>
          </Box>
          <Box h='2rem'>
            <span>Data de Início:</span>
            <p>{data?.date_start}</p>
          </Box>
          <Box h='2rem'>
            <span>Status:</span>
            <p>{data?.status.name}</p>
          </Box>
        </Flex>
        <Flex direction='column' gap='2rem'>
          <Box h='2rem'>
            <span>Progresso:</span>
            <p>{data?.progress}</p>
          </Box>
          <Box h='2rem'>
            <span>Custo Real:</span>
            <p>{data?.real_cost}</p>
          </Box>
          <Box h='2rem'>
            <span>Data de Finalização:</span>
            <p>{data?.date_end}</p>
          </Box>
          <Box h='2rem'>
            <span>Responsável:</span>
            <p>{data?.user.name}</p>
          </Box>
        </Flex>
      </Flex>
      <Box>
        <span>Descrição</span>
        <p>{data?.description}</p>
      </Box>
    </Flex>
  );
}

export default ProjectDetails;