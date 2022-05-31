import React from 'react';
import { Container } from './styles';

interface DashSectionProps {
  element: any;
  className?: string;
}

const DashSection: React.FC<DashSectionProps> = ({ element, className }) => {
  return (
    <Container className={className}>
      {element}
    </Container>
  );
}

export default DashSection;