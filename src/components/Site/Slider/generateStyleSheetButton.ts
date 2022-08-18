
type GenerateStyleSheetProps = {
  buttonCount?: number
  duration: number
  transition: number
}

function generateStyleSheetButton({
  buttonCount = 0,
  duration,
  transition,
}: GenerateStyleSheetProps) {
  const t = buttonCount * (duration + transition)
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

  return `#Button > a {
        ${animation}
      }
      ${keyframes}
    `
}

export default generateStyleSheetButton
