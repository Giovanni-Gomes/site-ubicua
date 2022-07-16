import { Box, Button, Flex, Heading, Link, Spacer, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { ArrowLeft, ArrowRight, DotsThree, Pencil, Trash } from 'phosphor-react';
import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Portal/Header';
import { Pagination } from '../../components/Portal/Pagination';
import { Panel } from '../../components/Portal/Panel';
import api from '../../services/api';
import { queryClient } from "../../services/queryClient";
import { deleteProject, useProjects } from './useProjects';
import { Link as RouterLink } from 'react-router-dom'

interface ITableProject {
  id: string;
  name: string;
  description: string;
  progress: string;
}

const Project: React.FC = () => {

  const [page, setPage] = useState(1);
  const [take, setTake] = useState(10);
  const { data, isLoading, isFetching, error } = useProjects(page, take);


  // const [table, setTable] = useState<ITableProject[]>([]);
  // const [skiping, setSkiping] = useState(0);
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   async function fetchTable() {

  //     const response = await api.get(`/v1/project/findAll`,
  //       {
  //         params:
  //         {
  //           skip: skiping,
  //           take: 2,
  //         }
  //       });
  //     const { projects, skip, take, totalPage } = response.data;

  //     setTable(projects);
  //     // console.log("skip", skip);
  //     // console.log("take", take);
  //     // console.log("totalPage", totalPage);

  //     setCount(totalPage);
  //   }
  //   console.log(count);

  //   fetchTable();
  // }, [skiping]);

  // function skipper(num: number, action: string) {
  //   if (count > 1) {
  //     if (action === 'next') {
  //       setSkiping(num + 2)
  //     } else {
  //       if (skiping > 1) {
  //         setSkiping(num - 2)
  //       } else if (skiping <= 1) {
  //         setSkiping(0);
  //       }
  //     }
  //   } else {
  //     return skiping;
  //   }
  // }

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
      <Panel>
        <Flex m='xs' justify="space-between" align="center">
          <Heading size="lg" justifyContent="center" fontWeight=" normal" p={['4']}>
            <Text>List to projects</Text>
            {!isLoading && isFetching && (
              <Spinner size="sm" color="gray.500" ml="4" />
            )}
          </Heading>
          <RouterLink to={'/create-project'} style={{ margin: '2rem', background: '#43cd00', padding: '0.5rem', borderRadius: '0.5rem' }}>
            Criar Novo Projeto
          </RouterLink>
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
            <Table variant='striped' color='black' w='98%'>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Desc</Th>
                  <Th>Ativo</Th>
                  <Th>Início</Th>
                  <Th>Finalização</Th>
                  <Th>Progresso</Th>
                  <Th>Valor Negociado</Th>
                  <Th>Custo Real</Th>
                  <Th>Status</Th>
                  <Th>Usuário</Th>
                  <Th>#</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.projects.map(project => (
                  <Tr key={project.id}>
                    <Td paddingTop="2" paddingBottom="2" minW='5rem'>
                      <Box>
                        <Link onMouseEnter={() => handlePrefetchProject(project.id)}>
                          <Text fontWeight="bold">{project.name}</Text>
                        </Link>
                      </Box>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2" maxW='10rem'>
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
                        <RouterLink to={`/update-project/${project.id}`} style={{ background: '#3838ef', padding: '0.3rem 0.5rem', borderRadius: '50%', color: 'white' }}>
                          <Pencil size={20} />
                        </RouterLink>
                        <Button onClick={() => deleteProject(project.id)} bg='red' color='white' border='none' borderRadius='50%' p='0.3rem' cursor='pointer' w='20px' h='30px'>
                          <Trash size={20} />
                        </Button>
                      </Flex>
                    </Td>

                  </Tr>
                ))}
              </Tbody>
            </Table>

            {/* <Pagination
                  totalCountOfRegisters={data.totalCount}
                  currentPage={page}
                  onPageChange={setPage}
                /> */}
          </>
        )}
        <Pagination
          registersPerPage={take}
          totalCountOfRegisters={data?.totalPage}
          currentPage={page}
          onPageChange={setPage}
        />
        {/* <Flex justify="center">
          <Button onClick={() => skipper(skiping, 'back')}>
            <ArrowLeft />
          </Button>
          <Button onClick={() => skipper(skiping, 'next')}>
            <ArrowRight />
          </Button>
        </Flex> */}
      </Panel >

    </>
  );
}

export default Project;
