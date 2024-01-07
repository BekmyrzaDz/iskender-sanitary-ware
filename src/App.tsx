import { Route, Routes } from "react-router-dom"
import { HomePage, Page404 } from "./pages"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default App
