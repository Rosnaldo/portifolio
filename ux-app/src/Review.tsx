import { useNavigate } from "react-router-dom"
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import purple from "@mui/material/colors/purple"
import grey from "@mui/material/colors/grey"
import arrowLeft from "./assets/arrow-left.svg"
import ellipsis from "./assets/ellipsis.svg"
import GradeIcon from "@mui/icons-material/Grade"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import ThumbDownIcon from "@mui/icons-material/ThumbDown"
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

function Review() {
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
              Review
            </Typography>
            <div style={{ backgroundColor: grey[300], borderRadius: "100px", padding: "2vh", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
              <img src={ellipsis} alt="ellipsis" style={{ height: "4vh", borderRadius: "100px" }}></img>
            </div>
          </Box>
          <Box style={{ margin: "2vh" }}></Box>
          <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <GradeIcon style={{ fontSize: "35px", color: purple[900] }} />
            <GradeIcon style={{ fontSize: "35px", color: purple[900] }} />
            <GradeIcon style={{ fontSize: "35px", color: purple[900] }} />
            <GradeIcon style={{ fontSize: "35px", color: purple[900] }} />
            <GradeIcon style={{ fontSize: "35px", color: purple[900] }} />
            <Box style={{ margin: "0.5vw" }}></Box>
            <Typography variant="h4" color="black" style={{ fontWeight: "600", fontFamily: "Nunito, sans-serif" }}>
              4.2
            </Typography>
          </Box>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            34 reviews
          </Box>
          <Box style={{ margin: "2vh" }}></Box>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="outlined" color="secondary" style={{ width: "100%" }}>
              Popular
            </Button>
            <Box style={{ margin: "1vw" }}></Box>
            <Button variant="contained" style={{ width: "100%" }}>
              Latest
            </Button>
          </Box>
          <Box style={{ margin: "3vh" }}></Box>
          <div style={{ backgroundColor: grey[300], borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "2vh 2vw" }}>
            <Box style={{ display: "flex", justifyContent: "center" }}>
            <GradeIcon style={{ fontSize: "25px" }} />
            <GradeIcon style={{ fontSize: "25px" }} />
            <GradeIcon style={{ fontSize: "25px" }} />
            <GradeIcon style={{ fontSize: "25px" }} />
            <GradeIcon style={{ fontSize: "25px", color: grey[500] }} />
            </Box>
            <Box style={{ marginTop: "1vh" }}></Box>
            <Typography variant="h6" color="black" style={{ fontSize: "15px", fontWeight: "400", fontFamily: "Nunito, sans-serif" }}>
              "An excellent crypto wallet"
            </Typography>
            <Box style={{ display: "flex" }}>
              <Typography variant="h6" color="black" style={{ fontSize: "15px", fontWeight: "400", fontFamily: "Nunito, sans-serif" }}>
                Warner Smith .
              </Typography>
              <Box style={{ margin: "0.5vw" }}></Box>
              <Typography variant="h6" color="black" style={{ fontSize: "15px", color: "#9e9ea7", fontWeight: "400", fontFamily: "Nunito, sans-serif" }}>
                Feb 02, 2023
              </Typography>
            </Box>
            <Box style={{ marginTop: "1vh" }}></Box>
            <Typography variant="h6" color="black" style={{ fontSize: "15px", fontWeight: "400", fontFamily: "Nunito, sans-serif" }}>
              A game-changer in the world of digital
            </Typography>
            <Typography variant="h6" color="black" style={{ fontSize: "15px", fontWeight: "400", fontFamily: "Nunito, sans-serif" }}>
              finance! This crypto wallet offers.. more
            </Typography>
            <Box style={{ margin: "1vh" }}></Box>
            <Box style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
               <Box style={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                  <ThumbUpIcon style={{ fontSize: "20px", color: grey[700] }} />
                  <Box style={{ margin: "0.5vw" }}></Box>
                  <Typography variant="h6" color={grey[700]} style={{ fontSize: "15px", fontWeight: "400", fontFamily: "Nunito, sans-serif" }}>
                    helpful
                  </Typography>
               </Box>
               <Box style={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                  <ThumbDownIcon style={{ fontSize: "20px", color: grey[700] }} />
                  <Box style={{ margin: "0.5vw" }}></Box>
                  <Typography variant="h6" color={grey[700]} style={{ fontSize: "15px", fontWeight: "400", fontFamily: "Nunito, sans-serif" }}>
                    unhelpful
                  </Typography>
               </Box>
            </Box>
          </div>

          <Box style={{ margin: "2vh" }}></Box>

          <div style={{ backgroundColor: grey[300], borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "2vh 2vw" }}>
            <Box style={{ display: "flex", justifyContent: "center" }}>
            <GradeIcon style={{ fontSize: "25px" }} />
            <GradeIcon style={{ fontSize: "25px" }} />
            <GradeIcon style={{ fontSize: "25px" }} />
            <GradeIcon style={{ fontSize: "25px", color: grey[500] }} />
            <GradeIcon style={{ fontSize: "25px", color: grey[500] }} />
            </Box>
            <Box style={{ marginTop: "1vh" }}></Box>
            <Typography variant="h6" color="black" style={{ fontSize: "15px", fontWeight: "400", fontFamily: "Nunito, sans-serif" }}>
            "A trustworthy crypto wallet"
            </Typography>
            <Box style={{ display: "flex" }}>
              <Typography variant="h6" color="black" style={{ fontSize: "15px", fontWeight: "400", fontFamily: "Nunito, sans-serif" }}>
                David Backham .
              </Typography>
              <Box style={{ margin: "0.5vw" }}></Box>
              <Typography variant="h6" color="black" style={{ fontSize: "15px", color: "#9e9ea7", fontWeight: "400", fontFamily: "Nunito, sans-serif" }}>
                May 09, 2023
              </Typography>
            </Box>
            <Box style={{ marginTop: "1vh" }}></Box>
            <Typography variant="h6" color="black" style={{ fontSize: "15px", fontWeight: "400", fontFamily: "Nunito, sans-serif" }}>
              I feel empowered to take control of my
            </Typography>
            <Typography variant="h6" color="black" style={{ fontSize: "15px", fontWeight: "400", fontFamily: "Nunito, sans-serif" }}>
              financial future. They truly value their
            </Typography>
            <Typography variant="h6" color="black" style={{ fontSize: "15px", fontWeight: "400", fontFamily: "Nunito, sans-serif" }}>
              users and provide... more
            </Typography>
            <Box style={{ margin: "1vh" }}></Box>
            <Box style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
               <Box style={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                  <ThumbUpIcon style={{ fontSize: "20px", color: grey[700] }} />
                  <Box style={{ margin: "0.5vw" }}></Box>
                  <Typography variant="h6" color={grey[700]} style={{ fontSize: "15px", fontWeight: "400", fontFamily: "Nunito, sans-serif" }}>
                    helpful
                  </Typography>
               </Box>
               <Box style={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                  <ThumbDownIcon style={{ fontSize: "20px", color: grey[700] }} />
                  <Box style={{ margin: "0.5vw" }}></Box>
                  <Typography variant="h6" color={grey[700]} style={{ fontSize: "15px", fontWeight: "400", fontFamily: "Nunito, sans-serif" }}>
                    unhelpful
                  </Typography>
               </Box>
            </Box>
          </div>
          <Box style={{ margin: "5vh" }}></Box>
        </Box>
      </Box>
      <Menu />
    </ThemeProvider>
  )
}

export default Review
