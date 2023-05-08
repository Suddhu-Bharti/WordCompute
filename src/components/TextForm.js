import React, {useState} from 'react'


let includedTextArea = false;
let newText;
  


export default function TextForm(props) {
  
  const outputText = document.querySelector(".outputText")
  const [text, setText] = useState('');

  // text = "new text";  wrong way to change the state
  // setText("new text");  //correct way to change the state

  const includeTextArea = () => {
    if(!includedTextArea){
      includedTextArea = true;
    }else {
      includedTextArea = false;
    }

    props.showingAlert("TextArea included!", "success");
  }

  const htmlView = () => {
    // console.log("Uppercase was clicked" + text);
    if(text !== ""){
    outputText.innerHTML = text;
    }
    props.showingAlert("HTML view ready!", "success");
  }

  const upperClick = () => {
    newText = text.toUpperCase();

    if(newText !== ""){
       outputText.textContent = newText;
    }
   
    if(includedTextArea === true){
      setText(newText)
    }

    props.showingAlert("Converted to uppercase!", "success");
  }

  const lowerClick = () => {
    newText = text.toLowerCase();

    if(newText !== ""){
      outputText.textContent = newText;
    }

    if(includedTextArea === true){
      setText(newText)
    }

    props.showingAlert("Converted to lowercase!", "success");
  }

  const clearText = () => {
    if(text !== ""){
      newText = "";
    outputText.innerHTML = newText;
    setText(newText);
    }
    props.showingAlert("All text cleared!", "success");
  }

  const handleCopy = () => {
    // var text = document.getElementById("myBox");
    // text.select(); // select all text in textarea
    // navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges(); // ignore the selection highlight in the textarea

    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();

    props.showingAlert("Copied to clipboard", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));

    props.showingAlert("Extra spaces has been removed successfully!", "success");
  }
  const textValueChange = (event) => {
    // console.log("On change");
    setText(event.target.value)
  }
  
  return (
      <>
        <div>
            <div className="mt-3" style={{color: props.mode === 'light'?"black":"white"}}>
            <h3 className="mb-3" >{props.heading}</h3>

            <textarea style={{backgroundColor: props.mode === 'light'?'white':'#727272', color: props.mode === 'light'?"black":"white"}} className="form-control" value={text} placeholder="Write your text here" onChange={textValueChange} id="myBox" rows="8"></textarea>
            
            </div>

            <div className="mt-2">

            <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light'?"primary":"success"} primary mt-2 mx-1`} onClick={upperClick} >Make Uppercase</button>

            <button  disabled={text.length === 0} className={`btn btn-${props.mode === 'light'?"primary":"success"} primary mt-2 mx-1`} onClick={lowerClick} >Make Lowercase</button>

            <button  disabled={text.length === 0} className={`btn btn-${props.mode === 'light'?"primary":"success"} primary mt-2 mx-1`} onClick={htmlView} >HTML View</button>

            <button  disabled={text.length === 0} className={`btn btn-${props.mode === 'light'?"primary":"success"} primary mt-2 mx-1`} onClick={handleCopy} >Copy Text</button>

            <button  disabled={text.length === 0} className={`btn btn-${props.mode === 'light'?"primary":"success"} primary mt-2 mx-1`} onClick={handleExtraSpaces} >Remove Extra Space</button>

            <button  disabled={text.length === 0} type="button" className={`btn btn-${props.mode === 'light'?"primary":"success"} primary mt-2 mx-1`} onClick={includeTextArea} data-bs-toggle="button" >Include TextArea</button>

            <button  disabled={text.length === 0} className={`btn btn-${props.mode === 'light'?"primary":"success"} primary mt-2 mx-1`} onClick={clearText} >Clear Text</button>

            </div>
        </div>

        <div className="container mt-5" style={{color: props.mode === 'light'?"black":"white"}}>
          <h3>Your Text Summary</h3>
          <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes taken</p>
          <h4>Preview:</h4>
          <p className="outputText">{text === ""?"Nothing to preview!": ""}</p>
        </div>
      </>
        
  )
}

