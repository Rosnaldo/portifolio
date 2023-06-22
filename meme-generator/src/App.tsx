import { useState, useEffect, useRef, MutableRefObject } from "react"
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles"
import { grey } from "@mui/material/colors"
import CssBaseline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListSubheader from "@mui/material/ListSubheader"

import Canvas from "./Canvas"
import UploadImage from "./UploadImage"
import DownloadMeme from "./DownloadMeme"
import ListItemsFont from "./ListItems/ListItemsFont"
import ListItemsFontColor from "./ListItems/ListItemsFontColor"

import { FontContextProvider } from "./contexts/font.context"

const theme = createTheme({

} as ThemeOptions)

theme.components = {
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderColor: "white !important",
      },
      notchedOutline: {
        borderColor: "white !important",
      }
    }
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        borderColor: "white",
        height: "40px",
      },
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        color: "white",
      }
    }
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        color: "white !important",
        fontSize: "18px"
      }
    }
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        color: "white",
        width: "100%",
      }
    }
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        background: grey['900'],
        '&:hover': {
          background: grey['900'],
        }
      }
    }
  },
  MuiList: {
    styleOverrides: {
      root: {
        width: "100%",
        background: grey['900'] + ' !important',
      }
    }
  },
  MuiListItemText: {
    styleOverrides: {
      root: {
        background: grey['900'],
      }
    }
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        width: "100%",
        background: grey['900'],
      }
    }
  },
  MuiListSubheader: {
    styleOverrides: {
      root: {
        width: "100%",
        background: grey['900'],
        color: "white",
      }
    }
  },
  MuiCollapse: {
    styleOverrides: {
      root: {
        height: "15px",
        background: grey['900'],
      }
    }
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        color: "white !important",
      }
    }
  },
}

const classes = {
  firstColumn: {
    backgroundColor: grey['900'],
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column" as "column"
  },
  secondColumn: {
    position: "relative" as "relative",
    height: "100vh",
    width: "100%",
  },
}

function BaseApp() {
  const refCanvas: MutableRefObject<HTMLCanvasElement | null> = useRef(null)
  const refScreenShot: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const [text, setText] = useState("")

  useEffect(() => {
    const canvas = refCanvas.current!
    canvas.getContext("2d")!.fillStyle = "white"
    canvas.getContext("2d")!.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  const handleChange = (file: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function(event) {
      const canvas = refCanvas.current!
      const img = new Image()
      img.onload = function () {
        canvas.getContext("2d")?.drawImage(img, 0, 0, canvas.width, canvas.height)
      }
      img.src = event!.target!.result!.toString()
    }
  }

  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <div style={classes.firstColumn}>
            <Grid container>
              <Grid item xs={12} style={{ height: "40px" }}>
                <div style={{ marginTop: "50px" }}></div>
                <List
                  sx={{ maxWidth: 360, bgcolor: "background.paper" }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                      Tools
                    </ListSubheader>
                  }
                >
                  <ListItemsFont setText={setText} />
                  <ListItemsFontColor />
                </List>
                <DownloadMeme refScreenShot={refScreenShot} />
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={9} sm={9}>
          <div style={classes.secondColumn}>
            <Box display="flex" flex={1} flexDirection="column" alignItems="center" justifyContent="center" style={{ height: "100%", width: "100%", background: grey['800'] }}>
              <Canvas text={text} refScreenShot={refScreenShot} refCanvas={refCanvas} />
              <UploadImage handleChange={handleChange} />
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FontContextProvider>
        <CssBaseline />
        <BaseApp />
      </FontContextProvider>
    </ThemeProvider>
  )
}


export default App
