import { PencilSimpleLine, TrashSimple } from 'phosphor-react'
import React, { useState } from 'react'
import { Pagination } from '../../components/Portal/Pagination'
import { Panel } from '../../components/Portal/Panel'
import { useContracts } from './useContracts'
import { Link as RouterLink } from 'react-router-dom'

import ContractDetails from './DetailsContract'
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

const Contract: React.FC = () => {
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const { data, isLoading, isFetching, error } = useContracts(
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
                  <th>Name</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Phase</th>
                  <th>R$ VN</th>
                  <th>Owner</th>
                  <th>Active</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {data?.contracts.map(contract => (
                  <tr key={contract.id}>
                    <td>
                      <PopContainer>
                        <PopPanelDetails>
                          <ContractDetails id={contract.id} />
                        </PopPanelDetails>
                        <ButtonDetails>
                          {/* <Link onMouseEnter={() => handlePrefetchcontract(contract.id)}> */}
                          <p style={{ fontWeight: 'bold' }}>{contract.name}</p>
                          {/* </Link> */}
                        </ButtonDetails>
                      </PopContainer>
                    </td>

                    <td>{contract.date_start}</td>
                    <td>{contract.date_end}</td>
                    <td>{contract.phase_contract}</td>
                    <td>{contract.negotiated_value}</td>
                    <td>{contract.user.name}</td>
                    <td>{contract.active}</td>
                    <td>
                      <Actions>
                        <RouterLink to={`/update-contract/${contract.id}`}>
                          <PencilSimpleLine size={24} color="#9B5DE5" />
                        </RouterLink>

                        <PopContainer>
                          <PopPanelAlert>
                            <AlertDelete
                              id={contract.id}
                              actualContractName={contract.name}
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

export default Contract
