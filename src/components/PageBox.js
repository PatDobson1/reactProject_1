// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDom from 'react-dom';
// -----------------------------------------------------------------------------

class PageBox extends React.Component{
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(e){
        this.props.menuHandler(e.target.target)
    }
    render(){
        return(
            <a className={this.props.type} onClick={this.clickHandler} target={this.props.target}>
                <h2>{this.props.title}</h2>
                <span className="boxText" dangerouslySetInnerHTML={ {__html: this.props.text}}></span>
            </a>
        )
    }
}

export default PageBox;
