import Home from './pages/Home.jsx'
import "./App.css"
import {Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar.jsx';
import Profile from './pages/Profile.jsx';
import Habbit from './pages/Habbit.jsx';
function App() {

  return (
    <><div style={{display:"flex",flexDirection:"column"}}>
    <Navbar style={{position:"fixed", top:0,width:"100%",alignItems:"center"}}/>
    <Routes>
    <Route path="" element={<Home/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path='/habit'element={<Habbit/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App