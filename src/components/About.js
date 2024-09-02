import React, { useState } from 'react'

export default function About() {

    const [mystyle, setMystyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [buttontext, setbuttontext] = useState("Enable Dark mode")


    const toggleStyle = () => {
        if (mystyle.color === 'black') {
            setMystyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbuttontext("Enable Light Mode")
        }
        else {

            setMystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbuttontext("Enable Dark Mode")
        }
    }


    return (
        <div>
            <div className="container" style={mystyle} >
                <h2>About Us</h2>
                <div className="accordion" id="accordionExample" style={mystyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Feature #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" style={mystyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>The first feature of this app is</strong> In this project you can manage The cases(UpperCase and LowerCase) of words.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Feature #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>The second feature of this app is </strong> you can Copy and Clear the Text and You Can remove All the Extra Spaces in your Text .
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Feature #3
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>The third Feature of this app is </strong> You Can Count The no. of Words and letter and also the Approx time required to Read that Text.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container my-2">
                    <button type="button" className="btn btn-dark " onClick={toggleStyle}>{buttontext}</button>
                </div>
            </div>
        </div>
    )
}
