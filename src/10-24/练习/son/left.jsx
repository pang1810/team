import React from 'react';
import '../index.css'

export default props => {
    return(
        <div>
            <div className="left">
                {props.text}
            </div>
        </div>
    );
}