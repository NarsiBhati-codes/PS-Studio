import { Models } from "appwrite";
import { userStore } from "../../../state/userStore";
import "./contact.scss"
import React from "react"

function Contact() {
    const user = userStore(
        (state) => state.user
    ) as Models.User<Models.Preferences>;
        
  return (
    <div className="contact">
        <div className="textContainer">
            <h1>Lets work together</h1>
            <div className="item">
                <h1>Mail</h1>
                <span>{user.email}</span>
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
            <form>
                <input type="text"  required placeholder="Name"/>
                <input type="email"  required placeholder="email"/>
                <textarea rows={8} placeholder="Message"/>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact