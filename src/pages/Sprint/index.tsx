import { PencilSimpleLine, TrashSimple } from 'phosphor-react'
import React, { useState } from 'react'
import { Pagination } from '../../components/Portal/Pagination'
import { Panel } from '../../components/Portal/Panel'
import { useSprints } from './useSprints'
import { Link as RouterLink } from 'react-router-dom'

import DetailsSprint from './DetailsSprint'
import AlertDeleteSprint from './AlertDeleteSprint'
import {
  Actions,
  ButtonAlert,
  ButtonDetails,
  PopContainer,
  PopPanelAlert,
  PopPanelDetails,
} from './styles'

import { Status, TableCustom } from '../../components/Portal/Table/styles'
import { Loading } from '../../components/Site/WidgetForm/Loading'
import { Translator } from '../../components/Portal/I18n/Translator'

const Sprint: React.FC = () => {
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const { data, isLoading, isFetching, error } = useSprints(page, 10, searchQuery)
  console.log("sprint data", data);
  return (
    <>
      <Panel
        title={<Translator path="sprint.title" />}
        back="/dashboard"
        next="/dashboard"
        search={true}
        searchState={setSearchQuery}
        importFile="/import"
        create="/create-sprint"
      >
        <div>{!isLoading && isFetching && <Loading />}</div>

        {isLoading ? (
          <div>
            <Loading />
          </div>
        ) : error ? (
          <div>failed to get the data!</div>
        ) : (
          <>
            <TableCustom color="black">
              <thead>
                <tr>
                  <th><Translator path="sprint.tr.th_one" /></th>
                  <th><Translator path="sprint.tr.th_two" /></th>
                  <th><Translator path="sprint.tr.th_three" /></th>
                  <th><Translator path="sprint.tr.th_four" /></th>
                  <th><Translator path="sprint.tr.th_five" /></th>
                  <th><Translator path="sprint.tr.th_six" /></th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {data?.sprints.map((sprint: any) => (
                  <tr key={sprint.id}>
                    <td>
                      <PopContainer>
                        <PopPanelDetails>
                          <DetailsSprint id={sprint.id} />
                        </PopPanelDetails>
                        <ButtonDetails>
                          <p style={{ fontWeight: 'bold' }}>{sprint.name}</p>
                        </ButtonDetails>
                      </PopContainer>
                    </td>

                    <td>{sprint.date_start}</td>
                    <td>{sprint.date_end}</td>
                    <td>
                      <Status statusColor={sprint.status.name}>
                        {sprint.status.name}
                      </Status>
                    </td>
                    <td>{sprint.user.name}</td>
                    <td>{sprint.active}</td>
                    <td>
                      <Actions>
                        <RouterLink to={`/update-sprint/${sprint.id}`}>
                          <PencilSimpleLine size={24} />
                        </RouterLink>
                        <PopContainer>
                          <PopPanelAlert>
                            <AlertDeleteSprint id={sprint.id} actualSprintName={sprint.name} />
                          </PopPanelAlert>
                          <ButtonAlert>
                            <TrashSimple size={24} color="#c53030" />
                          </ButtonAlert>
                        </PopContainer>
                      </Actions>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableCustom>
          </>
        )}
        <Pagination
          registersPerPage={10}
          totalCountOfRegisters={data?.totalPage}
          currentPage={page}
          onPageChange={setPage}
        />
      </Panel>
    </>
  )
}

export default Sprint
