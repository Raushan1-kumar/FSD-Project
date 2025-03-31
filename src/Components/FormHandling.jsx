import { useEffect, useState } from "react";


function FormHandling() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: 0,
    phone: "",
  });


  const handleChange=(e)=>{
     setFormData({
        ...formData,
        [e.target.name]:e.target.value
     })
  }
   

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);   
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input required type="text" name="name" value={formData.name} onChange={(e)=>{handleChange(e)}}/>
        <input required type="email" name="email" value={formData.email} onChange={(e)=>{handleChange(e)}}/>
        <input required type="password" value={formData.password} name="password" onChange={(e)=>{handleChange(e)}}/>
        <input required type="number" name="age" value={formData.age} onChange={(e)=>{handleChange(e)}}/>
        <input required type="text" name="phone"  value={formData.phone} onChange={(e)=>{handleChange(e)}}/>
        <button type="submit">Login</button>
      </form>
      
    </>
  );
}

export default FormHandling;
