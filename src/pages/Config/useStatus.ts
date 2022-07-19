import { useQuery } from "react-query";
import api from "../../services/api";
import { queryClient } from "../../services/queryClient";

export interface FindAllStatusProps {
    id: string;
    name: string;
    description: string;
    active: boolean;
    created_at: Date;
}

interface GetStatusResponse {
    totalPage: number;
    status: FindAllStatusProps[];
};

export async function getStatus(page?: number, take?: number): Promise<GetStatusResponse> {
    const { data, request } = await api.get('/v1/status/', {
        params: {
            skip: page,
            take: take
        }
    });

    const totalPage = Number(data.totalPage);
    console.log("console log getStatus data", data);
    const status = data.status.map((status: FindAllStatusProps) => ({
        id: status.id,
        name: status.name,
        description: status.description,
        active: status.active ? 'Ativo' : 'Inativo',
        created_at: new Date(status.created_at).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }),
    }));

    return {
        status,
        totalPage,
    };
}

export async function getOneStatusById(id: string): Promise<GetStatusResponse> {
    const status = await api.get(`/v1/status/findOne/${id}`);

    return status.data
}

export async function deleteStatus(id: string) {
    await api.delete(`/v1/status/delete/${id}`);
}

export function useStatus(page?: number, take?: number) {
    return useQuery(['status', page, take], () => getStatus(page, take));
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
