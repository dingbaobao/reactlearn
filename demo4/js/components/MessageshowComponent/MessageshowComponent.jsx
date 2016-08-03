var React = require('react');
var ReactDOM = require('react-dom');
var MsgStore = require( '../../stores/MsgStore.js' );
var MessageActionCreator = require('../../actions/MessageActionCreator.js');
var DeletemessageComponent = require('../DeleteMsgComponent.jsx');

var divStyle = {
  color: 'blue',
  fontSize:'20px',
  marginLeft:'150px'
};
var href = {
  href: 'http://www.baidu.com'
};
var MessageshowComponent = React.createClass({

	getInitialState:function(){
	    return {
	          allMsg:{}
	    };
	},

	componentDidMount:function(){
		  console.log( "componentDidMount",this._onChange );
	      MsgStore.addChangeListener( this._onChange );
	},

	componentWillUnmount:function(){
	      MsgStore.removeChangeListener( this._onChange );
	},
	

	render:function(){
		var allMsgArr = [];
		for( var p in this.state.allMsg ){
			
			allMsgArr.push(
				<div>
					<span ref="msgCan">{ this.state.allMsg[p] }</span>
					<DeletemessageComponent  name={p} />
				</div>

			);
		}

		return(
			<div>
				{ allMsgArr }
				<p>共计：<span  style={{"color":"red"}}>{ allMsgArr.length}</span>条</p>
			</div>
		)
	},
	handleClick:function(){
		alert('哈哈 起作用了');
		var idstr = id;
		MessageActionCreator.deleteOne(idstr);
	},
	_onChange:function(){
		this.setState( { allMsg:MsgStore.getAll() } );
	}
});

module.exports = MessageshowComponent;