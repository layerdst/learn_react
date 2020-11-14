const React = require('react');


const WordRelayHook=()=>{
	const [word, setWord] = React.useState("시작");
	const [value, setValue] = React.useState("");
	const [result, setResult] = React.useState("");
	const inputRef = React.useRef(null);

	const onSubmit = (e) =>{
		e.preventDefault();
		if(word[word.length-1]===value[0]){
			setWord(value);
			setResult("딩동댕")
			setValue("");
			inputRef.current.focus();
		}else{
			setResult("땡");
			setValue("");
			inputRef.current.focus();
		}
		
	}

	const onChange = (e) =>{
		setValue(e.target.value)
	}

	return (
		<>
			<div>{word}</div>
			<form onSubmit={onSubmit}>
				<input ref={inputRef} type="text" value ={value} onChange ={onChange}/>
				<button>되냐?</button>
			</form>
			<div>{result}</div>
		</>
	)
}

module.exports = WordRelayHook