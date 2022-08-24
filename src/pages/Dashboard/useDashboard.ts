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
  janContracts: [{ _sum: { negotiated_value: number }, active: boolean }];
  fevContracts: [{ _sum: { negotiated_value: number }, active: boolean }];
  marContracts: [{ _sum: { negotiated_value: number }, active: boolean }];
  abrContracts: [{ _sum: { negotiated_value: number }, active: boolean }];
  maiContracts: [{ _sum: { negotiated_value: number }, active: boolean }];
  junContracts: [{ _sum: { negotiated_value: number }, active: boolean }];
  julContracts: [{ _sum: { negotiated_value: number }, active: boolean }];
  agoContracts: [{ _sum: { negotiated_value: number }, active: boolean }];
  setContracts: [{ _sum: { negotiated_value: number }, active: boolean }];
  outContracts: [{ _sum: { negotiated_value: number }, active: boolean }];
  novContracts: [{ _sum: { negotiated_value: number }, active: boolean }];
  dezContracts: [{ _sum: { negotiated_value: number }, active: boolean }];
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
  console.log('janeiro: ', janContracts)
  console.log('fevereiro: ', fevContracts)
  console.log('março: ', marContracts)
  console.log('abril: ', abrContracts)
  console.log('maio: ', maiContracts)
  console.log('junho: ', junContracts)
  console.log('julho: ', julContracts)
  console.log('agosto: ', agoContracts)
  console.log('setembro: ', setContracts)
  console.log('outubro: ', outContracts)
  console.log('novembro: ', novContracts)
  console.log('dezembro: ', dezContracts)
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

