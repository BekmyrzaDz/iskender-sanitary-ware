import { Route, Routes } from "react-router-dom"
import { Home, Page404 } from "./pages"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default App
