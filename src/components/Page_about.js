// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDom from 'react-dom';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import Hero from './Hero';
// -----------------------------------------------------------------------------

class Page_about extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <Hero type='sub' image='background_about.jpg' />
                <div className="pageContent">
                    <h1 className="big centre">Find out more about us</h1>
                    <p>Well, not about 'us' as it happens but more about this site...</p>
                    <p>This site is part one in series of React 'test' applications created to highlight React skills.</p>
                    <p>This site is a simple one page app created using basic React with Webpack and JSX. It uses React class components, HTML5 & SCSS to create the look of a webpage in a single page application.</p>
                    <p>It can be cloned from GitHub here : <a href="https://github.com/PatDobson1/reactProject_1.git" target="_blank">https://github.com/PatDobson1/reactProject_1.git</a></p>
                    <p>Because the site is 'basic' React, there are no extra modules used. The pages change based on menu clicks from children components and the state is 'raised' to the top level App where it is passed down into the Content component</p>
                    <p>The data for the code samples is a randomly generated JSON file from www.mockaroo.com</p>
                    <p>For a full on web-ready, SEO friendly site why not check out <a href="https://www.broadstonerarebreeds.co.uk" target="_blank">www.broadstonerarebreeds.co.uk</a>, this site is also written in React but uses react-router and react-helmet to create SEO friendly URLs and page specific meta data.</p>
                </div>
            </>
        )
    }
}

export default Page_about;
