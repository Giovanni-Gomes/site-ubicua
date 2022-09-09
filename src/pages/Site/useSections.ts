import { Console } from 'console'
import { useQuery } from 'react-query'
import api from '../../services/api'

// interface sections One, Two, Three, For and Five
export interface FindSectionOneProps {
  id: string
  title: string
  description_one?: string
  image_one?: string
  created_at: string
  updated_at: string
}
export interface FindSectionTwoProps {
  id: string
  title: string
  description_one?: string
  image_one?: string
  created_at: string
  updated_at: string
}
export interface FindSectionThreeProps {
  id: string
  title: string
  description_one?: string
  image_one?: string
  created_at: string
  updated_at: string
}
export interface FindSectionFourProps {
  id: string
  title: string
  description_one?: string
  image_one?: string
  created_at: string
  updated_at: string
}
export interface FindSectionFiveProps {
  id: string
  title: string
  description_one?: string
  image_one?: string
  created_at: string
  updated_at: string
}

// get response from sections
interface GetSectionsResponse {
  totalPage?: number
  sectionsOne?: FindSectionOneProps[] | any
  sectionsTwo?: FindSectionTwoProps[] | any
  sectionsThree?: FindSectionThreeProps[] | any
  sectionsFour?: FindSectionFourProps[] | any
  sectionsFive?: FindSectionFiveProps[] | any
}

interface GetOneSectionByIdResponse {
  id: string
  title: string
  description_one?: string
  image_one?: string
  created_at: string
  updated_at: string
}

interface GetOneSectionById {
  id?: string
  section?: string
}

