import React, { Component } from 'react'
import {Spring} from 'react-spring/renderprops'

export class MessageSent extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 2 }}>
        {props => <div style={props}>Testing</div>}
      </Spring>
    )
  }
}

export default MessageSent
