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

export interface DashboardContractsProps {
  janContracts: string;
  fevContracts: string;
  marContracts: string;
  abrContracts: string;
  maiContracts: string;
  junContracts: string;
  julContracts: string;
  agoContracts: string;
  setContracts: string;
  outContracts: string;
  novContracts: string;
  dezContracts: string;
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

export async function getContracts(): Promise<DashboardContractsProps> {
  const { data } = await api.get('/v1/dashboard/contracts')

  const janContracts = data.janContracts;
  const fevContracts = data.fevContracts;
  const marContracts = data.marContracts;
  const abrContracts = data.abrContracts;
  const maiContracts = data.maiContracts;
  const junContracts = data.junContracts;
  const julContracts = data.julContracts;
  const agoContracts = data.agoContracts;
  const setContracts = data.setContracts;
  const outContracts = data.outContracts;
  const novContracts = data.novContracts;
  const dezContracts = data.dezContracts;
  return {
    janContracts,
    fevContracts,
    marContracts,
    abrContracts,
    maiContracts,
    junContracts,
    julContracts,
    agoContracts,
    setContracts,
    outContracts,
    novContracts,
    dezContracts
  }
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

export function useContractsRegistries() {
  return useQuery(['dashboardContracts'], () => getContracts(), {
    staleTime: 1000 * 60 * 10, // 1000 * 60 * 10 10 minutes
  })
}

