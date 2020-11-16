const path  = require('path');
const webpack = require('webpack');
const RefreshWebpackPlugin  =  require('@pmmmwh/react-refresh-webpack-plugin');


// https://webpack.js.org/ 웹팩 공식문서 
module.exports={
	name : 'wordrelay-setting',
	mode : 'development', // production 은 production
	devtool : 'eval', //production 일때는 hidden-source-map
	resolve :{
		// 아래의 확장자 파일을 찾는다
		extensions:['.js', '.jsx']
	},
	
	// 입력
	entry:{
		// 두 파일이 필요하나, 웹팩에서 client에서 wordrelay가 모듈로 쓰이고 있기 때문에 하나만 적어줘도 된다
		//app:['./client.jsx', './WordRelay.jsx'],
		app:['./client']
	},
	
	//엔트리의 파일을 읽어서 모듈을 적용한후 , 출력한다 (output)
	module :{
		rules :[{
			test : /\.jsx?/, //규칙을 적용할 파일듯(정규식)
			loader : 'babel-loader',
			options : {
				presets : [
					['@babel/preset-env',{
						targets:{ //바벨 지원 브라우져 셋팅https://github.com/browserslist/browserslist#queries 참고
							browsers:['> 5% in KR']
						},
						debug : true	
					}], '@babel/preset-react'],
				plugins : [
					'@babel/plugin-proposal-class-properties',
					'react-refresh/babel'
				]
			}
		}]
	},

	plugins:[
		new webpack.LoaderOptionsPlugin({debug:true}),
		new RefreshWebpackPlugin()
	],
	
	//출력
	output : {
		// 경로를 합쳐줌  c://users/ddd/ddd/dd/leture/dist
		path : path.join(__dirname,'dist'), // 실제경로
		filename : 'app.js',
		publicPath : '/dist/' //가상경로 express static 
	},

	devServer :{
		publicPath : '/dist/',
		hot:true
	}
}