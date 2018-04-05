import * as React from 'react';

export class Individual extends React.Component {
    
    render(){
        return(
            <div>
                <span>
                    <h2 className='Name'>Di Wang</h2>
                </span>
                <span>
                    <p>Hello World</p>
                    <img src='https://www.gstatic.com/webp/gallery/4.sm.jpg'/>
                </span>
            </div>
        )
    }
}