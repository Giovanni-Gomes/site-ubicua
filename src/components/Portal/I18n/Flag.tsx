import React from 'react'

interface FlagProps {
  img?: string
  isSelected?: string
  props?: React.ReactNode
}

const I18nFlag: React.FC = ({ img, isSelected, ...props }: FlagProps) => {
  return (
    <img
      alt="flag"
      src={img}
      className={isSelected ? 'flag selected' : 'flag'}
      {...props}
    />
  )
}

export { I18nFlag }
