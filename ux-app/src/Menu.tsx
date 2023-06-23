import { useNavigate } from "react-router-dom"
import purple from "@mui/material/colors/purple"
import HouseIcon from "@mui/icons-material/House"
import RateReviewIcon from "@mui/icons-material/RateReview"

function Menu() {
  const navigate = useNavigate()
  const handleRedirectHome = () => {
    navigate("/home")
  }
  const handleRedirectReview = () => {
    navigate("/review")
  }

  return (
    <div style={{ position: "fixed", bottom: 0, display: "flex", justifyContent: "space-around", alignItems: "center", height: "8vh", width: "100%", borderRadius: "5px 0px", backgroundColor: "white" }}>
      <div style={{ display: "flex",justifyContent: "space-around", alignItems: "center", maxWidth: "300px", width: "100%" }}>
        <HouseIcon onClick={handleRedirectHome} style={{ fontSize: "35px", color: purple[900], cursor: "pointer" }} />
        <RateReviewIcon onClick={handleRedirectReview} style={{ fontSize: "35px", color: purple[900], cursor: "pointer" }}  />
      </div>
    </div>
  )
}

export default Menu
