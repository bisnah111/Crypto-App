import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGlobal, setSiderMenuItem } from '../../redux_actions'
import ReactSider from '../Navigation/ReactSider'
import { Col, Statistic, Card, Row, Layout, Typography } from 'antd'
import { contentStyle, colStyle, cardStyle } from '../../styles'

const { Content } = Layout
const { Paragraph, Title } = Typography

class ReactGlobal extends Component {
  componentDidMount () {
    this.props.fetchGlobal()
    this.props.setSiderMenuItem('global-main')
  }

  render () {
    const loading = !(Object.keys(this.props.data).length > 0)
    const {
      active_cryptocurrencies,
      market_cap_change_percentage_24h_usd,
      ongoing_icos,
      upcoming_icos,
      ended_icos,
      markets,
      defi_market_cap,
      eth_market_cap,
      trading_volume_24h,
      defi_dominance,
      top_coin_name,
      top_coin_defi_dominance
    } = this.props.data
    return (
      <React.Fragment>
        <ReactSider/>
        <Layout style={{ padding: '1rem' }}>
          <Content style={contentStyle}>
            <Title level={2} style={{ textAlign: 'center' }}>Global Data</Title>
            <Paragraph style={{ textAlign: 'center' }}>This page lists global data attributes and values.</Paragraph>
            <br></br><br></br>
            <Row gutter={16} style={{ textAlign: 'center' }} type="flex">

              <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                <Card style={cardStyle} loading={loading}>
                  <Statistic title="Markets" value={markets}/>
                </Card>
              </Col>

              <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                <Card style={cardStyle} loading={loading}>
                  <Statistic suffix='%' precision={2} title="Market Cap Change Percent (24hr USD)" value={market_cap_change_percentage_24h_usd}/>
                </Card>
              </Col>

              <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                <Card style={cardStyle} loading={loading}>
                  <Statistic title="Active Cryptocurrencies" value={active_cryptocurrencies}/>
                </Card>
              </Col>

              <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                <Card style={cardStyle} loading={loading}>
                  <Statistic title="Ongoing Initial Coin Offerings (ICOS)" value={ongoing_icos}/>
                </Card>
              </Col>

              <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                <Card style={cardStyle} loading={loading}>
                  <Statistic title="Upcoming Initial Coin Offerings (ICOS)" value={upcoming_icos}/>
                </Card>
              </Col>

              <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                <Card style={cardStyle} loading={loading}>
                  <Statistic title="Ended Initial Coin Offerings (ICOS)" value={ended_icos} />
                </Card>
              </Col>

              <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                <Card style={cardStyle} loading={loading}>
                  <Statistic precision={2} title="Defi Market Capitalization (USD)" value={defi_market_cap} />
                </Card>
              </Col>

              <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                <Card style={cardStyle} loading={loading}>
                  <Statistic precision={2} title="Ethereum Market Capitalization (USD)" value={eth_market_cap} />
                </Card>
              </Col>

              <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                <Card style={cardStyle} loading={loading}>
                  <Statistic precision={2} title="Defi Trading Volume (24Hr USD)" value={trading_volume_24h} />
                </Card>
              </Col>

              <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                <Card style={cardStyle} loading={loading}>
                  <Statistic precision={2} title="Defi Market Cap To Total Market Cap ratio" value={defi_dominance} />
                </Card>
              </Col>

              <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                <Card style={cardStyle} loading={loading}>
                  <Statistic precision={2} title="Defi Coin With Largest Market Cap" value={top_coin_name} />
                </Card>
              </Col>

              <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                <Card style={cardStyle} loading={loading}>
                  <Statistic precision={2} title="Top Defi Coin Market Dominance" value={top_coin_defi_dominance} />
                </Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </React.Fragment>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.global
  }
}

const mapActionsToProps = {
  fetchGlobal,
  setSiderMenuItem
}

export default connect(mapStateToProps, mapActionsToProps)(ReactGlobal)
