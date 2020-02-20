// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDom from 'react-dom';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import Hero from './Hero';
// -----------------------------------------------------------------------------

class Page_contribute extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            useremail: '',
            codetitle: '',
            codedescription: '',
            codelink: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        sendMail(this.state);
    }
    render(){
        return(
            <>
                <Hero type='sub' image='background_contribute.jpg' />
                <div className="pageContent">
                    <h1 className="big centre">Contribute to our codebase</h1>
                    <p>We rely on your contributions to keep our site running ! Without you and your code we are nothing.</p>
                    <p>You can contribute your code to this site by simply sending a link to the GitHub repo and we will do the rest</p>
                    <p>Use the form below to contribute</p>
                    <form onSubmit={this.handleSubmit} id="contributeForm">
                        <p>
                            <label>Name:</label>
                            <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                            <span>*</span>
                        </p>
                        <p>
                            <label>Email:</label>
                            <input type="text" name="useremail" onChange={this.handleChange} value={this.state.useremail} />
                            <span>*</span>
                        </p>
                        <p>
                            <label>Title:</label>
                            <input type="text" name="codetitle" onChange={this.handleChange} value={this.state.codetitle} />
                            <span>*</span>
                        </p>
                        <p>
                            <label>Description:</label>
                            <textarea name="codedescription" onChange={this.handleChange} value={this.state.codedescription} />
                            <span>*</span>
                        </p>
                        <p>
                            <label>Link:</label>
                            <input type="text" name="codelink" onChange={this.handleChange} value={this.state.codelink} />
                            <span>*</span>
                        </p>
                        <p className="required">
                            <span>*</span> : Required information
                        </p>
                        <p id="emailErrorNote">
                            Please complete the required information
                        </p>
                        <p>
                            <input type="submit" value="Contribute" />
                        </p>
                        <p>Please note that emails from this form are sent to the address you enter in the 'Email' field</p>
                    </form>
                    <div id="emailThankYou">
                        <h2>Thank you for contributing to Coding sample</h2>
                        <p>We will review your code and determine if it's worthy of inclusion</p>
                    </div>
                    <div id="emailError">
                        <h2>There's been an error sending your email</h2>
                        <p>Please refresh the page and try again</p>
                    </div>
                </div>
            </>
        )
    }
}

function sendMail(formContents){
    const formData = [{
        username: formContents.username,
        useremail: formContents.useremail,
        codetitle: formContents.codetitle,
        codedescription: formContents.codedescription,
        codelink: formContents.codelink
    }];
    let sendEmail = formContents.username !== '' && formContents.useremail !== '' && formContents.codetitle !== '' && formContents.codedescription !== '' && formContents.codelink !== '';
    if( !sendEmail ){
        document.getElementById('emailErrorNote').style.display = 'block';
    }
    if(sendEmail){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('contributeForm').style.display = 'none';
                document.getElementById('emailThankYou').style.display = 'block';
            }
            if(xmlhttp.readyState == 4 && xmlhttp.status == 405){
                document.getElementById('contributeForm').style.display = 'none';
                document.getElementById('emailError').style.display = 'block';
            }
            if(xmlhttp.readyState == 4 && xmlhttp.status == 404){
                document.getElementById('contributeForm').style.display = 'none';
                document.getElementById('emailError').style.display = 'block';
            }
        }
        xmlhttp.open('POST', 'contribute.php');
        xmlhttp.send(JSON.stringify(formData));
    }
}

export default Page_contribute;
