import { PencilSimpleLine, TrashSimple } from 'phosphor-react'
import React, { useState } from 'react'
import { Pagination } from '../../components/Portal/Pagination'
import { Panel } from '../../components/Portal/Panel'
import { useClients } from './useClients'
import { Link as RouterLink } from 'react-router-dom'

import ClientDetails from './DetailsClient'
import AlertDeleteClient from './AlertDeleteClient'
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

const Client: React.FC = () => {
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const { data, isLoading, isFetching, error } = useClients(page, 10, searchQuery)

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
        title="List Clients"
        back="/dashboard"
        next="/dashboard"
        search={true}
        searchState={setSearchQuery}
        importFile="/import"
        create="/create-client"
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
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Segmentation</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Whats</th>
                  <th>Type</th>
                  <th>Active</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {data?.clients.map((client: any) => (
                  <tr key={client.id}>
                    <td>
                      <PopContainer>
                        <PopPanelDetails>
                          <ClientDetails id={client.id} />
                        </PopPanelDetails>
                        <ButtonDetails>
                          <p style={{ fontWeight: 'bold' }}>{client.name_company}</p>
                        </ButtonDetails>
                      </PopContainer>
                    </td>

                    <td>{client.name_contact}</td>
                    <td>{client.segmentation}</td>
                    <td>{client.email}</td>
                    <td>{client.phone}</td>
                    <td>{client.whats}</td>
                    <td>{client.type_client}</td>
                    <td>{client.active}</td>
                    <td>
                      <Actions>
                        <RouterLink to={`/update-client/${client.id}`}>
                          <PencilSimpleLine size={24} color="#9B5DE5" />
                        </RouterLink>

                        <PopContainer>
                          <PopPanelAlert>
                            <AlertDeleteClient id={client.id} actualClientName={client.name_company} />
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

export default Client
