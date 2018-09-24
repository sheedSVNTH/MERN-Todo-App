import React from 'react';
import TextField from '@material-ui/core/TextField';

export default class Form extends React.Component {
	//Manage text input and change in DOM
	state = {
		text: ""
	};

handleChange = (e) => {
	const newText = e.target.value;
	this.setState({
		text: newText
	});
};

handleKeyDown = (e) => {
  if(e.key === "Enter") {
    this.props.submit(this.state.text);
	  this.setState({
		  text: "" 
	  });
  }
};
	render() {
		const { text } = this.state;
		return (
			<TextField
			onChange={this.handleChange}
			onKeyDown={this.handleKeyDown}
			  id="standard-name"
			  label="Let's get to work..."
			  margin="normal"
			value={text}
			  fullWidth
			variant="outlined"
			/>
		);
	}
}