import { useQuery } from 'react-query'
import api from '../../services/api'

type Feedback = {
  id: string
  type: string
  comment: string
  screenshot?: string
  created_at?: string
  updated_at?: string
}

type GetFeedbackResponse = {
  totalPage: number
  feedbacks: Feedback[] | any
}

export async function getFeedbacks(
  page: number,
  take: number,
  search: string,
): Promise<GetFeedbackResponse> {
  const { data } = await api.get('/v1/feedback/findAll', {
    params: {
      skip: page,
      take,
      search,
    }
  })
  const totalPage = Number(data.totalPage)

  const feedbacks = data.feedback.map((fb: Feedback) => ({
    id: fb.id,
    type: fb.type,
    comment: fb.comment,
    screenshot: fb.screenshot,
    createdAt:
      fb.created_at &&
      new Date(fb.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
    updatedAt:
      fb.updated_at &&
      new Date(fb.updated_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
  }))
  console.log('feedbacks', feedbacks)

  return {
    feedbacks,
    totalPage,
  }
}

export function useFeedbacks(page: number, take: number, search: string) {
  return useQuery(['feedbacks', page, take, search], () =>
    getFeedbacks(page, take, search),
  )
  // return useQuery(['projects', page], () => getProjects(page, take), {
  //   staleTime: 1000 * 60 * 10, // 1000 * 60 * 10 10 minutes // 1000 * 60 * 60 * 12, // 12 hours,
  // });
}
