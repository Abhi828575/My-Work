import React, { useState } from 'react'

export default function Texform(props) {
    const [text, setText] = useState(" ");
    const handleUpClick = () => {
        console.log("Uppercase was Clicked");  //To check in console is it working or not
        let newText=text.toUpperCase();
        setText(newText)
        
    }

    const handleLoClick = () => {
        console.log("Uppercase was Clicked");  //To check in console is it working or not
        let newText=text.toLowerCase();
        setText(newText)
        
    }

    const handleSpeakClick=()=>{
        let msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
    }

    const handleClearClick=()=>{
        let newText=``
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("On Chnage")  //To check in console is it working or not
        setText(event.target.value)
    }

    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Enter Text Here" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleSpeakClick} >Speak Text</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
