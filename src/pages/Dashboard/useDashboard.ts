import { useQuery } from 'react-query'
import api from '../../services/api'

export interface DashboardProps {
  totalProjects: number
  totalContracts: number
  totalUsers: number
  totalFeedbacks: number
}

export interface DashboardActiveProps {
  activeProjects: number | string
  activeContracts: number | string
  activeUsers: number | string
}
// interface DashboardResponse {
//   dashboard: DashboardProps[]
// }
export async function getDashboard(): Promise<DashboardProps> {
  const { data } = await api.get('/v1/dashboard/')
  // console.log("console log useUsers data", data);
  const totalUsers = data.totalUsers
  const totalProjects = data.totalProjects
  const totalContracts = data.totalContracts
  const totalFeedbacks = data.totalFeedbacks

  return { totalUsers, totalProjects, totalContracts, totalFeedbacks }
}

export async function getActiveRegistries(): Promise<DashboardActiveProps> {
  const { data } = await api.get('/v1/dashboard/active')
  // console.log("console log useUsers data", data);
  const activeUsers = data.activeUsers
  const activeProjects = data.activeProjects
  const activeContracts = data.activeContracts

  return { activeUsers, activeProjects, activeContracts }
}

export async function getContracts() {
  const { data } = await api.get('/h1/dashboard/contracts')

}

export function useDashboard() {
  return useQuery(['dashboard'], () => getDashboard(), {
    staleTime: 1000 * 60 * 10, // 1000 * 60 * 10 10 minutes
  })
}

export function useActiveRegistries() {
  return useQuery(['dashboardActive'], () => getActiveRegistries(), {
    staleTime: 1000 * 60 * 10, // 1000 * 60 * 10 10 minutes
  })
}

