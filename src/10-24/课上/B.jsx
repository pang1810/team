import React from 'react';
//dangerouslySetInnerHTML: 相当于vue中的 v-html

export default props => {
    return (
        <div>
            <h2 style={{background: props.theme}}>我是B模块</h2>
        </div>
    );
}