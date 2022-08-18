import React, { useEffect } from 'react'
import { FaRegBuilding } from 'react-icons/fa'
import generateStyleSheet from './generateStyleSheet'
import generateStyleSheetButton from './generateStyleSheetButton'
import generateStyleSheetText from './generateStyleSheetText'
import injectCss from './injectCss'
import { Button } from './styles'

interface SliderProps {
  images: string[]
  duration?: number
  transition?: number
  titles?: string[]
  buttons?: {
    name: string,
    link: string
  }[]
}

const Slider: React.FC<SliderProps> = ({
  images,
  duration = 10,
  transition = 2,
  titles,
  buttons
}) => {
  useEffect(() => {
    injectCss(generateStyleSheet({ imagesCount: images.length, duration, transition, }), 'Slider')
    injectCss(generateStyleSheetText({ textCount: titles?.length, duration, transition, }), 'TitleSection')
    injectCss(generateStyleSheetButton({ buttonCount: buttons?.length, duration, transition, }), 'TitleSection')
  }, [])


  return (
    <>
      <div id="TitleSection">
        {titles?.map((title, key) => (
          <h2
            key={key}
            style={{
              animationDelay: `${(duration + transition) * key}s`,
            }}
          >
            {title}
          </h2>
        ))}
      </div>
      <div id="Button">
        {buttons?.map((button, key) => (
          <Button key={key} href={button.link} className={
            key === 0 ? 'button1' : ''
              || key === 1 ? 'button2' : ''
                || key === 2 ? 'button3' : ''
          } style={{
            animationDelay: `${(duration + transition) * key}s`,
          }}><FaRegBuilding size={16} />{button.name}</Button>
        ))}
      </div>
      <div id="Slider">
        {images.map((img, key) => (
          <figure
            key={key}
            style={{
              backgroundImage: `url(${img})`,
              animationDelay: `${(duration + transition) * key}s`,
            }}
          />
        ))}
      </div>
    </>
  )
}

export default Slider


//        {buttons?.map((button, key) => {
//   if (key === 0) {
//     return (
//       <Button key={key} href={button.link} style={{
//         animationDelay: `${(duration + transition) * key}s`,

//       }}><FaRegBuilding size={16} />{button.link}</Button>
//     )
//   } else if (key === 1) {
//     return (
//       <Button key={key} href={button.link} style={{
//         animationDelay: `${(duration + transition) * key}s`,
//       }}><FaRegBuilding size={16} />{button.name}</Button>
//     )
//   }
//   else {
//     return (
//       <Button key={key} href={button.link} style={{
//         animationDelay: `${(duration + transition) * key}s`,
//         visibility: 'hidden'
//       }}><FaRegBuilding size={16} />{button.name}</Button>
//     )
//   }


// }


// )}