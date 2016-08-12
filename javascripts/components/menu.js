import React, {Component} from 'react'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <header className='animated bounceInLeft'>
          <h1>Jonathan S. Yu</h1>
          <p>iOS/JavaScript/Python development, experiment-driven marketing, and business analysis</p>
          <p class="view"><a href="https://github.com/jonathanstyu">View My GitHub Profile</a></p>
          <p class="view"><a href="https://jonathanstyu.github.io">I Write a Blog</a></p>
          <p class="view"><a href="./jonathan yu resume.pdf">View My Resume (PDF)</a></p>
        </header>
      </div>
    )
  }
}
