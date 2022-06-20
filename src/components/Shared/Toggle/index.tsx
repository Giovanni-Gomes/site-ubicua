//import React from "react";
import { Container, Input, ToggleControl } from "./styles";

const Toggle = (props: any) => (
  <Container>
    <button type="button" onClick={() => props.setDarkMode(false)}>
      ☀
    </button>
    <ToggleControl>
      <Input
        id="dmcheck"
        type="checkbox"
        checked={props.darkMode}
        onChange={() => props.setDarkMode(!props.darkMode)}
      />
      <label htmlFor="dmcheck" />
    </ToggleControl>
    <button type="button" onClick={() => props.setDarkMode(true)}>
      ☾
    </button>
  </Container>
);

export default Toggle;


// import React from 'react';
// import useLocalStorage from '../../hooks/useLocalStorage';
// import useMedia from '../../hooks/useMedia';
// import useToggle from '../../hooks/useToggle';


// import { Container, Input, ToggleControl } from './styles';

// const Toggle: React.FC = () => {
//   const [toggle, setToggle] = useToggle(false);
//   const [savedToggle, setSavedToggle] = useLocalStorage<boolean>('dark-mode-enabled', false);
//   // setSavedToggle(true);
//   // console.log(savedToggle);

//   //example de useMedia
//   // const backgroundColor = useMedia(
//   //   ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
//   //   ["red", "green", "blue"],
//   //   "black"
//   // );

//   return (
//     <>
//       <Container>
//         {/* style={{ backgroundColor }} */}
//         <button type='button' onClick={() => setSavedToggle(false)}>
//           ☀
//         </button>

//         <ToggleControl>
//           <Input
//             id='dmcheck'
//             type="checkbox"
//             checked={toggle}
//             onChange={setToggle}
//           />

//           <label htmlFor='dmcheck' />
//         </ToggleControl>

//         <button type='button' onClick={() => setSavedToggle(true)}>
//           ☾
//         </button>
//       </Container>
//     </>
//   );
// }

// export default Toggle;

