import React from 'react';
class Welcome extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	date: new Date()
	  }
	}
	componentDidMount() {
		this.timeId = setInterval( 
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timeId);
	}

	tick() {
	  	this.setState({
	  		date: new Date()
	  	});
	}

	render() {
		return (
			<div>
			<h1>Ha Ha, {this.props.name} and {this.props.age}</h1>
			<h2>现在的时间是: {this.state.date.toLocaleTimeString()}</h2>
			</div>
		);
	}
}

// function Welcome(props) {
// 	return <h1>Hi, xsnowholy!</h1>
// }

export default Welcome