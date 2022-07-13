import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import Card from '../../components/Portal/Card';
import CardProject from '../../components/Portal/CardProject';
import ChartDash from '../../components/Portal/ChartDash';
import DashboardSection from '../../components/Portal/DashboardSection';
import Header from '../../components/Portal/Header';
import TablePortal from '../../components/Portal/Table';
import { lightTheme, darkTheme } from '../../components/Portal/Theme';
import WelcomeDash from '../../components/Portal/WelcomeDash';

import api from '../../services/api';



//const theme = extendTheme({ ThemeProvider })

import { Container, TableContainer } from './styles';
import useDarkMode from '../../components/hooks/useDarkmode';

interface ITableProject {
  id: string;
  name: string;
  description: string;
  progress: string;
}

const Dashboard: React.FC = () => {
  const [table, setTable] = useState<ITableProject[]>([])
  //const [darkMode, setDarkMode] = useDarkMode(); // comentado pois passamos a usar a chakra
  useEffect(() => {
    async function fetchTable() {
      const response = await api.get('/v1/project/findAll');

      const { projects, skip, take, totalPage } = response.data;

      setTable(projects);
    }

    fetchTable()
  }, [])

  return (
    <>
      <Header /> {/* resetCSS theme={darkMode ? darkTheme : lightTheme} */}

      <Container>
        <DashboardSection element={
          <>
            <WelcomeDash />
            <ChartDash />
          </>
        } className='WrapperCard' />

        <DashboardSection element={
          <>
            <Card variant='success' title='69' subtitle='Active Projects' />

            <Card variant='black' title='69' subtitle='Active Projects' />
            <Card variant='danger' title='69' subtitle='Active Projects' />
            <Card variant='white' title='69' subtitle='Active Projects' />

            <Card variant='success' title='69' subtitle='Active Projects' />
            <Card variant='info' title='69' subtitle='Active Projects' />
            <Card variant='danger' title='69' subtitle='Active Projects' />
            <Card variant='white' title='69' subtitle='Active Projects' />
          </>
        } className='card-section' />

        <DashboardSection element={
          <>
            <CardProject variant='white' title='Projects Status' subtitle='Updated 37 minutes ago'>


              <TablePortal>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Progresso</th>
                  </tr>
                </thead>

                <tbody>
                  {table.map(data => (
                    <tr key={data.id}>
                      <td>{data.name}</td>
                      <td>{data.description}</td>
                      <td>{data.progress}</td>
                    </tr>
                  ))}
                </tbody>

              </TablePortal>
              {/* <TableContainer>
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
              </TableContainer> */}

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
