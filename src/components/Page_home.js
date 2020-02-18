// -- Setup ------------------------------------
    import React from 'react';
    import ReactDom from 'react-dom';
// ---------------------------------------------

class Page_home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <div className="heroBanner">
                    <h1>{'<ThinkBig />'}</h1>
                </div>
                <div className="pageContent">
                    <h1 className="big centre">We create coding samples...<br />So you don't need to think about it</h1>
                    <hr />
                    <div className="pageBoxes">
                        <div className="view">
                            <h2>View our code samples</h2>
                            <span className="boxText">
                                <p>Check out all the code samples in our database</p>
                            </span>
                        </div>
                        <div className="submit">
                            <h2>Submit a code sample</h2>
                            <span className="boxText">
                                <p>Don't like what you see here ?</p>
                                <p>Submit your own code sample</p>
                            </span>
                        </div>
                        <div className="download">
                            <h2>Download our code samples</h2>
                            <span className="boxText">
                                <p>Like what you see ?</p>
                                <p>Download a sample</p>
                            </span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Page_home;
