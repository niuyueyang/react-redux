import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './container/connectApp';//针对react-redux的app.js
import * as serviceWorker from './serviceWorker';
import { Button,Input,Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import {createStore,combineReducers} from 'redux';
import {Provider,connect} from 'react-redux'
import store from './store/store'


//针对app.js的react-redux
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
, document.getElementById('root'))


