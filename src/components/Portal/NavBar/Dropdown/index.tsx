import { CaretLeft, CaretRight } from 'phosphor-react'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Container } from './styles'

interface DropdownProps {
  submenu_portal?: { title: string; link?: any }[]
  //subtitle: Array<{ title: string; link?: any }>
  // href: [{ link?: any }];
}

const Dropdown: React.FC<DropdownProps> = ({ submenu_portal }) => {
  const [activeMenu, setActiveMenu] = useState('main')
  // const [menuHeight, setMenuHeight] = useState<string | number>('11rem')
  // const dropdownRef = useRef(null) as any
  const nodeRef = useRef(null)

  // useEffect(() => {
  //   setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  // }, [])

  // function calcHeight(el: any) {
  //   const height = el.offsetHeight
  //   setMenuHeight(height)
  // }
  console.log("SUBBBBBBB MENU DROP DOWN", submenu_portal);

  return (
    <Container>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        nodeRef={nodeRef}
      >
        <div className="menu">
          {submenu_portal?.map((sb, key) =>

            sb.link ? (
              <Link to={sb.link} key={key.toString()}>
                {sb.title}
              </Link>

            ) : (
              <div
                className={
                  sb.title === 'Secções'
                    ? 'space expand'
                    : 'expand' || sb.title === 'Acompanhamentos'
                      ? 'expand width'
                      : 'expand'
                }
                key={key.toString()}
                onClick={() => setActiveMenu(sb.title)}
              >
                {sb.title}
                <CaretRight size={18} />{' '}
              </div>
            ),
          )}
          {/* {subtitle.map((sb, key) =>
            sb.link ? (
              <Link to={sb.link} key={key.toString()}>
                {sb.title}
              </Link>
            ) : (
              <div
                className={
                  sb.title === 'Secções'
                    ? 'space expand'
                    : 'expand' || sb.title === 'Acompanhamentos'
                      ? 'expand width'
                      : 'expand'
                }
                key={key.toString()}
                onClick={() => setActiveMenu(sb.title)}
              >
                {sb.title}
                <CaretRight size={18} />{' '}
              </div>
            ),
          )} */}
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'Acompanhamentos'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        // onEnter={calcHeight}
        nodeRef={nodeRef}
      >
        <div className="menu">
          <div className="space" onClick={() => setActiveMenu('main')}>
            <CaretLeft size={18} />
            Voltar
          </div>
          <Link to="/programm" key={0}>
            Programação
          </Link>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'Secções'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        // onEnter={calcHeight}
        nodeRef={nodeRef}
      >
        <div className="menu">
          <div className="space" onClick={() => setActiveMenu('main')}>
            <CaretLeft size={18} />
            Voltar
          </div>
          <Link key={1} to="/list-section-one">
            1º Secção
          </Link>
          <Link key={2} to="/list-section-two">
            2º Secção
          </Link>
          <Link key={3} to="/list-section-three">
            3º Secção
          </Link>
          <Link key={4} to="/list-section-four">
            4º Secção
          </Link>
          <Link key={5} to="/list-section-five">
            5º Secção
          </Link>
        </div>
      </CSSTransition>
    </Container>
  )
}

export default Dropdown
