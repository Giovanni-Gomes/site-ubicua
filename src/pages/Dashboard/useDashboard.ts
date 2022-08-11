import { useQuery } from 'react-query'
import api from '../../services/api'

export interface DashboardProps {
  totalProjects: number
  totalContracts: number
  totalUsers: number
  totalFeedbacks: number
}
// interface DashboardResponse {
//   dashboard: DashboardProps[]
// }
export async function getDashboard(): Promise<DashboardProps> {
  const { data } = await api.get('/v1/dashboard/')
  // console.log("console log useUsers data", data);
  const totalUsers = data.totalUsers;
  const totalProjects = data.totalProjects;
  const totalContracts = data.totalContracts;
  const totalFeedbacks = data.totalFeedbacks;

  return { totalUsers, totalProjects, totalContracts, totalFeedbacks }
}

export function useDashboard() {
  return useQuery(['dashboard'], () => getDashboard(), {
    staleTime: 1000 * 60 * 10, // 1000 * 60 * 10 10 minutes
  })
}
