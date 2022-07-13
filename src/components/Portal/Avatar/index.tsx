import { ArrowDown } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';
import avatarImage from '/assets/portal/imgs/image.svg';
import { Container, AvatarCustom } from './styles';

const Avatar: React.FC = () => {
  return (
    <Container>
      <Link to='/profile'><AvatarCustom src={avatarImage} /></Link>
      <ArrowDown />
    </Container>
  );
}

export default Avatar;
