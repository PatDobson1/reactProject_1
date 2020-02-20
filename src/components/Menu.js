// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDom from 'react-dom';
// -----------------------------------------------------------------------------

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.menuHandler = this.menuHandler.bind(this);
    }
    menuHandler(target){
        this.props.menuHandler(target);
    }
    render(){
        return(
            <div id="menu">
                <MenuItem menuHandler={this.menuHandler} target="home" />
                <MenuItem menuHandler={this.menuHandler} target="about" />
                <MenuItem menuHandler={this.menuHandler} target="samples" />
                <MenuItem menuHandler={this.menuHandler} target="contribute" />
                <MenuItem menuHandler={this.menuHandler} target="contact" />
            </div>
        )
    }
}

class MenuItem extends React.Component{
    constructor(props){
        super(props);
        this.menuHandler = this.menuHandler.bind(this);
    }
    menuHandler(e){
        e.preventDefault();
        this.props.menuHandler(e.target.target);
        if( window.innerWidth <= 768 ){
            document.getElementById('menu').style.display = 'none';
        }
    }
    render(){
        return(
            <a onClick={this.menuHandler} target={this.props.target}>{this.props.target}</a>
        )
    }
}

export default Menu;
