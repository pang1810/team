import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.css'
import imgSrc from './img/1.jpg'

function onChange(a, b, c) {
    console.log(a, b, c);
  }

class index extends Component {
    render() {
        return (
            
               <div className='a'>
                <div className='b'>
                <Carousel afterChange={onChange}>
                    <div>
                    <img src={imgSrc} alt="" style={{height:"360px",width:"1200px"}}/>
                    </div>
                    <div>
                    <img src={imgSrc} alt="" style={{height:"360px",width:"1200px"}}/>                    
                    </div>
                    <div>
                    <img src={imgSrc} alt="" style={{height:"360px",width:"1200px"}}/>                    
                    </div>
                    <div>
                    <img src={imgSrc} alt="" style={{height:"360px",width:"1200px"}}/>                    
                    </div>
                </Carousel>
                </div>    
               </div> 
            
        );
    }
}

export default index;