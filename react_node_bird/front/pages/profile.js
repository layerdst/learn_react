import React from 'react';
import AppLayout from '../components/AppLayout'
import Head from 'next/head';

import FollowList from '../components/FollowList';
import NickNameEditForm from '../components/NickNameEditForm';

const Profile =()=>{
	const followList = [{nickname:"test1"},{nickname:"test2"},{nickname:"test3"}]
	const followingList = [{nickname:"test1"},{nickname:"test2"},{nickname:"test3"}]

	return( 
		<>
		<Head>
			<title>내프로필</title>
		</Head>
		<AppLayout>
			<NickNameEditForm></NickNameEditForm>
			<FollowList header="팔로잉 목록" data={followingList}></FollowList>
			<FollowList header="팔로워 목록" date={followList}></FollowList>	
		</AppLayout>
		</>
	);
};

export default Profile;