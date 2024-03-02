import React from 'react'
import { Row, Col, Card, Statistic, Typography } from 'antd'
import { cardStyle, colStyle } from '../../styles'

export default function ReactCoinScores (props) {
  return (
    <React.Fragment>
      <Typography.Title
        level={3}
        style={{ marginTop: '3rem' }}>
                Scores and Info
      </Typography.Title>
      <Row gutter={16} style={{ textAlign: 'center' }} type="flex">
        <Col xs={24} sm={24} md={12} lg={8} xl={8} style={colStyle}>
          <Card style={cardStyle}>
            <Statistic title="market_cap_rank" value={props.market_cap_rank}/>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} xl={8} style={colStyle}>
          <Card style={cardStyle}>
            <Statistic title="block_time_in_minutes" value={props.block_time_in_minutes}/>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} xl={8} style={colStyle}>
          <Card style={cardStyle}>
            <Statistic title="hashing_algorithm" value={props.hashing_algorithm}/>
          </Card>
        </Col>

      </Row>
    </React.Fragment>
  )
}
