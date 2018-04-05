import React from 'react';
import { connect } from 'react-redux';

export class InputForm extends React.Component {
    render(){
        return(<form>
                <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="nameInput"/>
                <label htmlFor="message">Message</label>
                    <input type="text" id="message" name="messageInput"/>
                <label htmlFor="image">Image</label>
                    <input type="text" id="image" name="imageInput"/>
                <button type="button">Send</button>
            </form>
        )
    }
}