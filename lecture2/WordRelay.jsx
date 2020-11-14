const React = require('react');
const {Component} = React;
// const {Component} = React 이 것때문에 아래 처럼 줄일수 있음
// class WordReplay extends React.Component{

const WordRelay = ()=>{
	const [first, setFirst] = React.useState(Math.ceil(Math.random()*9));
	const [second, setSecond] = React.useState(Math.ceil(Math.random()*9));
	const [result, setResult] = React.useState('');
	const [value, setValue] = React.useState('');
	const inputRef = React.useRef(null);

	const onSubmit = (e)=>{
		e.preventDefault();
		if(parseInt(value)===first*second){
			setResult("정답"+value);
			setFirst(Math.ceil(Math.random()*9));
			setSecond(Math.ceil(Math.random()*9));
			setValue("");
			inputRef.current.focus();
		}else{
			setResult("땡");
			inputRef.current.focus();
		}
	}

	const onChange=(e)=>{
		setValue(e.target.value);
	}

	return (
		<React.Fragment>
			<form onSubmit ={onSubmit}>
				<div>{first} 곱하기 {second} 는?</div>
				<input ref={inputRef} type="number" value={value} onChange={onChange}></input>
				<button>입력</button>
				<div>{result}</div>
			</form>

		</React.Fragment>
	)

}

module.exports=WordRelay;
