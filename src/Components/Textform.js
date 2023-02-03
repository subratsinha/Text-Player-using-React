import React, {useState} from 'react'

export default function Textform(props) {
    
    const handleUpClick = ()=>{
        console.log("uppercase clicked"+ text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase ", "success")
       
    }

    const handleLoClick = ()=>{
        console.log("Lowercase clicked"+ text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase ", "success")
    }

    const handleClearClick = ()=>{
        console.log("Text cleared"+ text)
        let newText='';
        setText(newText)
        props.showAlert("Text Cleared ", "success")
    }
    
    const handleCopy = ()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success")
    }

    const handleOnChange = (event)=>{
        console.log("handleOnChange clicked")
        setText(event.target.value)
    }

    const handleExtraSpaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Spaces removed!!  ", "success")
    }

    
    
    const [text , setText] = useState('');
    
    // text=("newtext"); wrong way to set text
    // setText("newtext"); correct way
    
    return (
        <>

        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick} > Convert to UpperCase </button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick} > Convert to LowerCase </button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick} > Clear Texts </button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleCopy} > Copy Texts </button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces} > Remove Spaces </button>



        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>

            <h1> Your text summary </h1>
            <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
            <p>{0.008*text.split(" ").length} Minutes read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text to preview here :-"}</p>

        </div>

        </>
    )
}
