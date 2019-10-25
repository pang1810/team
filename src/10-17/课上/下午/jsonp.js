import jsonp from "jsonp";
let getBaidu = qure => {
	return new Promise((resolve, reject) => {
		jsonp(
			"http://suggestion.baidu.com/su?wd=" + qure, {
				param: "cb"
			},
			(err, data) => {
				if (err) {
					reject(err);
					alert("网路错误，稍后重试！");
				} else {
					resolve(data);
				}
			}
		);
	});
};
export default getBaidu;