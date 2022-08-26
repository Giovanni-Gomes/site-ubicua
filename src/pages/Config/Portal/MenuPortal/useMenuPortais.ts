import { useQuery } from 'react-query'
import api from '../../../../services/api'


export type MenuPortalProps = {
  id: string
  title: string;
  link?: string;
  active?: boolean;
  created_at?: string;
  updated_at?: string;
}

export type GetMenuPortalResponse = {
  totalPage: number
  menuPortais: MenuPortalProps[]
}

export type GetOneMenuPortalResponse = {
  menuPortais: MenuPortalProps[]
}

export async function getMenuPortais(
  page: number,
  take: number,
  searchQuery?: string,
): Promise<GetMenuPortalResponse> {
  const { data } = await api.get('/v1/menu-portal/', {
    params: {
      skip: page,
      take,
      query: searchQuery,
    },
  })
  const totalPage = Number(data.totalPage)

  const menuPortais = data.map((menuPortal: MenuPortalProps) => ({
    id: menuPortal.id,
    title: menuPortal.title,
    link: menuPortal.link,
    active: menuPortal.active ? 'Ativo' : 'Inativo',
    created_at:
      menuPortal.created_at &&
      new Date(menuPortal.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
  })) // .slice(pageStart, pageEnd);
  console.log(menuPortais);
  return {
    menuPortais,
    totalPage,
  }
}

export function useMenuPortais(page: number, take: number, searchQuery?: string) {
  return useQuery(['menuPortais', page, take, searchQuery], () => getMenuPortais(page, take),
    { staleTime: 1000 * 60 * 10 },
  )
}

// export async function getOneContractById(id: string): Promise<ContractProps> {
//   const result = await api.get(`/v1/contract/findOne/${id}`)
//   const contract = {
//     id: result.data.id,
//     name: result.data.name,
//     description: result.data.description,
//     active: result.data.active,
//     date_start: new Date(result.data.date_start).toISOString().slice(0, 10),
//     date_end:
//       result.data.date_end &&
//       new Date(result.data.date_end).toISOString().slice(0, 10),
//     negotiated_value: result.data.negotiated_value, // result.data.negotiated_value,
//     phase_contract: result.data.phase_contract,
//     user: {
//       id: result.data.user_id,
//       name: result.data.user_name,
//     },
//     created_at:
//       result.data.created &&
//       new Date(result.data.date_end).toISOString().slice(0, 10),
//   }
//   return contract
// }
// export async function deleteMenuPortais(id: string) {
//   await api.delete(`/v1/contract/delete/${id}`)
// }
// export function useContract(id: string) {
//   return useQuery(['contract', id], () => getOneContractById(id), {
//     staleTime: 1000 * 60 * 10, // 10 minutes
//   })
// }
