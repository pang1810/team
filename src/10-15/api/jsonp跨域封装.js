// let url = 'http://suggestion.baidu.com/su?wd=' + wd
// jsop(url, { param: 'cd' })
//jsonp安装命令 cnpm i -S jsonp
//参数 ：第一个url地址，第二个 请求参数，第三个回调函数
//第二个参数里使用param定义回调函数
//第三个参数回调函数有两个参数，第一个是请求失败，第二个是请求成功
import jsonp from 'jsonp';

let getBaidu = qure => {
	return new Promise((resolve, reject) => {
		jsonp('http://suggestion.baidu.com/su?wd=' + qure, { param: 'cd' }, (err, data) => {
			if (err) {
				reject(err);
				alert('错误');
			} else {
				resolve(data);
			}
		})
	})
}
export default getBaidu