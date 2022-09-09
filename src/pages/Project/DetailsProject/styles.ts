import { Popover } from '@headlessui/react'
import styled from 'styled-components'

export const Container = styled.div`
  font-size: 1rem;
  width: 40rem;
  white-space: normal;
  background: ${(props) =>
    props.theme.colors.tertiary}; //var(--color-primary);
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  padding: 1rem;
  border-radius: 8px;
  align-items: center;
  position: relative;
  h1 {
    width: 100%;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      height: 0.5rem;
    }
    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors.tertiary};
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors['tertiary-700']};
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${(props) => props.theme.colors['tertiary-500']};
    }
  }

  .desc {
    padding-top: 2rem;
  }
`

export const Span = styled.span`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors['gray-500']};
`

export const Close = styled(Popover.Button)`
  position: absolute;
  right: 8px;
  top: 8px;
  > :first-child {
    color: white;
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme.colors.secondary};
      border-radius: 50%;
    }
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  height: 2rem;
`
