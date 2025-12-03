import Home from './pages/home.jsx'
import "./App.css"
import {Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar.jsx';
import Profile from './pages/Profile.jsx';
function App() {

  return (
    <><div style={{display:"flex",flexDirection:"column"}}>
    <Navbar style={{position:"fixed", top:0,width:"100%",alignItems:"center"}}/>
    <Routes>
    <Route path="" element={<Home/>}/>
    <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
