import {
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
  Box,
  CardMedia,
  Button,
  CardActions,
  ButtonBase,
} from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import TemporaryDrawer from "./navigation"
import testImage from "../../static/images/ghibli-9.jpg"


export default function BlogPosts() {
  const data = useStaticQuery(graphql`
    query {
      allMediumPost(sort: { fields: [createdAt], order: DESC }) {
        edges {
          node {
            id
            title
            createdAt
            uniqueSlug
            virtuals {
              subtitle
              previewImage {
                imageId
              }
            }
            previewContent {
              bodyModel {
                paragraphs {
                  text
                }
              }
            }
            author {
              name
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <Grid container style={{ paddingLeft: "4%", paddingTop: "4%", paddingRight: "4%" }}>
        <Grid Item md={12} xs={12} >
          {data.allMediumPost.edges.map(edges => {
            return (
              
              <Card
                style={{
                  backgroundColor: "var(--pbg)",

                }}
              >
                <CardMedia style={{ height: "25vh" }} image={`https://miro.medium.com/max/2162/${edges.node.virtuals.previewImage.imageId}`}></CardMedia>
                <CardContent
                  style={{ paddingLeft: "3%" }}>
                  <Typography color="secondaryText" gutterBottom>
                    {edges.node.createdAt}
                  </Typography>
                  <Typography
                    variant="h4"
                    style={{
                      lineHeight: "2",
                    }}
                  >
                    {edges.node.title}
                  </Typography>
                  {edges.node.previewContent.bodyModel.paragraphs.map(
                    paragraph => {
                      return (
                        <>
                          <Typography
                            variant="body1"
                            style={{
                              lineHeight: "2",
                            }}
                          >
                            {paragraph.text}
                          </Typography>
                        </>
                      )
                    }
                  )}

                  <CardActions style={{ paddingLeft: "0" }}>
                    <Button style={{ color: "var(--main)", paddingLeft: "0" }} href={`{https://ruwanide51.medium.com/${edges.node.uniqueSlug}}`}>Read More</Button>
                  </CardActions>



                </CardContent>

              </Card>
            )
          })}{" "}
        </Grid>
      </Grid>
    </>
  )
}
