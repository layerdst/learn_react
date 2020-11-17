import React,{useState} from 'react';


//useState 는 바뀌면 렌더링이 되나, useRef는 값이 바뀌어도 렌더링이 되지 않는다
// 즉 useRef 는 DOM에 접근할때도 쓰이나, 렌더링을 요구하지 않을때도 쓰임

const ResponseCheckHook =()=>{
	const [state, setState ] = useState('waiting');
	const [message, setMessage] = useState('클릭해서 시작하세요');
	const [result, setResult] = useState([]);

	const timeOut = useRef(null);
	const startTime = useRef();
	const endTime = useRef();

	const onClickScreen = (e)=>{
		if(state === 'waiting'){
			setState('ready');
			setMessage('대기');
			
			timeOut.current = setTimeout(()=>{
				setState('now');
				setMessage("지금클릭");
				startTime.current = new Date();
			},Math.floor(Math.random()*9*1000)+2000)
		}else if(state === 'ready'){
			setState('waiting');
			setMessage('기다리세요');

		}else if(state ==='now'){
			endTime.current = new Date();
			setState("waiting");
			setMessage("클릭하세요");
			setResult((prevResult)=>{
				return [...prevResult, endTime.current = startTime.current]
			})
		}
	}

	const onReset = (e)=>{
		setResult([]);
	}

	const avgTime =()=>{
		return result.length===0
		? null 
		: <>
			<div>경과시간 : {result.reduce((a,c)=>a+c) /result.length} </div>
			<button onClick={onReset}>리셋</button>
			</>


	}

	return (
		<>
			<div 
			id="screen"
			className = {state}
			onClick={onClickScreen}
			></div>
			
			<div>
				{avgTime}
			</div>
		</>
	)

}

export default ResponseCheckHook