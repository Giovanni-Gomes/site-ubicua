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

export interface DashboardTargetContractsProps {
  january: [{ value_target: number }];
  february: [{ value_target: number }];
  march: [{ value_target: number }];
  april: [{ value_target: number }];
  may: [{ value_target: number }];
  june: [{ value_target: number }];
  july: [{ value_target: number }];
  august: [{ value_target: number }];
  september: [{ value_target: number }];
  october: [{ value_target: number }];
  november: [{ value_target: number }];
  december: [{ value_target: number }];
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

export async function getTargetContracts(): Promise<DashboardTargetContractsProps> {
  const { data } = await api.get('/v1/dashboard/target_contracts');
  const january = data.january;
  const february = data.february;
  const march = data.march;
  const april = data.april;
  const may = data.may;
  const june = data.june;
  const july = data.july;
  const august = data.august;
  const september = data.september;
  const october = data.october;
  const november = data.november;
  const december = data.december;
  // console.log(january)
  // console.log(february)
  // console.log(march)
  // console.log(april)
  // console.log(may)
  // console.log(june)
  // console.log(july)
  // console.log(august)
  // console.log(september)
  // console.log(october)
  // console.log(november)
  // console.log(december)
  return {
    january,
    february,
    march,
    april,
    may,
    june,
    july,
    august,
    september,
    october,
    november,
    december
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

export function useTargetContracts() {
  return useQuery(['dashboardTargetContracts'], () => getTargetContracts(), {
    staleTime: 1000 * 60 * 10, // 1000 * 60 * 10 10 minutes
  })
}

