// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDom from 'react-dom';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import Logo from './Logo';
    import Menu from './Menu';
// -----------------------------------------------------------------------------

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.menuHandler = this.menuHandler.bind(this);
    }
    menuHandler(target){
        this.props.menuHandler(target);
    }
    render(){
        const thisYear = new Date();
        return(
            <div className="footer">
                <hr />
                <p>Coding sample is committed to saving you the hard work of thinking for yourself</p>
                <p>Why not let us (and our contributers) do the work for you?</p>
                <p>All content &copy;{thisYear.getFullYear()} Coding sample</p>
                <Menu  menuHandler={this.menuHandler} />
                <Logo position="footerLogo" />
            </div>
        )
    }
}

export default Footer;
