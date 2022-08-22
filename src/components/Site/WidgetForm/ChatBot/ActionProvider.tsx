import React from 'react';
const ActionProvider = ({ createChatBotMessage, setState, children }: any) => {

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you xarlys');
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleOverview = () => {
    const botMessage = createChatBotMessage("Here's a nice dog picture for you!", { widget: 'overview', });
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleOptions = (options: any) => {
    const message = createChatBotMessage(
      "Como posso ajudá-lo? Abaixo estão algumas opções possíveis.",
      {
        widget: "options", // "overview",
        loading: true,
        terminateLoading: true,
        delay: 2000,
        ...options
      }
    );
    addMessageToState(message);
  };

  const handleGlobalStats = (options: any) => {
    const message = createChatBotMessage(
      "Dados globais",
      {
        widget: "handleGlobalStats", // "overview",
        loading: true,
        terminateLoading: true,
        delay: 2000,
        ...options
      }
    );
    addMessageToState(message);
  };

  function handleCareerList() {
    const message = createChatBotMessage(
      "Fantastic, do you enjoy being Science Student?",
      {
        widget: "careerLinks"
      }
    );
    addMessageToState(message);
  };

  async function addMessageToState(message: any) {
    setState((state: any) => ({
      ...state,
      messages: [...state.messages, message]
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleOptions,
            handleOverview,
            handleGlobalStats
          },
        });
      })}
    </div>
  );
};

export { ActionProvider };




// ActionProvider starter code
// class ActionProvider {
//   constructor(createChatBotMessage, setStateFunc, createClientMessage) {
//     this.createChatBotMessage = createChatBotMessage;
//     this.setState = setStateFunc;
//     this.createClientMessage = createClientMessage;
//   }

//   handleLinuxQuiz = () => {
//     const message = this.createChatBotMessage(
//       "Sure! Here's your Linux QUIZ !",
//       {
//         widget: "linux"
//       }
//     );
//     this.setChatbotMessage(message);
//   };
//   handleDockerQuiz = () => {
//     const message = this.createChatBotMessage(
//       "Sure! Here's your Docker QUIZ !",
//       {
//         widget: "docker"
//       }
//     );
//     this.setChatbotMessage(message);
//   };
//   handleSqlQuiz = () => {
//     const message = this.createChatBotMessage("Sure! Here's your SQL QUIZ !", {
//       widget: "sql"
//     });
//     this.setChatbotMessage(message);
//   };
//   handleContinue = () => {
//     const message = this.createChatBotMessage(
//       "Which quiz you want to try again?",
//       {
//         widget: "options"
//       }
//     );
//     this.setChatbotMessage(message);
//   };
//   handleUnknown = () => {
//     const message = this.createChatBotMessage(
//       "Please type continue to try again"
//     );
//     this.setChatbotMessage(message);
//   };
//   handleGreeting = () => {
//     const message = this.createChatBotMessage(
//       "Thanks for trying QuizBot! We hope you had a great learning experience"
//     );
//     this.setChatbotMessage(message);
//   };
//   messageHandler = () => {
//     const message = this.createChatBotMessage(
//       "Hello,what do you want to learn",
//       {
//         widget: "options"
//       }
//     );
//     this.setChatbotMessage(message);
//   };
//   setChatbotMessage = (messages) => {
//     if (Array.isArray(messages)) {
//       this.setState((state) => ({
//         ...state,
//         messages: [...state.messages, ...messages]
//       }));
//     } else {
//       this.setState((state) => ({
//         ...state,
//         messages: [...state.messages, messages]
//       }));
//     }
//   };
// }
// export { ActionProvider };

// import React from 'react'
// import { createChatBotMessage } from 'react-chatbot-kit';

// const ActionProvider: React.FC = ({
//   createChatBotMessage,
//   setState,
//   children,
// }: any) => {
//   async function handleOptions(options: any) {
//     const message = createChatBotMessage(
//       "How can I help you? Below are some possible options.",
//       {
//         widget: "overview",
//         loading: true,
//         terminateLoading: true,
//         ...options
//       }
//     );

//     addMessageToState(message);
//   };

//   async function addMessageToState(message: string) {
//     setState((state: any) => ({
//       ...state,
//       messages: [...state.messages, message]
//     }));
//   };

//   return (
//     <div>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, { actions: {} })
//       })}
//     </div>
//   )
// }

// export { ActionProvider }
