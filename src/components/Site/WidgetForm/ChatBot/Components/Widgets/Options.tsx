import React from 'react';
import { OptionsButton, OptionsContainer } from './styles/options';
const Options: React.FC = (props) => {
  // console.log("xarlys", props);
  // console.log("propriedade", props.propriedade);

  const options = [
    {
      text: "Javascript",
      handler: () => { alert('button function') },//props.actionProvider.handleGlobalStats,
      id: 1,
    },
    { text: "Python", handler: () => { props.actions.handleGlobalStats }, id: 2 }, //handleHello()
    { text: "Golang", handler: () => { }, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <OptionsButton key={option.id} onClick={option.handler}>
      {option.text}
    </OptionsButton>
  ));

  return <OptionsContainer>{buttonsMarkup}</OptionsContainer>;
}

export { Options };

// import React from 'react';
// import { OptionsButton, OptionsContainer } from './styles/options';

// interface OptionsProps {
//   title: string
//   options: {
//     id: string,
//     name: string,
//     handler: () => {}
//   }[]
// }

// //<OptionsProps> //OptionsProps // title, options
// const Options: React.FC = ({ title, options, actions }: any) => {
//   console.log("PROPS OPTIONS", options);
//   console.log("ACTIONS OPTIONS", actions);

//   //console.log("PROPS", props.actionProvider.handleHello);
//   return (
//     <div className="options">
//       <h1 className="options-header">{title}</h1>
//       <div className="options-container">
//         {options.map((option: any) => {
//           console.log(`Options: ${option.handler}`)

//           return (
//             <OptionsContainer
//               className="option-item"
//               onClick={option.handler}
//               key={option.id}
//             >
//               <h1 className="options-header">{option.id}</h1>
//               <h1 className="options-header">{option.handler}</h1>

//               <OptionsButton key={option.id} onClick={option.handler}>
//                 {option.name}
//               </OptionsButton>
//             </OptionsContainer>

//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export { Options };
