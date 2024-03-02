import React, { Component } from 'react'
import { Layout, Typography, Card, Row, Col } from 'antd'
import { contentStyle, colStyle } from '../../styles'
import svg1 from '../../images/flaticon/001-bitcoin.svg'
import svgExchangeRate from '../../images/flaticon/004-exchange.svg'
import svgChat from '../../images/flaticon/001-chat.svg'
import svgMobile from '../../images/flaticon/003-smartphone.svg'
import svgUpdate from '../../images/flaticon/005-idea.svg'
import svgWorldwide from '../../images/flaticon/worldwide.svg'

import { connect } from 'react-redux'
import { setHeaderMenuItem } from '../../redux_actions'

const { Content } = Layout
const { Meta } = Card
const { Title, Paragraph } = Typography

const features = [
  {
    svg: svg1,
    title: 'Statistics',
    description:
      'Statistics and charts are available in real-time.'
  },
  {
    svg: svgExchangeRate,
    title: 'Exchange Rates',
    description:
      'View up to date exchange rates for your favourite cryptocurrencies.'
  },
  {
    svg: svgUpdate,
    title: 'Updates',
    description: 'App is continuously updated with the latest data, reflecting coingecko API.'
  }
]

class ReactHome extends Component {
  componentDidMount () {
    this.props.setHeaderMenuItem('home')
  }

  render () {
    return (
      <Layout style={{ padding: '1rem' }}>
        <Content style={contentStyle}>
          <Title level={2} style={{ textAlign: 'center' }}>Cryptoz</Title>
          <Paragraph style={{ textAlign: 'center' }}>
          Stay ahead in the cryptocurrency market. Get the latest reliable information to make informed decisions and maximize your profits.
          </Paragraph>

          <br></br><br></br><br></br>

          <Title level={3} style={{ textAlign: 'center' }}>Features</Title>
          <Row gutter={16} style={{ textAlign: 'center' }} type="flex">
            {features.map((item, index) => (
              <Col
                key={index}
                xs={24}
                sm={24}
                md={8}
                lg={8}
                xl={8}
                style={colStyle}
              >
                <Card
                  style={{ border: 'bold' }}
                  cover={
                    <img
                      alt="Home page crypto svg"
                      style={{
                        padding: '1.5rem',
                        maxWidth: '160px',
                        margin: 'auto'
                      }}
                      src={item.svg}
                    />
                  }
                >
                  <Meta title={item.title} description={item.description} style={{
                    maxWidth: '250px',
                    margin: 'auto'
                  }}
                  src={item.svg}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    )
  }
}

const mapActionsToProps = {
  setHeaderMenuItem
}

export default connect(null, mapActionsToProps)(ReactHome)
