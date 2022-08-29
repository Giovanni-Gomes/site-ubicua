import React from 'react'
import Card from '../../components/Portal/Card'
import CardTable from '../../components/Portal/CardTable'
import ChartDash from '../../components/Portal/ChartDash'
import DashboardSection from '../../components/Portal/DashboardSection'
import TablePortal from '../../components/Portal/Table'
// import { lightTheme, darkTheme } from '../../components/Portal/Theme';
import WelcomeDash from '../../components/Portal/WelcomeDash'
import { Container, TableContainer } from './styles'
import { useProjects } from '../Project/useProjects'
import { useActiveRegistries, useContractsRegistries, useDashboard, useTargetContracts } from './useDashboard'
import { Translator } from '../../components/Portal/I18n/Translator'
import { useAuth } from '../../components/hooks/provider/auth'
import { useContracts } from '../Contract/useContracts'
import { useUsers } from '../User/useUsers'
import { useFeedbacks } from '../Feedback/useFeedback'

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { data, isLoading, isFetching, error } = useProjects(0, 5, '')
  const { data: dataContracts } = useContracts(0, 5, '')
  const { data: dataUsers } = useUsers(0, 5, '')
  const { data: dataFeedbacks } = useFeedbacks(0, 5, '')
  const { data: dataDashboard } = useDashboard()
  const { data: dataActiveRegistries } = useActiveRegistries()
  const { data: dataContractsRegistries } = useContractsRegistries()
  const { data: dataTargetContracts } = useTargetContracts()

  const activeGraphCard = [
    ['Data', 'Total Numbers of Active Data'],
    ['Projects', dataActiveRegistries?.activeProjects],
    ['Users', dataActiveRegistries?.activeUsers],
    ['Contracts', dataActiveRegistries?.activeContracts],
  ]

  const contractGraphCard = [
    ["Month", "Value", "Meta"],
    ["Jan", dataContractsRegistries?.janContracts[0] ? Number(dataContractsRegistries?.janContracts[0]._sum.negotiated_value) : 0, dataTargetContracts?.january[0] ? Number(dataTargetContracts.january[0].value_target) : 0],
    ["Feb", dataContractsRegistries?.fevContracts[0] ? Number(dataContractsRegistries?.fevContracts[0]._sum.negotiated_value) : 0, dataTargetContracts?.february[0] ? Number(dataTargetContracts.february[0].value_target) : 0],
    ["Mar", dataContractsRegistries?.marContracts[0] ? Number(dataContractsRegistries?.marContracts[0]._sum.negotiated_value) : 0, dataTargetContracts?.march[0] ? Number(dataTargetContracts.march[0].value_target) : 0],
    ["Abr", dataContractsRegistries?.abrContracts[0] ? Number(dataContractsRegistries?.abrContracts[0]._sum.negotiated_value) : 0, dataTargetContracts?.april[0] ? Number(dataTargetContracts.april[0].value_target) : 0],
    ["Mai", dataContractsRegistries?.maiContracts[0] ? Number(dataContractsRegistries?.maiContracts[0]._sum.negotiated_value) : 0, dataTargetContracts?.may[0] ? Number(dataTargetContracts.may[0].value_target) : 0],
    ["Jun", dataContractsRegistries?.junContracts[0] ? Number(dataContractsRegistries?.junContracts[0]._sum.negotiated_value) : 0, dataTargetContracts?.june[0] ? Number(dataTargetContracts.june[0].value_target) : 0],
    ["Jul", dataContractsRegistries?.julContracts[0] ? Number(dataContractsRegistries?.julContracts[0]._sum.negotiated_value) : 0, dataTargetContracts?.july[0] ? Number(dataTargetContracts.july[0].value_target) : 0],
    ["Ago", dataContractsRegistries?.agoContracts[0] ? Number(dataContractsRegistries?.agoContracts[0]._sum.negotiated_value) : 0, dataTargetContracts?.august[0] ? Number(dataTargetContracts.august[0].value_target) : 0],
    ["Set", dataContractsRegistries?.setContracts[0] ? Number(dataContractsRegistries?.setContracts[0]._sum.negotiated_value) : 0, dataTargetContracts?.september[0] ? Number(dataTargetContracts.september[0].value_target) : 0],
    ["Oct", dataContractsRegistries?.outContracts[0] ? Number(dataContractsRegistries?.outContracts[0]._sum.negotiated_value) : 0, dataTargetContracts?.october[0] ? Number(dataTargetContracts.october[0].value_target) : 0],
    ["Nov", dataContractsRegistries?.novContracts[0] ? Number(dataContractsRegistries?.novContracts[0]._sum.negotiated_value) : 0, dataTargetContracts?.november[0] ? Number(dataTargetContracts.november[0].value_target) : 0],
    ["Dez", dataContractsRegistries?.dezContracts[0] ? Number(dataContractsRegistries?.dezContracts[0]._sum.negotiated_value) : 0, dataTargetContracts?.december[0] ? Number(dataTargetContracts.december[0].value_target) : 0],
  ]

  const options = {
    title: "Monthly Contract Value",
    vAxis: { title: "Negociated Value" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 1: { type: "line" } },
  };

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
              <WelcomeDash data={contractGraphCard} options={options} />
              <ChartDash graph={activeGraphCard} />
            </>
          }
          className="WrapperCard"
        />

        <DashboardSection
          title={< Translator path="home.table.tableTitle" />}
          element={
            <>
              <TableContainer>
                <CardTable
                  title={< Translator path="home.projects" />}
                  variant='projects'
                  goToPage='projects'
                >
                  <TablePortal>
                    <thead>
                      <tr>
                        <th>< Translator path="home.table.name" /></th>
                        <th>< Translator path="home.table.active" /></th>
                        <th>< Translator path="home.table.date_start" /></th>
                        <th>< Translator path="home.table.status" /></th>
                        <th>< Translator path="home.table.responsible" /></th>
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
                          <td>
                            <p>{project.date_start}</p>
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
                </CardTable>

                <CardTable
                  title={< Translator path="home.users" />}
                  variant='users'
                  goToPage='list-users'
                >
                  <TablePortal>
                    <thead>
                      <tr>
                        <th>< Translator path="home.table.name" /></th>
                        <th>< Translator path="home.table.email" /></th>
                        <th>< Translator path="home.table.active" /></th>
                        <th>< Translator path="home.table.type" /></th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataUsers?.users.map((user: any) => (
                        <tr key={user.id}>
                          <td>
                            <p>{user.name}</p>
                          </td>
                          <td>
                            <p>{user.email}</p>
                          </td>
                          <td>
                            <p>{user.active}</p>
                          </td>
                          <td>
                            <p>{user.type_user}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </TablePortal>
                </CardTable>
              </TableContainer>

              <TableContainer>
                <CardTable
                  title={< Translator path="home.contracts" />}
                  variant='contracts'
                  goToPage='list-contracts'
                >
                  <TablePortal>
                    <thead>
                      <tr>
                        <th>< Translator path="home.table.name" /></th>
                        <th>< Translator path="home.table.active" /></th>
                        <th>< Translator path="home.table.date_start" /></th>
                        <th>< Translator path="home.table.phase" /></th>
                        <th>< Translator path="home.table.responsible" /></th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataContracts?.contracts.map((contract: any) => (
                        <tr key={contract.id}>
                          <td>
                            <p>{contract.name}</p>
                          </td>
                          <td>
                            <p>{contract.active}</p>
                          </td>
                          <td>
                            <p>{contract.date_start}</p>
                          </td>
                          <td>
                            <p>{contract.phase_contract}</p>
                          </td>
                          <td>
                            <p>{contract.user.name}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </TablePortal>
                </CardTable>

                <CardTable
                  title={< Translator path="home.feedbacks" />}
                  variant='feedbacks'
                  goToPage='list-users'
                >
                  <TablePortal>
                    <thead>
                      <tr>
                        <th>< Translator path="home.table.type" /></th>
                        <th>< Translator path="home.table.comment" /></th>
                        <th>< Translator path="home.table.screenshot" /></th>
                        <th>< Translator path="home.table.created_at" /></th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataFeedbacks?.feedbacks.map((feedback: any) => (
                        <tr key={feedback.id}>
                          <td>
                            <p>{feedback.type}</p>
                          </td>
                          <td>
                            <p>{feedback.comment}</p>
                          </td>
                          <td>
                            <p>{feedback.screenshot}</p>
                          </td>
                          <td>
                            <p>{feedback.createdAt}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </TablePortal>
                </CardTable>
              </TableContainer>
            </>
          }
          className="table-section"
        />
      </Container>
    </>
  )
}

export default Dashboard
