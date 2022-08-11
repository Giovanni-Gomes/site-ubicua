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
import { deleteSectionTwo, useSectionTwo } from './useSections'

const ListSectionTwo: React.FC = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching, error } = useSectionTwo()
  return (
    <>
      <Panel
        title="List Section Three"
        back="/dashboard"
        next="/dashboard"
        search={true}
        importFile="/import"
        create="/create-section-three"
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
                {
                  data?.sectionsTwo.map((section: any) => (
                    <tr key={section.id}>
                      <td> <p style={{ fontWeight: 'bold' }}>{section.title}</p> </td>
                      <td>{section.description_one}</td>
                      <td>{section.image_one}</td>
                      <td>{section.created_at}</td>
                      <td>{section.update_at}</td>
                      <td>
                        <Actions>
                          <RouterLink to={`/update-section/${section.id}`}>
                            <PencilSimpleLine size={24} color="#9B5DE5" />
                          </RouterLink>
                          <PopContainer>

                            <PopPanelAlert>
                              <button
                                onClick={() => deleteSectionTwo(section.id)} >
                                <TrashSimple size={24} color="#c53030" />
                              </button>

                            </PopPanelAlert>

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

export default ListSectionTwo
