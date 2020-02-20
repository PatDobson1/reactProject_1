// -- Setup ------------------------------------
    import React from 'react';
    import ReactDom from 'react-dom';
// ---------------------------------------------

class Hero extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const style = { backgroundImage: 'url(' + this.props.image + ')' };
        const bannerContents = [];
        if( this.props.type === 'main' ){
            bannerContents.push(
                <div key="1" className="heroBanner" style={style}>
                    <h1>{this.props.text}</h1>
                </div>
            )
        }else if( this.props.type == 'sub' ){
            bannerContents.push(
                <div key="1" className="smallHero" style={style} />
            )
        }
        return bannerContents
    }
}

export default Hero;
