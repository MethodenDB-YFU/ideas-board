import React from 'react'
import { Col } from "react-flexbox-grid";
import { Card, Icon, Avatar } from 'antd';
import PropTypes from 'prop-types';

const { Meta } = Card;

export const Idea = (props) => (

	<Col key={props.idea.id} xs={8} sm={5} lg={4} xl={3}>
		<Card 
			style={{maxWidth: 300, marginBottom: 15}}
			cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
			actions={
				[
					<Icon
						type={props.liked ? "heart" : "heart-o"}
						onClick={(e) => props.handleLikeClick(props.idea)}/>, 
					<Icon type="ellipsis" />
				]
			}>
			<Meta 
				style={{textAlign: 'left'}}
				avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
				title={props.idea.name}
				description={props.idea.description} />
		</Card>
	</Col>
	
)

Idea.propTypes = {
	idea: PropTypes.object,
	liked: PropTypes.bool,
	handleLikeClick: PropTypes.func
}

