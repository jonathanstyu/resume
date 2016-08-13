import React, {Component} from 'react'

const sideProjects = [
    {
      "title": "ScoutSpot",
      "category": "Side Project",
      "url": "https://scoutspot-73977.firebaseapp.com",
      "img": "./images/scoutspot_logo.png",
      "role": "Creator",
      "summary": "Write SQL queries without dealing with SQL. This is a client side JavaScript app. I used React and Redux with a crude Firebase backend",
      "keywords": [
        "SQL", "React", "Redux", "Firebase"
      ]
    },
    {
      "title": "collegeScan",
      "category": "Side Project - iOS",
      "url": "https://itunes.apple.com/us/app/collegescan-college-scorecard/id1087108329",
      "repo": "https://github.com/jonathanstyu/collegeScan",
      "blogPost": "http://jonathanstyu.github.io/introducing-collegescan",
      "img": "./images/cs-icon.png",
      "role": "Creator",
      "summary": "A way to browse, search, and star colleges using the US College Scorecard API",
      "keywords": [
        "AsyncDisplayKit", "Realm", "Swift 2.0", "UIKit", "REST API", "ObjectMapper"
      ]
    },
    {
      "title": "HakkerJobs",
      "category": "Side Project - iOS",
      "img": "./images/hakkerjobs.jpg",
      "url": "https://itunes.apple.com/us/app/hakkerjobs-hackernews-client/id1028168255",
      "blogPost": "http://jonathanstyu.github.io/introducing-hakkerjobs",
      "role": "Creator",
      "summary": "Parses the HackerNews monthly Whos Hiring post so users can browse and save startup jobs. Written in Swift 2.0 with Realm managing the saved data. At the beginning I used UIKit, but eventually migrated to AsyncDisplayKit.",
      "keywords": [
        "AsyncDisplayKit", "Realm", "Swift 2.0", "UIKit", "REST API"
      ]
    },
    {
      "title": "JumpShot 2",
      "category": "Side Project - iOS",
      "img": "./images/jumpshot2.png",
      "url": "https://github.com/jonathanstyu/jumpshot-1.5-swift",
      "blogPost": "http://jonathanstyu.github.io/introducing-jumpshot-1-5",
      "role": "Creator",
      "summary": "JumpShot 2 is a little iOS app that tracks game scores and records in pickup basketball games. This native app is a rebuild of a RubyMotion app that I wrote in 2013.",
      "keywords": [
        "Realm", "Swift 2.0", "UIKit"
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
                  <h3>{project.title} || {project.role}</h3>
                  <p>{project.summary}</p>
                  <p><a href={project.url}>See It</a> || <a href={project.blogPost}>Read the Blog Post</a>
                  </p>
                </div>
              )
            })
          }
      </div>
    )
  }
}
