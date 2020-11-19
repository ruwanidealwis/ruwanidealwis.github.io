import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Link,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core"

import LinkIcon from "@material-ui/icons/Launch"
import GithubIcon from "../../static/images/github.svg"

import "../../static/styles/about.css"
import React from "react"
const listStyle = {
  backgroundColor: "var(--main)",

  justifyContent: "center",
  color: "white",
  padding: "1%",
  paddingTop: "0.5%",
  paddingBottom: "0.5%",
  paddingLeft: "3.5%",
  paddingRight: "3.5%",
  marginRight: "2%",
  marginBottom: "1.5%",
  fontWeight: 600,
}
class ProjectCard extends React.Component {
  constructor(props) {
    super()
    console.log(props.imgSrc)
    this.state = {
      name: props.name,
      tools: props.tools,
      description: props.description,
      imgSrc: props.imgSrc,
      githubLink: props.githubLink,
      liveLink: props.liveLink,
      type: props.type,
      nextSteps: props.nextSteps,
    }
  }
  render() {
    const {
      name,
      tools,
      description,
      imgSrc,
      githubLink,
      nextSteps,
      liveLink,
    } = this.state
    return (
      <Card
        style={{
          backgroundColor: "var(--pbg)",
          overflow: "visible",
        }}
      >
        <CardContent style={{ padding: "4%" }}>
          <Grid container spacing={0}>
            <Grid item md={6} xs={12}>
              <Typography variant="h4" style={{ color: "var(--secondary)" }}>
                {name}
              </Typography>
              <br></br>
              <List
                style={{
                  display: "inline-flex",
                  maxWidth: "100%",
                  minWidth: "70%",
                  flexWrap: "wrap",
                }}
              >
                {tools.map(value => {
                  return <Typography style={listStyle}>{value}</Typography>
                })}
              </List>
              <List style={{ display: "flex", width: "10%" }}>
                <ListItem
                  button
                  component="a"
                  target="_blank"
                  href={githubLink}
                >
                  <ListItemIcon>
                    <GithubIcon />
                  </ListItemIcon>
                </ListItem>
                <ListItem button component="a" target="_blank" href={liveLink}>
                  <ListItemIcon>
                    <LinkIcon color="secondary" />
                  </ListItemIcon>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={6} xs={12}>
              <Hidden smDown>
                <Link to={liveLink}>
                  <CardMedia
                    style={{
                      height: 260,
                      marginTop: "-22%",

                      overflow: "visible",
                      boxShadow: "10px 10px",
                      color: "var(--secondary)",
                      objectFit: "cover",
                    }}
                    image={imgSrc}
                  ></CardMedia>
                </Link>
              </Hidden>
            </Grid>

            <Grid item md={12} xs={12}>
              {description.split("\n").map(sentence =>
                sentence !== "" ? (
                  <div>
                    <br></br>
                    <Typography variant="body1">{sentence}</Typography>
                  </div>
                ) : (
                  ""
                )
              )}
              <br></br>

              <Typography
                variant="h6"
                style={{
                  fontFamily: "Raleway",
                  color: "var(--secondary)",
                  fontSize: "1.1rem",
                }}
              >
                Next Steps
              </Typography>
              {nextSteps.split("\n").map(sentence => (
                <div>
                  <Typography variant="body1">-{sentence}</Typography>
                </div>
              ))}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

export default ProjectCard
