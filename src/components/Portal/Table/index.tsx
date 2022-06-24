import React from 'react';

import { Container, TableCustom } from './styles';

interface TableProps {
  children: JSX.Element;
  loading?: string;
}

const Table: React.FC<TableProps> = ({ children, loading }) => {
  /* if (loading) {
    return <h2>Loading...</h2>;
  } */
  return (
    <Container>
      {loading ? 'Loading...' : children}
      <TableCustom></TableCustom>
    </Container>
  );
};

export default Table;
