var React = require('react');
var ReactDOM = require('react-dom');
var MessageActionCreator = require('../actions/MessageActionCreator.js');

var DeletemessageComponent = React.createClass({
	render:function(){
		// var id = this.props.id;
		return(
			
				<button onClick={this.clickHandler}> 删除 {this.props.name}</button>
				
		)
	},
	clickHandler:function(){
		alert('删除？');
		MessageActionCreator.deleteOne({id:this.props.name});
	}
});

module.exports = DeletemessageComponent;