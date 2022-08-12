import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import React, { ReactNode, useRef } from 'react'
import { FaFileImport, FaPlus } from 'react-icons/fa'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Header from '../Header'
import {
  Container,
  WrapperHeader,
  HeaderLeft,
  HeaderRight,
  Input,
  Title,
} from './styles'

interface PanelProps {
  children?: ReactNode
  title?: string
  back?: string
  next?: string
  search?: boolean
  importFile?: string
  create?: string
  searchState?: React.Dispatch<React.SetStateAction<string>>
  // variant: string;
}

export function Panel({
  children,
  title,
  back,
  next,
  search,
  importFile,
  create,
  searchState,
  ...rest
}: PanelProps) {
  // const bg = useColorModeValue('hoverDark', 'hoverLight')
  const formRef = useRef<FormHandles>(null)

  function handleSearch() {
    const inputSearchValue = (
      document.getElementById('search') as HTMLInputElement
    ).value
    searchState && searchState(inputSearchValue)
  }

  return (
    <>
      <Container>
        <WrapperHeader>
          <HeaderLeft>
            {back && (
              <Link to={back}>
                <FiArrowLeft />
              </Link>
            )}
            {next && (
              <Link to={next}>
                <FiArrowRight />
              </Link>
            )}
            {search && (
              <Form ref={formRef} onSubmit={handleSearch}>
                <Input placeholder="search" id="search" name="search" />
              </Form>
            )}
          </HeaderLeft>
          {/* <Spacer /> */}
          <Title>{title}</Title>
          <HeaderRight>
            {importFile && (
              <Link to={importFile}>
                <FaFileImport />
              </Link>
            )}
            {create && (
              <Link to={create}>
                <FaPlus />
              </Link>
            )}
          </HeaderRight>
        </WrapperHeader>
        {children}
      </Container>
    </>
  )
}

// left="65px" ml="65px"
