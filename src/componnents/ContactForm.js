import React from "react";
import "./Contactform.css"

function Contactform() {
    return (
        <div className="from-container">
            <h1>Send a Message to Us</h1>
            <form>
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="Subject" />
                <textarea placeholder="Message" rows="4"></textarea>
            </form>
            <button>Send Message</button>
        </div>
    )
}

export default Contactform