
import React, {Component, createRef} from "react";
import Try from './Try';


function getNumbers(){ //숫자 4개를 랜덤을 뽑는 함수
	const condidate = [1,2,3,4,5,6,7,8,9];
	const array = [];
	for(let i=0;i<4;i++){
		const chosen = condidate.splice(Math.floor(Math.random()*(9-i)),1)[0];
		array.push(chosen);
	}
	return array;
}

class NumberBaseBall extends Component{
	state = {
		result : "",
		value : "",
		answer : getNumbers(),
		tries:[

		]
	}

	onSubmit =(e)=>{
		e.preventDefault();
		if(this.state.value === this.state.answer.join('')){
			this.setState({
				result : '홈런 ',
				tries : [...this.state.tries, {try:this.state.value, result:'홈런!'}]
			})
			alert("다시 시작합니다");

			this.setState({
				value : '',
				answer : getNumbers(),
				tries : []
			})
			this.inputRef.current.focus();
		} else {
			
			const answerArray = this.state.value.split('').map((v)=>parseInt(v));
			console.log(answerArray);

			let strike  = 0;
			let ball = 0;
			if(this.state.tries.length>=9){
				this.setState({
					result : `10번 넘게 틀림   ${answer.join(',')}`,

				});
				alert("다시 시작합니다");

				this.setState({
					value : '',
					answer : getNumbers(),
					tries : []
				})
				this.inputRef.current.focus();

			}else{
				console.log(this.state.answer);
				
				console.log(this.state.value);
				for(let i=0;i<4;i++){
					if(answerArray[i]===this.state.answer[i]){
						strike+=1;

					}else if(this.state.answer.includes(answerArray[i])){
						ball=+1;
					}
				}

				this.setState({
					tries:[...this.state.tries, {try:this.state.value, result :`${strike}스트라이크  ${ball} 볼 `}]
					,value : ''
				})
			}
			this.inputRef.current.focus();
		}
	};

	onChangeInput =(e) =>{
		this.setState({
			value : e.target.value
		})
	};

	inputRef  = createRef();

	render(){
		return (
			<>
				<h1>{this.state.result}</h1>
				<div>{this.state.answer}</div>
				<form onSubmit={this.onSubmit}>
					<input ref={this.inputRef} maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>

				</form>
				<div>시도 : {this.state.tries.length}

					<ul>
						{this.state.tries.map((v, i)=>{
							return(
								<Try key={`${i+1}의 시도`} tryInfo={v}/>
							)

						})}
					</ul>
				</div>
			</>

		)
	}
}

export default NumberBaseBall;

