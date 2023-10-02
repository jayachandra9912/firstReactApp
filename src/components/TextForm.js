import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClicked = () =>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('Converted to Upper Case','success')
  }

  const handlelowClicked = () =>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert('Converted to Lower Case','success')
    
  }

  const handleClearClicked = () =>{
    let newText = "";
    setText(newText)
    props.showAlert('Text Cleared','success')
  }

  const handleOnChange = (event) =>{
    setText(event.target.value)
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied to clipboard','success')
  }

  const handleExtraSpaces =() => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert('Extra spaces removed','success')

  }

  const [text,setText] = useState('');
  return (
    <>
    <div className='container' style={{color : props.mode === 'dark'?'white' : 'black'}}>
      <h1>{props.heading}</h1>
       <div className="mb-3">
          {/* <label for="myBox" class="form-label">Email address</label> */}
          <textarea className="form-control" id='myBox' rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey' : 'white',color : props.mode === 'dark'?'white' : 'black'}}> </textarea>
          {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
       </div>
       <button className='btn btn-primary mx-2' onClick={handleUpClicked}>Convert to Uppercase</button>
       <button className='btn btn-primary mx-2' onClick={handlelowClicked}>Convert to Lowercase</button>
       <button className='btn btn-primary mx-2' onClick={handleClearClicked}>Clear Text</button>
       <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
       <button className='btn btn-primary mx-2 my-4' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       
    </div>
    <div className='container my-3' style={{color : props.mode === 'dark'?'white' : 'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something in the text box above to preview'}</p>


    </div>
    </>
  )
}
