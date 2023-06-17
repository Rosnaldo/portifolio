
import Select, { SelectChangeEvent } from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import ToggleButton from "@mui/material/ToggleButton"

import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter"
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight"
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft"
import { useFontContext } from "../contexts/font.context"
import { FONT_ALIGNMENT } from "../contexts/enum"


function FontLayout() {
  const { alignment, changeAlignment, size, changeSize } = useFontContext()

  const handleAlignment = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    if (newAlignment === "LEFT") {
      changeAlignment(FONT_ALIGNMENT.LEFT)
    }
    if (newAlignment === "CENTER") {
      changeAlignment(FONT_ALIGNMENT.CENTER)
    }
    if (newAlignment === "RIGHT") {
      changeAlignment(FONT_ALIGNMENT.RIGHT)
    }
  }

  const handleFontSizeChange = (e: SelectChangeEvent) => {
    changeSize(parseInt(e.target.value))
  }

  return (
    <>
      <Select
        value={size.toString()}
        onChange={handleFontSizeChange}
        style={{ width: "100%", height: "40px", border: "none", color: "white" }}
      >
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={35}>35</MenuItem>
      </Select>
      <div style={{ marginRight: "10px" }}></div>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
      >
        <ToggleButton value="LEFT">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="CENTER">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="RIGHT">
          <FormatAlignRightIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}

export default FontLayout
