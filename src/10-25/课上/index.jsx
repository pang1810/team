import React, { Component } from 'react';
//懒加载：按需加载组件 --- 动态加载组件(代码切割)

//默认情况下webpack会将引入的所有组件都打包成一个js文件，当用户访问时，会造成请求消耗，对有些不常用额功能也会被加载进来，造成不必要的浪费
//解决：使用兰记载，按需加载组件，节省性能开销，拆分js文件，当用户操作需要显示该组件的时候才会请求加载进来
//语法：使用react.lazy方法加载组件
//使用react.Suspense组件包裹懒加载组件，该组件上有一个fallback属性，当懒加载组件还未加载成功时，显示fallback属性里的内容
const Child = React.lazy(() => import("./child"));
class index extends Component {
    render() {
        return (
            <div>
                <React.Suspense fallback='loading.....'>
                    <Child />
                </React.Suspense>
            </div>
        );
    }
}

export default index;