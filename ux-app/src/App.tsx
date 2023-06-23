import { useNavigate } from "react-router-dom"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles"
import purple from "@mui/material/colors/purple"
import grey from "@mui/material/colors/grey"
import lamp from "./assets/lamp.svg"
import google from "./assets/google.svg"
import facebook from "./assets/facebook.svg"
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

function App() {
  const navigate = useNavigate()
  const handleRedirect = () => {
    navigate("/home")
  }

  return (
    <ThemeProvider theme={theme}>
      <Box style={{ display: "flex", justifyContent: "center", boxSizing: "border-box", width: "100%", padding: "auto 5%" }}>
        <Box style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", maxWidth: "325px", width: "100%" }}>
          <Box style={{ margin: "3vh" }}></Box>
          <Typography variant="h4" color="black" style={{ width: "70%", textAlign: "center", fontWeight: "600", fontFamily: "Nunito, sans-serif", margin: "20px auto",  fontSize: "22px" }}>
            Take a step into a world of financial possibilities!
          </Typography>
          <img src={lamp} alt="Shopping Bags" style={{ height: "30vh" }}></img>
          <Box style={{ margin: "2vh" }}></Box>
          <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Button onClick={handleRedirect} variant="contained" style={{ boxSizing: "content-box", margin: "1vh", width: "80%" }}>
              Create account
            </Button>
            <Button onClick={handleRedirect} variant="outlined" color="secondary" style={{ boxSizing: "content-box", margin: "1vh", width: "80%" }}>
              <img src={google} alt="Google" style={{ height: "4vh", marginRight: "1vw" }}></img>
              Signin with Google
            </Button>
            <Button onClick={handleRedirect} variant="outlined" color="secondary" style={{ boxSizing: "content-box", margin: "1vh", width: "80%" }}>
              <img src={facebook} alt="Facebook" style={{ height: "4vh", marginRight: "1vw" }}></img>
              Signin with Facebook
            </Button>
          </Box>
          <Grid container>
            <Grid item xs={8}>
              <Typography onClick={handleRedirect} variant="h6" style={{ color: "#9e9ea7", marginRight: "1vw", textAlign: "right", fontFamily: "Nunito, sans-serif", fontSize: "15px", cursor: "pointer" }}>
                Aready have an account?
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography onClick={handleRedirect} variant="h6" color="black" style={{ textAlign: "left", fontFamily: "Nunito, sans-serif", fontSize: "15px", cursor: "pointer" }}>
                Log in
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
