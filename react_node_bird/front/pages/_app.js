import React from 'react';
import Proptypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

const NodeBird=({Component})=>{
	return(
		<>
		<Head>
			<meta charSet="utf-8"/>
			<title>Node Bird</title>
		</Head>
		<Component/>
		</>
	)
}

NodeBird.prototype ={
	Component : Proptypes.elementType.isRequired
}

export default NodeBird;