import { createContext, useState } from "react";

const AuthContext = createContext(null); // Providing a default value

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const data = {
    isAuth,
    setIsAuth,
  };

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
