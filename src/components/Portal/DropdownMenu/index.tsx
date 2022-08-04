import { ChatTeardropDots } from 'phosphor-react'
import React from 'react'
import { dropdownItems } from '../../../data/dropdownItems'
import NavBar from '../NavBar'
import Dropdown from '../NavBar/Dropdown'
import NavItems from '../NavBar/NavItems'

const DropdownMenu: React.FC = () => {
  return (
    <NavBar>
      {dropdownItems.map((di) => (
        <NavItems key={di.title} icon={<ChatTeardropDots />} title={di.title}>
          <Dropdown subtitle={di.subtitles} />
        </NavItems>
      ))}
    </NavBar>
  )
}

export default DropdownMenu
