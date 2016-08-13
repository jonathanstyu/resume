import React, {Component} from 'react'

export default class Menu extends Component {
  render() {
    return (
      <header className='animated bounceInLeft'>
        <h1>Jonathan S. Yu</h1>
        <p>iOS/JavaScript/Python development, experiment-driven marketing, and business analysis</p>
        <p className="view"><a href="https://github.com/jonathanstyu">View My GitHub Profile</a></p>
        <p className="view"><a href="https://jonathanstyu.github.io">I Write a Blog</a></p>
        <p className="view"><a href="./jonathan yu resume.pdf">View My Resume (PDF)</a></p>
      </header>
    )
  }
}
