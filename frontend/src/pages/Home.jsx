import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import "../App.css"
import Searchbar from "../components/Searchbar";
import ExpandingButton from "../components/ExpandingButton";

const Home = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>   
        <Navbar/>
        <Hero/>
        <Searchbar />
        <div style={{ display: "flex",gap: "30px",marginTop:"10vh", justifyContent: "center"}}>
        <ExpandingButton Before="Track Your Progress" after={<img src="./turtle.png" alt="progress" style={{width:"25px"}}/>} />
        <ExpandingButton Before="Go Green Gallery" after={<img src="./leaf.png" alt="progress" style={{width:"25px"}}/>} />
        <ExpandingButton Before="Explore New Hobby" after={<img src="./book.png" alt="book" style={{width:"25px"}}/>} />
        </div>
    </div>
  )
}

export default Home