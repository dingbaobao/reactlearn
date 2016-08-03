var MessageServerActionCreators = require("../actions/MessageServerActionCreators.jsx");

module.exports = {
	getAllMsg:function(){
		var rawMsg = [
			{
				id:"123124123",
				content:"hello world1"
			}
			,
			{
				id:"123124125",
				content:"hello world2"
			},
			{
				id:"123124126",
				content:"hello world3"
			},
			{
				id:"123124127",
				content:"hello world4"
			},
			{
				id:"123124128",
				content:"hello world5"
			}
		];
		//模拟数据请求
		setTimeout(function(){
			MessageServerActionCreators.receiveAll( rawMsg );
		},100);

	}
}