import React, { useEffect, useState } from 'react'
import Header from '../../components/Portal/Header'
import TablePortal from '../../components/Portal/Table'
import api from '../../services/api'
import { queryClient } from '../../services/queryClient'
import { useProjects } from './useProjects'

interface ITableProject {
  id: string
  name: string
  description: string
  progress: string
}

const Project: React.FC = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching, error } = useProjects(page)

  const [table, setTable] = useState<ITableProject[]>([])
  const [skiping, setSkiping] = useState(0)
  const [tanking, setTanking] = useState(2)
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function fetchTable() {
      const response = await api.get(`/v1/project/findAll`, {
        params: {
          skip: skiping,
          take: tanking,
          totalPage: count,
        },
      })
      const { projects, skip, take, totalPage } = response.data

      setTable(projects)
      // console.log("skip", skip);
      // console.log("take", take);
      // console.log("totalPage", totalPage);

      setCount(totalPage)
    }
    console.log(count)

    fetchTable()
  }, [skiping])

  async function handlePrefetchProject(projectId: string) {
    await queryClient.prefetchQuery(
      ['projects', projectId],
      async () => {
        const response = await api.get(`/projects/${projectId}`)

        return response.data
      },
      {
        staleTime: 1000 * 60 * 10, // 10 minutes
      },
    )
  }

  function skipper(num: number, action: string) {
    if (count > 1) {
      if (action === 'next') {
        setSkiping(num + 2)
      } else {
        if (skiping > 1) {
          setSkiping(num - 2)
        } else if (skiping <= 1) {
          setSkiping(0)
        }
      }
    } else {
      setSkiping(0)
    }
  }

  return (
    <>
      <Header />
      <TablePortal style={{ marginTop: '55px' }}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Progresso</th>
          </tr>
        </thead>
        <tbody>
          {table.map((data) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.description}</td>
              <td>{data.progress}</td>
            </tr>
          ))}
        </tbody>
      </TablePortal>
      <button type="button" onClick={() => skipper(skiping, 'back')}>
        back
      </button>
      <button type="button" onClick={() => skipper(skiping, 'next')}>
        next
      </button>
    </>
  )
}

export default Project
