import React, { Component } from "react";
import { render } from "react-dom";
import { Layout, Menu } from "antd";
import { Card, Icon, Avatar } from 'antd';
import { Row, Col } from "react-flexbox-grid";
import "antd/dist/antd.css";
import {loadIdeas, postLike, deleteLike} from './utils/idea-service';
import {userHasLiked, removeLikeByUser, addLike, updateIdea, getLikeByUser} from './utils/idea-utils'

const { Header, Content } = Layout;
const { Meta } = Card;

class App extends Component {

  state = {
    ideas: [],
    user: {
      id: '1fa68f9d-962a-442a-9a4c-e9e40dcc738c'
    }
  }

  componentDidMount() {
    loadIdeas().then((ideas) => {
      this.setState({ideas})
    })
  }

  handleLikeClick = (idea) => {
    if (userHasLiked(idea, this.state.user)) {
      deleteLike(idea, getLikeByUser(idea, this.state.user))
      const updatedIdea = removeLikeByUser(idea, this.state.user)
      const updatedIdeas = updateIdea(this.state.ideas, updatedIdea)
      this.setState({ideas: updatedIdeas})

    }
    else {
      const like = {'like_by': this.state.user.id}
      postLike(idea, like)
        .then(like => this.setState(
          {
            ideas: updateIdea(
              this.state.ideas, 
              addLike(idea, like)
              )
          }))
      }
  }


  render() {
    return (
      <Layout className="layout">
        <Header theme="light" style={{padding: 0, background: "none"}}>
          <img src="../logo.png" height={48} style={{float: 'left', paddingLeft: '10%'}}/>
          <Menu theme="light" mode="horizontal">
            <Menu.Item>Ideas</Menu.Item>
            <Menu.Item>Foo</Menu.Item>
          </Menu>
        </Header>
        <Content style={{maxWidth: 960, margin: "0 auto", padding: 0}}>
          <Row>
            <Col xs={12}>
              <Row center="xs">
                {this.state.ideas.map(idea => {
                  // console.log(idea)
                  let liked = userHasLiked(idea, this.state.user)
                  return(
                    <Col key={idea.id} xs={8} sm={5} lg={4} xl={3}>
                    <Card 
                      style={{maxWidth: 300, marginBottom: 15}}
                      cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
                      actions={
                        [
                          <Icon 
                            type={liked ? "heart" : "heart-o"} 
                            onClick={(e) => this.handleLikeClick(idea)}/>, 
                          <Icon type="ellipsis" />
                        ]
                      }>
                      <Meta 
                        style={{textAlign: 'left'}}
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                        title={idea.name}
                        description={idea.description} />
                    </Card>
                  </Col>
                  )
                })}

              </Row>
            </Col>
          </Row>


        </Content>

      </Layout>
    );
  }
}

export default App