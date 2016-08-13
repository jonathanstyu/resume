import React, {Component} from 'react'

const sideProjects = [
    {
      "title": "ScoutSpot",
      "category": "Side Project",
      "url": "https://scoutspot-73977.firebaseapp.com",
      "img": "../images/scoutspot_logo.png",
      "role": "Creator",
      "summary": "Write SQL queries without dealing with SQL",
      "keywords": [
        "SQL", "React", "Redux", "Firebase"
      ]
    },
    {
      "title": "collegeScan",
      "category": "Side Project - iOS",
      "url": "https://itunes.apple.com/us/app/collegescan-college-scorecard/id1087108329",
      "repo": "https://github.com/jonathanstyu/collegeScan",
      "img": "../images/cs-icon.png",
      "role": "Creator",
      "summary": "A way to browse, search, and star colleges using the US College Scorecard API",
      "keywords": [
        "AsyncDisplayKit", "Realm", "Swift 2.0", "UIKit", "REST API", "ObjectMapper"
      ]
    },
    {
      "title": "HakkerJobs",
      "category": "Side Project - iOS",
      "img": "../images/hakkerjobs.jpg",
      "url": "https://itunes.apple.com/us/app/hakkerjobs-hackernews-client/id1028168255",
      "role": "Creator",
      "summary": "Parses the HackerNews monthly Whos Hiring post so users can browse and save startup jobs",
      "keywords": [
        "AsyncDisplayKit", "Realm", "Swift 2.0", "UIKit", "REST API"
      ]
    }
]


export default class SideProject extends Component {
  render() {
    return (
      <div>
        <a name="programming" className="anchor" href="#programming"><span className="octicon octicon-link"></span></a>
        <h1>Programming</h1>
          {
            sideProjects.map(function (project, idx) {
              return (
                <div key={idx}>
                  <img src={project.img} style={{'width': '100px'}}></img>
                  <p><a href={project.url}>{project.title}</a> || {project.role}</p>
                  <p>{project.summary}</p>
                </div>
              )
            })
          }
      </div>
    )
  }
}
