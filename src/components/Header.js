// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDom from 'react-dom';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import Logo from './Logo';
    import Menu from './Menu';
// -----------------------------------------------------------------------------

class Header extends React.Component{
    constructor(props){
        super(props);
        this.menuHandler = this.menuHandler.bind(this);
    }
    menuHandler(target){
        this.props.menuHandler(target);
    }
    mobileMenuHandler(){
        console.log("mobileMenuHandler");
        document.getElementById('menu').style.display = 'block';
    }
    render(){
        return(
            <div className="header">
                <Logo position="headerLogo" />
                <Menu menuHandler={this.menuHandler} />
                <span id="mobileMenu" onClick={this.mobileMenuHandler}></span>
            </div>
        )
    }
}

export default Header;
