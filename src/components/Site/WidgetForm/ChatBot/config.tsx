import { createChatBotMessage } from 'react-chatbot-kit'
import BotAvatar from './Components/BotAvatar/BotAvatar'
import UserAvatar from './Components/UserAvatar/UserAvatar'

const ConfigBot = {
  lang: 'no',
  botName: 'Ubicua Bot',
  customStyles: {
    // botMessageBox: {
    //   margin: '20px',
    //   textAlign: 'center',
    //   backgroundColor: '#F15BB5',
    // },
    // chatButton: {
    //   backgroundColor: '#0f5faf',
    // },
  },
  initialMessages: [
    createChatBotMessage(
      `Olá, Sou chatbot da ubicua cloud estou aqui para te ajudar.`,
      {
        delay: 100,
      },
    ),
    createChatBotMessage(`Se precisar só me chamar`, {
      delay: 1000,
      widget: 'overview',
    }),
    createChatBotMessage('O que você gostaria saber hoje?', {
      delay: 2000,
      widget: 'menu',
    }),
  ],

  customComponents: {
    botAvatar: (props: any) => <BotAvatar {...props} />,
    userAvatar: (props: any) => <UserAvatar {...props} />,
  },

  state: {
    linux: [],
    sql: [],
    docker: [],
  },
}
export default ConfigBot
