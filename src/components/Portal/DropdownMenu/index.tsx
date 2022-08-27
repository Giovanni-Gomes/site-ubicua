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

  console.log(data);

  return (
    <NavBar>
      {data?.menuPortais.map((di) => (
        <NavItems key={di.title} icon={<ChatTeardropDots />} title={di.title}>

          <Dropdown subtitle={data?.subMenuPortais} />
          {/* <Dropdown subtitle={di.subtitles} /> */}
        </NavItems>

      ))}

    </NavBar>

  )
}

export default DropdownMenu
