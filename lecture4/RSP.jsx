import React,{Component} from 'react';

// 클래스의 경우 => constructor => rendering => ComponentDidMount => 
//setState, props 바뀔때 => render =>(shouldComponentUpdate) => componentDidUpdate 
//부모가 나를 없앳을때, componentWillMount => 소멸

const rspCoords={
	바위 : '0',
	가위 : '-142px',
	보 : '-284px'
}

const score ={
	가위 : -1,
	바위 : 0,
	보 : 1
}

const computerChoice = (imgCoord) =>{
	return 
}

class RSP extends React.Component{
	state ={
		result : '',
		imgCoord : 0,
		score :0,
	}

	interval;

	ComponentDidMount(){ //컴포넌트가 첫 렌더링 된후 비동기 요청을 많이함
		this.interval = setInterval(()=>{
		const {imgCoord} = this.state;
			if(imgCoord===rspCoords.바위){
				this.setState({
					imgCoord : rspCoords.가위
				})
			}else if(imgCoord===rspCoords.가위){
				this.setState({
					imgCoord : rspCoords.보
				})
			}else if(imgCoord ===rspCoords.보){
				this.setState({
					imgCoord : rspCoords.바위
				})
			}
		},1000)
	}

	ComponentDidUpdate(){ //리렌더링후 

	}

	ComponentWillMount(){ //컴포넌트가 제거되기 직전 비동기 요청을 많이함
		clearInterval(this.interval);
	}

	onClickBtn =(choice)=>{
		clearInterval(this.interval);
		const myScore = score[choice];
		const cpuScore = score[computerChoice(imgCoord)];
		const diff = myScore - cpuScore;
		if(diff===0){
			this.setState({
				result:"비겻습니다"
			})
		}else if([-1,2].includes(diff)){
			this.setState((prevState)=>{
				return {
					result : "이겻습니다",
					score: prevState.score=1
				}
			})
		}else {
			this.setState((prevState) => {
				return {
					result : "졋습니다",
					score:prevState.score -1
				}
			});
		}
	}



	render(){
		const{result, score, imgCoord} = this. state;
		return(
			<>
				<div id = "computer" style ={{background : `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}></div>
				<div>
					<button id="rock" className = "btn" onClick ={()=>onClickBtn('바위')}>바위</button>
					<button id="scisso" className = "btn" onClick ={()=>onClickBtn('가위')}>가위</button>
					<button id="paper" className = "btn" onClick ={()=>onClickBtn('보')}>보</button>
				</div>
				<div>{result}</div>
				<div>현재 {score}</div>
			</>
		)
	}
}

export default RSP;