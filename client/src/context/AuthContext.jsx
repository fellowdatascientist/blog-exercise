import { createContext } from "react";

const AuthContext = createContext()

const AuthProvider = ({children})=>{
    const [isAuth, setIsAuth] = useState(false)

    const data = {
        isAuth,
        setIsAuth
    }
    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;