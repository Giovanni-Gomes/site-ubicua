import React from 'react'
import { useTranslation } from 'react-i18next'
// Importamos o hook

const Translator = ({ path }: any) => {
  const { t } = useTranslation() // Função que traduz

  // Retornamos a função passando como parametro o caminho (path)
  // de onde está localizado o texto que desejamos traduzir
  // return t(path)
  return <>{t(path)}</>
}

export { Translator }
