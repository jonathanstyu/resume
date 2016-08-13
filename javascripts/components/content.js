import React, {Component} from 'react'
import { connect } from 'react-redux'
import SideProject from './sideProjects'
import WorkSchoolExperience from './workExperience'

class Content extends Component {
  render() {
    return (
      <section>
        <div className='animated bounceInDown'>
          <a name="about" className="anchor" href="#about"><span className="octicon octicon-link"></span></a>
          <h1>About Me</h1>
          <p>In my previous life I was a business analyst at an ecommerce lingerie company called True&co, leveraging data and startup savvy to bring women everywhere a better fit. I reported on important aspects of the business while running the company's acquisition marketing programs for the first years. In my spare time, I programmed web and mobile apps.</p>
          <p>I like to learn (today, React Native!) and tap away at a computer.</p>
          <hr />
          <SideProject />
          <hr />
          <WorkSchoolExperience />
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buttonClick: () => {
      dispatch({type: "HELLO"})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
