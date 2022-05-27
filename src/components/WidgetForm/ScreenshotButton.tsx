import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "./Loading";
import { ButtonScreenshot, OtherButtonScreenshot } from "./styles";


interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({screenshot, onScreenshotTook}: ScreenshotButtonProps) {
  const[isTakingScreenshot, setIsTakingScreenshot] = useState(false)
  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');
    onScreenshotTook(base64Image)
    setIsTakingScreenshot(false);
  }
  if(screenshot) {
    return (
      <ButtonScreenshot style={{backgroundImage: `url(${screenshot})`, backgroundPosition: 'center', backgroundSize: 50}} onClick={() => onScreenshotTook(null)}>
        <Trash weight="fill"/>
      </ButtonScreenshot>
    )
  }
  return (
    <OtherButtonScreenshot type="button" onClick={handleTakeScreenshot}>
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6"/>}
    </OtherButtonScreenshot>
  )
}