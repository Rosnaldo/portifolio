
import { MutableRefObject } from "react"
import { FONT_ALIGNMENT } from "./contexts/enum"
import { useFontContext } from "./contexts/font.context"
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

type Props = {
  text: string
  refScreenShot: MutableRefObject<HTMLDivElement | null>
  refCanvas: MutableRefObject<HTMLCanvasElement | null>
}

function Canvas({
  text,
  refScreenShot,
  refCanvas,
} : Props) {
  const { alignment, bold, underline, italic, size, color } = useFontContext()

  const mapAlignment = () => {
    if (alignment === FONT_ALIGNMENT.LEFT) {
      return "flex-start"
    }
    if (alignment === FONT_ALIGNMENT.RIGHT) {
      return "flex-end"
    }
    return "center"
  }

  const mapBold = () => {
    if (bold) return 700
    return 'normal'
  }

  const mapUnderline = () => {
    if (underline) return 'underline'
    return 'initial'
  }

  const mapItalic = () => {
    if (italic) return 'italic'
    return 'normal'
  }

  return (
    <div className="screeshot" ref={refScreenShot}>
      <canvas
        id="canvas"
        width="350px"
        height="400px"
        ref={refCanvas}
      />
      <div style={{
        backgroundColor: "white",
        position: "absolute",
        padding: "15px",
        width: "350px",
        height: "70px",
        top: 400,
        display: "flex",
        justifyContent: mapAlignment(),
        fontWeight: mapBold(),
        textDecoration: mapUnderline(),
        fontStyle: mapItalic(),
        color: color.toLocaleLowerCase(),
      }}>
        <p style={{ margin: 0, fontSize: size, color: "black !important" }}>{text}</p>
      </div>
    </div>
  )
}

export default Canvas
