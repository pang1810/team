import React from 'react';
//svg矢量图：它不是像素构成，它是线和颜色构成。优点：放大不会失真，不会模糊。 缺点：颜色单一，不会做丰富图片
import Son from './son';
//引入son1
import Son1 from './son1';
//css样式
import './css/index.css';
import { Pagination } from 'antd';

function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  }

export default class Index extends React.Component{
    render(){
        const imgs1=[
            {
                src:require('./img/Adobe-CC-2019-Win-ALL.jpg'),
            },
            {
                src:require('./img/Adobe-CC-2019-Win-ALL.jpg'),
            },
            {
                src:require('./img/Adobe-CC-2019-Win-ALL.jpg'),
            },
            {
                src:require('./img/Adobe-CC-2019-Win-ALL.jpg'),
            },
        ];
        const imgs=[
            {
                src:require('./img/AAF-Relinker.jpg'),
                name:'AE脚本-导入AAF时素材自动重新链接工具 AAF Relinker v1.1',
                time:'14:56',
                pht:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg')
            },
            {
                src:require('./img/AAF-Relinker.jpg'),
                name:'AE脚本-导入AAF时素材自动重新链接工具 AAF Relinker v1.1',
                time:'14:56',
                pht:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg')
            },
            {
                src:require('./img/AAF-Relinker.jpg'),
                name:'AE脚本-导入AAF时素材自动重新链接工具 AAF Relinker v1.1',
                time:'14:56',
                pht:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg')
            },
            {
                src:require('./img/AAF-Relinker.jpg'),
                name:'AE脚本-导入AAF时素材自动重新链接工具 AAF Relinker v1.1',
                time:'14:56',
                pht:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg')
            },
            {
                src:require('./img/AAF-Relinker.jpg'),
                name:'AE脚本-导入AAF时素材自动重新链接工具 AAF Relinker v1.1',
                time:'14:56',
                pht:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg')
            },
            {
                src:require('./img/AAF-Relinker.jpg'),
                name:'AE脚本-导入AAF时素材自动重新链接工具 AAF Relinker v1.1',
                time:'14:56',
                pht:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg')
            },
            {
                src:require('./img/AAF-Relinker.jpg'),
                name:'AE脚本-导入AAF时素材自动重新链接工具 AAF Relinker v1.1',
                time:'14:56',
                pht:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg')
            },
            {
                src:require('./img/AAF-Relinker.jpg'),
                name:'AE脚本-导入AAF时素材自动重新链接工具 AAF Relinker v1.1',
                time:'14:56',
                pht:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg')
            },
            {
                src:require('./img/AAF-Relinker.jpg'),
                name:'AE脚本-导入AAF时素材自动重新链接工具 AAF Relinker v1.1',
                time:'14:56',
                pht:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg')
            },
            {
                src:require('./img/AAF-Relinker.jpg'),
                name:'AE脚本-导入AAF时素材自动重新链接工具 AAF Relinker v1.1',
                time:'14:56',
                pht:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg')
            },
            {
                src:require('./img/AAF-Relinker.jpg'),
                name:'AE脚本-导入AAF时素材自动重新链接工具 AAF Relinker v1.1',
                time:'14:56',
                pht:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg')
            },
            {
                src:require('./img/AAF-Relinker.jpg'),
                name:'AE脚本-导入AAF时素材自动重新链接工具 AAF Relinker v1.1',
                time:'14:56',
                pht:require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg')
            },
        ];
        
        return (
            <div className='box'>
                {
                    imgs1.map((item,index)=>{
                        return <Son1 src={item.src} key={index}/>
                    })
                },
                {
                    imgs.map((item,index)=>{
                        return <Son src={item.src} name={item.name} 
                                    time={item.time} pht={item.pht} key={index}/>
                    })
                }
                <Pagination className="pages" total={500} itemRender={itemRender} />
            </div>
        );
    }
}