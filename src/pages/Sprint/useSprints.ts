import { useQuery } from 'react-query'
import api from '../../services/api'

export type Sprint = {
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
  user: {
    id?: string
    name?: string
  },
  projects: {
    id?: string
    name?: string
  }
  created_at?: string
  updated_at?: string
}

type GetSprintResponse = {
  totalPage: number
  sprints: Sprint[] | any
}

export type GetOneSprintResponse = {
  sprint: Sprint[]
}

export async function getSprints(
  page: number,
  take: number,
  search: string,
): Promise<GetSprintResponse> {
  const { data } = await api.get('/v1/sprint/findAll', {
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

  console.log("use sprint date end", sprints.date_end);

  return {
    sprints,
    totalPage,
  }
}

export async function getOneSprintById(id: string): Promise<Sprint> {
  console.log("ID ", id);
  const result = await api.get(`/v1/sprint/findOne/${id}`)
  // console.log("RESULT SPRINT", result);
  // console.log("RESULT SPRINT DATA ID", result.data.id);
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
    projects: {
      id: result.data.project.id,
      name: result.data.project.name,
    }
  }

  console.log("RETURN SPRINT", sprint);
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
