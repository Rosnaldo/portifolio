import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { alpha } from "@material-ui/core/styles/colorManipulator"

type Props = {
  color: string
  title: string
  sgd: string
  value: string
  svg: string
}

function AssetCard({ svg, color, title, sgd, value }: Props) {
  return (
    <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: alpha(color, 0.2), padding: "2vh", borderRadius: "10px", marginTop: "1vh" }}>
      <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "1vw", border: `solid ${alpha(color, 0.5)}`, borderRadius: "100px" }}>
        <img src={svg} alt="Bold" style={{ height: "4vh", borderRadius: "100px" }}></img>
      </Box>
      <Typography variant="h5" color="black" style={{ fontWeight: "600", fontFamily: "Nunito, sans-serif" }}>
        {title}
      </Typography>
      <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h6" color="black" style={{ fontWeight: "400", fontFamily: "Nunito, sans-serif", fontSize: "15px" }}>
          {sgd}
        </Typography>
        <Typography variant="h6" style={{ color: "#9e9ea7", fontWeight: "400", fontFamily: "Nunito, sans-serif", fontSize: "15px" }}>
          {value}
        </Typography>
      </Box>
    </Box>
  )
}

export default AssetCard
