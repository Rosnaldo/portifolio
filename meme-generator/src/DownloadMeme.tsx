
import { MutableRefObject } from "react"
import html2canvas from "html2canvas"
import { blue } from "@mui/material/colors"

import DownloadIcon from "@mui/icons-material/Download"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

type Props = {
  refScreenShot: MutableRefObject<HTMLDivElement | null> 
}

function DownloadMeme({
  refScreenShot,
} : Props) {
  const handleClick = () => {
    html2canvas(refScreenShot.current!).then((canvas) => {
      const link = document.createElement("a")
      link.href = canvas.toDataURL()
      link.setAttribute("download", `imagem.jpeg`)
      document.body.appendChild(link)
      link.click()
    })
  }

  return (
    <div style={{ backgroundColor: blue['700'], marginTop: "20px", padding: "20px", cursor: "pointer", width: "100%" }}>
      <Box onClick={handleClick} display="flex" justifyContent="center" alignItems="center" style={{ width: "100%" }}>
        <Typography variant="h4" color="common.white" style={{ fontSize: "15px", width: "100%" }}>
          download meme
        </Typography>
        <DownloadIcon fontSize="medium" style={{ color: "white" }} />
      </Box>
    </div>
  )
}

export default DownloadMeme