import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleCopytext = ()=> {
        let text = document.getElementById("textbox");
        text.select()
        navigator.clipboard.writeText(text.value); 
        props.showAlert("Text copied to clipboard!", "success") 
    }
    const handleClearText = ()=> {
        setText("")
    }


    const handleOnChange = (event)=> {
        setText(event.target.value)
    }
    const[text, setText] = useState("");
  return (
    <div className='container mt-5'>
        <div>
            <h1 className={`text-${props.mode==='dark'?'light':'dark'}`}>Text Analyzer</h1>
            <label className={`form-label text-${props.mode==='dark'?'light':'dark'}`}>Enter text here to analyze</label>
            <textarea id="textbox" value={text} onChange={handleOnChange} rows="5" className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}></textarea>
            <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mt-3`} onClick={handleUpClick}>To UpperCase</button>
            <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mt-3 mx-2`} onClick={handleLoClick}>To LowerCase</button>
            <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mt-3 mx-2`} onClick={handleCopytext}>Copy</button>
            <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mt-3 mx-2`} onClick={handleClearText}>Clear</button>
        </div>

        <div className="container-fluid border border-4 rounded rounded-5 mt-3 p-3">
            <h3 className={`text-${props.mode==='dark'?'light':'dark'}`}>Text Summary</h3>
            <p className={`text-${props.mode==='dark'?'light':'dark'}`}>
                {text.split(" ").length} word(s) and {text.length} character with space
                <hr/>

                {text.length>0?text:'Enter your text to preview here...'}
            </p>
        </div>
    </div>
  )
}
