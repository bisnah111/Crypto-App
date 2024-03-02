import React, { Component } from 'react'
import { Layout, Typography, Empty } from 'antd'
import { contentStyle } from '../../styles'
const { Content } = Layout
const { Title } = Typography

export default class ReactEmpty extends Component {
  render () {
    return (
      <Layout style={{ padding: '1rem' }}>
        <Content className="text-focus-in" style={contentStyle}>
          <Title level={2} style={{ textAlign: 'center' }}>In development</Title>
          <br></br>
          <Empty style={{ textAlign: 'center' }} description="This page is currently in development."></Empty>
        </Content>
      </Layout>
    )
  }
}
