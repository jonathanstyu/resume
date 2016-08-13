import React, {Component} from "react"

const education = {
    "level": "Bachelors in Science",
    "history": [
      {
        "institution": "University of California, Berkeley",
        "area": "Business Administration",
        "gpa": "3.87",
        "start": "2006-05",
        "end": "2010-05"
      }
    ]
  }

const work = [
  {
    "employer": "TrueandCo",
    "url": "https://trueandco.com/",
    "position": "Business Analyst",
    "start": "2013-08",
    "end": "2016-05",
    "highlights": [
      "Made over 250 commits to the company's Looker schema, allowing management to measure ROI, long term sales, and profit",
      "Oversaw digital acquisition marketing programs (Google, Facebook), driving over 2 million signups and $300K of monthly spend",
      "Profiled buyer cohorts by their demographics and quiz answers to identify those most likely to purchase from the company's first mailed catalog",
      "Wrote SQL queries and data pull scripts in JavaScript and Python to accommodate ad hoc data requests"
    ]
  },
  {
    "employer": "CareDox",
    "url": "https://caredox.com/",
    "position": "Marketing and Operations",
    "start": "2011-12",
    "end": "2013-05",
    "highlights": [
      "Headed customer acquisition and marketing for CareDox's consumer product",
      "Tracked customer LTV and the cost of servicing subscription accounts"
    ]
  }
]

export default class WorkSchoolExperience extends Component {
  render() {
    var compiledWorkHighlights = work.map(function (job, idx) {
      return (
        <div key={idx}>
          <p><a href={job.url}>{job.employer}</a> || {job.position}</p>
          <p>{job.start} to {job.end}</p>
          <ul>
            {
              job.highlights.map(function (highlight, idx) {
                return (
                  <li key={idx}>{highlight}</li>
                )
              })
            }
          </ul>
        </div>
      )
    })

    return (
      <div>
        <a name="Work Experience" className="anchor" href="#Work Experience"><span className="octicon octicon-link"></span></a>
        <h1>Work Experience</h1>
        {compiledWorkHighlights}
        <a name="Education" className="anchor" href="#Education"><span className="octicon octicon-link"></span></a>
        <h1>Education</h1>
        <h3>University of California, Berkeley</h3>
        <p>GPA: 3.87 || BS in Business Administration</p>
      </div>
    )
  }
}
