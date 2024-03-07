import { useEffect, useRef } from "react"
import {useDispatch, useSelector} from "react-redux"
import { fetchConnexion, setAuthMode, setUser ,fetchInscription} from "./authSlice"
import { SIGN_IN_URL, SIGN_UP_URL } from "../../firebaseConfig"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const SignForm = () => {
  const user = useSelector(state => state.auth.user)
  useEffect  (()=>{
    console.log("Test");
  },[user]) 

  
  const naviguate = useNavigate()
  const authMode = useSelector(state => state.auth.authMode)
  const dispatch = useDispatch()

  const emailRef = useRef()
  const passwordRef = useRef()

  const submitForm = (e) => {
    e.preventDefault()

    const credentials = {
      email : emailRef.current.value,
      password: passwordRef.current.value,
      returnSecureToken: true
    }
   
    if(authMode === "Se connecter" ){
      dispatch(fetchConnexion(credentials))
      console.log(user);
      if(user)
      {   
        naviguate("/")
     }
    
    }else
      {
        dispatch(fetchInscription(credentials))
      }
     

      
      
    
  }

  return ( 
    <>
      
      <h3>{authMode}</h3>
      <div className="border border-light mb-5 py-2 px-2">
        <form onSubmit={submitForm} >
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" className="rounded form-control" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" className="rounded mt-3 form-control mb-5 " ref={passwordRef} />
        </div>
        <div>
        
        <button className="btn btn-primary mb-3">{authMode}</button>
        
        </div>
      </form>
      <button className="btn btn-success" onClick={() => dispatch(setAuthMode(authMode === "Se connecter" ? "S'inscrire" : "Se connecter"))}>
        {authMode === "Se connecter" ? "S'inscrire" : "Se connecter"}
      </button>
      </div>
      
    </>
   )
};
 
export default SignForm;