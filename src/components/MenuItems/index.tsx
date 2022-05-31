import { AnyPointerEvent } from 'framer-motion/types/gestures/PanSession';
import React, {useState, useEffect, useRef} from 'react';
import Dropdown from '../Dropdown'
// import { Container } from './styles';

const MenuItems: React.FC = ({item, depthLevel}) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event: any) => {
      if(dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchStart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchStart", handler);
    };
  }, [dropdown])

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };
  return <div />;
}

export default MenuItems;