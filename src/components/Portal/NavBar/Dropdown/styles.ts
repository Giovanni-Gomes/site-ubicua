import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 50px;
  /* transform: translateX(45%); */
  background: var(--bg);
  border: var(--border);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  padding: 1rem;
  overflow: hidden;
  /* transition: height 100ms ease; */
  /* max-width: 100%; */
  min-width: 10rem;

  > .menu {
    padding-bottom: 2rem;

    a,
    div {
      text-decoration: none;
      color: ${(props: any) => props.theme.colors['text-menu']};
      height: 50px;
      /* width: 100%; */
      /* min-width: 12rem; */
      display: flex;
      align-items: center;
      justify-content: left;
      /* border-radius: 1rem; */
      /* padding: 0.4rem; */
      /* font-size: 16px; */

      &.space {
        gap: 0.5rem;
      }

      &:hover {
        border-bottom: 3px solid ${(props: any) => props.theme.colors.secondary};
        /* background: ${(props: any) => props.theme.hover}; */
      }
      /* > .icon-right {
        margin-left: auto;
      } */
    }
  }

  > .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }
  > .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all 100ms ease;
  }
  > .menu-primary-exit {
    position: absolute;
  }
  > .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all 100ms ease;
  }
  > .menu-secondary-enter {
    position: absolute;
    transform: translateX(100%);
  }
  > .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all 100ms ease;
  }
  > .menu-secondary-exit {
    position: absolute;
  }
  > .menu-secondary-exit-active {
    transform: translateX(100%);
    transition: all 100ms ease;
  }
`
