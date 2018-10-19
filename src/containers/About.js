import React from 'react'
import { Prefetch, Link } from 'react-static'
import createHistory from 'history/createBrowserHistory'
//
const { GREETING } = process.env
const history = createHistory()
export default class About extends React.Component {
  render() {  
    return (
      <div>
        <h1>This is what we're all about.</h1>
        <p>React, static sites, performance, speed. It's the stuff that makes us tick.</p>
        <div>{GREETING}</div>
        <Prefetch path='/blog'>
          <Link to="/blog" onClick={
            (e) => {
              e.preventDefault()
              history.push('/blog')
            }
          }>
            Try Prefetch Blog
          </Link>
        </Prefetch>
      </div>    
    )
  }
}
