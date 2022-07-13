import { Box, Flex, Heading, Link, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Portal/Header';
import { Panel } from '../../components/Portal/Panel';
import { BigRight } from '../../components/Portal/Panel/BigRight';
import { PanelMiddlePart } from '../../components/Portal/Panel/PanelMiddle';
import TablePortal from '../../components/Portal/Table';
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
      <Box bg='tomato' w='100%' mt={60} p={10} color='white'>
        This is the Box
      </Box>



      <Panel>
        <PanelMiddlePart>
          <Flex mb="8" justify="space-between" align="center">
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
              <Table colorScheme="gree">
                <Thead>
                  <Tr>
                    <Th>Usuário</Th>
                    <Th>Data de cadastro</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.projects.map(project => (
                    <Tr key={project.id}>
                      <Td paddingTop="2" paddingBottom="2">
                        <Box>
                          <Link onMouseEnter={() => handlePrefetchProject(project.id)}>
                            <Text fontWeight="bold" variant="text-gray">{project.name}</Text>
                          </Link>
                        </Box>
                      </Td>

                      <Td paddingTop="2" paddingBottom="2">
                        <Text variant="text-gray">{project.description}</Text>
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

        </PanelMiddlePart>
      </Panel>

    </>
  );
}

export default Project;
