import React, { useRef, useState } from 'react';

import { Button, Container, List } from './styles';

interface DropdownProps {
  title: string;
  subtitles: any;
}

const Dropdown: React.FC<DropdownProps> = ({title, subtitles}) => {
  const [open, setOpen] = useState<Boolean>(false)
  // const dropdownRef = useRef<HTMLDivElement>(null);
  // const handleDropdownFocus= (state:Boolean) => {
  //   setOpen(!state);
  // }

  // const handleClickOutsideDropdown = (e:any) => {
  //   if(open && !dropdownRef.current?.contains(e.target as Node)){
  //     setOpen(false)
  //   }
  // }

  // window.addEventListener("click", handleClickOutsideDropdown) ref={dropdownRef} onClick={e => handleDropdownFocus(open)}

  return (
    <Container >
      <Button onMouseEnter={() => setOpen(true)} type='button'>{title}</Button>
      { open && 
        <List onMouseLeave={() => setOpen(false)}>
          {subtitles}
        </List>
      }
    </Container>
  );
}

export default Dropdown;