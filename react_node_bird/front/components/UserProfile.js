import {Card, Avatar} from 'antd';

const UserProfile = ()=>{
	return(
		<Card
			actions={[
				<div key="twit">짹짹 <br />0</div>,
				<div key="followings">팔로잉 <br />0</div>,
				<div key="followings">팔로잉 <br />0</div>
			]}
		>
			<Card.Meta	title="ZeroCho" avatar={<Avatar>ZC</Avatar>}/>
		</Card>
	)
}

export default UserProfile;