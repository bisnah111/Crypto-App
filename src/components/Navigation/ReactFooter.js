import React from 'react'
import { Layout } from 'antd'
import { footerStyle } from '../../styles'

const { Footer } = Layout

export default function ReactFooter () {
  return (
    <Footer style={footerStyle}>
            Developed by <strong>Bishal Nath</strong>.<br></br>Powered by <strong><a target="_blank" rel="noreferrer" href="https://www.coingecko.com/api/documentation">CoinGecko</a></strong>.<br></br></Footer>
  )
}
