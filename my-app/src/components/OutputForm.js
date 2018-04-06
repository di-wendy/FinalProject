import * as React from 'react';
import { connect } from 'react-redux';
import { Individual } from './Individual';

import autoscroll from 'autoscroll-react'

class OutputForm extends React.Component {
    render(){
        return(<div className='scrollDiv'>
                {this.props.messages.map(message => <Individual key={message.createdAt} message={message}/>)}
            </div>
        )
    }
}

export default autoscroll(OutputForm)