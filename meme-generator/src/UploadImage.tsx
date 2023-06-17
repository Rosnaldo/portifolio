
import { FileUploader } from "react-drag-drop-files"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import UploadIcon from "@mui/icons-material/Upload"
import { grey } from "@mui/material/colors"

type Props = {
  handleChange: (file: File) => void
}

const classes = {
  uploadBox: {
    backgroundColor: grey['900'],
    width: "20vw",
    height: "13vh",
    borderWidth: "1px",
    borderStyle: "dashed",
    borderColor: grey['600'],
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as "column",
    cursor: "pointer",
    marginTop: "20px",
  },
  textUpload: {
    fontSize: "25px",
  },
  textDragAndDrop: {
    fontSize: '15px',
  }
}

function UploadImage({
  handleChange,
} : Props) {
  return (
    <FileUploader handleChange={handleChange} name="file" types={["JPG", "PNG", "JPEG"]}>
      <div style={classes.uploadBox}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h4" style={classes.textUpload}>
            upload photo
          </Typography>
          <UploadIcon fontSize="medium" style={classes.textDragAndDrop} />
        </Box>
        <Typography variant="h6" style={classes.textDragAndDrop}>
          , or drag and drop a file here
        </Typography>
      </div>
    </FileUploader>
  )
}

export default UploadImage
