import React, { Component } from 'react';
import Action from '../action/index'
import { Button,Input,Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
class App extends Component {
	constructor(props){
		super(props);
		this.myRef = React.createRef();
		this.state={
			list:[]
		}
	}
	render(){
		let {add,del}=this.props;//connectApp.js
		return(
			<div>
				<Input placeholder="Basic usage" ref={this.myRef} id="inp"/>
				<Button onClick={()=>{add(this.myRef.current.input.value)}}>添加</Button>
				<Row gutter={16}>
					{
							this.props.action.list.map((item,index)=>
								<Col span={8} key={index} onClick={()=>{del(index)}}>
							        <Card title="Redux 数据" bordered={false}>{item}</Card>
							     </Col>
							)
					}
			    </Row>
			</div>
		)
	}
}

export default App;
