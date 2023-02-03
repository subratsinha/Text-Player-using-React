import React, {useState} from 'react'

export default function About(props) {

    // const [mystyle , setmystyle] = useState({

    //     color:'black',
    //     backgroundColor:'white'
    // })

    let mystyle={
        color: props.mode==='dark'?'white':'#042743',
        backgoundColor: props.mode==='dark'?'#042743':'white'

    }

    // const [btntext,setbtntext] = useState("Enable dark mode")

    // const togglestyle = ()=>{
    //     if(mystyle.color=='white')
    //     {
    //         setmystyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })

    //         setbtntext("Enable dark mode")
    //     }

    //     else
    //     {
    //         setmystyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })

    //         setbtntext("Enable light mode")

    //     }
    // }

    // let mystyle={
    //     color:'white',
    //     backgroundColor:'black'
    
    return (

        
        <div className="container" style={mystyle}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" style={mystyle}>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show"  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            TextUtils gives you the way to analyze your text quickly and efficiently. Be it word count, character count or time analysis to read the paragraph.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse"  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body"style={mystyle}>
                        TextUtils is the free word counter tool that provide instant character count and word count statistics for a given text. It is suitable to writing paragraph having word or character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong> Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse"  aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body"style={mystyle}>
                            This web application works in any web browser such as chrome, firefox, edge, opera mini, safari.
                        </div>
                    </div>
                </div>
            </div>

            {/* <button type="button" onClick={togglestyle}  className="btn btn-primary my-3"> {btntext}</button> */}



        </div>
    )
}
