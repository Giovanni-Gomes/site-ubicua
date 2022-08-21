import React from 'react'
// import 'react-chatbot-kit/build/main.css'
import Chatbot from 'react-chatbot-kit'
import { ActionProvider } from './ActionProvider'
import { ConfigBot } from './config'
import { MessageParser } from './MessageParser'
import { ContainerChatBot } from './style'

const ChatBotInitial: React.FC = () => {
  return (
    <>
      <ContainerChatBot>
        <Chatbot
          config={ConfigBot}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          placeholderText='Escreva sua mensagem'
          runInitialMessagesWithHistory
        />
      </ContainerChatBot>
    </>
  )
}

export default ChatBotInitial
