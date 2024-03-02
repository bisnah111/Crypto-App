import React, { Component } from 'react'
import { Layout, Typography } from 'antd'
import { contentStyle } from '../../styles'
import { connect } from 'react-redux'
import { setHeaderMenuItem } from '../../redux_actions'
const { Content } = Layout
const { Title, Paragraph } = Typography

class ReactAbout extends Component {
  componentDidMount () {
    this.props.setHeaderMenuItem('about')
  }

  render () {
    return (
      <Layout style={{ padding: '1rem' }}>
        <Content className="text-focus-in" style={{ ...contentStyle }}>
          <Title level={2} style={{ textAlign: 'center' }}>About Page</Title>
          <br></br>
          <Paragraph style={{ textAlign: 'center' }}>Consolidating RESTful calls from the <a target="_blank" rel="noreferrer" href="https://www.coingecko.com/api/documentation">CoinGecko API </a>into a React application. I&apos;ll be using v3 version of the API&apos;s.</Paragraph>
          <br></br><br></br>
          <Title level={2} style={{ textAlign: 'center' }}>Data source</Title>
          <br></br>
          <Paragraph style={{ textAlign: 'center' }}>All the data which this application uses is processed from the <a target="_blank" rel="noreferrer" href="https://www.coingecko.com/api/documentation"> CoinGecko API.</a></Paragraph>
          <br></br><br></br>
          <Title level={2} style={{ textAlign: 'center' }}>Challenges</Title>
          <br></br>
          <Paragraph style={{ textAlign: 'center' }}><strong>Challenges faced during Application build:</strong></Paragraph>
          <Paragraph style={{ textAlign: 'center', marginBottom: '1rem' }}>Organizing large amounts of data from third party API.</Paragraph>
          <Paragraph style={{ textAlign: 'center', marginBottom: '1rem' }}>Learning to use a brand new UI framework (Ant Design UI).</Paragraph>
          <Paragraph style={{ textAlign: 'center', marginBottom: '1rem' }}>Restructuring data from API calls into a suitable format for UI components.</Paragraph>
          <Paragraph style={{ textAlign: 'center', marginBottom: '1rem' }}>Learned how to make use of multiple APIs at the same time from different providers as well.</Paragraph>
        </Content>
      </Layout>
    )
  }
}

const mapActionsToProps = {
  setHeaderMenuItem
}

export default connect(null, mapActionsToProps)(ReactAbout)
