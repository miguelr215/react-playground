import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from './Content'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <Content className='Nav'>
        {/* <a href='/'> */}
        <Link to='/'>
          Home
        {/* </a> */}
        </Link>
        {/* <a href='/about'> */}
        <Link to='/about'>
          About
        {/* </a> */}
        </Link>
        {/* <a href='/workouts'> */}
        <Link to='/workouts'>
          Workouts
        {/* </a> */}
        </Link>
      </Content>
    )
  }
}
