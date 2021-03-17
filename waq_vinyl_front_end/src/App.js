import React, { Component } from 'react'
import Wishlist from './Components/Wishlist'
import Collection from './Components/Collection'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'heroku backend here'
}

console.log('current base URL:', baseURL)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      baseURL: '',
      apikey: 'apikey=',
      artistName: '',
      searchURL: ''
    }
  }



  render() {
    return(
      <div className='container'>
        <h1>WAQ VINYL</h1>
      </div>
    )
  }
}

export default App
