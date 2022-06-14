import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button`
  padding: .25rem 1rem;
  font-size: 1rem;
  background: transparent;
  color: #999;
  border: none;
  position: relative;

  &:hover {
    opacity: 0.5;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1rem;
    width: 20%;
    height: 0.2rem;
    background-color: #fff;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }

  cursor: pointer;
`

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(-25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const List = styled.ul`
  position: absolute;
  background: #444;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0 1rem;
  /* padding: 0.5rem 1rem; */
  border-radius: 4px;
  color: #999;
  animation: ${appearFromBottom} 0.2s;

  > li {
    padding: 0.5rem 1rem;
    /* border-bottom: 1px solid #999; */

    &:first-child{
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }

    &:hover {
      /* opacity: 0.5; */
      background: #333;
    }
  }
`

export const NavBar = styled.nav`
  --bg: #242526;
  --bg-accent: #484a4d;
  --text-color: #dadce1;
  --nav-size: 60px;
  --border: 1px solid #474a4d;
  --border-radius: 8px;
  --speed: 500ms;
  height: var(--nav-size);
  /* background: var(--bg); */
  padding: 0 1rem;
  /* border-bottom: var(--border); */

  > .navbar-nav {
    max-width: 100%;
    height: 100%;
    display: flex;
    gap: 1rem;
    /* justify-content: flex-end; */
  }
`

export const NavItem = styled.li`
  /* width: calc(10rem * 0.8); */
  display: flex;
  align-items: center;
  justify-content: center;

  > .icon-button {
    text-decoration: none;
    font-size: 1rem;
    color: #999;
    /* --button-size: calc(10rem * 0.5); */
    /* width: var(--button-size); */
    width: 100%;
    /* height: var(--button-size); */
    height: 100%;
    /* background: #484a4d; */
    /* border-radius: 50%; */
    padding: 5px;
    margin: 2px;
    display: flex;
    gap: 0.3rem;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
    &:hover {
      filter: brightness(1.2);
    }
  }
`

export const Dropdowns = styled.div`
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
`
export const MenuItem = styled.a`
  text-decoration: none;
  color: #999;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem;
  &:hover {
    background: #525357;
  }
  > .icon-right {
    margin-left: auto;
  }
`