// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDom from 'react-dom';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import Hero from './Hero';
    import PageBox from './PageBox';
// -----------------------------------------------------------------------------

class Page_home extends React.Component{
    constructor(props){
        super(props);
        this.menuHandler = this.menuHandler.bind(this);
    }
    menuHandler(target){
        this.props.menuHandler(target);
    }
    render(){
        return(
            <>
                <Hero type="main" text='<ThinkBig />' image="background_home.jpg" />
                <div className="pageContent">
                    <h1 className="big centre">We create coding samples...<br />So you don't need to think about it</h1>
                    <hr />
                    <div className="pageBoxes">
                        <PageBox type="view" title="View our code samples" text="<p>Check out all the code samples in our database</p>" target="samples" menuHandler={this.menuHandler} />
                        <PageBox type="submit" title="Submit a code sample" text="<p>Not what you want ?</p><p>Submit your own code sample</p>" target="contribute" menuHandler={this.menuHandler} />
                        <PageBox type="download" title="Download our code samples" text="<p>Like what you see ?</p><p>Download a sample</p>" target="samples" menuHandler={this.menuHandler} />
                    </div>
                </div>
            </>
        )
    }
}

export default Page_home;
