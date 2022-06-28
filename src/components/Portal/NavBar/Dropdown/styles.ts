import styled from 'styled-components';

export const Container = styled.div`
position: absolute;
top: 58px;
width: 14rem;
/* transform: translateX(45%); */
background: var(--bg);
border: var(--border);
border-radius: var(--border-radius);
padding: 1rem;
overflow: hidden;
transition: height var(--speed) ease;
> .menu {
  padding-bottom: 2rem;
}

> .menu-primary-enter {
  position: absolute;
  transform: translateX(-110%);
}
> .menu-primary-enter-active {
  transform: translateX(0%);
  transition: all var(--speed) ease;
}
> .menu-primary-exit {
  position: absolute;
}
> .menu-primary-exit-active {
  transform: translateX(-110%);
  transition: all var(--speed) ease;
}
> .menu-secondary-enter {
  position: absolute;
  transform: translateX(110%);
}
> .menu-secondary-enter-active {
  transform: translateX(0%);
  transition: all var(--speed) ease;
}
> .menu-secondary-exit {
  position: absolute;
}
> .menu-secondary-exit-active {
  transform: translateX(110%);
  transition: all var(--speed) ease;
}
`;
