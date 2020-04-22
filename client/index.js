import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

// const placeToMount = document.getElementById('app')

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})