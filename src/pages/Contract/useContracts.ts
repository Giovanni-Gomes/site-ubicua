import { useQuery } from 'react-query'
import api from '../../services/api'

export type ContractProps = {
  id: string
  name: string
  description: string
  active: boolean
  date_start: string
  date_end: string
  negotiated_value: number
  phase_contract: string
  user: {
    id?: string
    name?: string
  }
  created_at?: string
}

export type GetContractResponse = {
  totalPage: number
  contracts: ContractProps[] | any
}

export type GetOneContractResponse = {
  contract: ContractProps[]
}

export async function getContracts(
  page: number,
  take: number,
  searchQuery?: string,
): Promise<GetContractResponse> {
  const { data } = await api.get('/v1/contract/findAll', {
    params: {
      skip: page,
      take,
      query: searchQuery,
    },
  })
  const totalPage = Number(data.totalPage)

  const contracts = data.contracts.map((contract: ContractProps) => ({
    id: contract.id,
    name: contract.name,
    description: contract.description,
    active: contract.active ? 'Ativo' : 'Inativo',
    date_start: new Date(contract.date_start).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
    date_end:
      contract.date_end &&
      new Date(contract.date_end).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
    createdAt:
      contract.created_at &&
      new Date(contract.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
    negotiated_value: Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(contract.negotiated_value),
    user: contract.user,
  })) // .slice(pageStart, pageEnd);
  // console.log(Contracts);
  return {
    contracts,
    totalPage,
  }
}

export async function getOneContractById(id: string): Promise<ContractProps> {
  const result = await api.get(`/v1/contract/findOne/${id}`)
  const contract = {
    id: result.data.id,
    name: result.data.name,
    description: result.data.description,
    active: result.data.active,
    date_start: new Date(result.data.date_start).toISOString().slice(0, 10),
    date_end:
      result.data.date_end &&
      new Date(result.data.date_end).toISOString().slice(0, 10),
    negotiated_value: result.data.negotiated_value, // result.data.negotiated_value,
    phase_contract: result.data.phase_contract,
    user: {
      id: result.data.user_id,
      name: result.data.user_name,
    },
    created_at:
      result.data.created &&
      new Date(result.data.date_end).toISOString().slice(0, 10),
  }
  return contract
}

export async function deleteContract(id: string) {
  await api.delete(`/v1/contract/delete/${id}`)
}

export function useContracts(page: number, take: number, searchQuery?: string) {
  return useQuery(
    ['contracts', page, take, searchQuery],
    () => getContracts(page, take),
    {
      staleTime: 1000 * 60 * 10, // 10 minutes
    },
  )
}

export function useContract(id: string) {
  return useQuery(['contract', id], () => getOneContractById(id), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}
