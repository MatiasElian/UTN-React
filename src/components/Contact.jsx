import { useState } from "react"
import NavMain from "./NavMain"
import "./Contact.css"


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    messege: ""
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (event)=>{
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    setFormSubmitted(true)
    setTimeout(function() {
      setFormSubmitted(false)
      setFormData({
        name:"",
        email:"",
        messege: ""
      })
    }, 5000)
    console.log("Formulario enviado", formData)
  }


  return (
    <div className="div">
      <NavMain/>
      {!formSubmitted ?(
        <main className="contactContainer">
        <div className="formContainer">
          <h2>Contact</h2>
          <h3>Leave us your information so we can contact you</h3>
          <form onSubmit={handleSubmit}>
            <div className="iputFiled">
              <label >Name</label>
              <input type="text" value={formData.name}  onChange={handleChange} name="name" id="nombre" required/>
            </div>
            <div className="iputFiled">
              <label>Email</label>
              <input type="email" value={formData.email} onChange={handleChange} name="email" id="correo" required/>
            </div>
            <div className="textField">
              <label>Messege</label>
              <textarea name="messege" value={formData.text} onChange={handleChange} id="mensaje" required></textarea>
            </div>
            <div className="buttonField">
              <button type="submit" >Send</button>
            </div>
          </form>
        </div>
      </main>  
    ) : (
      <div className="messegeSend">
        <h1>Massege Send!</h1>
        <p>Thanks for the message, we will contact you as soon as posible</p>
      </div>
    )}
      
    
    </div>
  )
}

export default Contact
