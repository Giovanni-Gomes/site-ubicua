import {ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from '../WidgetForm'
import { PopButton, PopContainer, Span } from './styles'


export function Widget() {
  return (
    <PopContainer>
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <PopButton>
        <ChatTeardropDots />
        <Span>
          <span></span>
          Feedback
        </Span>
      </PopButton>
    </PopContainer>
  )
}