import { ArrowDown } from 'phosphor-react';
import React from 'react';

import { Container, AvatarCustom } from './styles';

const Avatar: React.FC = () => {
  return (
    <Container>
      <AvatarCustom />
      <ArrowDown />
    </Container>
  );
}

export default Avatar;
