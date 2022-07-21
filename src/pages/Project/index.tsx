import { Box, Button, Flex, Heading, Input, Link, Spacer, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import { ArrowLeft, ArrowRight, DotsThree, Pencil, PencilCircle, PencilLine, PencilSimple, PencilSimpleLine, Trash, TrashSimple } from 'phosphor-react';
import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Portal/Header';
import { Pagination } from '../../components/Portal/Pagination';
import { Panel } from '../../components/Portal/Panel';
import api from '../../services/api';
import { queryClient } from "../../services/queryClient";
import { deleteProject, useProjects } from './useProjects';
import { Link as RouterLink } from 'react-router-dom';
import { FaFileImport, FaPlus } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';


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
  const [take, setTake] = useState(10);
  const { data, isLoading, isFetching, error } = useProjects(page, take);

  async function handlePrefetchProject(projectId: string) {
    await queryClient.prefetchQuery(['projects', projectId], async () => {
      const response = await api.get(`/projects/${projectId}`);

      return response.data;
    }, {
      staleTime: 1000 * 60 * 10, // 10 minutes
    });
  }

  useRef

  useEffect(() => { }, [])


  return (
    <>
      <Header />
      <Panel title="List Projects">
        <Flex>
          <Flex flex={1} justify="left" align="center">
            <Flex justifyContent="space-between" borderRadius={10}>
              <Link as={RouterLink} to="/dashboard" bg={bg} mr={1} p={2} borderRadius={10} _hover={{ opacity: 0.5 }}>
                <FiArrowLeft />
              </Link>
              <Link as={RouterLink} to="/dashboard" bg={bg} mr={1} p={2} borderRadius={10} _hover={{ opacity: 0.5 }}>
                <FiArrowRight />
              </Link>
            </Flex>
            <Input maxW={250} placeholder='search' size='sm' name="search" borderRadius={20} color='tomato' _placeholder={{ opacity: 0.6, color: 'gray.600' }} backgroundColor={bg} focusBorderColor={bg} />
          </Flex>

          {!isLoading && isFetching && (
            <Spinner size="sm" color="gray.500" ml="4" />
          )}

          <Flex flex={1} justify="right" align="center">
            <Flex borderRadius={10}>

              <Link as={RouterLink} to={'/import'} bg={bg} mr={1} p={2} borderRadius={10} _hover={{ opacity: 0.5 }}>
                <FaFileImport />
              </Link>
              <Link as={RouterLink} to={'/create-project'} bg={bg} mr={1} p={2} borderRadius={10} _hover={{ opacity: 0.5 }}>
                <FaPlus />
              </Link>
            </Flex>
          </Flex>
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
            <Table variant='simple' color='black' mt={2} >
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
                    <Td paddingTop="2" paddingBottom="2" minW='8rem'>
                      <Box>
                        <Link onMouseEnter={() => handlePrefetchProject(project.id)}>
                          <Text fontWeight="bold">{project.name}</Text>
                        </Link>
                      </Box>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2" maxW='8rem'>
                      <Flex justify='space-between' align='center'>
                        <Text noOfLines={1}>{project.description}</Text>
                        {/* <Box as='button' border='none' bg='transparent' cursor='pointer' onClick={}>
                          <DotsThree size={30} />
                        </Box> */}
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
                    <Td paddingTop="2" paddingBottom="2" maxW='1rem'>
                      <Flex justify='center' align='center' gap='1'>
                        <RouterLink to={`/update-project/${project.id}`} >
                          <PencilSimpleLine size={24} />
                        </RouterLink>
                        <Button onClick={() => deleteProject(project.id)} p={0}>
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
          registersPerPage={take}
          totalCountOfRegisters={data?.totalPage}
          currentPage={page}
          onPageChange={setPage}
        />

      </Panel >

    </>
  );
}

export default Project;
