import Home from './pages/Home.jsx'
import "./App.css"
import Navbar from './components/Navbar.jsx';
function App() {

  return (
    <><div style={{display:"flex",flexDirection:"column"}}>
    <Navbar style={{position:"fixed", top:0,width:"100%",alignItems:"center"}}/>
    <Home></Home>
    </div>
    </>
  )
}

export default App
