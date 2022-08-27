import { ChatTeardropDots } from 'phosphor-react'
import React, { useState } from 'react'
import { dropdownItems } from '../../../data/dropdownItems'
import { useMenuPortais } from '../../../pages/Config/Portal/MenuPortal/useMenuPortais'
import NavBar from '../NavBar'
import Dropdown from '../NavBar/Dropdown'
import NavItems from '../NavBar/NavItems'

const DropdownMenu: React.FC = () => {
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const { data, isLoading, isFetching, error } = useMenuPortais(page, 10, searchQuery)
  // var intersection = data?.subMenuPortais.filter(function (e) {
  //   //console.log('EEEE', e);
  //   return data?.menuPortais.indexOf(e.menu_id) //data?.menuPortais.indexOf(e) > -1;
  // });
  // console.log("intersection", intersection);
  //data?.menuPortais
  return (
    <NavBar>
      {data?.menuPortais.map((di) => (
        <NavItems key={di.title} icon={<ChatTeardropDots />} title={di.title}>
          <Dropdown submenu_portal={di.submenu_portal} />
        </NavItems>

      ))}

    </NavBar>

  )
}

export default DropdownMenu
