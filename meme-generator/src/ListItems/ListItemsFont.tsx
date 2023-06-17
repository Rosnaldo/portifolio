
import { Dispatch, SetStateAction, useState } from "react"
import ToggleButton from "@mui/material/ToggleButton"
import List from "@mui/material/List"
import Box from "@mui/material/Box"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Collapse from "@mui/material/Collapse"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"

import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import TitleIcon from "@mui/icons-material/Title"
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import ButtonText from "../Font/ButtonText"
import FontLayout from "../Font/FontLayout"

import { useFontContext } from "../contexts/font.context"

type Props = {
  setText: Dispatch<SetStateAction<string>>
}

function ListItemsFont({
  setText,
} : Props) {
  const [open, setOpen] = useState(false)
  const { bold, changeBold, underline, changeUnderline, italic, changeItalic } = useFontContext()

  const handleChangeBold = () => {
    changeBold(!bold)
  }

  const handleChangeUnderline = () => {
    changeUnderline(!underline)
  }

  const handleChangeItalic = () => {
    changeItalic(!italic)
  }

  return (
    <>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <TitleIcon />
        </ListItemIcon>
        <ListItemText primary="Font" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Box flex={1} display="flex" justifyContent="space-between" style={{ margin: "10px" }}>
            <FontLayout />
          </Box>
          <Box display="flex" flex={1} style={{ margin: "10px", marginTop: "20px" }}>
            <ToggleButtonGroup
                color="primary"
                value={bold}
                exclusive
                onChange={handleChangeBold}
              >
              <ToggleButton value="BOLD">
                <FormatBoldIcon />
              </ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
                color="primary"
                value={underline}
                exclusive
                onChange={handleChangeUnderline}
              >
              <ToggleButton value="UNDERLINED">
                <FormatUnderlinedIcon />
              </ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
                color="primary"
                value={italic}
                exclusive
                onChange={handleChangeItalic}
              >
              <ToggleButton value="ITALIC">
                <FormatItalicIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box display="flex" flex={1} flexDirection="column" style={{ margin: "10px", marginTop: "20px" }}>
            <ButtonText setText={setText} />
          </Box>
        </List>
      </Collapse>
    </>
  )
}

export default ListItemsFont
