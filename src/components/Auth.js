import React, { useContext } from 'react';
import { AuthContext } from './App';


const Auth = () => {
        const {auth , setAuth} = useContext(AuthContext)
        

        function Handleclick(){ 
                setAuth((prev) => !prev)     
        }
  return (
    <div>
        
        <h1>Click on the checkbox to get authenticated </h1>
         <p>{ !auth ?" You are not authenticated": " You are now authenticated , you can procced " }</p>

         <form>
               <label> 
                <input id='authText' onChange={Handleclick} type="checkbox" checked = {auth}  />
                 I'm not a robot
             </label>
              
         </form>
        
    </div>


  )
}

export default Auth