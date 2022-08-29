import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 3.58rem;
  /* transform: translateX(45%); */
  /*background: ${(props: any) => props.theme.colors.primary};*/
  /* border: 1px solid ${(props: any) => props.theme.colors['gray-900']}; */
  /* border-top: none; */
  background: linear-gradient(90deg, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors['primary-300']}, ${(props) => props.theme.colors['primary-500']}, ${(props) => props.theme.colors['primary-700']});
  background-size: 400% 400%;
  /* animation: gradient 25s ease infinite;
  @keyframes gradient {
    25% {
        background-position: 100% 50%;
    }
    50% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
  }; */
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  padding: 0 1rem 0rem;
  overflow: hidden;
  transition: height 200ms ease;
  /* max-width: 100%; */
  min-width: 10rem;
  /* box-shadow: ${(props) => props.theme.colors['primary-500']} 0.3rem 0.2em 0.7em 1px; */
  > .menu {
    /* padding-bottom: 1.5rem; */
    > a,
    div {
      cursor: pointer;
      text-decoration: none;
      color: ${(props: any) => props.theme.colors['text-menu']};
      min-height: 3.125rem;
      /* width: 100%; */
      /* min-width: 12rem; */
      display: flex;
      align-items: center;
      justify-content: left;
      /* border-radius: 1rem; */
      /* padding: 0.4rem; */
      /* font-size: 16px; */
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      max-width: 8rem;
      /* height: 100%; */
      /* transform: translateX(45%); */
      &.space {
        gap: 0.5rem;
      }

      &.width {
        font-size: 0.7rem;
      }

      &:hover {
        border-bottom: 3px solid
          ${(props: any) => props.theme.colors.quaternary};
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
