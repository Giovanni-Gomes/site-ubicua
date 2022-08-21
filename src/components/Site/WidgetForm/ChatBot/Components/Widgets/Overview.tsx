import { Options } from "./Options";
import { OptionsButton, OptionsContainer } from "./styles/options";

interface OverviewProps {
  title: string
  options: {
    id: string,
    name: string,
    handler: () => {}
  }[]
}

const Overview = (props: any) => {
  console.log("OVERVIEW PROPS", props);
  const options = [
    {
      name: "Show global statistics",
      handler: props.actions.handleGlobalStats,
      id: 1
    },
    {
      name: "Show local statistics",
      handler: props.actions.handleOverview,
      id: 2
    },
    {
      name: "Emergency contact",
      handler: props.actions.handleContact,
      id: 3
    },
    {
      name: "Clinical medicine delivery",
      handler: props.actions.handleMedicine,
      id: 4
    }
  ];
  //console.log("OVERVIEW PROPS", options[0].handler);

  //option.handler //alert('button function')
  const optionsList = options.map((option) => (
    <OptionsButton key={option.id} onClick={() => option.handler}>
      {option.name}
    </OptionsButton>
  ));
  return (
    <OptionsContainer>
      {optionsList}
    </OptionsContainer>
  );
  //return <Options options={options} title="Options" {...props} />;
};

export { Overview };

/*actionProvider: {
  handleHello: () => {}
  handleLocalStats: () => {}
  handleContact: () => {}
  handleMedicine: () => {}
}*/
