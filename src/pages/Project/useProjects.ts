import { useQuery } from "react-query";
import api from "../../services/api";
import { queryClient } from "../../services/queryClient";


type Project = {
  id: string;
  name: string;
  description: string;
  progress: string;
  created_at: Date;
}

type GetProjectResponse = {
  totalCount: number;
  projects: Project[];
};

export async function getProjects(page: number): Promise<GetProjectResponse> {
  const { data, request } = await api.get('/v1/project/findAll');

  console.log(request);
  const { per_page = 20 } = request;

  const pageStart = (Number(page) - 1) * Number(per_page);
  const pageEnd = pageStart + Number(per_page);

  const totalCount = Number(data.totalPage);

  //const totalCount = Number(data.length);
  //const totalCount = Number(headers['x-total-count']);
  //const totalCount = Number(data.totalCount);
  //console.log(data);
  //console.log(totalCount);

  const projects = data.projects.map((project: Project) => ({
    id: project.id,
    name: project.name,
    description: project.description,
    createdAt: new Date(project.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  })).slice(pageStart, pageEnd);
  //console.log(projects);
  //const totalCount = Number(projects.length);
  return {
    projects,
    totalCount,
  };
}

export function useProjects(page: number) {
  return useQuery(['projects', page], () => getProjects(page), {
    staleTime: 1000 * 60 * 10, // 1000 * 60 * 10 10 minutes // 1000 * 60 * 60 * 12, // 12 hours,
  });
}
