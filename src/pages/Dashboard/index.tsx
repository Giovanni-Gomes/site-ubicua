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
import { useAuth } from '../../components/hooks/provider/auth'

const Dashboard: React.FC = () => {
  const { user } = useAuth();
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
    ['Month', 'Value per Month'],
    ['Jan', dataContractsRegistries?.janContracts[0] ? dataContractsRegistries?.janContracts[0]._sum.negotiated_value : null],
    ['Feb', dataContractsRegistries?.fevContracts[0] ? dataContractsRegistries?.fevContracts[0]._sum.negotiated_value : null],
    ['Mar', dataContractsRegistries?.marContracts[0] ? dataContractsRegistries?.marContracts[0]._sum.negotiated_value : null],
    ['Abr', dataContractsRegistries?.abrContracts[0] ? dataContractsRegistries?.abrContracts[0]._sum.negotiated_value : null],
    ['Mai', dataContractsRegistries?.maiContracts[0] ? dataContractsRegistries?.maiContracts[0]._sum.negotiated_value : null],
    ['Jun', dataContractsRegistries?.junContracts[0] ? dataContractsRegistries?.junContracts[0]._sum.negotiated_value : null],
    ['Jul', dataContractsRegistries?.julContracts[0] ? dataContractsRegistries?.julContracts[0]._sum.negotiated_value : null],
    ['Ago', dataContractsRegistries?.agoContracts[0] ? dataContractsRegistries?.agoContracts[0]._sum.negotiated_value : null],
    ['Set', dataContractsRegistries?.setContracts[0] ? dataContractsRegistries?.setContracts[0]._sum.negotiated_value : null],
    ['Oct', dataContractsRegistries?.outContracts[0] ? dataContractsRegistries?.outContracts[0]._sum.negotiated_value : null],
    ['Nov', dataContractsRegistries?.novContracts[0] ? dataContractsRegistries?.novContracts[0]._sum.negotiated_value : null],
    ['Dez', dataContractsRegistries?.dezContracts[0] ? dataContractsRegistries?.dezContracts[0]._sum.negotiated_value : null],
  ]


  return (

    <>
      <Container>
        <p><span><Translator path="home.icon" /></span><Translator path="home.message" /> <b>{user.name[0].toUpperCase() + user.name.slice(1)}</b></p>
        <DashboardSection
          element={
            <>
              <Card
                variant="info"
                title={String(dataDashboard?.totalProjects)}
                subtitle={< Translator path="home.totalProjects" />}
              />

              <Card
                variant="success"
                title={String(dataDashboard?.totalUsers)}
                subtitle={< Translator path="home.totalUsers" />}
              />
              <Card
                variant="info"
                title={String(dataDashboard?.totalContracts)}
                subtitle={< Translator path="home.totalContracts" />}
              />
              <Card
                variant="success"
                title={String(dataDashboard?.totalFeedbacks)}
                subtitle={< Translator path="home.totalFeedbacks" />}
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
