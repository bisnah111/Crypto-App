import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Tag } from 'antd'
import { connect } from 'react-redux'

const { Sider } = Layout

class ReactSider extends Component {
  render () {
    return (
      <React.Fragment>
        <Sider
          width={200}
          style={{ background: '#f0f2f5', paddingLeft: '1rem', paddingTop: '1rem', paddingBottom: '1rem' }}>
          <Menu
            style={{ height: '100%', textAlign: 'center', paddingTop: '1rem' }}
          >
            {/* General updates */}
            <Menu.Item key="global-main"><Link to='/global'>Global Data</Link></Menu.Item>
            <br></br>
            {/* Status updates */}
            <Menu.Item key="trending-coins"><Link to='/trending-coins'>Trending Coins</Link></Menu.Item>
            <br></br>
            {/* Coin Listing */}
            <Menu.Item key="coin-list"><Link to='/coins'>Coin Listing</Link></Menu.Item>
            <br></br>
            {/* Exchanges List */}
            <Menu.Item key="exchanges-list"><Link to='/exchanges/list'>Active Exchanges</Link></Menu.Item>
            <br></br>
            {/* Exchange Rates */}
            <Menu.Item key="exchange-rates-list"><Link to='/exchange-rates'>Exchange Rates</Link></Menu.Item>

          </Menu>
        </Sider>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sider_selected: state.sider_selected
  }
}

export default connect(mapStateToProps)(ReactSider)
