import { useQuery } from "react-query";
import api from "../../services/api";
import { queryClient } from "../../services/queryClient";

export interface FindAllUserProps {
  id: string;
  name: string;
  description: string;
  active: boolean;
  created_at: Date;
}

interface GetProjectResponse {
  totalPage: number;
  users: FindAllUserProps[];
};

export async function getUsers(page?: number, take?: number): Promise<GetProjectResponse> {
  const { data, request } = await api.get('/v1/users/', {
    params: {
      skip: page,
      take: take
    }
  });

  const totalPage = Number(data.totalPage);
  console.log("console log useUsers data", data);
  const users = data.users.map((user: FindAllUserProps) => ({
    id: user.id,
    name: user.name,
    description: user.description,
    active: user.active ? 'Ativo' : 'Inativo',
    created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
  }));

  return {
    users,
    totalPage,
  };
}

export async function getOneUserById(id: string): Promise<GetProjectResponse> {
  const user = await api.get(`/v1/users/findOne/${id}`);

  return user.data
}

export async function deleteUser(id: string) {
  await api.delete(`/v1/users/delete/${id}`);
}

export function useUsers(page?: number, take?: number) {
  return useQuery(['users', page, take], () => getUsers(page, take));
  // return useQuery(['projects', page], () => getProjects(page, take), {
  //   staleTime: 1000 * 60 * 10, // 1000 * 60 * 10 10 minutes // 1000 * 60 * 60 * 12, // 12 hours,
  // });
}

// export function useProject(id?: string) {
//   if (id) {
//     return useQuery(['project'], () => getOneProjectById(id));
//   } else {
//     return null
//   }
// }





