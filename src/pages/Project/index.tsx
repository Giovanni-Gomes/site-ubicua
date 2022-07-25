import { Box, Flex, Heading, Input, Link, Spacer, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
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
import AlertDelete from './alertDelete';
import { ButtonAlert, ButtonDetails, PopContainer, PopPanelAlert, PopPanelDetails } from './styles';
import { Popover } from '@headlessui/react';

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

  const [actualId, setActualId] = useState<String>()
  const [actualProjectName, setActualProjectName] = useState<String>()
  const [alert, setAlert] = useState(false)
  const [details, setDetails] = useState(false)

  function showAlert(id: string, name: string) {
    setActualId(id)
    setActualProjectName(name)
    setAlert(!alert)
  }

  function showDetails(id: string) {
    setActualId(id)
    setDetails(true)
  }

  //position='fixed' bg={'transparent'} w='100%' h='100%' zIndex='10' justify='center' align='center' pb='20rem'
  return (
    <>
      <Header />
      {/* {details &&
        <Flex position='fixed' bg={'transparent'} w='100%' h='100%' zIndex='10' justify='center' align='center' pb='5rem'>
        </Flex>
      } */}
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
                      <PopContainer>
                        <PopPanelDetails>
                          <ProjectDetails id={project.id} />
                        </PopPanelDetails>
                        <ButtonDetails>
                          <Box>
                            {/* <Link onMouseEnter={() => handlePrefetchProject(project.id)}> */}
                            <Text fontWeight="bold">{project.name}</Text>
                            {/* </Link> */}
                          </Box>
                        </ButtonDetails>
                      </PopContainer>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2" maxW='8rem'>
                      <Flex justify='space-between' align='center'>
                        <Text noOfLines={1}>{project.description}</Text>
                      </Flex>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{project.active}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      {project.date_start}
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{project.date_end}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{project.progress}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{project.negotiated_value}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{project.real_cost}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{project.status.name}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Text>{project.user.name}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2">
                      <Flex justify='center' align='center'>
                        <RouterLink to={`/update-project/${project.id}`} >
                          <PencilSimpleLine size={24} />
                        </RouterLink>

                        <PopContainer>
                          <PopPanelAlert >
                            <AlertDelete id={project.id} actualProjectName={project.name} />
                          </PopPanelAlert>
                          <ButtonAlert>
                            <TrashSimple size={24} color='#c53030' />
                          </ButtonAlert>
                        </PopContainer>
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