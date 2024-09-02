import React, { useState } from 'react'
export default function Form(props) {
    const [text, settext] = useState("enter your text here!!")
    const handleuppercase = () => {
        settext(text.toUpperCase())
        props.showAlert(': Converted to UpperCase', 'success')
    }
    const HandleChange = (e) => {
        settext(e.target.value)
    }
    const handlelowercase = () => {
        settext(text.toLowerCase())
        props.showAlert(': Converted to LowerCase', 'success')
    }
    const cleartext = () => {
        settext('')
        props.showAlert(': Text Cleared', 'success')
    }

    const handlecopy = (text) => {
        if (text === "") {
            props.showAlert(": Enter text first", 'warning')
        }
        text = document.getElementById("my-box");
        navigator.clipboard.writeText(text.value);
        props.showAlert(': Text copied to Clipboard', 'success')
    }

    const handlespace = () => {
        let newtext = text.split(/[ ]+/)
        settext(newtext.join(' '))
        props.showAlert(': Extra spaces are removed', 'success')
    }

    return (
        <div>
            <h3 className="mb-3 my-3 " >{props.heading}</h3>
            <div className="mb-3 my-3 " >
                <textarea className="form-control" onChange={HandleChange} value={text} id="my-box" rows="10"></textarea>
            </div>
            <button type="button" onClick={handleuppercase} className="btn btn-primary my-2">Convert to Uppercase</button>
            <button type="submit" onClick={handlelowercase} className="btn btn-primary mx-3 my-2">Convert to lowercase</button>
            <button type="submit" onClick={cleartext} className="btn btn-primary mx-3 my-2">clear text</button>
            <button type="submit" onClick={handlecopy} className="btn btn-primary mx-3 my-2">copy text</button>
            <button type="submit" onClick={handlespace} className="btn btn-primary mx-3 my-2">remove extra space</button>
            <div>
                <h2 className='my-4'>Text Summary</h2>
                <p>the above text has {text.length > 0 ? text.split(' ').length : 0} words and {text.length} characters </p>
                <p>the time required to read the above text is approximately {Math.floor(text.split(' ').length * 0.008 * 60)} seconds</p>
                {/* <p>{text.length > 0 ? text : 'enter your text'}</p> */}

            </div>
        </div>
    )
}
