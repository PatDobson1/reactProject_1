// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDom from 'react-dom';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import Page_home from './Page_home';
    import Page_about from './Page_about';
    import Page_samples from './Page_samples';
    import Page_contribute from './Page_contribute';
    import Page_contact from './Page_contact';
// -----------------------------------------------------------------------------

class Content extends React.Component{
    constructor(props){
        super(props);
        this.menuHandler = this.menuHandler.bind(this);
    }
    menuHandler(target){
        this.props.menuHandler(target);
    }
    render(){
        let page = '';
        switch(this.props.currentPage){
            case 'home' :
                page = <Page_home menuHandler={this.menuHandler} />
            break;
            case 'about' :
                page = <Page_about />
            break;
            case 'samples' :
                page = <Page_samples data={this.props.data} />
            break;
            case 'contribute' :
                page = <Page_contribute />
            break;
            case 'contact' :
                page = <Page_contact />
            break;
        }
        return(
            <div className="content">
                {page}
            </div>
        )
    }
}

export default Content;
