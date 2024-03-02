import React, { Component } from 'react'
import { Row, Card, Statistic, Col, Typography } from 'antd'
import { colStyle, cardStyle, titleStyle } from '../../styles'

export default class ReactCoinCommunityStats extends Component {
  render () {
    const { data } = this.props
    return (
      <React.Fragment>
        <Typography.Title
          level={3}
          style={{ marginTop: '3rem' }}>
          Community Status
        </Typography.Title>
        <Row gutter={16} style={{ textAlign: 'center' }} type="flex">
          { Object.entries(data).map((item, index) => {
            if (typeof item[1] !== 'object') {
              return (
                <Col key={index} xs={24} sm={24} md={12} lg={8} xl={8} style={colStyle}>
                  <Card style={cardStyle}>
                    <Statistic title={item[0]} value={item[1]}/>
                  </Card>
                </Col>
              )
            }
            return null
          })}
        </Row>
      </React.Fragment>
    )
  }
}
