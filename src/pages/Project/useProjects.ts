import { useQuery } from "react-query";
import api from "../../services/api";

export type Project = {
  id: string;
  name: string;
  description: string;
  active: string;
  date_start: string;
  date_end?: string;
  progress: string;
  negotiated_value: any;
  real_cost: number;
  status: {
    id?: string;
    name?: string;
  };
  user: {
    id?: string;
    name?: string;
  };
  created_at?: string;
}

type GetProjectResponse = {
  totalPage: number;
  projects: Project[] | any;
};

export type GetOneProjectResponse = {
  project: Project[];
};

export async function getProjects(page: number, take: number, searchQuery?: string): Promise<GetProjectResponse> {

  const { data, request } = await api.get('/v1/project/findAll', {
    params: {
      skip: page,
      take: take,
      searchQuery: searchQuery
    }
  });

  const totalPage = Number(data.totalPage);

  const projects = data.projects.map((project: Project) => ({
    id: project.id,
    name: project.name,
    description: project.description,
    active: project.active ? 'Ativo' : 'Inativo',
    date_start: new Date(project.date_start).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
    date_end: project.date_end ? new Date(project.date_end).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }) : 'not value',
    progress: project.progress,
    createdAt: project.created_at && new Date(project.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
    negotiated_value: Intl.NumberFormat('pt-BR', {
      style: "currency",
      currency: "BRL"
    }).format(project.negotiated_value),
    real_cost: project.real_cost ? Intl.NumberFormat('pt-BR', {
      style: "currency",
      currency: "BRL"
    }).format(project.real_cost) : 'not value',
    status: project.status,
    user: project.user
  }));//.slice(pageStart, pageEnd);
  //console.log(projects);
  return {
    projects,
    totalPage,
  };
}

export async function getOneProjectById(id: string): Promise<Project> {
  const result = await api.get(`/v1/project/findOne/${id}`);
  const project = {
    id: result.data.id,
    name: result.data.name,
    description: result.data.description,
    active: result.data.active ? 'Ativo' : 'Inativo',
    date_start: new Date(result.data.date_start).toISOString().slice(0, 10),
    date_end: result.data.date_end && new Date(result.data.date_end).toISOString().slice(0, 10),
    progress: result.data.progress && result.data.progress,
    negotiated_value: result.data.negotiated_value && result.data.negotiated_value, //result.data.negotiated_value,
    real_cost: result.data.real_cost && result.data.real_cost,
    status: {
      id: result.data.status.id,
      name: result.data.status.name,
    },
    user: {
      id: result.data.user.id,
      name: result.data.user.name,
    }
  }
  return project
}

export async function deleteProject(id: string) {
  await api.delete(`/v1/project/delete/${id}`);
}

export function useProjects(page: number, take: number, searchQuery?: string) {
  return useQuery(['projects', page, take, searchQuery], () => getProjects(page, take, searchQuery));
  // return useQuery(['projects', page], () => getProjects(page, take), {
  //   staleTime: 1000 * 60 * 10, // 1000 * 60 * 10 10 minutes // 1000 * 60 * 60 * 12, // 12 hours,
  // });
}

export function useProject(id: string) {
  return useQuery(['project', id], () => getOneProjectById(id));
  // return useQuery(['projects', id], () => getProjects(page, take), {
  //   staleTime: 1000 * 60 * 10, // 1000 * 60 * 10 10 minutes // 1000 * 60 * 60 * 12, // 12 hours,
  // });
}
