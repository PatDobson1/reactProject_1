// -- Setup ------------------------------------
    import React from 'react';
    import ReactDom from 'react-dom';
// ---------------------------------------------

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="header">
                <Logo />
            </div>
        )
    }
}

class Logo extends React.Component{
    render(){
        return(
            <div className="logo"><span>Coding sample</span></div>
        )
    }
}

export { Header, Logo };
