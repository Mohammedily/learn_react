import React, {useState} from 'react';
import "./Register.css";
import axios from "axios";


function Register() {




  
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
 });


  const [error, setError] = useState("");
 
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://guviappbackend.herokuapp.com/signup/";
      const { data: res } = await axios.post(url, data);
      console.log(res.message);
      window.location.href=`/`;
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  }



  return (
<div className='container' id="cont">
<form className='col-lg-6' id="form" onSubmit={handleSubmit}>
  <h3>Register</h3>
<input type="text" className='col-lg-8' id="input" name="name"
                        onChange={handleChange}
                        value={data.name} placeholder='Name'  required/>
<input type="email" className='col-lg-8' id="input"  name="email"
                        onChange={handleChange}
                        value={data.email} placeholder='Email' required/>
<input type="password" className='col-lg-8' id="input"  name="password"
                        onChange={handleChange}
                        value={data.password} placeholder='Password' required/>
<a href="/" id="a">Do You Have Login</a>
{error && <div class="alert alert-danger" role="alert">
{error}
</div>}
<button type="submit" id="button">Submit</button>
</form>
</div>
  )
}

export default Register;