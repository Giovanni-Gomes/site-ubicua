import React from 'react'
import { FaCloud } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

// import { Container } from './styles';

const LogoPortal: React.FC = () => {
  return (
    <NavLink to="/dashboard" title="cloud dashboard">
      <FaCloud
        style={{ color: '#00BBF9', position: 'absolute', top: '-4px' }}
        size={54}
      />
      <FaCloud
        style={{
          color: '#00F5D4',
          position: 'absolute',
          top: '0px',
          left: '29px',
        }}
        size={54}
      />
    </NavLink>
  )
}

export default LogoPortal
