import { PencilSimpleLine, TrashSimple } from 'phosphor-react'
import React, { useState } from 'react'
import Header from '../../components/Portal/Header'
import { Pagination } from '../../components/Portal/Pagination'
import { Panel } from '../../components/Portal/Panel'
import { useProjects } from './useProjects'
import { Link as RouterLink } from 'react-router-dom'

import ProjectDetails from './DetailsProject'
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

const Project: React.FC = () => {
  // style colors customTheme

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
      <Header />

      <Panel
        title="List Projects"
        back="/dashboard"
        next="/dashboard"
        search={true}
        searchState={setSearchQuery}
        importFile="/import"
        create="/create-project"
      >
        {/* <Form ref={formRef} onSubmit={handleSearchContacts}> */}
        {/* <Input

            id='search'
            type='text'
            name="search"
            placeholder="Buscar contatos"
            onSubmit={(event: ChangeEvent<HTMLInputElement>) => handleSearchContracts(event?.target.value)}
          /> */}
        {/* <InputChakra
            id='search'
            type='text'
            name="search"
          />

        </Form> */}

        <div>
          {!isLoading && isFetching && (
            <Loading />
          )}
        </div>

        {isLoading ? (
          <div>
            <Loading />
          </div>
        ) : error ? (
          <div>
            failed to get the data!
          </div>
        ) : (
          <>
            <TableCustom color="black">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Início</th>
                  <th>Fim</th>
                  <th>%</th>
                  <th>R$ VN</th>
                  <th>R$ CR</th>
                  <th>Status</th>
                  <th>Resp</th>
                  <th>Ativo</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {data?.projects.map((project: any) => (
                  <tr key={project.id}>
                    <td>
                      <PopContainer>
                        <PopPanelDetails>
                          <ProjectDetails id={project.id} />
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
                          <PencilSimpleLine size={24} />
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
