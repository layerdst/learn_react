import React,{useCallback, useState, useMemo} from 'react';
import {Form} from 'antd';
import styled from 'styled-components';


const ButtonWrapper = styled.div`
	marginTop:10px;
`

const style=useMemo(()=>({marginTop:10}),{})

const LoginForm = ()=>{
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	
	const onChangeId = useCallback((e)=>{
		setId(e.target.value);
	},[]);
	
	const onChangePassword = useCallback((e)=>{
		setPassword(e.target.value);
	},[]);

	const onSubmitForm = useCallback=(()=>{
		console.log(id,password);
		setIsLoggedIn(true);
	
	},[id,password])

	return(
		<Form onFinish={onSubmitForm}>
			<div>
				<label htmlFor="user-id">아이디</label>
				<br/>
				<Input name="user-id" value ={id} onChange={onChangeId} required />
			</div>
			<div>
				<label htmlFor="user-password">비밀번호</label>
				<br/>
				<Input name="user-password" 
					value ={password} 
					onChange={onChangePassword} 
					required />
			</div>
			<ButtonWrapper>
				<Button type="primary" 
					htmlType="submit" 
					loading={false} required>
					로그인
				</Button>
				<Link href="/signup">
					<a>
						<Button>회원가입</Button>
					</a>
				</Link>
				
			</ButtonWrapper>
				
		</Form>
	)
}

export default LoginForm;