export async function getSectionsOne(
  page: number,
  take: number,
  search: string,
): Promise<GetSectionsResponse> {
  const { data } = await api.get('/v1/sectionOne/findAll', {
    params: {
      skip: page,
      take,
      search,
    },
  })

  const totalPage = Number(data.totalPage)

  const sectionsOne = data.sectionsOne.map((section: FindSectionOneProps) => ({
    id: section.id,
    title: section.title,
    description: section.description_one,
    image: section.image_one,
    created: new Date(section.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
    updated: new Date(section.updated_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
  }))
  return {
    sectionsOne,
    totalPage,
  }
}

export async function getSectionById(id?: string, section?: string): Promise<GetOneSectionByIdResponse> {
  const { data } = await api.get(`/v1/${section}/findOne/${id}`)
  console.log('data', data)
  return data
}

// get data from section one
export async function getSectionOne(): Promise<GetSectionsResponse> {
  // | null
  const { data } = await api.get('/v1/sectionOne/')
  // if (data.length <= 0) {
  //   return null;
  // }
  console.log(data)
  const sectionsOne = data.map((section: FindSectionOneProps) => ({
    id: section.id,
    title: section.title,
    description_one: section.description_one,
    image_one: section.image_one ? section.image_one : 'not image',
    created_at: new Date(section.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
    update_at: new Date(section.updated_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
  }))
  return { sectionsOne }
}
// get data from section two
export async function getSectionTwo(): Promise<GetSectionsResponse> {
  // | null
  const { data } = await api.get('/v1/sectionTwo/')
  // if (data.length <= 0) {
  //   return null;
  // }
  const sectionsTwo = data.map((section: FindSectionTwoProps) => ({
    id: section.id,
    title: section.title,
    description_one: section.description_one,
    image_one: section.image_one ? section.image_one : 'not image',
    created_at: new Date(section.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
    update_at: new Date(section.updated_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
  }))
  return { sectionsTwo }
}
// get data from section three
export async function getSectionThree(): Promise<GetSectionsResponse> {
  // | null
  const { data } = await api.get('/v1/sectionThree/')
  // if (data.length <= 0) {
  //   return null;
  // }
  const sectionsThree = data.map((section: FindSectionThreeProps) => ({
    id: section.id,
    title: section.title,
    description_one: section.description_one,
    image_one: section.image_one ? section.image_one : 'not image',
    created_at: new Date(section.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
    update_at: new Date(section.updated_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
  }))
  return { sectionsThree }
}
// get data from section for
export async function getSectionFor(): Promise<GetSectionsResponse> {
  // | null
  const { data } = await api.get('/v1/sectionFour/')
  // if (data.length <= 0) {
  //   return null;
  // }
  const sectionsFour = data.map((section: FindSectionFourProps) => ({
    id: section.id,
    title: section.title,
    description_one: section.description_one,
    image_one: section.image_one ? section.image_one : 'not image',
    created_at: new Date(section.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
    update_at: new Date(section.updated_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
  }))
  return { sectionsFour }
}
// get data from section five
export async function getSectionFive(): Promise<GetSectionsResponse> {
  // | null
  // const result = await api.get('/v1/sectionFive/')
  const { data } = await api.get('/v1/sectionFive/')
  const sectionsFive = data.map((section: FindSectionFiveProps) => ({
    id: section.id,
    title: section.title,
    description_one: section.description_one,
    image_one: section.image_one ? section.image_one : 'not image',
    created_at: new Date(section?.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
    update_at: new Date(section.updated_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
  }))
  return { sectionsFive }
}

// use sections One, Two, Three, For and Five
export function useSection({ id, section }: GetOneSectionById) {
  return useQuery(['sections', id, section], () => getSectionById(id, section), {
    staleTime: 1000 * 60 * 10, // 1000 * 60 * 10 10 minutes // 1000 * 60 * 60 * 12, // 12 hours,
  })
}
// use sections One, Two, Three, For and Five
export function useSectionOne() {
  return useQuery(['sectionOne'], () => getSectionOne(), {
    staleTime: 1000 * 60 * 10, // 1000 * 60 * 10 10 minutes // 1000 * 60 * 60 * 12, // 12 hours,
  })
}
export function useSectionTwo() {
  return useQuery(['sectionTwo'], () => getSectionTwo(), {
    staleTime: 1000 * 60 * 10, // 1000 * 60 * 10 10 minutes // 1000 * 60 * 60 * 12, // 12 hours,
  })
}
export function useSectionThree() {
  return useQuery(['sectionThree'], () => getSectionThree(), {
    staleTime: 1000 * 60 * 10, // 1000 * 60 * 10 10 minutes // 1000 * 60 * 60 * 12, // 12 hours,
  })
}
export function useSectionFor() {
  return useQuery(['sectionFor'], () => getSectionFor(), {
    staleTime: 1000 * 60 * 10, // 1000 * 60 * 10 10 minutes // 1000 * 60 * 60 * 12, // 12 hours,
  })
}
export function useSectionFive() {
  return useQuery(['sectionFive'], () => getSectionFive(), {
    staleTime: 1000 * 60 * 10, // 1000 * 60 * 10 10 minutes // 1000 * 60 * 60 * 12, // 12 hours,
  })
}

// delete sections One, Two, Three, For and Five
export async function deleteSectionOne(id: string) {
  await api.delete(`/v1/sectionOne/delete/${id}`)
}
export async function deleteSectionTwo(id: string) {
  await api.delete(`/v1/sectionTwo/delete/${id}`)
}
export async function deleteSectionThree(id: string) {
  await api.delete(`/v1/sectionThree/delete/${id}`)
}
export async function deleteSectionFor(id: string) {
  await api.delete(`/v1/sectionFor/delete/${id}`)
}
export async function deleteSectionFive(id: string) {
  await api.delete(`/v1/sectionFive/delete/${id}`)
}

export function useSectionsOne(page: number, take: number, search: string) {
  return useQuery(['sections one', page, take, search], () =>
    getSectionsOne(page, take, search),
  )
}
// if (data.length <= 0) {
//   return null;
// }
// const sectionFive = data[0].sectionFive.map((section: FindSectionFiveProps) => ({
//   id: section.id,
//   title: section.title,
//   description_one: section.description_one,
//   image_one: section.image_one ? section.image_one : 'not image',
//   created_at: new Date(section.created_at).toLocaleDateString('pt-BR', {
//     day: '2-digit',
//     month: '2-digit',
//     year: 'numeric',
//   }),
//   update_at: new Date(section.updated_at).toLocaleDateString('pt-BR', {
//     day: '2-digit',
//     month: '2-digit',
//     year: 'numeric',
//   }),
// }))
