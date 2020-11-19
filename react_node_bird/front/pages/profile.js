import React from 'react';
import AppLayout from '../components/AppLayout'
import Head from 'next/head';

const Profile =()=>{
	return( 
		<>
		<Head>
			<title>내프로필</title>
		</Head>
		<AppLayout> 프로필 </AppLayout>
		</>
	);
};

export default Profile;