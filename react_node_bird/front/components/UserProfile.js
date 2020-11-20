import {Card, Avatar,Button} from 'antd';
import { useCallback } from 'react';

const UserProfile = ({setIsLoggedIn})=>{
	const onLogOut = useCallback(()=>{
		setIsLoggedIn(false);
	},[])

	return(
		<Card
			actions={[
				<div key="twit">짹짹 <br />0</div>,
				<div key="followings">팔로잉 <br />0</div>,
				<div key="followings">팔로잉 <br />0</div>
			]}
		>
			<Card.Meta	title="ZeroCho" avatar={<Avatar>ZC</Avatar>}/>
			<Button onClick={onLogOut}></Button>
		</Card>
	)
}

export default UserProfile;