import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import "../App.css";
import Searchbar from "../components/Searchbar";
import ExpandingButton from "../components/ExpandingButton";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Hero />
        <Searchbar />
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "10vh",
            justifyContent: "center",
          }}
        >
          <ExpandingButton
            Before="Track Your Progress"
            after={
              <img
                src="./turtle.png"
                alt="progress"
                style={{ width: "40px" }}
              />
            }
          />
          <ExpandingButton
            Before="Go Green Gallery"
            after={
              <img src="./leaf.png" alt="progress" style={{ width: "40px" }} />
            }
          />
          <ExpandingButton
            Before="Explore New Hobby"
            after={
              <img src="./book.png" alt="book" style={{ width: "40px" }} />
            }
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 61px)",
          marginTop: "61px",
          backgroundColor: "#030303",
        }}
      >
        <div
          className="Hero"
          style={{
            color: "white",
            display: "flex",
            height: "40vh",
            alignContent: "flex-start",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <div
              style={{ position: "relative", left: "0px", marginTop: "5vh" }}
            >
              Your Growth, Our Goal.
            </div>
            <div
              style={{
                position: "relative",
                fontFamily: "'Algance', sans-serif",
                left: "0px",
                fontSize: "3rem",
                fontWeight: "bold",
              }}
            >
              How it Works?
            </div>
            <div
              style={{
                fontFamily: "'Algance', sans-serif",
                position: "relative",
                left: "0px",
                fontSize: "18px",
                fontWeight: "normal",
                paddingTop: "5vh",
              }}
            >
              <p style={{ fontFamily: "'Algance', sans-serif" }}>
                We are all about you. Helping you adopt sustainable habits
              </p>
              <p style={{ fontFamily: "'Algance', sans-serif" }}>
                through engaging activities, tracking your progress, and
                rewarding your efforts.
              </p>
            </div>
          </div>
          <div>
            <img
              src="./lady.svg"
              style={{
                width: "400px",
                justifyContent: "center",
                marginTop: "1vh",
              }}
              alt=""
            />
          </div>
        </div>
        <hr />
        <div
          className="card-container"
          style={{
            color: "white",
            display: "flex",
            height: "40vh",
            alignContent: "center",
            justifyContent: "space-around",
            margin: "0px 120px",
          }}
        >
          <Card title="Card 1" body="body" />
          <Card title="Card 2" body="body" />
          <Card title="Card 3" body="body" />
        </div>
      </div>
    </div>
  );
};

export default Home;
