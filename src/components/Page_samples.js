// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDom from 'react-dom';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import Hero from './Hero';
    import CodeBlock from './CodeBlock';
// -----------------------------------------------------------------------------

class Page_samples extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const codeData = this.props.data;
        const codeBlocks = [];
        codeData.forEach(function(item,key){
            codeBlocks.push(
                <CodeBlock title={item.title} description={item.description} codesample={item.codesample} />
            )
        })
        return(
            <>
                <Hero type='sub' image='background_samples.jpg' />
                <div className="pageContent">
                    <h1 className="big centre">Browse our coding samples</h1>
                    <p>Note that the download button doesn't do anything</p>
                    <div className="codeBlockHolder">
                        {codeBlocks}
                    </div>
                </div>
            </>
        )
    }
}

export default Page_samples;
