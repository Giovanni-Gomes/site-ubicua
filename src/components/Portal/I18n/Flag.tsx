import React from 'react'

interface FlagProps {
  image?: string
  isSelected?: boolean
  props?: React.ReactNode
  onClick?: () => void
}

const I18nFlag: React.FC<FlagProps> = ({ image, isSelected, onClick, ...props }) => {
  return (
    <img
      alt="flag"
      src={image}
      className={isSelected ? 'flag selected' : 'flag'}
      onClick={onClick}
      {...props}
    />
  )
}

export { I18nFlag }
