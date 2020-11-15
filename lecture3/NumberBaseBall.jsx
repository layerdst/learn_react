import React, {Component} from 'react';


function getNumbers(){ //숫자 4개를 랜덤을 뽑는 함수

}

class NumberBase extends Component{
	state = {
		result : "",
		value : "",
		answer : getNumbers(),
		tries:[

		]
	}

	onSubmit =()=>{

	};

	onChangeInput =() =>{

	};
	
	render(){
		return (
			<>
				<h1>{this.state.result}</h1>
				<form onSubmit={this.onSubmit}>
					<input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>

				</form>
				<div>시도 : {this.state.tries.length}
					<ul>
						<li>
							
						</li>
					</ul>
				</div>
			</>

		)
	}
}

