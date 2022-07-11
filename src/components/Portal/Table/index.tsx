import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';

import { Container, TableCustom } from './styles';

type TableProps = HTMLAttributes<HTMLTableElement> & {
  children?: any | string | HTMLAttributes<HTMLTableElement>; // JSX.Element;
  loading?: boolean;
  //text?: Element | string | ButtonHTMLAttributes<HTMLButtonElement>;
}

const TablePortal: React.FC<TableProps> = ({ children, loading, ...rest }) => (
  <TableCustom {...rest}>
    {loading ? 'Loading...' : children}
  </TableCustom>
);

export default TablePortal;
