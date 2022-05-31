import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import DashSection from '../../components/DashSection';
import MenuLink from '../../components/MenuLink';

import { Container, Header, MenuNav, UbicuaLogo } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>
          <UbicuaLogo />
          <span>Ubicua Cloud</span>
        </h1>
        <div className="button">
          {/* <Link to="/login">{(buttonVariant === 0) ? 'Entrar' : 'Login'}</Link>
          <Link to="/registrar">{(buttonVariant === 0) ? 'Cadastrar' : 'Registrar'}</Link> */}
          {/* <button onClick={handleToggle}>{ (buttonVariant === 0) ? 'Entrar' : 'SignIn'}</button> */}
          {/* <button onClick={handleToggle}>{(buttonVariant === 0) ? 'Registrar-se' : 'SignUp'}</button> */}
        </div>
      </Header>
      <DashSection element={
        <>
          <Card variant='blue' title='69' subtitle='Active Projects' />
          <Card variant='blue' title='69' subtitle='Active Projects' />
          <Card variant='blue' title='69' subtitle='Active Projects' />
          <Card variant='blue' title='69' subtitle='Active Projects' />
        </>
      } className='WrapperCard' />
      {/* <Card variant='blue' title='69' subtitle='Active Projects' />
      <Card variant='blue' title='69' subtitle='Active Projects' />
      <Card variant='blue' title='69' subtitle='Active Projects' />
      <Card variant='blue' title='69' subtitle='Active Projects' /> */}
    </Container>
  );
}

export default Dashboard;