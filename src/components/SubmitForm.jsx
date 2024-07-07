import React, { useEffect, useState } from "react";
import "./SubmitForm.css";
import Button from "./Button";
import  emailjs from "emailjs-com"
import { useNavigate } from "react-router-dom";

const SubmitForm = ({ totalpoint }) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    totalpoint:totalpoint,
    iqPoints: "",
    
  });
  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      totalpoint: totalpoint,
      iqPoints: estimateIQRange(totalpoint), 
    }));
  }, [totalpoint]);
  
  
  const estimateIQRange = (totalpoint) => {
    
    if (totalpoint >= 19) {
      return "105 and above";
    } else if (totalpoint >= 14) {
      return "85-100";
    } else if (totalpoint >= 9) {
      return "70-85";
    } else {
      return "Below 70";
    }
  };

  const handleChange =(e)=>{
    const {name, value} = e.target;

    setFormData({
      ...formData,[name]:value,
    })
  }

  const handleClick =(e)=>{
    e.preventDefault();
   
    emailjs.send(
      'service_og9raac', 
      'template_odzdd7y', 
      formData,
      'TcCmd8oi0jJMOiCeu' 
    )
    .then((response) => {
      console.log('Success:', response.status, response.text);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    navigate("/")

    
   
  };

    
    return (
      <div>
      <form className="submitform">
        <label  htmlFor="name">Full name</label>
        <input name="name" onChange={handleChange} value={formData.name} required className="forminput" type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input name="email" onChange={handleChange} value={formData.email} required className="forminput" type="email" id="email" />

        <p className="terms">
          By submiting you agree to receive free courses when launched.
        </p>

        <Button text="Submit"  type="primary"  handleClick={handleClick} />
      </form>
    </div>
  );
}


export default SubmitForm;
