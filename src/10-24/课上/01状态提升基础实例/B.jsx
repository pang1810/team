import React from 'react';
//dangerouslySetInnerHTML: 相当于vue中的 v-html

export default props => {
    return <div dangerouslySetInnerHTML={{
        __html: props.text
    }}>

    </div>
}