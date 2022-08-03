import React from 'react'
import { FaCloud } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

// import { Container } from './styles';

const LogoPortal: React.FC = () => {
  return (
    <NavLink to="/dashboard" title='cloud dashboard'>
      <FaCloud
        style={{ color: '#2EC5CE', position: 'absolute', top: '-4px' }}
        size={54}
      />
      <FaCloud
        style={{
          color: '#c1f7fa',
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
