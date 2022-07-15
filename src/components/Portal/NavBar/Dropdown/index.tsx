import { CaretLeft, CaretRight } from 'phosphor-react';
import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Container } from './styles';

interface DropdownProps {
  subtitle: Array<{ name: string, link?: any }>;
  //href: [{ link?: any }];
}

const Dropdown: React.FC<DropdownProps> = ({ subtitle }) => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState<string | number>('10rem');
  const dropdownRef = useRef(null) as any;

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el: any) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <Container ref={dropdownRef} style={{ height: menuHeight }}>
      <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>
        <div className="menu">
          {subtitle.map((sb, key) => (
            sb.link ?
              <a href={sb.link} key={key.toString()}>{sb.name}</a>
              : <button className='expand' onClick={() => setActiveMenu(sb.name)}>{sb.name}<CaretRight size={18} /> </button>
          ))}
        </div>
      </CSSTransition>
      <CSSTransition in={activeMenu === 'Acompanhamentos'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
        <div className="menu">
          <button onClick={() => setActiveMenu('main')}><CaretLeft size={18} />Voltar</button>
          <a href="/programm">Programação</a>
        </div>
      </CSSTransition>
      <CSSTransition in={activeMenu === 'Secções'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
        <div className="menu">
          <button onClick={() => setActiveMenu('main')}><CaretLeft size={18} />Voltar</button>
          <a key={1} href="/create-section-one">Criar 1º Secção</a>
          <a key={2} href="/create-section-two">Criar 2º Secção</a>
          <a key={3} href="/create-section-three">Criar 3º Secção</a>
          <a key={4} href="/create-section-four">Criar 4º Secção</a>
          <a key={5} href="/create-section-five">Criar 5º Secção</a>
        </div>
      </CSSTransition>
    </Container>
  )
}

export default Dropdown;
