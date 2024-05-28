import React, { useState } from "react";
import '../css/form.css'

function Form() {
    const [forms, setForm] = useState({
        "name":"",
        "phone":"",
        "email":"",
        "password":"",
        "confirmPassword":""
    })
    const [erros, setErrors] = useState('')

    const handleChange = (e) =>{
        const {name, value} = e.target
        setForm({...forms, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errorsValidation = {}
        if(!forms.name.trim()){
            errorsValidation["name"] = "Name required"
        }else if(forms.name.length < 3){
            errorsValidation["name"] = "Characters should be greater than 3"
        }

        if(!forms.email.trim()){
            errorsValidation["email"] = "Email is required"
        }else if(!/\S+@\S+.\S+/.test(forms.email)){
            errorsValidation["email"] = "Email is invalid"
        }
        if(!forms.password.trim()){
            errorsValidation["password"] = "Password is required"
        }else if(forms.password.length < 5){
            errorsValidation["password"] = "Password is too short"
        }
        if(forms.password != forms.confirmPassword){
            errorsValidation["confirmPassword"] = "Password didn't match"
        }
        setErrors(errorsValidation)
        if(Object.keys(errorsValidation).length == 0){
            alert("No Error")
        }

    }


  return (
    <>
      <h1 style={{ fontWeight: 200 }}>Form Validation</h1>
      <p>Validation is made with pure react no package used</p>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={handleChange} />
            {erros.name && <span>{erros.name}</span>}
          </div>
          
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={handleChange}/>
            {erros.email && <span>{erros.email}</span>}
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleChange}/>
            {erros.password && <span>{erros.password}</span>}
          </div>
          <div className="input">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" name="confirmPassword" onChange={handleChange}/>
            {erros.confirmPassword && <span>{erros.confirmPassword}</span>}
          </div>
          <div className="input">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form
