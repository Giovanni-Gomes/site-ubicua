import React, { useEffect, useState } from 'react';
import Header from '../../components/Portal/Header';
import TablePortal from '../../components/Portal/Table';
import api from '../../services/api';

//import { Container } from './styles';

interface ITableProject {
  id: string;
  name: string;
  description: string;
  progress: string;
}

const Project: React.FC = () => {
  const [table, setTable] = useState<ITableProject[]>([]);
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(2);
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function fetchTable() {
      const resultTable = await api.get(`/v1/project/findAll`,
        {
          params:
          {
            skip,
            take,
            totalPage: count
          }
        });

      //setTotalPage();
      setCount(resultTable.data.length);
      setTable(resultTable.data);
    }
    console.log(count);
    console.log(skip);
    console.log(table);
    fetchTable();
  }, [skip])

  function skipper(num: number, action: string) {
    if (count > 1) {
      if (action === 'next') {
        setSkip(num + 2)
      } else {
        if (skip > 1) {
          setSkip(num - 2)
        } else if (skip <= 1) {
          setSkip(0);
        }
      }
    } else {
      setSkip(0)
    }
  }

  return (
    <>
      <Header />
      <TablePortal>

        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Progresso</th>
          </tr>
        </thead>
        <tbody>
          {table.map(data => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.description}</td>
              <td>{data.progress}</td>
            </tr>
          ))}
        </tbody>
      </TablePortal>
      <button type='button' onClick={() => skipper(skip, 'back')}>
        back
      </button>
      <button type="button" onClick={() => skipper(skip, 'next')}>
        next
      </button>
    </>
  );
}

export default Project;