import React, { useState } from "react";
const MessageParser: React.FC = ({ children, actions }: any) => {

  const parse = (message: any) => {

    console.log("message parser chatbot", message)
    message = message.toLowerCase();
    // if (message.includes('hello')) {
    //   //console.log('Olá parse funcionando');
    //   actions.handleHello();
    // }
    // if (message.includes('overview')) {
    //   actions.handleOverview();
    // }
    // if (message.includes('options') || message.includes("javascript")) {
    //   actions.handleOptions();
    // }
    if (
      message.includes("messageparser") ||
      message.includes("parse") ||
      message.includes("parser") ||
      message.includes("message parser")
    ) {
      return actions.handleMessageParserDocs();
    }

    if (message.includes("action") || message.includes("actions")) {
      return actions.handleactionsDocs();
    }

    if (message.includes("config")) {
      return actions.handleConfigDocs();
    }

    if (message.includes("overview")) {
      return actions.handleOverview();
    }

    if (message.includes("widget")) {
      return actions.handleWidgetDocs();
    }

    return actions.handleDefault();
  }
  return (
    <div>
      {
        React.Children.map(children, (child) => {
          return React.cloneElement(child, { parse: parse, actions: {} })
        })
      }
    </div>
  )
}

export { MessageParser }

 // if (
    //   message.includes("options") ||
    //   message.includes("help") ||
    //   message.includes("do for me")
    // )

// //import { actions } from './actions';
// class MessageParser {
//   constructor(actions, state) {
//     this.actions = actions;
//     this.state = state;
//   }
//   //takes in a mesaage and logs it in the screen
//   parse(message) {
//     const lowercase = message.toLowerCase();
//     if (lowercase.includes("options") || lowercase.includes("hi")) {
//       this.actions.messageHandler();
//     } else if (lowercase.includes("linux")) {
//       this.actions.handleLinuxQuiz();
//     } else if (lowercase.includes("docker")) {
//       this.actions.handleDockerQuiz();
//     } else if (lowercase.includes("sql")) {
//       this.actions.handleSqlQuiz();
//     } else if (lowercase.includes("continue")) {
//       this.actions.handleContinue();
//     } else if (lowercase.includes("thank")) {
//       this.actions.handleGreeting();
//     } else if (lowercase.includes("score")) {
//       this.actions.handleScoreBoard();
//     } else {
//       this.actions.handleUnknown();
//     }
//   }
// }
// export { MessageParser };

// import React, { useState } from 'react'
// import { createChatBotMessage } from 'react-chatbot-kit';
// import { actions } from './actions';



// const MessageParser: React.FC = ({ children, actions,
// }: any) => {
//   const [state, setState] = useState();
//   async function handleOptions(options: any) {
//     const messagem = createChatBotMessage(
//       "How can I help you? Below are some possible options.",
//       {
//         widget: "overview",
//         loading: true,
//         terminateLoading: true,
//         ...options
//       }
//     );

//     //addMessageToState(messagem);
//   };

//   async function addMessageToState(messagem: any) {
//     setState((st: any) => ({
//       ...st,
//       messages: [...st.messagem, messagem]
//     }));
//   };

//   const parse = (message: any) => {

//     const actions = actions;
//     console.log("message parser chatbot", message)
//     message = message.toLowerCase();
//     if (
//       message.includes("options") ||
//       message.includes("help") ||
//       message.includes("do for me")
//     ) {
//       return (
//         handleOptions(message)
//       )
//     }

//   }
//   return (
//     <div>
//       {
//         React.Children.map(children, (child) => {
//           return React.cloneElement(child, { parse, actions: {} })
//         })
//       }
//     </div>
//   )
// }

// export { MessageParser }
