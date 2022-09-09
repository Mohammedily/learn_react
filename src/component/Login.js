import React, {useState} from 'react';
import axios from "axios";


function Login() {
  const [data, setData] = useState({
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
      const url = "https://guviappbackend.herokuapp.com/signin/";
      const { data: res } = await axios.post(url, data);
       localStorage.setItem("data", res.data);
       localStorage.setItem("id", res.user._id);
       alert("Login Successfully")
      window.location.href=`/profile`;
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
  <h3>Login</h3>
<input type="email" className='col-lg-8' id="input"  name="email"
                        onChange={handleChange}
                        value={data.email} placeholder='Email' required/>
<input type="password" className='col-lg-8' id="input"  name="password"
                        onChange={handleChange}
                        value={data.password} placeholder='Password' required/>
<a href="/register" id="a">Do You Have Register</a>
{error && <div class="alert alert-danger" role="alert">
{error}
</div>}
<button type="submit" id="button">Submit</button>
</form>
</div>
  )
}

export default Login;
