import React from "react"
import Carousel from "react-material-ui-carousel"
import {
  Paper,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core"

class ImageCarousel extends React.Component {
  constructor(props) {
    super()
    console.log("hello")
    console.log(props)
    this.state = {
      images: props.images,
    }
  }
  render() {
    return (
        <Carousel animation="slide" navButtonsAlwaysVisible={true}>
        {this.state.images.map((image, i) => (
          <img id={i} src={image} style={{ height: "40vh", width: "100%" }} />
        ))}
      </Carousel>
    )
  }
}

class ImageCard extends React.Component {
  constructor(props) {
    console.log(props.images)
    super()
    this.state = {
      images: props.images,
      caption: props.caption,
    }
    console.log("images")
    console.log(this.state.images)
  }
  render() {
    return (
        <Grid container>
        <Grid item md={12}>
      <Card
        style={{
          backgroundColor: "var(--pbg)",
          overflow: "visible",
          width: "100%",
        }}
      >

        <CardMedia style={{ height: "50%" }}>
          <ImageCarousel images={this.state.images}></ImageCarousel>
        </CardMedia>
        <CardContent>
          <Typography
            variant="body1"
            style={{
              lineHeight: "2",
            }}
          >
            {this.state.caption}
          </Typography>
        </CardContent>
      </Card>
            </Grid>
        </Grid>
    )
  }
}
export default ImageCard
