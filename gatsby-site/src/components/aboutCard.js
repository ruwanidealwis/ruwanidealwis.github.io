import { Card, CardContent, Typography } from "@material-ui/core"

import AniLink from "gatsby-plugin-transition-link/AniLink"
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
            <p>Hi i'm ruwani! I'm a third year software Engineering Student at uOttawa! I'm a software engineer by day, and a painter/reader/avid netflix watcher by night. </p>
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
            <p>I am currently interning as an SDE Intern @ SSENSE & and volunteering as a Backend Developer @ CU Blueprint where I help build apps for non-profits. I have experience with a variety of languages/frameworks such as: TypeScript (JavaScript), ExpressJs, Flask, Python, Java, React, Vue, Dart For a more in-depth look at my skills you can check out my resume here.  </p>

            <p>My interests in tech include fullstack development, mobile development & machine learning. I try to explore those interests through personal projects & hackathons which you can check out here. I am also a scratch/python instructor @ kids code jeunesse, and I've also run intro to html/css/js workshops for non-coders.</p>
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
            <p>I spend much of my free time browsing netflix (reccomendations are always welcome!), and I even write about some of my favourite tv shows. When I'm not consuming televison, I like to paint, embroider, and sew! I love watching sports, and as a fan of FC Barcelona, and try to catch all their games, though it's been a lot of heartbreak recently. I am also getting back into reading, so suggestions are always appreciated and welcome!</p>

          </Typography>

        </CardContent>
      </Card>
    )
  }
}
export default AboutCard
