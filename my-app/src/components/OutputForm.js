import * as React from 'react';
import { connect } from 'react-redux';
import { Individual } from './Individual';

export class OutputForm extends React.Component {
    render(){
        return(<div>
            <Individual />
            </div>
        )
    }
}