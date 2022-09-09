import React, {useEffect, useState} from 'react';
import axios from "axios";


function Profile() {

    const [profile, setProfile] = useState([]);
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [mobilenumber, setMobileNumber] = useState(""); 
    
    const id = localStorage.getItem("id");

    useEffect(() => {
        fetch(`https://guviappbackend.herokuapp.com/user/get/${id}`)
        .then((res) => res.json())
        .then((data) => setProfile(data.Users));
    }, [id]);

    console.log(profile);

  const Update = async(e) => {
    e.preventDefault();
    try {
        const post = await axios.patch(`https://guviappbackend.herokuapp.com/update/${id}`, {
            age, gender, dob,mobilenumber 
        })
        alert("Update Successfully");
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
  }

  const logout = () => {
    localStorage.removeItem("data");
    localStorage.removeItem("id");
    window.location.href="/"
  }


  return (
<div className='container' id="cont">
<form className='col-lg-6' id="form" onSubmit={Update}>
  {profile.age ? (<h3>Profile</h3>) : (<h3>Enter Detials</h3>)}
{profile.age && (<p>_id: {profile._id}</p>)}
{profile.age && (<p>Name: {profile.name}</p>)}
{profile.age && (<p>Email: {profile.email}</p>)}
{profile.age ? (<p>Age: {profile.age}</p>) : (<input type="text" className='col-lg-8' id="input" value={age} onChange={(e) => setAge(e.target.value)}   placeholder='Age' required/>)}
{profile.gender ? (<p>Gender: {profile.gender}</p>) : (<input type="text" className='col-lg-8' id="input" value={gender} onChange={(e) => setGender(e.target.value)}   placeholder='gender' required/>)}
{profile.dob ? (<p>D.O.B: {profile.dob}</p>) : (<input type="text" className='col-lg-8' id="input" value={dob} onChange={(e) => setDob(e.target.value)} placeholder='Date Of Birth' required/>)}
{profile.mobilenumber ? (<p>Mobile Number: {profile.mobilenumber}</p>) : (<input type="text" className='col-lg-8' id="input"  value={mobilenumber} onChange={(e) => setMobileNumber(e.target.value)}  placeholder='Mobile Number' required/>)}
{profile.age ? (<button id="button" onClick={logout}>Logout</button> ) : (<button type="submit" id="button">Submit</button> )}




</form>
</div>
  )
}

export default Profile;