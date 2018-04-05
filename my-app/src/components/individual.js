import * as React from 'react';

export class Individual extends React.Component {
    
    render(){
        return(
            <div>
                <span>
                    <p className='Name'>{this.props.message.name}</p>
                </span>
                <span>
                    <p>{this.props.message.message}</p>
                    <img src={this.props.message.image}/>
                </span>
            </div>
        )
    }
}