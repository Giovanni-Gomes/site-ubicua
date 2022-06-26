import React from 'react';
import Card from '../../components/Portal/Card';
import CardProject from '../../components/Portal/CardProject';
import DashboardSection from '../../components/Portal/DashboardSection';
import Header from '../../components/Portal/Header';
import TablePortal from '../../components/Portal/Table';
import clientsImages from '../../data/clients';


import { Container, TableContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />

      <Container>

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


            <CardProject variant='white' title='Projects Status' subtitle='Updated 37 minutes ago'>


              <TablePortal>
                <thead>
                  <tr>
                    <th>#</th>
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
                      <td>{client.imageAlt}</td>
                      <td>
                        <img src={client.imageSrc} alt={client.imageAlt} />
                      </td>
                      <td>{client.imageAlt}</td>
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
        } className='WrapperCard' />
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

      </Container>
    </>

  );
}

export default Dashboard;
