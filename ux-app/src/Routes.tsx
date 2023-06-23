import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./Home"
import App from "./App"
import Review from "./Review"

const Router = () => {
   return(
    <BrowserRouter>
      <Routes>
        <Route Component={ App }  path="/" />
        <Route Component={ Home }  path="/home" />
        <Route Component={ Review }  path="/review" />
      </Routes>
    </BrowserRouter>
   )
}

export default Router
