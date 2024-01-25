import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"


export const MainRouter= () => {

    return ( 
       <BrowserRouter>
       <Routes>
          <Route path= '/' element={<Home />}/>
       </Routes>
       </BrowserRouter>
    )
}

// https://myapp.com ===> Page Home
// https://myapp.com/category ===> Page Category

