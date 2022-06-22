import React from 'react';

import { Container, CardHeader, Title, Subtitle, CardContent } from './styles';

interface CardProps {
  variant: 'blue' | 'beige' | 'white' | 'black';
  title: string;
  subtitle?: string;
  description?: JSX.Element;
}

const CardProject: React.FC<CardProps> = ({ variant, title, subtitle, description }) => {
  return (
    <Container className={variant}>
      <CardHeader>
        <Title>
          {title}
        </Title>
        {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
      </CardHeader>
      <CardContent>
        {description}
      </CardContent>
    </Container>
  );
}

export default CardProject;
