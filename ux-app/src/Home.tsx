import { useNavigate } from "react-router-dom"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles"
import purple from "@mui/material/colors/purple"
import grey from "@mui/material/colors/grey"
import blue from "@mui/material/colors/blue"
import yellow from "@mui/material/colors/yellow"
import profile from "./assets/profile.svg"
import coinCash from "./assets/coin-cash.svg"
import AssetCard from "./AssetCard"
import bold from "./assets/bold.svg"
import coin from "./assets/coin.svg"
import adobe from "./assets/adobe.svg"
import arrowLeft from "./assets/arrow-left.svg"
import ellipsis from "./assets/ellipsis.svg"
import Menu from "./Menu"
import "./App.css"

const theme = createTheme({
  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      main: grey[900],
    }
  },
} as ThemeOptions)

theme.components = {}

function Home() {
  const navigate = useNavigate()
  const handleRedirect = () => {
    navigate("/")
  }

  return (
    <ThemeProvider theme={theme}>
      <Box style={{ display: "flex", justifyContent: "center", boxSizing: "border-box", width: "100%", padding: "auto 5%" }}>
        <Box style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", maxWidth: "325px", width: "100%" }}>
          <Box style={{ margin: "5vh" }}></Box>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <div onClick={handleRedirect} style={{ backgroundColor: grey[300], borderRadius: "100px", padding: "2vh", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
              <img src={arrowLeft} alt="Arrow left" style={{ height: "4vh", borderRadius: "100px" }}></img>
            </div>
            <Typography variant="h4" color="black" style={{ fontWeight: "600", fontFamily: "Nunito, sans-serif" }}>
              Home
            </Typography>
            <div style={{ backgroundColor: grey[300], borderRadius: "100px", padding: "2vh", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
              <img src={ellipsis} alt="ellipsis" style={{ height: "4vh", borderRadius: "100px" }}></img>
            </div>
          </Box>
          <Box style={{ margin: "3vh" }}></Box>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Box style={{ width: "40%", display: "flex", justifyContent: "flex-start" }}>
                <Typography variant="h4" color="black" style={{ fontWeight: "600", fontFamily: "Nunito, sans-serif", marginRight: "1vw" }}>
                  Hi,
                </Typography>
                <Typography variant="h4" color="black" style={{ fontWeight: "200", fontFamily: "Nunito, sans-serif" }}>
                  There!
                </Typography>
              </Box>
              <Typography variant="h6" color="black" style={{ fontWeight: "200", fontFamily: "Nunito, sans-serif" }}>
                Welcome back again.
              </Typography>
            </Box>
            <img src={profile} alt="Profile" style={{ height: "13vh", borderRadius: "100px" }}></img>
          </Box>
          <Box style={{ margin: "3vh" }}></Box>
          <div style={{ boxSizing: "border-box", backgroundColor: grey[300], width: "100%", padding: "2vh 2vw", borderRadius: "10px" }}>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Box style={{ display: "flex", flexDirection: "column",  }}>
                <Typography variant="h6" color="black" style={{ fontWeight: "200", fontFamily: "Nunito, sans-serif" }}>
                  Total Assets Value
                </Typography>
                <Typography variant="h4" color="black" style={{ fontWeight: "600", fontFamily: "Nunito, sans-serif" }}>
                  $234,34.90
                </Typography> 
              </Box>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <img src={coinCash} alt="Coin cash" style={{ height: "12vh", borderRadius: "40px" }}></img>
              </Box>
            </Box>
          </div>
          <Box style={{ margin: "5vh" }}></Box>
          <Typography variant="h5" color="black" style={{ fontWeight: "600", fontFamily: "Nunito, sans-serif", marginRight: "1vw" }}>
            My Assets
          </Typography>
          <AssetCard svg={bold} title="Orchid" color={purple[50]} sgd="SGD 324.54" value="342.56 OXT" />
          <AssetCard svg={coin} title="USD Coin" color={blue[200]} sgd="SGD 324.54" value="342.56 OXT" />
          <AssetCard svg={adobe} title="Bitcoin" color={yellow[400]} sgd="SGD 324.54" value="342.56 OXT" />
          <Box style={{ margin: "2vh" }}></Box>
          <Button variant="contained" style={{ width: "100%" }}>
            View details
          </Button>
          <Box style={{ margin: "5vh" }}></Box>
        </Box>
      </Box>
      <Menu />
    </ThemeProvider>
  )
}

export default Home
