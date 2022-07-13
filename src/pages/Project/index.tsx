import { Box, Flex, Heading, Link, Spacer, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { DotsThree, Pencil, Trash } from 'phosphor-react';
import React, { useState } from 'react';
import Header from '../../components/Portal/Header';
import { Panel } from '../../components/Portal/Panel';
import api from '../../services/api';
import { queryClient } from "../../services/queryClient";
import { useProjects } from './useProjects';

interface ITableProject {
  id: string;
  name: string;
  description: string;
  progress: string;
}

const Project: React.FC = () => {

  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useProjects(page);

  // const [moreText, setMoreText] = useState(false);

  // const [table, setTable] = useState<ITableProject[]>([]);
  // const [skiping, setSkiping] = useState(0);
  // const [tanking, setTanking] = useState(2);
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   async function fetchTable() {

  //     const response = await api.get(`/v1/project/findAll`,
  //       {
  //         params:
  //         {
  //           skip: skiping,
  //           take: tanking,
  //           totalPage: count
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



  async function handlePrefetchProject(projectId: string) {
    await queryClient.prefetchQuery(['projects', projectId], async () => {
      const response = await api.get(`/projects/${projectId}`);

      return response.data;
    }, {
      staleTime: 1000 * 60 * 10, // 10 minutes
    });
  }


  return (
    <>
      <Header />
      <Panel>
        <Flex m='2rem 5rem' justify="space-between" align="center" >
          <Heading size="md" fontWeight="normal">
            <Text style={{ color: "red", alignItems: "center" }}>List to projects</Text>
            {!isLoading && isFetching && (
              <Spinner size="sm" color="gray.500" ml="4" />
            )}
          </Heading>
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
            <Table m='5rem' p='1rem' color='black' border=' 1px solid'>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th> Descrição</Th>
                  <Th>Progresso</Th>
                  <Th>Editar / Excluir</Th>
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
                    <Td paddingTop="2" paddingBottom="2" minW='5rem'>
                      <Text>{project.progress}</Text>
                    </Td>
                    <Td paddingTop="2" paddingBottom="2" maxW='1rem'>
                      <Flex justify='center' align='center' gap='4'>
                        <Box as='button' bg='blue' color='white' border='none' borderRadius='50%' p='0.3rem' cursor='pointer' w='30px' h='30px'>
                          <Pencil size={20} />
                        </Box>
                        <Box as='button' bg='red' color='white' border='none' borderRadius='50%' p='0.3rem' cursor='pointer' w='30px' h='30px'>
                          <Trash size={20} />
                        </Box>
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

      </Panel >

    </>
  );
}

export default Project;
