import React, { Component } from 'react'
import { Table, Tag, Layout, Typography, Button } from 'antd'
import { Link } from 'react-router-dom'
import { contentStyle, tableStyle } from '../../styles'
import { connect } from 'react-redux'
import ReactSider from '../Navigation/ReactSider'
import { fetchExchanges, setSiderMenuItem } from '../../redux_actions'

const { Content } = Layout
const { Paragraph, Title } = Typography

class ReactExchangesList extends Component {
  componentDidMount () {
    this.props.fetchExchanges()
    this.props.setSiderMenuItem('exchanges-list')
  }

  render () {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: name => (<Tag color="purple">{name}</Tag>)
      },
      {
        title: 'URL',
        dataIndex: 'url',
        key: 'url',
        render: url => (<a href={`${url}`}>{url}</a>)
      },
      {
        title: 'Year est.',
        dataIndex: 'year_established',
        key: 'year_established'
      },
      {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
        render: country => (<Tag color="blue">{country}</Tag>)
      },
      {
        title: 'Trade 24h BTC',
        dataIndex: 'trade_volume_24h_btc',
        key: 'trade_volume_24h_btc'
      }
    ]

    const loading = !(this.props.data.length > 0)

    return (
      <React.Fragment>
        <ReactSider/>
        <Layout style={{ padding: '1rem' }}>
          <Content style={contentStyle}>
            <Title level={2} style={{ textAlign: 'center' }}>Active Exchanges</Title>
            <Paragraph style={{ textAlign: 'center' }}>This page lists exchanges available on the internet.</Paragraph>
            <br></br><br></br>
            <Table
              style={tableStyle}
              bordered={true}
              loading={loading}
              dataSource={this.props.data}
              columns={columns} />
          </Content>
        </Layout>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.exchanges
  }
}

const mapActionsToProps = {
  fetchExchanges,
  setSiderMenuItem
}

export default connect(mapStateToProps, mapActionsToProps)(ReactExchangesList)
