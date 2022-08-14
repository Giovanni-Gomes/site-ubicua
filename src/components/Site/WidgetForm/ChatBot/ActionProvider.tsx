import React from 'react'

// import { Container } from './styles';

const ActionProvider: React.FC = ({
  createChatBotMessage,
  setState,
  children,
}: any) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { actions: {} })
      })}
    </div>
  )
}

export default ActionProvider
