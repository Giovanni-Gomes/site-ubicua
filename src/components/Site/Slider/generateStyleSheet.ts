type GenerateStyleSheetProps = {
  imagesCount: number
  duration: number
  transition: number
}

function generateStyleSheet({
  imagesCount,
  duration,
  transition,
}: GenerateStyleSheetProps) {
  const t = imagesCount * (duration + transition)
  const p1 = Math.round((transition / t) * 100)
  const p2 = Math.round(((duration + transition) / t) * 100)
  const p3 = Math.round(p2 * 1.1)

  let animation = ''
  let keyframes = ''
  animation = `backface-visibility: hidden;
              animation: imageAnimation ${t}s linear infinite -0.5s;`

  keyframes = `@keyframes imageAnimation {
          0% {
            opacity: 0;
            animation-timing-function: ease-in;
          }
          ${p1}% {
            opacity: 1;
            animation-timing-function: ease-out;
          }
          ${p2}% {
            opacity: 1;
          }
          ${p3}% {
            opacity: 0
          }
          100% {
            opacity: 0
          }
        }`

  return `#Slider > figure {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        color: transparent;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        opacity: 0;
        z-index: -1000;
        margin: 0;
        ${animation}
      }
      ${keyframes}
    `
}

export default generateStyleSheet
