import { createChatBotMessage } from 'react-chatbot-kit'
import BotAvatar from './Components/BotAvatar/BotAvatar'
//import MessageParser from './Components/MessageParser';
import UserAvatar from './Components/UserAvatar/UserAvatar'
import { GlobalStatistics } from './Components/Widgets/GlobalStatistics';
import { HighSchoolBranches } from './Components/Widgets/HighSchoolBranches';
import List from './Components/Widgets/List';
import { Options } from './Components/Widgets/Options';
import { Overview } from './Components/Widgets/Overview';

const botName = "Ubicua Bot";

const ConfigBot = {
  botName: botName,
  lang: 'no',
  customStyles: {
    chatButton: {
      color: '#fff',
      backgroundColor: "#9B5DE5",//"#121214",//"#567572ff",
    },
  },
  initialMessages: [
    createChatBotMessage(`Olá, Sou ${botName} cloud estou aqui para te ajudar. ${`\n`}
    Para começarmos, escolha uma das opções.`, {
      //widget: "options",
      widget: "highSchoolBranches",
      loading: true,
      delay: 500,
    }),
  ],

  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: "#9B5DE5",
          padding: "5px",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          display: "flex",
          fontSize: "1rem",
          paddingTop: "12.5px",
          paddingBottom: "12.5px",
          paddingRight: "12.5px",
          paddingLeft: "12.5px",
          fontWeight: "700",
          alignItems: "center"
        }}
      >
        Iniciando a conversa com chatbot
      </div>
    ),
    botAvatar: (props: any) => <BotAvatar {...props} />,
    userAvatar: (props: any) => <UserAvatar {...props} />,

  },
  state: {
    handleHello: {},
    handleLocalStats: {}
  },
  widgets: [
    {
      widgetName: "highSchoolBranches",
      widgetFunc: (props: any) => <HighSchoolBranches actions={'highSchoolBranches'} {...props} />,
      props: {}, //props.highSchoolBranches
      mapStateToProps: [],
    },
    {
      widgetName: "careerLinks",
      widgetFunc: (props: any) => <List {...props} />,
      props: {
        options: [
          {
            text: "Yes",
            id: 1
          },
          {
            text: "No",
            id: 2
          },
          {
            text: "May Be",
            id: 3
          }
        ]
      },
      mapStateToProps: [],
    },
    {
      widgetName: "overview",
      widgetFunc: (props: any) => <Overview {...props} />,
      props: {},
      mapStateToProps: ['messages'],
    },
    {
      widgetName: "globalStatistics",
      widgetFunc: (props: any) => <GlobalStatistics {...props} />,
      props: {
        course: "Linux"
      },
      mapStateToProps: ['messages'],
    },
    {
      widgetName: 'options',
      widgetFunc: (props: any) => <Options {...props} />,
      props: { propriedade: 'xarlys' },
      mapStateToProps: [],
    },
  ],
}
export { ConfigBot }

// widgetName: string;
// widgetFunc: (props: any) => ReactElement;
// props: any;
// mapStateToProps: string[];


// createChatBotMessage(`Se precisar só me chamar`, {
//   delay: 1000,
//   //widget: 'messageParser',
// }),
// createChatBotMessage('O que você gostaria saber hoje?', {
//   delay: 2000,
//   widget: 'menu',
// }),

/*customStyles: {
    placeholderText: 'Escreva sua mensagem',
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
      size: 12
    },
  },*/

/*state: {
  linux: [],
  sql: [],
  docker: [],
  handleHello: {},
  handleLocalStats: {},
},*/
