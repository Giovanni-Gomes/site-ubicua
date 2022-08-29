import { PencilSimpleLine, TrashSimple } from 'phosphor-react'
import React, { useState } from 'react'

import { Link as RouterLink } from 'react-router-dom'
// import ContractDetails from './DetailsContract'
// import AlertDelete from './AlertDelete'
import {
  Actions,
  ButtonAlert,
  ButtonDetails,
  PopContainer,
  PopPanelAlert,
  PopPanelDetails,
} from './styles'


import { useMenuPortais } from './useMenuPortais'
import { Loading } from '../../../../components/Site/WidgetForm/Loading'
import { TableCustom } from '../../../../components/Portal/Table/styles'
import { Pagination } from '../../../../components/Portal/Pagination'
import { Panel } from '../../../../components/Portal/Panel'

const MenuPortal: React.FC = () => {
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const { data, isLoading, isFetching, error } = useMenuPortais(
    page,
    10,
    searchQuery,
  )

  return (
    <>
      <Panel
        title="List Contracts"
        back="/dashboard"
        next="/dashboard"
        search={true}
        searchState={setSearchQuery}
        importFile="/import"
        create="/create-contract"
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
                  <th>TITLE</th>
                  <th>LINK</th>
                  <th>ACTIVE</th>
                  <th>CREATED</th>
                  <th>UPDATED</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {data?.menuPortais.map(menu => (
                  <tr key={menu.id}>
                    <td>
                      <PopContainer>
                        <PopPanelDetails>
                          {/* <ContractDetails id={menu.id} /> */}
                        </PopPanelDetails>
                        <ButtonDetails>
                          {/* <Link onMouseEnter={() => handlePrefetchcontract(contract.id)}> */}
                          <p style={{ fontWeight: 'bold' }}>{menu.title}</p>
                          {/* </Link> */}
                        </ButtonDetails>
                      </PopContainer>
                    </td>

                    <td>{menu.link}</td>
                    <td>{menu.active}</td>
                    <td>{menu.created_at}</td>
                    <td>
                      <Actions>
                        <RouterLink to={`/update-menu-portal/${menu.id}`}>
                          <PencilSimpleLine size={24} color="#9B5DE5" />
                        </RouterLink>

                        <PopContainer>
                          <PopPanelAlert>
                            {/* <AlertDelete
                              id={menu.id}
                              actualContractName={menu.name}
                            /> */}
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
          //totalCountOfRegisters={data?.totalPage}
          registersPerPage={10}
          currentPage={page}
          onPageChange={setPage}
        />
      </Panel>
    </>
  )
}

export default MenuPortal
