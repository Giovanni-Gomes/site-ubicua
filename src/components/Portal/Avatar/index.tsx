import { ArrowDown } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';

import { Container, AvatarCustom } from './styles';

const Avatar: React.FC = () => {
  return (
    <Container>
      <Link to='/profile'><AvatarCustom /></Link>
      <ArrowDown />
    </Container>
  );
}

export default Avatar;
