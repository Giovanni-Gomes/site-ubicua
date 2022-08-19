import React from 'react'

interface FlagProps {
  image?: string
  isSelected?: string
  props?: React.ReactNode
}

const I18nFlag: React.FC = ({ image, isSelected, ...props }: FlagProps) => {
  return (
    <img
      alt="flag"
      src={image}
      className={isSelected ? 'flag selected' : 'flag'}
      {...props}
    />
  )
}

export { I18nFlag }
