// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDom from 'react-dom';
    import styles from './style/style';
    const appRoot = document.getElementById('app');
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import { Header } from './components/Header';
    import Content from './components/Content';
    import Footer from './components/Footer';
// -----------------------------------------------------------------------------

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <Header />
                <Content />
                <Footer />
            </>
        )
    }
}

// -- Render -------------------------------------------------------------------
    ReactDom.render( <App />, appRoot);
