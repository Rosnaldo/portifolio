
import { Dispatch, SetStateAction } from "react"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"

type Props = {
  setText: Dispatch<SetStateAction<string>>,
}

function ButtonText({ setText } : Props) {
  const handleChange = (e: any) => {
    const value = e.target.value
    if (value.length < 18) {
      setText(value)
    }
  }

  return (
    <>
      <Typography variant="h4" color="common.white" style={{ fontSize: "15px" }}>
        bottom text
      </Typography>
      <TextField maxRows={1} variant="outlined" onChange={handleChange}/>
    </>
  )
}

export default ButtonText
