import Home from './pages/home.jsx'
import "./App.css"
import {Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar.jsx';
import Profile from './pages/Profile.jsx';
<<<<<<< HEAD
import Habbit from './pages/Habbit.jsx';
=======
>>>>>>> 36753f173630c007dc5b31069f66396af5b03ff1
function App() {

  return (
    <><div style={{display:"flex",flexDirection:"column"}}>
    <Navbar style={{position:"fixed", top:0,width:"100%",alignItems:"center"}}/>
    <Routes>
    <Route path="" element={<Home/>}/>
    <Route path="/profile" element={<Profile/>}/>
<<<<<<< HEAD
    <Route path='/habit'element={<Habbit/>}/>
=======
>>>>>>> 36753f173630c007dc5b31069f66396af5b03ff1
    </Routes>
    </div>
    </>
  )
}

export default App