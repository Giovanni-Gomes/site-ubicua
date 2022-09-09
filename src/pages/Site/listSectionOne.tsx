import { PencilSimpleLine, TrashSimple } from 'phosphor-react'
import React, { useState } from 'react'
import { Pagination } from '../../components/Portal/Pagination'
import { Panel } from '../../components/Portal/Panel'
import { Link as RouterLink } from 'react-router-dom'

import {
  Actions,
  ButtonAlert,
  ButtonDetails,
  PopContainer,
  PopPanelAlert,
  PopPanelDetails,
} from './styles'

import { TableCustom } from '../../components/Portal/Table/styles'
import { Loading } from '../../components/Site/WidgetForm/Loading'
import { deleteSectionOne, useSectionsOne } from './useSections'
import AlertDelete from './AlertDelete'

const ListSectionOne: React.FC = () => {
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const { data, isLoading, isFetching, error } = useSectionsOne(page, 10, searchQuery)
  return (
    <>
      <Panel
        title="List Section One"
        back="/dashboard"
        next="/dashboard"
        search={true}
        importFile="/import"
        create="/create-section-one"
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
                  <th>Title</th>
                  <th>Desc</th>
                  <th>Image</th>
                  <th>Created</th>
                  <th>Updated</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {data?.sectionsOne.map((section: any) => (
                  <tr key={section.id}>
                    <td>
                      <p style={{ fontWeight: 'bold' }}>{section.title}</p>
                    </td>
                    <td>{section.description}</td>
                    <td>{section.image}</td>
                    <td>{section.created}</td>
                    <td>{section.updated}</td>
                    <td>
                      <Actions>
                        <RouterLink to={`/update-section/section-one/${section.id}`}>
                          <PencilSimpleLine size={24} color="#9B5DE5" />
                        </RouterLink>
                        <PopContainer>
                          <PopPanelAlert>
                            <AlertDelete
                              id={section.id}
                              actualSectionName={section.title}
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

export default ListSectionOne
