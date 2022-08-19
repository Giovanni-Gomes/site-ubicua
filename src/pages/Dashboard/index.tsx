import React from 'react'
import Card from '../../components/Portal/Card'
import CardProject from '../../components/Portal/CardProject'
import ChartDash from '../../components/Portal/ChartDash'
import DashboardSection from '../../components/Portal/DashboardSection'
import Header from '../../components/Portal/Header'
import TablePortal from '../../components/Portal/Table'
// import { lightTheme, darkTheme } from '../../components/Portal/Theme';
import WelcomeDash from '../../components/Portal/WelcomeDash'
import { Container } from './styles'
import { useProjects } from '../Project/useProjects'
import { useActiveRegistries, useContractsRegistries, useDashboard } from './useDashboard'
import { Translator } from '../../components/Portal/I18n/Translator'
import I18nComponent from '../../components/Portal/I18n/I18n'

const Dashboard: React.FC = () => {
  const { data, isLoading, isFetching, error } = useProjects(0, 0, '')
  const { data: dataDashboard } = useDashboard()
  const { data: dataActiveRegistries } = useActiveRegistries()
  const { data: dataContractsRegistries } = useContractsRegistries()

  const activeGraphCard = [
    ['Data', 'Total Numbers of Active Data'],
    ['Projects', dataActiveRegistries?.activeProjects],
    ['Users', dataActiveRegistries?.activeUsers],
    ['Contracts', dataActiveRegistries?.activeContracts],
  ]

  const contractGraphCard = [
    ['Month', 'Total Numbers of Contracts Value per Month'],
    ['Jan', dataContractsRegistries?.janContracts],
    ['Feb', dataContractsRegistries?.fevContracts],
    ['Mar', dataContractsRegistries?.marContracts],
    ['Abr', dataContractsRegistries?.abrContracts],
    ['Mai', dataContractsRegistries?.maiContracts],
    ['Jun', dataContractsRegistries?.junContracts],
    ['Jul', dataContractsRegistries?.julContracts],
    ['Ago', dataContractsRegistries?.agoContracts],
    ['Set', dataContractsRegistries?.setContracts],
    ['Oct', dataContractsRegistries?.outContracts],
    ['Nov', dataContractsRegistries?.novContracts],
    ['Dez', dataContractsRegistries?.dezContracts],
  ]

  return (
    <>
      <Container>
        <p><Translator path="home.message" /></p>
        <DashboardSection
          element={
            <>
              <Card
                variant="info"
                title={String(dataDashboard?.totalProjects)}
                subtitle="Total Projects"
              />

              <Card
                variant="success"
                title={String(dataDashboard?.totalUsers)}
                subtitle="Total Users"
              />
              <Card
                variant="info"
                title={String(dataDashboard?.totalContracts)}
                subtitle="Total Contracts"
              />
              <Card
                variant="success"
                title={String(dataDashboard?.totalFeedbacks)}
                subtitle="Total Feedbacks"
              />

              {/* <Card variant="info" title="69" subtitle="Active Projects" />
              <Card variant="success" title="69" subtitle="Active Projects" />
              <Card variant="info" title="69" subtitle="Active Projects" />
              <Card variant="success" title="69" subtitle="Active Projects" /> */}
            </>
          }
          className="card-section"
        />

        <DashboardSection
          element={
            <>
              <WelcomeDash data={contractGraphCard} />
              <ChartDash graph={activeGraphCard} />
            </>
          }
          className="WrapperCard"
        />

        <DashboardSection
          element={
            <>
              <CardProject
                title="Latest projects added"
                subtitle="Updated 37 minutes ago"
              >
                <TablePortal>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Ativo</th>
                      <th>Início</th>
                      <th>Fim</th>
                      <th>Progresso</th>
                      <th>R$</th>
                      <th>Status</th>
                      <th>Resp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.projects.map((project: any) => (
                      <tr key={project.id}>
                        <td>
                          <p>{project.name}</p>
                        </td>
                        <td>
                          <p>{project.active}</p>
                        </td>
                        <td>{project.date_start}</td>
                        <td>
                          <p>{project.date_end}</p>
                        </td>
                        <td>
                          <p>{project.progress}</p>
                        </td>
                        <td>
                          <p>{project.negotiated_value}</p>
                        </td>
                        <td>
                          <p>{project.status.name}</p>
                        </td>
                        <td>
                          <p>{project.user.name}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </TablePortal>
              </CardProject>
            </>
          }
          className="table-section"
        />
      </Container>
    </>
  )
}

export default Dashboard
