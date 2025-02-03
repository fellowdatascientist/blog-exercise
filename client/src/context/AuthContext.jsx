import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from 'react-hot-toast';


const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  
  const [errorMSG, setErrorMSG] = useState('')
  const [token , setToken] = useState(localStorage.getItem('token') || '')

  useEffect(()=>{
    if(!token){
      console.log(token);
    }
    console.log("after useEff",token);
    
  },[])

  const login = async(data) => {
    try {
      const res = await axios.post(`${backendUrl}/v1/api/auth/login`,data)
      toast.success(res.data.message);
      setToken(res.data.token)
      localStorage.setItem('token', res.data.token)
    } catch (error) {
      setErrorMSG(error.response?.data?.message)
      setTimeout(()=>{
        setErrorMSG('')
      },2000)
      console.log(error.response?.data?.message);
    }
  }
  const SignUp = async(data) => {
  try {
    const res = await axios.post(`${backendUrl}/v1/api/auth/register`,data)
    toast.success(res.data.message);
  } catch (error) {
    setErrorMSG(error.response?.data?.message)
      setTimeout(()=>{
        setErrorMSG('')
      },2000)
    console.log(error.response?.data?.message);
  }
  }

  const data = {
    login, SignUp, errorMSG, setErrorMSG ,token
  };

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
