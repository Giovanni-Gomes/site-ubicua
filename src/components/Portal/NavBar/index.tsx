import { Container } from './styles'

interface NavBarProps {
  children: any
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <Container>  {/* style={{ marginBottom: '0.5rem' }} */}
      <ul className="navbar-nav">
        <button type="button">{children}</button>
      </ul>
    </Container>
  )
}

export default NavBar
