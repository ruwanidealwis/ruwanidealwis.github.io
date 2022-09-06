import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  Typography,
} from "@material-ui/core"


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
    this.state = {
      name: props.name,
      tools: props.tools,
      description: props.description,
      imgSrc: props.imgSrc,
      githubLink: props.githubLink,
      liveLink: props.liveLink,
      type: props.type,
    }
  }
  render() {
    const {
      name,
      tools,
      description,
      imgSrc,
      githubLink,
    } = this.state
    return (
      <Card
        style={{
          backgroundColor: "var(--pbg)",
          overflow: "visible",
        }}


      >
        <CardMedia
          style={{
            height: 420,


            overflow: "visible",
            color: "var(--secondary)",
            objectFit: "cover",
            backgroundSize: "cover"

          }}
          image={imgSrc}
        ></CardMedia>
        <CardContent style={{ padding: "4%" }}>
          <Grid container spacing={0}>

            <Grid item md={12}>
              <Typography variant="h4" style={{ paddingBottom: "1%" }}>
                {name}
              </Typography>
              <Typography variant="body" >
                <List
                  style={{
                    display: "inline-flex",
                  }}
                >
                  <ListItem style={{ paddingLeft: '0' }}><a href={this.state.githubLink}>GITHUB</a></ListItem>
                  {this.state.liveLink ? <ListItem style={{ paddingLeft: '0' }}><a href={this.state.liveLink}>VIEW</a></ListItem> : null}

                </List>

              </Typography>

            </Grid>


            <Grid item md={12} xs={12}>
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



            </Grid>
          </Grid>
        </CardContent>
      </Card >
    )
  }
}

export default ProjectCard
