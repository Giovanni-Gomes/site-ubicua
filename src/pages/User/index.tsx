import { PencilSimpleLine, TrashSimple } from 'phosphor-react'
import React, { useState } from 'react'
import { Pagination } from '../../components/Portal/Pagination'
import { Panel } from '../../components/Portal/Panel'
import { useUsers } from './useUsers'
import { Link as RouterLink } from 'react-router-dom'

import DetailsUser from './DetailsUser'
import AlertDeleteUser from './AlertDeleteUser'
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

const User: React.FC = () => {
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const { data, isLoading, isFetching, error } = useUsers(page, 10, searchQuery)

  return (
    <>
      <Panel
        title="List Users"
        back="/dashboard"
        next="/dashboard"
        search={true}
        searchState={setSearchQuery}
        importFile="/import"
        create="/create-user"
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
                  <th>Name</th>
                  <th>Email</th>
                  <th>Active</th>
                  <th>Type User</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {data?.users.map((user: any) => (
                  <tr key={user.id}>
                    <td>
                      <PopContainer>
                        <PopPanelDetails>
                          <DetailsUser id={user.id} />
                        </PopPanelDetails>
                        <ButtonDetails>
                          <p style={{ fontWeight: 'bold' }}>{user.name}</p>
                        </ButtonDetails>
                      </PopContainer>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.active}</td>
                    <td>{user.type_user}</td>
                    <td>
                      <Actions>
                        <RouterLink to={`/update-user/${user.id}`}>
                          <PencilSimpleLine size={24} color="#9B5DE5" />
                        </RouterLink>

                        <PopContainer>
                          <PopPanelAlert>
                            <AlertDeleteUser
                              id={user.id}
                              actualUserName={user.name}
                            />
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

export default User
