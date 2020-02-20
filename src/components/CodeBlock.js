// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDom from 'react-dom';
// -----------------------------------------------------------------------------

class CodeBlock extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <p className="sample">{this.props.codesample}</p>
                <p>
                    <a>Download</a>
                </p>
            </div>
        )
    }
}

export default CodeBlock;
