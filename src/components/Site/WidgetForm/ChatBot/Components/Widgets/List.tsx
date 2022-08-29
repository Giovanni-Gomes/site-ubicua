import React from "react";


const List = (props: any) => {
  console.log(props);
  const linkMarkup = props.options.map((link: any) => (
    <li key={link.id}>
      {link.text}
    </li>
  ));

  return <ul>{linkMarkup}</ul>;
};

export default List;
