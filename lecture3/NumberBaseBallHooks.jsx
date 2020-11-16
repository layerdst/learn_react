
import React, { useState} from "react";
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

const NumberBaseBall =()=>{
	const[result, setResult] = useState('');
	const[value, setValue] = useState('');
	const[answer, setAnswer] = useState(getNumbers());
	const[tries, setTries] = useState([]);
	
	const onSubmit =(e) =>{
		e.preventDefault();
		if(value === answer.join('')){
			setResult("홈런");
			setTries((prevTries)=>{
				return [...prevTries, {try :value, result:'홈런'}]
			})
			
			alert("게임을 다시시작합니다");
			setValue("");
			setAnswer(getNumbers());
			setTries([]);


		} else {
			
			const answerArray = value.split('').map((v)=>parseInt(v));
			console.log(answerArray);

			let strike  = 0;
			let ball = 0;
			if(tries.length>=9){
				setResult(`10번 넘게 틀림   ${answer.join(',')}`);
				
				alert("다시 시작합니다");

				setValue("");
				setAnswer(getNumbers());
				setTries([]);

				
			}else{
				for(let i=0;i<4;i++){
					if(answerArray[i]===answer[i]){
						strike+=1;

					}else if(answer.includes(answerArray[i])){
						ball=+1;
					}
				}

				setTries((prevTries) => [...prevTries], {try:value, result: `${strike}스트라이크  ${ball} 볼 `})
				setValue('');
			}
		}
	}

const onChangeInput = (e) =>{
		this.setState({
			value : e.target.value
		})
}

	return (
		<>
			<h1>{result}</h1>
				<div>{answer}</div>
				<form onSubmit={onSubmit}>
					<input maxLength={4} value={value} onChange={onChangeInput}/>

				</form>
				<div>시도 : {tries.length}

					<ul>
						{tries.map((v, i)=>{
							return(
								<Try key={`${i+1}의 시도`} tryInfo={v}/>
							)

						})}
					</ul>
				</div>
			</>

	);
}

export default NumberBaseBall;

