import { useQuery } from "react-query";
import api from "../../services/api";
import { queryClient } from "../../services/queryClient";


export type Project = {
  id: string;
  name: string;
  description: string;
  active: boolean;
  date_start: string;
  date_end: string;
  progress: string;
  negotiated_value: number;
  real_cost: number;
  status: {
    name: string;
  };
  user: {
    name: string;
  };
  created_at: Date;
}

type GetProjectResponse = {
  totalPage: number;
  projects: Project[];
};

export type GetOneProjectResponse = {
  project: Project[];
};

export async function getProjects(page: number, take: number): Promise<GetProjectResponse> {
  // let skip = page * 5 - 5;


  const { data, request } = await api.get('/v1/project/findAll', {
    params: {
      skip: page,
      take: take
    }
  });
  //take: 5,

  //console.log(request);
  // const { per_page = 20 } = request;
  // const pageStart = (Number(page) - 1) * Number(per_page);
  // const pageEnd = pageStart + Number(per_page);

  //const { per_page } = request;
  // const pageStart = (Number(page) - 1) * Number(take);
  // const pageEnd = pageStart + Number(take);
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
    date_end: project.date_end && new Date(project.date_end).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
    progress: project.progress,
    createdAt: new Date(project.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
    negotiated_value: project.negotiated_value,
    real_cost: project.real_cost,
    status: project.status,
    user: project.user
  }));//.slice(pageStart, pageEnd);

  //const totalCount = Number(projects.length);
  return {
    projects,
    totalPage,
  };
}

export async function getOneProjectById(id: string): Promise<GetOneProjectResponse> {
  const project = await api.get(`/v1/project/findOne/${id}`);
  return project.data
}

export async function deleteProject(id: string) {
  await api.delete(`/v1/project/delete/${id}`);
}

export function useProjects(page: number, take: number) {
  return useQuery(['projects', page, take], () => getProjects(page, take));
  // return useQuery(['projects', page], () => getProjects(page, take), {
  //   staleTime: 1000 * 60 * 10, // 1000 * 60 * 10 10 minutes // 1000 * 60 * 60 * 12, // 12 hours,
  // });
}

export function useProject(id?: string) {
  if (id) {
    return useQuery(['project'], () => getOneProjectById(id));
  } else {
    return null
  }

  // return useQuery(['projects', page], () => getProjects(page, take), {
  //   staleTime: 1000 * 60 * 10, // 1000 * 60 * 10 10 minutes // 1000 * 60 * 60 * 12, // 12 hours,
  // });
}





