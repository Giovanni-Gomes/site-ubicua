import { Box, Flex, Spinner } from '@chakra-ui/react'
import { PencilSimpleLine, TrashSimple } from 'phosphor-react'
import React, { useState } from 'react'
import Header from '../../components/Portal/Header'
import { Pagination } from '../../components/Portal/Pagination'
import { Panel } from '../../components/Portal/Panel'
import { useProjects } from './useProjects'
import { Link as RouterLink } from 'react-router-dom'

import ProjectDetails from './projectDetails'
import AlertDelete from './alertDelete'
import {
  ButtonAlert,
  ButtonDetails,
  PopContainer,
  PopPanelAlert,
  PopPanelDetails,
} from './styles'

import { Status, TableCustom } from '../../components/Portal/Table/styles'

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
        title="List Projects"
        back="/dashboard"
        next="/dashboard"
        search={true}
        searchState={setSearchQuery}
        importFile="/import"
        create="/create-project"
      >
        <Flex>
          {!isLoading && isFetching && (
            <Spinner size="sm" color="gray.500" ml="4" />
          )}
        </Flex>

        {isLoading ? (
          <Flex py="10" justify="center">
            <Spinner />
          </Flex>
        ) : error ? (
          <Flex py="10" justify="center">
            failed to get the data!
          </Flex>
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
                          <Box>
                            {/* <Link onMouseEnter={() => handlePrefetchProject(project.id)}> */}
                            <p style={{ fontWeight: 'bold' }}>{project.name}</p>
                            {/* </Link> */}
                          </Box>
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
                      <Flex justify="center" align="baseline">
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
                      </Flex>
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
