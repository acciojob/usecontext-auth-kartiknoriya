
import React, { createContext, useState , } from "react";
import './../styles/App.css';
import Auth from "./Auth";
export  const AuthContext =  createContext();

const App = () => {

  const [auth , setAuth] = useState(false)

  return (
    <div> 
        <AuthContext.Provider value={{auth , setAuth}}>
          {<Auth/>}
        </AuthContext.Provider>
         

    </div>
  )
}

export default App
