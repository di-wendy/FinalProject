import React from 'react';
import { connect } from 'react-redux';

export class InputForm extends React.Component {

    
    constructor() {
        super();
        this.nameRef = React.createRef();
        this.messageRef = React.createRef();
        this.imageRef = React.createRef();     
    }

    render(){
        return(<form>
                <label htmlFor="name" >Name</label>
                    <input type="text" id="name" name="nameInput" ref={this.nameRef}/>
                <label htmlFor="message">Message</label>
                    <input type="text" id="message" name="messageInput" ref={this.messageRef}/>
                <label htmlFor="image">Image</label>
                    <input type="text" id="image" name="imageInput" ref={this.imageRef}/>
                <button type="button" onClick={()=> {
                    this.props.chat.send({
                        name : this.nameRef.current.value,
                        message : this.messageRef.current.value,
                        image : this.imageRef.current.value
                    }).then(({id}) => {
                        console.log(id)
                    }).catch(e => {
                        console.log(e)
                    })
                    
                }}>Send</button>
            </form>
        )
    }
}

/*
const mapStateToProps = state => {
    return {
      name: state.name,
      message: state.message,
      image: state.image
    }
}

export default connect(mapStateToProps, null)(InputForm)
*/