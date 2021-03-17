import React, { Component } from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'heroku backend here'
}


class collection extends Component {
    render() {
        return(
            <div>

            </div>
        )
    }
}

export default collection