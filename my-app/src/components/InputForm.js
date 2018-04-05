import React from 'react';
//import { connect } from 'react-redux';

export class InputForm extends React.Component {

    
    constructor() {
        super();
        this.nameRef = React.createRef();
        this.messageRef = React.createRef();
        this.imageRef = React.createRef();     
    }

    render(){
        return(<form>
                <div class="form-row">
                <div class="form-group col-md-6">
                    <label htmlFor="name" >Name</label>
                        <input type="text" id="name" name="nameInput" ref={this.nameRef}/>
                </div>
                <div class="form-group col-md-6">
                    <label htmlFor="message">Message</label>
                        <input type="text" id="message" name="messageInput" ref={this.messageRef}/>
                </div>
                <div class="form-group col-md-6">
                <label htmlFor="image">Image</label>
                    <input type="text" id="image" name="imageInput" ref={this.imageRef}/>
                </div>
                <button type="button" onClick={()=> {
                    if(this.nameRef.current.value.length === 0){
                        alert("Name must be at least 1 character")
                    }
                    else{
                        if (this.imageRef.current.value.length >0){
                            if(this.imageRef.current.value.startsWith('http://') && 
                            this.imageRef.current.value.endsWith('.jpg')){
                                this.props.chat.send({
                                    name : this.nameRef.current.value.value,
                                    message : this.messageRef.current.value,
                                    image : this.imageRef.current.value
                                }).then(({id}) => {
                                    console.log(id)
                                }).catch(e => {
                                    console.log(e)
                                })
                            }
                            else{
                                alert("Image must be a URL");
                            }
                        }
                        else{
                            this.props.chat.send({
                                name : this.nameRef.current.value,
                                message : this.messageRef.current.value
                            }).then(({id}) => {
                                console.log(id)
                            }).catch(e => {
                                console.log(e)
                            })
                        }
                    }
                }}>Send</button>
            </div>
            </form>
        )
    }
}