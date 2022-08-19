import React from 'react'
import { useTranslation } from 'react-i18next'
// useTranslation é um hook
// que devolve uma função de tradução (t) e a instância do i18n

// Importa as bandeiras (imagens e componente)
import { BrasilFlag, EuaFlag } from '../../../utils/imgs'
import { I18nFlag } from './Flag'
import { ContainerFlags, SelectFlag } from './styles'

const I18nComponent: React.FC = () => {
  const { i18n } = useTranslation()
  // Instância do i18n

  function handleChangeLanguage(language: any) {
    // Trocando o idioma na chamada da função
    i18n.changeLanguage(language)
  }

  const selectedLanguage = i18n.language // Idioma selecionado

  return (
    <ContainerFlags>
      <SelectFlag>
        <I18nFlag
          image={BrasilFlag}
          isSelected={selectedLanguage === 'pt-BR'} // Verifica o idioma escolhido
          onClick={() => handleChangeLanguage('pt-BR')} // Troca o idioma para pt-BR
        />
      </SelectFlag>
      <SelectFlag>
        <I18nFlag
          image={EuaFlag}
          isSelected={selectedLanguage === 'en-US'} // Verifica o idioma escolhido
          onClick={() => handleChangeLanguage('en-US')} // Troca o idioma para en-US
        />
      </SelectFlag>
    </ContainerFlags>
  )
}

export default I18nComponent
