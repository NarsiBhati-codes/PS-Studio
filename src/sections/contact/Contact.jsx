import { useRef, useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
function Contact() {
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);  
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_x5lph97",
          "template_icljjz9",
          formRef.current,
          "ku9pEf7ll82iRqRWz"
        )
        .then(
          // eslint-disable-next-line no-unused-vars
          (result) => {
            setSuccess(true)
          },
          // eslint-disable-next-line no-unused-vars
          (error) => {
            setError(true);
          }
        );
    };
    
  return (
    <div  className="contact">
        <div className="textContainer">
            <h1>Lets work together</h1>
            <div className="item">
                <h1>Mail</h1>
                <span>narsibhati31102@gmail.com</span>
            </div>
            <div className="item">
                <h1>Address</h1>
                <span>Hello Chandigarh University</span>
            </div>
            <div className="item">
                <h1>Phone</h1>
                <span>+91 12323 23223</span>
            </div>
        </div>
        <div className="formContainer">
        <form
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input type="text" required placeholder="Name" name="form_name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </form>
        </div>
    </div>
  )
}

export default Contact