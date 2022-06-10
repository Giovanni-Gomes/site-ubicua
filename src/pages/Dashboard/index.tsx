import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import DashboardSection from '../../components/DashboardSection';
import Dropdown from '../../components/Dropdown';
import MenuLink from '../../components/MenuLink';

import { Container, Header, MenuDropdown, UbicuaLogo } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>
          <UbicuaLogo />
          <span>Ubicua Cloud</span>
        </h1>
        <MenuDropdown>
          <Dropdown title='Dashboard' subtitles={<li>Gerencial / Status Report</li>}/>
          <Dropdown title='Operações' subtitles={
            <>
              <li>Feedback</li>
              <hr/>
              <li>Retornar feedback</li>
            </>
          }/>
          <Dropdown title='Desenvolvimento' subtitles={
            <>
              <li>Equipe / Squad</li>
              <hr/>
              <li>Projetos</li>
              <hr/>
              <li>Acompanhamentos</li>
            </>
          }/>
          <Dropdown title='Contratos' subtitles={
            <>
              <li>Contratos</li>
              <hr/>
              <li>Serviços</li>
              <hr/>
              <li>Empresas</li>
              <hr/>
              <li>Portifólio</li>
              <hr/>
              <li>Orçamentos</li>
            </>
          }/>
        </MenuDropdown>
        <div className="button">
          {/* <Link to="/login">{(buttonVariant === 0) ? 'Entrar' : 'Login'}</Link>
          <Link to="/registrar">{(buttonVariant === 0) ? 'Cadastrar' : 'Registrar'}</Link> */}
          {/* <button onClick={handleToggle}>{ (buttonVariant === 0) ? 'Entrar' : 'SignIn'}</button> */}
          {/* <button onClick={handleToggle}>{(buttonVariant === 0) ? 'Registrar-se' : 'SignUp'}</button> */}
        </div>
      </Header>
      <DashboardSection element={
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