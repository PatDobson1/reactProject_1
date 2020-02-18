// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDom from 'react-dom';
// -----------------------------------------------------------------------------

class Logo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={'logo ' + this.props.position}><span>Coding sample</span></div>
        )
    }
}

export default Logo;
