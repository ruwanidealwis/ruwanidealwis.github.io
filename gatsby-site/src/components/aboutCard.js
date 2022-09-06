import { Card, CardContent, Typography } from "@material-ui/core"

import React from "react"

//F8552
class AboutCard extends React.Component {
  constructor(props) {
    super()
    this.state = {
      webDevLink: props.webDevLink,
      dataSciLink: props.dataSciLink,
    }
  }
  render() {
    return (
      <Card id="aboutCard" style={{ backgroundColor: "var(--pbg)" }}>
        <CardContent>
          <Typography
            style={{ color: "var(--main)", paddingLeft: "2%", margin: "2%" }}
            gutterBottom
            variant="h4"
          >
            hello! ...
          </Typography>

          <Typography
            gutterBottom
            variant="body1"
            style={{ lineHeight: "2", paddingLeft: "2%", margin: "2%" }}
          >
            <p>Hi I'm ruwani! and I'm in my final semester of software Engineering Student at uOttawa! I'm a software engineer by day, and a painter/reader/puzzle solver and avid netflix watcher by night. </p>
          </Typography>
          <Typography
            style={{ color: "var(--main)", paddingLeft: "2%", margin: "2%" }}
            gutterBottom
            variant="h4"
          >
            within tech ...
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            style={{ lineHeight: "2", paddingLeft: "2%", margin: "2%" }}
          >
            <p> I have experience with a variety of languages/frameworks and mostly work with Java, Python & TypeScript both in front-end and backend!I spent last summer in NYC interning as a SWE @Datadog on the Continous Profiler, and the summer before working on the checkout experience @ SSENSE. If you would like to know more about my experiences, please feel free to email me anytime! </p>

            <p>My interests in tech include fullstack development, mobile development & machine learning. I try to explore those interests through personal projects & hackathons which you can check out <a href="/projects">here.</a></p>

            <p>I'm passionate about tech for social good and I spent last year volunteering with CU Blueprint as a backend developer to help build apps for non-profits, and joining this fall as VP events to better our tech community! I am also an instructor @ kids code jeunesse. I'm always looking for more opportunities for volunteering & mentorship so please reach out if you'd think i'd be a good fit!</p>
          </Typography>

          <Typography
            style={{ color: "var(--main)", paddingLeft: "2%", margin: "2%" }}
            gutterBottom
            variant="h4"
          >
            beyond tech ...
          </Typography>

          <Typography
            gutterBottom
            variant="body1"
            style={{ lineHeight: "2", paddingLeft: "2%", margin: "2%" }}
          >
            <p>I spend much of my free time browsing netflix, listening to music and I even write about some of my favourite <a href="/blog"> tv shows/ movies </a>. When I'm not consuming televison, I like to paint, embroider, take care of my plants and have recently taken up puzzles! I love watching sports - especially football. I am also getting back into reading, so suggestions are always appreciated and welcome!</p>
          </Typography>

        </CardContent>
      </Card>
    )
  }
}
export default AboutCard
