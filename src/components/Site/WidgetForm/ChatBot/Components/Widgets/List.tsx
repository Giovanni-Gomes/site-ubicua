import React from "react";


const List = (props) => {
  console.log(props);
  const linkMarkup = props.options.map((link) => (
    <li key={link.id}>
      {link.text}
    </li>
  ));

  return <ul>{linkMarkup}</ul>;
};

export default List;
