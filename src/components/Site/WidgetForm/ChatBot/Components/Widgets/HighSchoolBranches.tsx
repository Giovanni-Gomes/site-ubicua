import React from "react";
import { OptionsButton } from "./styles/options";


const HighSchoolBranches = (props, actions) => {
  console.log("ACTIONS", actions);
  console.log("ACTIONS", props.actions);
  const options = [
    {
      text: "Science",
      handler: props.actions.handleCareerList,//props.actions.handleCareerList, //() =>
      id: 1
    },
    { text: "Commerce", handler: () => { }, id: 2 },
    { text: "Arts", handler: () => { }, id: 3 }
  ];
  console.log("PROPS LOGOS", props);
  console.log("PROPS actionProvider", props.actions);
  console.log("actionProvider", actions);
  const optionsMarkup = options.map((option) => (
    <OptionsButton
      key={option.id}
      onClick={option.handler}
    >
      {option.id + " " + option.text + " " + option.handler}
    </OptionsButton>
  ));

  return <div>{optionsMarkup}</div>;
};

export { HighSchoolBranches }
