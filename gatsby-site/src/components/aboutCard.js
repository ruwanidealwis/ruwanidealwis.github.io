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
            ABOUT ME.
          </Typography>
          <Typography gutterBottom variant="body1" style={{ lineHeight: "2" }}>
            Hello! I'm Ruwani and I'm an incoming third-year student at the{" "}
            <strong>University of Ottawa</strong> studying{" "}
            <strong>Software Engineering.</strong>
            <br />
            <br />I have a strong passion for{" "}
            <strong>full-stack development</strong>, with a focus on the backend
            and server. I love developing<strong> REST APIs</strong>,{" "}
            interacting with <strong>Databases</strong> and using data whether
            it be music data from Spotify or NASA's catalogue of Space data to
            create projects that are both meaningful and enjoyable. I've had the
            experience of developing these skills through my{" "}
            <AniLink
              swipe
              direction="right"
              to="/projects?filter=webDevelopment"
            >
              web development projects{" "}
            </AniLink>
            and internships.
            <br></br>
            <br></br> My interest in Data has also introduced me to the field of{" "}
            <strong>Data Science</strong> where I am hoping to advance my
            knowledge of the subject. Some of my Data Science projects are
            visible{" "}
            <AniLink
              swipe
              direction="right"
              duration={1}
              to={"/projects?filter=dataScience"}
            >
              here.{" "}
            </AniLink>
            <br />
            <br />
            When I'm not coding, I'm probably listening to music on Spotify,
            over-analyzing TV shows or watching FC Barcelona... I was able to
            take up many hobbies including embroidering, painting, and I'm even
            learning to sew!
            <br />
            <br />
            Please do not hesitate to reach out to me if you would like to speak
            about tech, sports, tv, music or anything in general.
            <br />
          </Typography>
        </CardContent>
      </Card>
    )
  }
}
export default AboutCard
