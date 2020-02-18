// -- Setup ------------------------------------
    import React from 'react';
    import ReactDom from 'react-dom';
// ---------------------------------------------

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="footer">
                <hr />
                <p>FOOTER</p>
            </div>
        )
    }
}

export default Footer;
