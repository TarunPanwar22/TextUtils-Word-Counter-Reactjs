// import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React from 'react'

export default function About(props) {
    // const [myStyle , setmyStyle ] = useState({
    //     color : 'black', 
    //     backgroundColor: 'white'
    // })
    let myStyle ={
        color: props.mode ==='dark'?'white': '#042743',
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white'
    }

    // const [btntext , setbtntext ] = useState("Enable Dark Mode ");

    // const toggleStyle = () =>{
    //     if ( myStyle.color === 'black'){
    //         setmyStyle ({
    //             color : 'white', 
    //             backgroundColor: 'black'
    //         })
    //         setbtntext("Enable light mode");

    //     }

    //     else {
    //         setmyStyle({
    //             color: 'black', 
    //             backgroundColor : 'white',
    //             border: '1px solid white'
    //         })
    //         setbtntext("Enable light mode");
    //     }
    // }
        return (
                    <div className="container" style={{color: props.mode ==='dark'?'white': '#042743',}}>
                                <h1 className='my-3'>About Us</h1>
                            <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button "style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                            <strong>Analyze Your text</strong>
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"  style={myStyle}>
                            <div className="accordion-body">
                            TextUtils gives you a way to analyze your text quickly and efficiently . Be it word count , character count or
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to use</strong>
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style= {myStyle}>
                            <div className="accordion-body"> 
                                TextUtils is a ree character counter tool that provides instant character count & statistics for a given text . TextUtils reports the number of words and character . Thus is is suitable for writing text with word / character limit 
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Comparateble</strong>
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                This word counter software works in any web browers such as Chrome , firefox , Internet Explorer , Safari , Opersa . It suits to count character in facebook , blog , books , excel , document , pdf document , essays , etc .
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="container my-2">
                    <button className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
                    </div> */}
                </div>
  )
}
