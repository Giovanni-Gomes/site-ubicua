import React from 'react'

// import { Container } from './styles';

const MessageParser: React.FC = ({ children, actions }: any) => {
  const parse = (message: any) => {
    console.log(message)
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { parse, actions: {} })
      })}
    </div>
  )
}

export default MessageParser
