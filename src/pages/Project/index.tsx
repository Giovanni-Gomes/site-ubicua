import { PencilSimpleLine, TrashSimple } from 'phosphor-react'
import React, { useState } from 'react'
import { Pagination } from '../../components/Portal/Pagination'
import { Panel } from '../../components/Portal/Panel'
import { useProjects } from './useProjects'
import { Link as RouterLink } from 'react-router-dom'

import DetailsProject from './DetailsProject'
import AlertDelete from './AlertDelete'
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
import Header from '../../components/Portal/Header'
import { Translator } from '../../components/Portal/I18n/Translator'

const Project: React.FC = () => {
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const { data, isLoading, isFetching, error } = useProjects(
    page,
    10,
    searchQuery,
  )

  // const { register, handleSubmit } = useForm()
  // const formRef = useRef<FormHandles>(null)

  // const handleSearchContacts: SubmitHandler<SearchContactsFormData> = async ({ search }) => {
  //   setSearchQuery(String(search));
  // };
  // async function handleSearchContacts({ data }: SearchContactsFormData) {
  //   event?.preventDefault();
  //   console.log("formRef", formRef);
  //   console.log("data", data);
  //   console.log("data.search", data.search);
  //   setSearchQuery(String(data.search));
  // };

  return (
    <>

      <Panel
        title={<Translator path="project.title" />}
        back="/dashboard"
        next="/dashboard"
        search={true}
        searchState={setSearchQuery}
        importFile="/import"
        create="/create-project"
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
                  <th><Translator path="project.tr.th_one" /></th>
                  <th><Translator path="project.tr.th_two" /></th>
                  <th><Translator path="project.tr.th_three" /></th>
                  <th>%</th>
                  <th>$ VN</th>
                  <th>$ CR</th>
                  <th><Translator path="project.tr.th_four" /></th>
                  <th><Translator path="project.tr.th_five" /></th>
                  <th><Translator path="project.tr.th_six" /></th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {data?.projects.map((project: any) => (
                  <tr key={project.id}>
                    <td>
                      <PopContainer>
                        <PopPanelDetails>
                          <DetailsProject id={project.id} />
                        </PopPanelDetails>
                        <ButtonDetails>
                          {/* <Link onMouseEnter={() => handlePrefetchProject(project.id)}> */}
                          <p style={{ fontWeight: 'bold' }}>{project.name}</p>
                          {/* </Link> */}
                        </ButtonDetails>
                      </PopContainer>
                    </td>

                    <td>{project.date_start}</td>
                    <td>{project.date_end}</td>
                    <td>{project.progress}</td>
                    <td>{project.negotiated_value}</td>
                    <td>{project.real_cost}</td>
                    <td>
                      <Status statusColor={project.status.name}>
                        {project.status.name}
                      </Status>
                    </td>
                    <td>{project.active}</td>
                    <td>{project.user.name}</td>
                    <td>
                      <Actions>
                        <RouterLink to={`/update-project/${project.id}`}>
                          <PencilSimpleLine size={24} color="#9B5DE5" />
                        </RouterLink>

                        <PopContainer>
                          <PopPanelAlert>
                            <AlertDelete
                              id={project.id}
                              actualProjectName={project.name}
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

export default Project
