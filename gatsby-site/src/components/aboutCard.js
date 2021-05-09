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
            style={{ color: "var(--main)" }}
            gutterBottom
            variant="h4"
          >
            Hello! I'm Ruwani
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            style={{ lineHeight: "2", padding: "2%", margin: "2%" }}
          >
            <ul>
              <li>
                I'm a third-year student at the{" "}
                <strong>University of Ottawa</strong> studying{" "}
                <strong>Software Engineering.</strong>
              </li>
              <li>
                I enjoy full-stack/backend development! I love working with
                APIs, databases and working on fun projects!
              </li>
              <li>
                I like coding in my free time, and I love combining it with my
                other interests! you can check some of my projects{" "}
                <AniLink
                  swipe
                  direction="right"
                  to="/projects?filter=webDevelopment"
                >
                  here{" "}
                </AniLink>
              </li>
              <li>
                I love to paint/embroider (and I'm also learning pottery)!
              </li>
              <li>
                I'm also trying to get back into reading (book suggestions are
                welcome!!)
              </li>
              <li>
                I'm also running out of netflix tv shows to watch (so tv show
                reccomendations are very much appreciated as well)!
              </li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
    )
  }
}
export default AboutCard
