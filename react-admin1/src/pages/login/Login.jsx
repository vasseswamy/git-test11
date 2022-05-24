import React,{useState} from 'react'
import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleEmailChange=(e)=>{
    setSuccessMsg('');
    setEmailError( ' ');
    setEmail(e.target.value);
  }

  const handlePasswordChange=(e)=>{
    setSuccessMsg('');
    setPasswordError( ' ');
    setPassword(e.target.value);
  }

  const handleFormSubmit=(e)=>{
    e.preventDefault();

    if(email!==''){

     
      const emailRegex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(emailRegex.test(email)){
     setEmailError('');
     if(email==='admin@demo.com'){
       setEmailError('');
       if(password==='demo123'){

       }
       else{
         setPasswordError('password does not match with our database')
       }

     }
     else{
       setEmailError('email does not match with the email address');
     }
   }
   else{
     setEmailError('invalid Email')
   }
   
    }else{
      setEmailError('Email Required');
    }
  
  if(password!==''){


  }else{

    setPasswordError('Password Required');
  }
  
  }



  return (
    <div className='wrapper'>
      <center>
        <h3><ul><b>LOGIN-FORM</b></ul></h3><br />
       

        <form className='form-group form' autocomplete="off"
        onSubmit={handleFormSubmit}>
           {successMsg&&<div className='success-msg'>{successMsg}</div>}
           <label><b>Email</b></label>
           <input type="text" className='form-control' custom-input placeholder='Enter Your email address'
           onChange={handleEmailChange} value={email}/>&nbsp;
           {emailError&&<div className='error-msg'>{emailError}</div>}
           <label><b>Password</b></label>
           <input type="password" className='form-control'custom-input placeholder='Enter Your password'
           onChange={handlePasswordChange} value={password}/>&nbsp;
           {passwordError&&<div className='error-msg'>{passwordError}</div>}
           <Link to="/">
             <button type="submit" className="btn btn-success btn-lg" style={{width: 100 + '%'}}>LOGIN</button>
             </Link>
        </form>
        </center>
    </div>
  )
}

export default Login
