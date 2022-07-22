import { Box, Button, Flex, Heading, Input, Link, Spacer, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import { ArrowLeft, ArrowRight, DotsThree, Pencil, PencilCircle, PencilLine, PencilSimple, PencilSimpleLine, Trash, TrashSimple } from 'phosphor-react';
import React, { Component, useCallback, useEffect, useRef, useState } from 'react';
import Header from '../../components/Portal/Header';
import { Pagination } from '../../components/Portal/Pagination';
import { Panel } from '../../components/Portal/Panel';
import api from '../../services/api';
import { queryClient } from "../../services/queryClient";
import { deleteProject, useProjects } from './useProjects';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { FaFileImport, FaPlus } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useToast } from '../../components/hooks/provider/toast';
import { Loading } from '../../components/Site/WidgetForm/Loading';

import { useMutation } from "react-query"
import { AxiosError } from 'axios';
import ProjectDetails from './projectDetails';

interface ITableProject {
  id: string;
  name: string;
  description: string;
  progress: string;
}

const Project: React.FC = () => {
  //style colors customTheme
  const bg = useColorModeValue('hoverDark', 'hoverLight');

  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, error } = useProjects(page, 10);

  const { addToast } = useToast();

  const [actualId, setActualId] = useState<String>()
  const [actualProjectName, setActualProjectName] = useState<String>()
  const [alert, setAlert] = useState(false)
  const [details, setDetails] = useState(false)


  const removeProject = useMutation(
    async (id: string) => {
      const response = await api.delete(`/v1/project/delete/${id}`);

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('projects');
      },
      onError: (error: AxiosError) => {
        addToast({
          type: 'error',
          title: 'Erro ao deletar registro',
          description:
            'Ocorreu um erro ao deletar registro, tente novamente',
        });
      }
    },
  );

  async function handleRemoveTag(id: string) {
    try {
      await removeProject.mutateAsync(id);

      addToast({
        type: 'success',
        title: 'Deletado com Sucesso!',
      });
      setAlert(false)
    } catch {
      console.log('Error happened')
    }
  }

  function showAlert(id: string, name: string) {
    setActualId(id)
    setActualProjectName(name)
    setAlert(true)
  }

  function showDetails(id: string) {
    setActualId(id)
    setDetails(true)
  }


  return (
    <>
      <Header />
      {alert &&
        <Flex position='fixed' bg={'transparent'} w='100%' h='100%' zIndex='10' justify='center' align='center' pb='20rem'>
          <Flex bg='quaternary' color='black' direction='column' p='2rem' borderRadius='10px' gap='2rem' align='center'>
            <p>Tem certeza que deseja excluir este registro?</p>
            <span>{actualProjectName}</span>
            <Flex justify='center' align='center' gap='1rem'>
              <Button onClick={() => handleRemoveTag(String(actualId))}>
                Excluir
              </Button>
              <Button onClick={() => setAlert(false)}>
                Cancelar
              </Button>
            </Flex>
          </Flex>
        </Flex>
        || details &&
        <Flex position='fixed' bg={'transparent'} w='100%' h='100%' zIndex='10' justify='center' align='center' pb='5rem'>
          <Flex></Flex>
          <ProjectDetails id={String(actualId)} state={() => setDetails(false)} />
        </Flex>
      }
      <Panel title="List Projects" back='/dashboard' next='/dashboard' search={true} importFile='/import' create='/create-project'>
        <Flex>

          {!isLoading && isFetching && (
            <Spinner size="sm" color="gray.500" ml="4" />
          )}
        </Flex>


        {isLoading ? (
          <Flex py="10" justify="center">
            <Spinner />
          </Flex>
        ) : error ? (
          <Flex py="10" justify="center">
            <Text>failed to get the data!</Text>
          </Flex>
        ) : (
          <>
            <Table variant='simple' color='black' mt={2} size='sm' >
              <Thead >
                <Tr>
                  <Th>Nome</Th>
                  <Th>Desc</Th>
                  <Th>Ativo</Th>
                  <Th>Início</Th>
                  <Th>Fim</Th>
                  <Th>Progresso</Th>
                  <Th>R$-VN</Th>
                  <Th>R$-CR</Th>
                  <Th>Status</Th>
                  <Th>Resp</Th>
                  <Th>#</Th>
                </Tr>
              </Thead>
              <Tbody >
                {data?.projects.map((project: any) => (
                  <Tr key={project.id}>
                    <Td paddingTop="2" paddingBottom="2" >
                      <button type='button' onClick={() => showDetails(project.id)}>
                        <Box>
                          {/* <Link onMouseEnter={() => handlePrefetchProject(project.id)}> */}
                          <Text fontWeight="bold">{project.name}</Text>
                          {/* </Link> */}
                        </Box>
                      </button>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2" maxW='8rem'>
                      <button type='button' onClick={() => showDetails(project.id)}>
                        <Flex justify='space-between' align='center'>
                          <Text noOfLines={1}>{project.description}</Text>
                        </Flex>
                      </button>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <button type='button' onClick={() => showDetails(project.id)}>
                        <Text>{project.active}</Text>
                      </button>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <button type='button' onClick={() => showDetails(project.id)}>
                        {project.date_start}
                      </button>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <button type='button' onClick={() => showDetails(project.id)}>
                        <Text>{project.date_end}</Text>
                      </button>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <button type='button' onClick={() => showDetails(project.id)}>
                        <Text>{project.progress}</Text>
                      </button>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2" maxW='8rem'>
                      <button type='button' onClick={() => showDetails(project.id)}>
                        <Text>{project.negotiated_value}</Text>
                      </button>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <button type='button' onClick={() => showDetails(project.id)}>
                        <Text>{project.real_cost}</Text>
                      </button>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <button type='button' onClick={() => showDetails(project.id)}>
                        <Text>{project.status.name}</Text>
                      </button>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <button type='button' onClick={() => showDetails(project.id)}>
                        <Text>{project.user.name}</Text>
                      </button>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2" maxW='1rem'>
                      <Flex justify='center' align='center'>
                        <RouterLink to={`/update-project/${project.id}`} >
                          <PencilSimpleLine size={24} />
                        </RouterLink>
                        <Button onClick={() => showAlert(project.id, project.name)} p={0}>
                          <TrashSimple size={24} color='#c53030' />
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </>
        )}
        <Pagination
          registersPerPage={10}
          totalCountOfRegisters={data?.totalPage}
          currentPage={page}
          onPageChange={setPage}
        />

      </Panel >

    </>
  );
}

export default Project;