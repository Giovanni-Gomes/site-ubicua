import { Popover } from '@headlessui/react'
import styled from 'styled-components'

export const Container = styled.div`
  font-size: 1rem;
  width: 40rem;
  background: ${(props) =>
    props.theme.colors['secondary-700']}; //var(--color-primary);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  border-radius: 8px;
  align-items: center;
  position: relative;
`

export const Span = styled.span`
  font-size: 1.5rem;
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
