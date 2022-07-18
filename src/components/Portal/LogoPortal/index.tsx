import React from 'react';
import { FaCloud } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const LogoPortal: React.FC = () => {
  return (
    <Link to="/dashboard">
      <FaCloud style={{ color: '#2EC5CE', position: 'absolute', top: '0px' }} size={54} />
      <FaCloud style={{ color: '#c1f7fa', position: 'absolute', top: '6px', left: '29px' }} size={52} />
    </Link>
  );
}

export default LogoPortal;
