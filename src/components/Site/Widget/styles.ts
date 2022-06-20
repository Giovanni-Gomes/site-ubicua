import { Popover } from '@headlessui/react'
import styled from 'styled-components'

export const PopContainer = styled(Popover)`
  z-index: 15;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (min-width: 768px) {
      bottom: 2.5rem;
      right: 2.5rem;
  }
`;

export const PopButton = styled(Popover.Button)`
  z-index: 15;
  background-color: #8257e6;
  border: none;
  border-radius: 9999px;
  padding: 0 0.75rem;
  height: 3rem;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    > Span, span, :first-child {
      max-width: 20rem;
    }
  }
  > :first-child {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Span = styled.span`
  max-width: 0rem;
  overflow: hidden;
  transition: all;
  transition-duration: 500ms;
  transition-timing-function: linear;
  > span {
    padding-left: 0.5rem;
  }
`;