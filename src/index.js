// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDom from 'react-dom';
    import styles from './style/style';
    const appRoot = document.getElementById('app');
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import Header from './components/Header';
    import Content from './components/Content';
    import Footer from './components/Footer';
// -----------------------------------------------------------------------------

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { currentPage: 'home' };
        this.menuHandler = this.menuHandler.bind(this);
    }
    menuHandler(target){
        this.setState({ currentPage:target });
        window.scrollTo(0,0);
    }
    render(){
        return(
            <>
                <Header menuHandler={this.menuHandler} />
                <Content currentPage={this.state.currentPage} />
                <Footer menuHandler={this.menuHandler} />
            </>
        )
    }
}

// -- Render -------------------------------------------------------------------
    ReactDom.render( <App />, appRoot);
