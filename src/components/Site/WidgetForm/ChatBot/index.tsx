import React from 'react'
import Chatbot from 'react-chatbot-kit'
import ActionProvider from './ActionProvider'
import ConfigBot from './config'
import MessageParser from './MessageParser'
import { ContainerChatBot } from './style'

// import 'react-chatbot-kit/build/main.css'

const ChatBotInitial: React.FC = () => {
  return (
    <>
      <ContainerChatBot>
        <Chatbot
          config={ConfigBot}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </ContainerChatBot>
    </>
  )
}

export default ChatBotInitial
