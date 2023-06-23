import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import profile from "./assets/profile.jpg"
import circleGraphic from "./assets/circle-graphic.svg"
import meteorDiagonal from "./assets/meteor-diagonal.svg"
import meteor from "./assets/meteor.svg"
import linkedin from "./assets/linkedin.svg"
import github from "./assets/github.svg"
import memeGenerator from "./assets/meme-generator.png"
import uxApp1 from "./assets/ux-app-1.png"
import uxApp2 from "./assets/ux-app-2.png"
import uxApp3 from "./assets/ux-app-3.png"
import "./App.css"

const theme = createTheme({
} as ThemeOptions)

theme.components = {}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: "#2f3335", width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
        <div style={{ opacity: "60%", position: "absolute",transform: "rotate(70deg)", top: 200, right: 700 }}>
          <img src={meteor} style={{ width: "40vw", position: "absolute", top: -250 }} />
          <img src={meteor} style={{ width: "40vw", position: "absolute", top: 50 }} />
        </div>
        <div style={{ opacity: "60%", position: "absolute",transform: "rotate(70deg)", bottom: 700, right: 700 }}>
          <img src={meteor} style={{ width: "40vw", position: "absolute", top: -250 }} />
          <img src={meteor} style={{ width: "40vw", position: "absolute", top: 50 }} />
        </div>
        <div style={{ opacity: "60%", position: "absolute",transform: "rotate(70deg)", bottom: 200, right: 300 }}>
          <img src={meteor} style={{ width: "40vw", position: "absolute", top: -250 }} />
          <img src={meteor} style={{ width: "40vw", position: "absolute", top: 50 }} />
        </div>
        <div style={{ opacity: "60%", position: "absolute",transform: "rotate(70deg)", bottom: 500, right: 200 }}>
          <img src={meteor} style={{ width: "40vw", position: "absolute", top: -250 }} />
          <img src={meteor} style={{ width: "40vw", position: "absolute", top: 50 }} />
        </div>
        <div style={{ opacity: "85%", position: "absolute",transform: "rotate(70deg)", bottom: 400, left: 300 }}>
          <img src={meteor} style={{ width: "40vw", position: "absolute", top: 50 }} />
        </div>
        <div style={{ position: "absolute", transform: "rotate(0deg)" }}>
          <img src={meteorDiagonal} style={{ width: "40vw", position: "absolute", top: -250 }} />
          <img src={meteorDiagonal} style={{ width: "40vw", position: "absolute", top: 50 }} />
        </div>
        <div style={{ position: "absolute", transform: "rotate(180deg)", bottom: 0, right: -100 }}>
          <img src={meteorDiagonal} style={{ width: "40vw", position: "absolute", top: -250 }} />
          <img src={meteorDiagonal} style={{ width: "40vw", position: "absolute", top: 50 }} />
        </div>
        
        <img src={circleGraphic} style={{ width: "60vw", position: "absolute", top: -130, left: -210, opacity: "20%" }} />
        <Box style={{ position: "absolute", zIndex: 0, display: "flex", justifyContent: "center", boxSizing: "border-box", width: "100%", padding: "auto 5%" }}>
          <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", width: "100%" }}>
            <Box style={{ marginTop: "15vh" }}></Box>
            <Box style={{ display: "flex" }}>
              <div style={{ position: "absolute", left: 50, top: 120 }}>
                <img src={profile} style={{ position: "absolute", width: "20vw", height: "20vw", borderRadius: "500px" }} />
              </div>
              <Box style={{ position: "absolute", left: 500,  display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Typography variant="h1" color="white" style={{ fontWeight: "600", fontFamily: "Rubik, sans-serif" }}>
                  Hi, there
                </Typography>
                <Typography variant="h4" color="white" style={{ fontWeight: "600", fontFamily: "Rubik, sans-serif" }}>
                  My name is Andrey Kenji Tsuzuki
                </Typography>
                <Box style={{ display: "flex" }}>
                  <Typography variant="h4" color="white" style={{ fontWeight: "600", fontFamily: "Rubik, sans-serif" }}>
                    I am a
                  </Typography>
                  <Box style={{ margin: "0.4vw" }}></Box>
                  <Typography variant="h3" color="#d15848" style={{ fontWeight: "600", fontFamily: "Pacifico, cursive" }}>
                    full cycle developer
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
      <Box style={{ height: "70vh", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
        <Box style={{ padding: "10vh 10vw", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
          <Typography variant="h2" color="black" style={{ fontWeight: "600", fontFamily: "Rubik, sans-serif" }}>
            badges
          </Typography>
          <Box style={{ margin: "2vh" }}></Box>
          <Box style={{ display: "flex" }}>
            <a href="https://www.credly.com/earner/earned/badge/aa30e1fc-bf44-4003-b5ca-68f68e134025" target="_blank">
              <img
                src="https://images.credly.com/size/680x680/images/8ee45313-716a-4142-a9da-30adaaea0c12/Training_Badges_Master_Node-AppDev.png"
                style={{ width: "15vw", height: "15vw", cursor: "pointer" }}
              />
            </a>
            <Box style={{ margin: "2vw" }}></Box>
            <a href="https://www.credly.com/earner/earned/badge/ce7b7918-a7e9-48b2-8959-efe01a50b9c0" target="_blank">
              <img
                src="https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
                style={{ width: "15vw", height: "15vw", cursor: "pointer" }}
              />
            </a>
          </Box>
        </Box>
      </Box>
      <Box style={{ height: "150vh", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
        <Box style={{ padding: "10vh 10vw", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
          <Typography variant="h4" color="black" style={{ fontWeight: "600", fontFamily: "Rubik, sans-serif" }}>
            Meme generator
          </Typography>
          <Box style={{ margin: "2vh" }}></Box>
          <a href="https://main.d38ceq6t3w1y12.amplifyapp.com" target="_blank">
            <img style={{ width: "40vw", borderRadius: "20px", cursor: "pointer" }} src={memeGenerator} />
          </a>
          <Box style={{ margin: "1vh" }}></Box>
          <Link href="https://github.com/Rosnaldo/meme-generator">https://github.com/Rosnaldo/meme-generator</Link>
        </Box>
        <Box style={{ padding: "2vh 10vw", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
          <Typography variant="h4" color="black" style={{ fontWeight: "600", fontFamily: "Rubik, sans-serif" }}>
            Ux app
          </Typography>
          <Box style={{ margin: "2vh" }}></Box>
          <a href="https://main.d38ceq6t3w1y12.amplifyapp.com" target="_blank">
            <Box style={{ display: "flex" }}>
              <img style={{ width: "15vw", borderRadius: "20px", cursor: "pointer" }} src={uxApp1} />
              <Box style={{ margin: "2vw" }}></Box>
              <img style={{ width: "15vw", borderRadius: "20px", cursor: "pointer" }} src={uxApp2} />
              <Box style={{ margin: "2vw" }}></Box>
              <img style={{ width: "15vw", borderRadius: "20px", cursor: "pointer" }} src={uxApp3} />
            </Box>
          </a>
          <Box style={{ margin: "1vh" }}></Box>
          <Link href="https://github.com/Rosnaldo/ux-app">https://github.com/Rosnaldo/ux-app</Link>
        </Box>
      </Box>
      <Box style={{ padding: "0 10vw", height: "30vh", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
        <a href="https://www.linkedin.com/in/andrey-tsuzuki" target="_blank">
          <img style={{ width: "7vw" }} src={linkedin} />
        </a>
        <Box style={{ margin: "1vw" }}></Box>
        <a href="https://github.com/Rosnaldo" target="_blank">
          <img style={{ width: "5vw" }} src={github} />
        </a>
      </Box>
    </ThemeProvider>
  )
}

export default App
