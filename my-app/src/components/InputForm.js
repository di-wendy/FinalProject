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
                        if(this.nameRef.current.value.length === 0){
                            alert("Name must be at least 1 character")
                        }
                        else{
                            if (this.imageRef.current.value.length > 0){
                                if(this.imageRef.current.value.startsWith('http'))
                                {
                                    if(this.messageRef.current.value.length===0){
                                        this.props.chat.send({
                                            name : this.nameRef.current.value,
                                            image : this.imageRef.current.value
                                        }).then(({id}) => {
                                            //console.log(id)
                                        }).catch(e => {
                                            console.log(e)
                                        })
                                    }
                                    else{
                                        this.props.chat.send({
                                            name : this.nameRef.current.value,
                                            message : this.messageRef.current.value,
                                            image : this.imageRef.current.value
                                        }).then(({id}) => {
                                            //console.log(id)
                                        }).catch(e => {
                                            console.log(e)
                                        })
                                    }
                                }
                                else{
                                    alert("Image must be a valid URL");
                                }
                            }
                            else {
                                if(this.messageRef.current.value.length === 0){
                                    alert("Please enter message or image url")
                                }
                                else{
                                    this.props.chat.send({
                                        name : this.nameRef.current.value,
                                        message : this.messageRef.current.value
                                    }).then(({id}) => {
                                        //console.log(id)
                                    }).catch(e => {
                                        console.log(e)
                                    })
                                }
                            }
                        }
                    }}>Send</button>
                </div>
            </form>
        )
    }
}