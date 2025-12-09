import React from "react";
import FormInput from "../components/FormInput";
import WhiteButton from "../components/WhiteButton";
import { FormContext } from "../context/Context";
import { useContext } from "react";
import validate from "../components/validate";


const Login = () => {
  const {name,setname,number,setnumber,pass,setpass}=useContext(FormContext)
  
  const nameChange = (val)=>{
    setname(val);
    console.log(name)
  }
  const numberChange = (val)=>{
    setnumber(val);
  }
  const passChange = (val)=>{
    setpass(val);
  }
  const callFunc=(name,number,pass)=>{validate(name,number,pass)}
  return (
    <div
      style={{
        display: "flex",
        justifyContent:"center",
                height: "100vh", // full viewport height
        color: "white",
      }}
    >
      {/* Top half */}
      <div
        style={{ // take half the height
          display: "flex",
          flexDirection:"column",
          alignItems: "center", // center vertically
          marginTop:"15vh"
        }}
      >
        <div
          style={{
            fontFamily: "'Algance', sans-serif",
            fontSize: "34px",
            color: "#00efc7ff",
          }}
        >
          Create an Account
        </div>
        <div>
          <FormInput placeholder="Name" onChange={nameChange}/>
          <FormInput placeholder="Email" onChange={numberChange}  />
          <FormInput placeholder="Password" onChange={passChange}/>
        </div>
        <div>
          <WhiteButton text="SIGNUP" onClick={()=>callFunc(name,number,pass)}/>
        </div>
      </div>
    </div>  
  );
};

export default Login;
