import { useQuery } from 'react-query'
import api from '../../services/api'

export type ClientProps = {
  id: string
  name_company: string
  name_contact?: string
  segmentation?: string
  description?: string
  email: string
  phone?: string
  whats?: string
  type_client?: "BASIC" | "GOLD" | "EMERALD" | "DIAMOND"
  active?: string
  user: {
    id?: string
    name?: string
  }
  created_at?: string
}

export type GetClientResponse = {
  totalPage: number
  clients: ClientProps[] | any
}

export type GetOneClientResponse = {
  client: ClientProps[]
}

export async function getClients(
  page: number,
  take: number,
  searchQuery?: string,
): Promise<GetClientResponse> {

  const { data } = await api.get('/v1/client/findAll', {
    params: {
      skip: page,
      take,
      query: searchQuery,
    },
  })

  const totalPage = Number(data.totalPage)

  const clients = data.clients.map((client: ClientProps) => ({
    id: client.id,
    name_company: client.name_company,
    name_contact: client.name_contact,
    segmentation: client.segmentation,
    description: client.description,
    email: client.email,
    phone: client.phone,
    whats: client.whats,
    active: client.active ? 'Active' : 'Inactive',
    type_client: client.type_client ? client.type_client : 'not type defined',
    created_at: client.created_at &&
      new Date(client.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
    user: client.user,
  }))
  return {
    clients,
    totalPage,
  }
}

export async function getOneClientById(id: string): Promise<ClientProps> {
  const result = await api.get(`/v1/client/findOne/${id}`)
  const client = {
    id: result.data.id,
    name_company: result.data.name_company,
    name_contact: result.data.name_contact,
    segmentation: result.data.segmentation,
    description: result.data.description,
    email: result.data.email,
    phone: result.data.phone,
    whats: result.data.whats,
    active: result.data.active ? 'Active' : 'Inactive',
    type_client: result.data.type_client ? result.data.type_client : 'not type defined',
    user: {
      id: result.data.user.id,
      name: result.data.user.name,
    },
    created_at: result.data.created_at && new Date(result.data.created_at).toISOString().slice(0, 10),
  }
  return client
}
export async function deleteClient(id: string) {
  await api.delete(`/v1/client/delete/${id}`)
}

export function useClients(page: number, take: number, searchQuery?: string) {
  return useQuery(['clients', page, take, searchQuery], () => getClients(page, take, searchQuery), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
  //console.log("useCLientes function", searchQuery)
}

export function useClient(id: string) {
  return useQuery(['client', id], () => getOneClientById(id), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}
