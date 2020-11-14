const React = require('react');
const { render } = require('react-dom');
const {Component} = React;
// const {Component} = React 이 것때문에 아래 처럼 줄일수 있음
// class WordReplay extends React.Component{

class WordRelay extends Component{
	state ={
		word : "시작",
		value : "",
		result : ""
	}

	onSubmit=(e)=>{
		e.preventDefault();
		
		if(this.state.word[this.state.word.length-1] === this.state.value[0]){
			
			this.setState({
				result : "딩동댕",
				word : this.state.value,
				value : ""
			})
		}else{
			this.setState({
				result : "땡",
				value : ""
			})
			this.input.focus();
		}

	}
	
	input;

	onRefInput=(c)=>{
		this.input =c;
	}

	onChange=(e) => {
		this.setState({value:e.target.value})
	}
	// input 에서는 value 와 onchange가 동시에 들어가야 에러가 나질 않음. 둘중 하나를 입력하지 않을시 defaultValue = {} 를 넣어 에러를 방지함
	render(){
		return(
			<>
				<div>{this.state.word}</div>
				<form onSubmit={this.onSubmit}>
					<input type="text" ref ={this.onRefInput} value ={this.state.value} onChange={this.onChange}/>
					<button>되고있나?!!!!!!!</button>
				</form>
				<div>{this.state.result}</div>
				
			</>

		)
	}
}

module.exports=WordRelay;
