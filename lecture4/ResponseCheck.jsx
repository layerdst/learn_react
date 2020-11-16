import React, {Component} from 'react';

class ResponseCheck extends Component{
	state = {
		state:'waiting',
		message : '클릭해서 시작하세요',
		result : [],
	};

	timeout;
	startTime;
	endTime;

	onClickScreen =()=>{
		const {state, message, result} = this.state;
		if(state==='waiting'){
			this.setState({
				state :'ready',
				message : "초록색이 되면 클릭하세요"
			})

			this.timeout = setTimeout(()=>{
				this.setState({
					state :'now',
					message : '지금 클릭'
				})
				this.startTime = new Date();

			}, Math.floor(Math.random()*1000)+2000);
		}else if(state ==='ready'){ // 성급하게 클릭
			clearTimeout(this.timeout);
			this.setState({
				state : 'waiting',
				message : '성급하게 눌렀음'
			})
		}else if(state ==='now'){ // 반응속도 체크
			this.endTime = new Date();
			this.setState((prevState)=>{
				return {
					state : 'waiting',
					result : [...prevState.result, this.endTime -this.startTime],
					message : '클릭해서 시작하세요',
				}
			});
		}
	}

	onReset =()=>{
		this.setState({
			result:[]
		})
	}

	renderAverage=()=>{
	
		return result.length === 0 
			? null
			:<>
				<div>
					평균시간 : {this.state.result.reduce((a,c)=>a+c) / this.state.result.legth}
				</div>
				<button onClick={this.onReset}></button>
			</>
	}

	render(){
		return (
		<>
			<div 
				id="screen"
				className = {this.state.state}
				onClick = {this.onClickScreen}
			>
				{this.state.message}

			</div>
			<div>
				{this.renderAverage}
				
			</div>
		</>
		)
	}
}

export default ResponseCheck;
