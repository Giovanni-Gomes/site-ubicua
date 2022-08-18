type GenerateStyleSheetProps = {
  textCount?: number
  duration: number
  transition: number
}

function generateStyleSheetText({
  textCount = 0,
  duration,
  transition,
}: GenerateStyleSheetProps) {
  const t = textCount * (duration + transition)
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

  return `#TitleSection > h2 {
        // padding: 20rem 60rem;
        // height: 100%;
        // width: 100%;
        text-align: left;
        max-width: 755px;
        padding: 0;
        position: absolute;
        top: 15rem;
        left: 5rem;
        color: ${(props: any) => props.theme.colors.white};
        text-shadow: black 0.1rem 0.1em 2px;
        font-size: 4rem;
        // background: transparent;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        opacity: 0;
        z-index: 1;
        margin: 0;
        ${animation}       
      }
      ${keyframes}
    `
}

export default generateStyleSheetText
