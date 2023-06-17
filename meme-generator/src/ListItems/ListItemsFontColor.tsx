
import { useState } from "react"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import ColorLensIcon from "@mui/icons-material/ColorLens"

import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import ToggleButton from "@mui/material/ToggleButton"
import ListItemText from "@mui/material/ListItemText"
import Collapse from "@mui/material/Collapse"
import List from "@mui/material/List"
import Box from "@mui/material/Box"
import { useFontContext } from "../contexts/font.context"
import { FONT_COLOR } from "../contexts/enum"

function ListItemsFontColor() {
  const [open, setOpen] = useState(false)
  const { color, changeColor } = useFontContext()

  const handleChangeColor = (e: any) => {
    changeColor(e.target.value as keyof typeof FONT_COLOR)
  }

  return (
    <>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <ColorLensIcon />
        </ListItemIcon>
      <ListItemText primary="Color" />
      {open ? <ExpandLess /> : <ExpandMore />}

      </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Box style={{ width: '100%', margin: "10px", marginTop: "20px" }}>
              <ToggleButtonGroup
                color="primary"
                value={color}
                exclusive
                onChange={handleChangeColor}
                style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}
              >
                <ToggleButton value="RED" sx={{ padding: '20px', border: 'none', background: 'red',  marginRight: '20px', '&:hover': { background: 'red' }, '&:selected': { background: 'red' } }}>
                </ToggleButton>
                <ToggleButton value="BLUE" sx={{ padding: '20px', border: 'none', background: 'blue', marginRight: '20px', '&:hover': { background: 'blue' } }}>
                </ToggleButton>
                <ToggleButton value="GREEN" sx={{ padding: '20px', border: 'none', background: 'green', marginRight: '20px', '&:hover': { background: 'green' } }}>
                </ToggleButton>
                <ToggleButton value="YELLOW" sx={{ padding: '20px', border: 'none', background: 'yellow', marginRight: '20px', '&:hover': { background: 'yellow' } }}>
                </ToggleButton>
                <ToggleButton value="BLACK" sx={{ padding: '20px', border: 'none', background: 'black', marginRight: '20px', '&:hover': { background: 'black' } }}>
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </List>
        </Collapse>
    </>
  )
}

export default ListItemsFontColor
