### `npm start` 启动本地开发环境

### `npm test`	启动测试用例【没用】

### `npm run build`	启动项目打包

### `npm run eject`	释放被隐藏起来的配置文件和所有依赖，该命令只能运行一次
为什么要用key，给谁用：
	放在就近的数组上下文中使用
	key是用来diff算法：
		当React作diff时，只要子元素有key属性，便会去原v-dom树中相应位置(当前横向比较的层级)寻找是否有同key元素，比较它们是否完全相同，若是则复用该元素，免去不必要的操作。
API:
	1.React.Fragment 占位组件
	2.React.createElement 创建虚拟DOM
	3.React.children.map 显式渲染
	4.props.children 隐式渲染
条件判断：
	if switch && || ! ?:
10-9：
	1.组件：无状态组件 === 函数
	2.组件的三个要素：类型(自定义组件/原生DOM类型)，属性，内容或子元素
	3.React.createElement() 创建虚拟DOM/元素的：
		3.1三个参数：原生DOM元素类型，属性(对象)，内容或子元素[如果子元素就一个，那么直接写，如果子元素有多个，需要将子元素放字符串里，加key属性]
	*自定义组件在使用时必须首写字母是大写，<MyCom/>;
	*同意自定义首写字母一定不能是小写，因为小写的时候，react 会默认从原生的DOM库里去找

10-10：
	jsx是看上去很像html的一种js扩展语法，jsx被称为是createElement的语法糖
	jsx也是一个表达式，jsx防止注入攻击xss
	(tab-index:1	控制tab键)
	1.jsx 是createElement的语法糖，一种js扩展语法，看想去像html但底层是js，所以拥有全部js特性
	2.组件
		2.1无状态组件 它只接收一个props属性，
			优点：加载快、渲染快 
			缺点：功能单一、只能存一些dom片段 
			使用：ui组件去使用
		2.2class组件 它拥有全部的react特性，
			优点：功能强大 
			缺点：需要实例化、相对比无状态组件加载慢、渲染慢 
			使用：作为功能组件
10-11：
	1.点组件概念：一个对象点属性得出的元素类型并使用jsx来书写
		1.1优点：灵活、可复用性强
		1.2点组件是用props控制得
	2.模块化开发：每一个jsx文件就是一个独立的组件，它就像积木一样哪用到就复用；
		2.1优点：代码少、结构精简、便于解构；
	3.项目解构：
		3.1分布式[优先使用]：它是以模块为单位，每一个模块都是一个固定的文件夹，该文件夹内有独立的静态页面；
		3.2集中式：以文件类型分类；
10-14：
	props
	-属性
	-props=properties
	-属性是与生俱来，无法自己改变的
	-是父组件传给子组件的
	1.state状态：
		定义：class组件自有的状态，不可以直接修改，必须使用setState方法；
		作用：控制组件内的元素的状态；
	2.props传值及组件间的通信；
	3.属性的默认值，defaultProps：只有class组件有；
	4.属性的类型验证：propTypes：只有class组件有，需要引入第三方的包'props-types'；
	5.总结：
		5.1 state和props的相同点：1、都是存数据的
								 2、修改后都会触发更新
								 3、都是控制元素的
		5.2 state和props的不同点：1、状态是组件自身的，属性是父级传给子级的
								 2、态是组状件自身可以修改的，属性必须是父级修改的，自己不能修改
								 3、属性可以设置默认值和类型验证，状态没有
10-15：
	1.在react里修改state是异步的，所以我们如果需要修改后立即拿到被修改后的state，需要在使用setState的时候传函数的形式去写；
	2.setState({}); 默认就是异步修改
	3.setState(function,function); 将异步处理成同步： 
		这两个回调函数，第一个是用来修改state的，第二个回调是获取被修改后的state
10-16：
	1、生命周期：程序在不同阶段所呈现的状态；
		挂载时：contructor、runder、componentDidMount
		更新时：render、componentDidUpdate 
		卸载时：component­Will­Unmount
	* component[组件]、Did[完成]、will[准备]、Mount[挂载]、unMount[卸载]、update[更新]
	2.shouldComponentUpdate：不常用生命周期函数
		定义：用来拦截新的属性和状态，用新旧值来控制组件是否更新，从而优化性能；
		参数：第一个是新的属性，第二个是新的状态
		注意：它不能对强制更新做处理，因为强制更新没有新的属性和状态；
	3.forceUpdate：强制更新
10-17：
	箭头函数自动绑定this
	在表单里的button如果不指定类型，它默认是submit
10-21：
	-元素的key只有放在就近的数组的上下文中才有意义
	-key只是在兄弟节点之间必须唯一