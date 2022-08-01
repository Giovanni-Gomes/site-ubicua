import React from 'react';

import { Container, CardHeader, Title, Subtitle, CardContent, CardContainer } from './styles';

interface CardProps {
  variant?: 'info' | 'success' | 'danger' | 'black' | 'white';
  title: string;
  subtitle?: string;
  description?: JSX.Element;
}


const Card: React.FC<CardProps> = ({ variant, title, subtitle, description, ...props }) => {
  //console.log("card props", { props });
  return (
    <Container className={variant}>
      <CardContainer>

        <CardHeader>
          <Title>
            {title}
          </Title>
          {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
        </CardHeader>
        <CardContent>
          {description}
        </CardContent>
      </CardContainer>
    </Container>
  );
}

export default Card;
