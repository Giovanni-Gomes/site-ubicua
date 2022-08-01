import styled from 'styled-components'

export const Container = styled.div`
  --padding-top: 6.25rem;
  --padding-bottom: 8rem;
  --heading-font-size: 3rem;
  --content-width: 100%;

  &.blue {
    --bg-color: var(--color-tertiary);
    --text-color: var(--color-secondary);
    --logo-color: var(--color-black);
    --icon-color: var(--color-secondary);
  }
  background: var(--bg-color);
  height: 65rem;
  padding: 2rem 0;
  position: relative;
`

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;

  > header {
    position: absolute;
    left: 15rem;
    top: 6rem;
    display: flex;
    flex-direction: column;
  }

  > header h2 {
    /* position: absolute; */
    z-index: 1;
    /* left: 15rem;
    top: 6rem; */
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: 28rem;
  }
  > header p {
    /* position: absolute; */
    z-index: 1;
    /* top: 10rem;
    left: 15rem; */
    margin: 20px 0;
    font-size: 16px;
    /* width: 32%; */
    color: var(--text-color);
    max-width: 26rem;
  }
`
