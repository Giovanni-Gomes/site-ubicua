import React, { useEffect } from 'react'
import generateStyleSheet from './generateStyleSheet'
import injectCss from './injectCss'

interface SliderProps {
  images: string[]
  duration?: number
  transition?: number
  titles?: string[]
}

const Slider: React.FC<SliderProps> = ({
  images,
  duration = 10,
  transition = 2,
  titles
}) => {
  useEffect(() => {
    injectCss(generateStyleSheet({ imagesCount: images.length, duration, transition, }), 'Slider')
  }, [])

  return (
    <div id="Slider">
      {images.map((img, key) => (<>
        <figure
          key={key}
          style={{
            backgroundImage: `url(${img})`,
            animationDelay: `${(duration + transition) * key}s`,
          }}
        />
      </>
      ))}
    </div>
  )
}

export default Slider
