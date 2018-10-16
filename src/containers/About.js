import React from 'react'
//
const { GREETING } = process.env
export default class About extends React.Component {
  render() {
    return (
      <div>
        <h1>This is what we're all about.</h1>
        <p>React, static sites, performance, speed. It's the stuff that makes us tick.</p>
        <div>{GREETING}</div>
      </div>    
    )
  }
}
