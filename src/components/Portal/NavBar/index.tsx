import { Container } from './styles';

interface NavBarProps {
  children: any;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <Container >
      <ul className='navbar-nav'>
        <button type='button'>{children}</button>
        {/* <a href="#">{children}</a> */}
        {/* <Link to="/">{children}</Link> */}
      </ul>
    </Container>
  )
}

export default NavBar;
