import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from 'react-hot-toast';


const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  
  const [errorMSG, setErrorMSG] = useState('')
  const [token , setToken] = useState(localStorage.getItem('token') || null)

  useEffect(()=>{
    if(!token){
      console.log(token);
    }
  },[])

  const fetchAuthor = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/auth/author`, {withCredentials:true})
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogout = ()=>{
    localStorage.setItem('token', '')
    setToken(null)
  }
  
  const login = async(data) => {
    try {
      const res = await axios.post(`${backendUrl}/v1/api/auth/login`,data,{withCredentials:true})
      toast.success(res.data.message);
      setToken(res.data.token)
      localStorage.setItem('token', res.data.token)
      return true
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
    const res = await axios.post(`${backendUrl}/v1/api/auth/register`,data,{withCredentials:true})
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
    login, SignUp, errorMSG, setErrorMSG ,token, handleLogout, fetchAuthor
  };

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
