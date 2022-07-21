import { Box, ChakraProvider, Flex, Link, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import Card from '../../components/Portal/Card';
import CardProject from '../../components/Portal/CardProject';
import ChartDash from '../../components/Portal/ChartDash';
import DashboardSection from '../../components/Portal/DashboardSection';
import Header from '../../components/Portal/Header';
import TablePortal from '../../components/Portal/Table';
// import { lightTheme, darkTheme } from '../../components/Portal/Theme';
import WelcomeDash from '../../components/Portal/WelcomeDash';

import api from '../../services/api';



//const theme = extendTheme({ ThemeProvider })

import { Container, TableContainer } from './styles';
import useDarkMode from '../../components/hooks/useDarkmode';
import { useProjects } from '../Project/useProjects';

interface ITableProject {
  id: string;
  name: string;
  description: string;
  progress: string;
}

const Dashboard: React.FC = () => {
  const { data, isLoading, isFetching, error } = useProjects(0, 0);
  const bg = useColorModeValue('hoverDark', 'hoverLight');
  return (
    <>
      <Header />
      <Container>
        <DashboardSection element={
          <>
            <Card variant='info' title='69' subtitle='Active Projects' />

            <Card variant='success' title='69' subtitle='Active Projects' />
            <Card variant='info' title='69' subtitle='Active Projects' />
            <Card variant='success' title='69' subtitle='Active Projects' />

            <Card variant='info' title='69' subtitle='Active Projects' />
            <Card variant='success' title='69' subtitle='Active Projects' />
            <Card variant='info' title='69' subtitle='Active Projects' />
            <Card variant='success' title='69' subtitle='Active Projects' />
          </>
        } className='card-section' />

        <DashboardSection element={
          <>
            <WelcomeDash />
            <ChartDash />
          </>
        } className='WrapperCard' />

        <DashboardSection element={
          <>
            <CardProject title='Latest projects added' subtitle='Updated 37 minutes ago'>

              <Table p={2} textColor={'black'} bg='#FFFFFF' variant='simple' size='lg' minW={1278}>
                <Thead>
                  <Tr>
                    <Th>Nome</Th>
                    <Th>Desc</Th>
                    <Th>Ativo</Th>
                    <Th>Início</Th>
                    <Th>Fim</Th>
                    <Th>Progresso</Th>
                    <Th>R$</Th>
                    <Th>Status</Th>
                    <Th>Resp</Th>
                  </Tr>
                </Thead>
                <Tbody >
                  {data?.projects.map((project: any) => (
                    <Tr key={project.id}>
                      <Td paddingTop="2" paddingBottom="2" minW='8rem'>
                        <Box>
                          <Link >
                            <Text fontWeight="bold">{project.name}</Text>
                          </Link>
                        </Box>
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
                        <Text>{project.status.name}</Text>
                      </Td>
                      <Td paddingTop="2" paddingBottom="2">
                        <Text>{project.user.name}</Text>
                      </Td>


                    </Tr>
                  ))}
                </Tbody>
              </Table>

            </CardProject>
          </>
        } className='table-section' />


      </Container>

    </>
  );
}

export default Dashboard;


{/* <Card variant='white' title='69' subtitle='Active Projects'></Card>
        <Card variant='white' title='69' subtitle='Active Projects'></Card>
        <Card variant='white' title='69' subtitle='Active Projects'></Card> */}
{/* <CardProject variant='white' title='69' subtitle='Active Projects'>

<TableContainer>
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Avatar</th>
        <th>Criado</th>
      </tr>
    </thead>

    <tbody>
      {clientsImages.map((client) => (
        <tr key={client.imageAlt}>
          <td>{client.imageAlt}</td>
          <td>{client.imageAlt}</td>
          <td>
            <img src={client.imageSrc} alt={client.imageAlt} />
          </td>
          <td>{client.imageAlt}</td>
        </tr>
      ))}
    </tbody>
    <button onClick={prevPage}>Anterior</button>
  <button onClick={nextPage}>Próximo</button>
  </table>
</TableContainer>

</CardProject> */}

// const [table, setTable] = useState<ITableProject[]>([])
  // //const [darkMode, setDarkMode] = useDarkMode(); // comentado pois passamos a usar a chakra
  // useEffect(() => {
  //   async function fetchTable() {
  //     const response = await api.get('/v1/project/findAll');

  //     const { projects, skip, take, totalPage } = response.data;

  //     setTable(projects);
  //   }

  //   fetchTable()
  // }, [])
