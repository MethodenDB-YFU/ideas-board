import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon } from "antd";
import { Row, Col } from "react-flexbox-grid";
import "antd/dist/antd.css";
import { IdeaForm, IdeaList } from './components/idea'

const { Header, Content } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component { 

  render() {
    return (
      <Layout className="layout" style={{backgroundColor: 'white'}}>
        <Header theme="light" style={{padding: 0, background: "none"}}>
          <img src="../logo.png" height={48} style={{float: 'left'}}/>
          <Menu theme="light" mode="horizontal">
            <SubMenu title={<span><Icon type="bulb"/> Ideen</span>}>
              <Menu.Item key="idea:new"><Link to="/ideas/create">Neue Idee</Link></Menu.Item>
              <Menu.Item key="idea:all"><Link to="/ideas">Alle Ideen</Link></Menu.Item>
              </SubMenu>
          </Menu>
        </Header>
        <Content style={{padding: '0px 70px'}}>
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <Route path="/ideas" exact component={IdeaList}/>
                <Route path="/ideas/create" exact component={IdeaForm}/>
              </Row>
            </Col>
          </Row>
        </Content>

      </Layout>
    )
  }
}

export default App