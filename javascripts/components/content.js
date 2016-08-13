import React, {Component} from 'react'
import { connect } from 'react-redux'
import SideProject from './sideProjects'
import WorkSchoolExperience from './workExperience'

class Content extends Component {
  render() {
    return (
      <section>
        <div className='animated bounceInDown'>
          <SideProject />
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
