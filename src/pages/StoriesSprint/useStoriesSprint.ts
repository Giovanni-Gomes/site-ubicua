import { useQuery } from 'react-query'
import api from '../../services/api'

export type StoriesSP = {
  id: string
  name: string
  description: string
  active: string
  date_start: string
  date_end?: string
  status: {
    id?: string
    name?: string
  }
  sprint: {
    id?: string
    name?: string
    date_start?: string
    date_end?: string
  }
  user: {
    id?: string
    name?: string
  }
  created_at?: string
  updated_at?: string
}

type GetStoriesSprintResponse = {
  totalPage: number
  stories_sprints: StoriesSP[] | any
}

export type GetOneStoriesSPResponse = {
  stories_sprint: StoriesSP[]
}

export async function getStoriesSprint(
  page: number,
  take: number,
  search: string,
): Promise<GetStoriesSprintResponse> {
  const { data } = await api.get('/v1/stories-sprint/findAll', {
    params: {
      skip: page,
      take,
      search,
    },
  })

  const totalPage = Number(data.totalPage)

  const sprints = data.sprints.map((sprint: Sprint) => ({
    id: sprint.id,
    name: sprint.name,
    description: sprint.description,
    active: sprint.active ? 'Ativo' : 'Inativo',
    date_start: new Date(sprint.date_start).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
    date_end: sprint.date_end
      ? new Date(sprint.date_end).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      : 'not value',
    createdAt:
      sprint.created_at &&
      new Date(sprint.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
    status: sprint.status,
    user: sprint.user,
  }))
  return {
    sprints,
    totalPage,
  }
}

export async function getOneSprintById(id: string): Promise<Sprint> {
  const result = await api.get(`/v1/sprint/findOne/${id}`)
  const sprint = {
    id: result.data.id,
    name: result.data.name,
    description: result.data.description,
    active: result.data.active ? 'Ativo' : 'Inativo',
    date_start: new Date(result.data.date_start).toISOString().slice(0, 10),
    date_end:
      result.data.date_end &&
      new Date(result.data.date_end).toISOString().slice(0, 10),
    status: {
      id: result.data.status.id,
      name: result.data.status.name,
    },
    user: {
      id: result.data.user.id,
      name: result.data.user.name,
    },
  }
  return sprint
}

export async function deleteSprint(id: string) {
  await api.delete(`/v1/sprint/delete/${id}`)
}

export function useSprints(page: number, take: number, search: string) {
  return useQuery(['sprints', page, take, search], () => getSprints(page, take, search), {
    staleTime: 1000 * 60 * 10
  });
}

export function useSprint(id: string) {
  return useQuery(['sprint', id], () => getOneSprintById(id))
}
