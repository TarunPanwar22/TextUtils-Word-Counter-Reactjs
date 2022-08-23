import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
            // console.log("UpperCase was clicked " +text );
            let newText = text.toUpperCase(); 
            setText(newText);
            props.showAlert("Converted to Upper Case ", "success")
    }

    const handleLowClick = () =>{
        // console.log("UpperCase was clicked " +text );
        let newText = text.toLowerCase(); 
        setText(newText);
        props.showAlert("Converted to Lower Case ", "success")
}

const handleClearClick = () =>{
    // console.log("UpperCase was clicked " +text );
    let newText = ""; 
    setText(newText);
    props.showAlert("Converted to Clear Text ", "success");
} 

    const handleonChange =(event) =>{
        // console.log("on Change ");
        setText(event.target.value);
        props.showAlert("Converted on Handle Change  ", "success");

        
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Converted to Handle Copy ", "success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join (" "));
        props.showAlert("Converted to Handle Extra Spaces ", "success");

    }

    const [text , setText ] = useState('');
    // text = "new text " // Wrong way to change the text 
    // setText("new text ");   // Correct way to Change the state 
  return (
      <>
       <div className='container' style ={{color: props.mode === 'dark' ? 'white': '#042743' }}>
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value= {text} style ={{backgroundColor: props.mode === 'dark' ? '#13466e': 'white' , color: props.mode === 'dark' ? 'white': '#042743'}} onChange={handleonChange}id="myBox" rows="8"></textarea>
</div> 
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase </button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase </button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Convert to Clear</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>CopyText</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>handleExtraSpaces</button>



    </div>
    <div className="container" my-3 style={{color: props.mode === 'dark' ? 'white': '#042743'}}>
        <h2 style ={{color: props.mode === 'dark' ? 'white': 'black'}}>Your text summary</h2>
        <p  style ={{color: props.mode === 'dark' ? 'white': 'black'}}>{text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} words and {text.length} </p>
        <p  style ={{color: props.mode === 'dark' ? 'white': 'back'}}> {0.008 * text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes read </p>
        <h1 style ={{color: props.mode === 'dark' ? 'white': 'black'}} >Preview</h1>
        <p  style ={{color: props.mode === 'dark' ? 'white': 'black'}} >{text.length>0?text: "Nothing to Preivew"}</p>
    </div>
    </>
     
  )
}