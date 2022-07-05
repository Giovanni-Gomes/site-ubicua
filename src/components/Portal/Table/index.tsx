import React from 'react';

import { Container, TableCustom } from './styles';

interface TableProps {
  children?: any; // JSX.Element;
  loading?: string;
}

const TablePortal: React.FC<TableProps> = ({ children, loading }) => {
  /* if (loading) {
    return <h2>Loading...</h2>;
  } */
  return (

      <TableCustom>
        {loading ? 'Loading...' : children}
      </TableCustom>

  );
};

export default TablePortal;
