import React, { Component } from 'react'

export class Portfolio extends Component {

  render() {
    return (
      <>
        <span className="breaker">
          <h2>PORTFOLIO</h2>
        </span>
        <div className="portfolio">
          <iframe src="http://hotelmagazine.co.nz/2018/04/19/vincent-tran-the-green-room/"></iframe>
          <iframe src="https://www.stuff.co.nz/life-style/food-wine/food-news/103982807/cafe-chat-vince-tran-hotel-sofitel-wellington-bartender"></iframe>
        </div>
      </>
    )
  }
}

export default Portfolio
