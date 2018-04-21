import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { Col, Row } from 'react-flexbox-grid'
import { Divider } from 'antd'
import { Editor } from '../editor/Editor'
import { Avatar } from 'antd'

const titleInputStyle = {
	background: 'none',
	border: 'none',
	borderRadius: 'none',
	height: '40px',
	fontSize: '32px',
	lineHeight: '40px',
	outline: 'none',
	display: 'block'
}

export class IdeaForm extends Component {

	handleSubmit() {

	}


	render() {
		return(
			<Col xs={12} sm={10} lg={6} style={{textAlign: 'left'}}>
				<Form layout="vertical" onSubmit={this.handleSubmit} style={{width: '100%'}}>
				<Row end="xs">
					<Col xs={1}>
						<Avatar shape="square" size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
					</Col>
					<Col xs={8}>
						<Input 
							style={{...titleInputStyle}}
							placeholder="Unbenannte Idee"/>
					</Col>
					<Col xs={3}>
						<Button
							htmlType="submit"
							icon="save"
							type="default"
							style={{margin: '4px 0px'}}>
							Speichern
						</Button>
					</Col>
				</Row>
					<Divider />
					<Editor/>
				</Form>
			</Col>
		)
	}
	
}