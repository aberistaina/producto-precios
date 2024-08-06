import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { HomePage } from './assets/pages/HomePage'
import { AdminPage } from './assets/pages/AdminPage'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lector-productos" element={<HomePage/>}/>
        <Route path="/lector-productos/admin" element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
