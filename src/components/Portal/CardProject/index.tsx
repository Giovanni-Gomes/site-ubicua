import React from 'react';
import { TableCustom } from '../Table/styles';

import { Container, CardHeader, Title, Subtitle, CardContent, CardToolbar } from './styles';

interface CardProps {
  variant: string; //'blue' | 'beige' | 'white' | 'black' | 'transparent'
  title: string;
  subtitle?: string;
  children?: JSX.Element;
}

const CardProject: React.FC<CardProps> = ({ variant, title, subtitle, children }) => {
  return (
    <Container className={variant}>
      <CardHeader>

        <Title>
          {title}
        </Title>
        {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
        {/* <CardToolbar><a href="#">History</a></CardToolbar> */}

      </CardHeader>
      <CardContent>
        {children}
        <TableCustom></TableCustom>
      </CardContent>
    </Container>
  );
}

export default CardProject;
