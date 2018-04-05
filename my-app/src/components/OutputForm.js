import * as React from 'react';
import { connect } from 'react-redux';
import { Individual } from './Individual';

import autoscroll from 'autoscroll-react'

class OutputForm extends React.Component {
    render(){
        return(<container className='crollDiv'>
                {this.props.messages.map(message => <Individual key={message.creatAt} message={message}/>)}
            </container>
        )
    }
}

export default autoscroll(OutputForm)