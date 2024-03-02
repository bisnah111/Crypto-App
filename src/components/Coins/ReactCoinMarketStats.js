import React, { Component } from 'react'
import { Row, Card, Statistic, Col, Typography } from 'antd'
import { colStyle, cardStyle, titleStyle } from '../../styles'

export default class ReactCoinMarketStats extends Component {
  render () {
    const { market_stat_keys, market_data } = this.props

    return (
      <React.Fragment>
        <Typography.Title
          level={3}
          style={{ marginTop: '3rem' }}>
          Market Status
        </Typography.Title>
        <Row gutter={16} style={{ textAlign: 'center' }} type="flex">
          {
            market_stat_keys.map((key, index) => (
              <Col key={index} xs={24} sm={24} md={12} lg={8} xl={8} style={colStyle}>
                <Card style={cardStyle}>
                  <Statistic precision={1} title={key} value={market_data[key]}/>
                </Card>
              </Col>
            ))
          }
        </Row>
      </React.Fragment>
    )
  }
}
