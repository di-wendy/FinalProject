import React from 'react';

export class InputForm extends React.Component {

    constructor() {
        super();
        this.nameRef = React.createRef();
        this.messageRef = React.createRef();
        this.imageRef = React.createRef();     
    }

    render(){
        return(<form className="form">
                    <div className="form-group col-md-6">
                        <label htmlFor="name" >Name</label>
                            <input className='nameInput' type="text" id="name" name="nameInput" ref={this.nameRef}/>
                    <div className="form-group col-md-6">
                        <label htmlFor="message">Message</label>
                            <input type="text" id="message" name="messageInput" ref={this.messageRef}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="image">ImageURL</label>
                            <input type="text" id="image" name="imageInput" ref={this.imageRef}/>
                    </div>
                    <button className="btn btn-primary btn-lg" type="button" onClick={()=> {
                        
                    }}>Send</button>
                </div>
            </form>
        )
    }
}