//表单验证
//逻辑：根据传进来的不同的类型判断不同的表单
//公共的常量字典
const DICT = {
	USER: {
		MINLEN: 0,
		MAXLEN: 2,
		ERR: {
			staet: 'err',
			msg: '用户名不能为空,且长度不能小于两位'
		}
	},
	PSW: {
		MINLEN: 0,
		MAXLEN: 6,
		ERR: {
			state: 'err',
			msg: '密码不能为空，长度不小于6位'
		}

	}
}

//公共的判断函数
const vfusername = value => {
	if (value.length === DICT.USER.MINLEN || value.length < DICT.USER.MINLEN) {
		return DICT.USER.ERR;
	}
	return { state: 'success' }
}
const vfpassword = value => {
	if (value.length === DICT.PSW.MINLEN || value.length < DICT.PSW.MINLEN) {
		return DICT.PSW.ERR;
	}
}
export const login = data => {
	//根据传入的值判断
	let user = vfusername(data.username);
	if (user.state !== 'success') {
		return user.msg;
	}
	let psw = vfpassword(data.password);
	if (psw.state !== 'success') {
		return psw.msg;
	}
	//全部通过
	return null;
}

export const register = (type, value) => {

}