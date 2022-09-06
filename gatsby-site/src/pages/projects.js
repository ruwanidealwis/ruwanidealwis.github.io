import {
  Grid,
  Paper,
  Box,
} from "@material-ui/core"
import { withPrefix } from "gatsby"

import { Helmet } from "react-helmet"
import React from "react"
import TemporaryDrawer from "../components/navigation"
import ProjectCard from "../components/projectCard"
import "../../static/styles/projects.css"
import BioCard from "../components/bioCard"
import Footer from "../components/footer"
import TitleComponent from "../components/titleComponent"
class Projects extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Ruwani's Portfolio</title>
        </Helmet>
        <Paper
          style={{
            backgroundColor: "var(--obg)",
            minHeight: "100vh",
            minWidth: "100%",
            paddingTop: "0%",
            marginTop: "-3%",
          }}
        >
          <TemporaryDrawer />
          <Box
            style={{
              backgroundColor: "var(--obg)",
              paddingLeft: "3%",
              paddingRight: "3%",
              paddingBottom: "8%",
            }}
          >
            <Grid container spacing={8}>
              <Grid item lg={4} md={12} xs={12}>
                <div style={{ margin: "5%", top: "190px", position: "sticky" }}>
                  <BioCard />
                </div>
              </Grid>
              <Grid item lg={8} md={12}>
                <Grid container spacing={3}>
                  <Grid item md={8} xs={12}>
                    <TitleComponent title="Projects." description="these are some of my favourite projects i've done" />
                  </Grid>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                  <Grid
                    className="projectCard"
                    item
                    md={12}
                    style={{ margin: "5%", width: "70%" }}
                  >
                    <ProjectCard
                      name={"Memoria"}
                      tagline={
                        "A virtual multi-media scrapbook generator for treasured memories."
                      }
                      type={"Web Development"}
                      description={`real scrapbooks are too much work, so why not treasure your memories, maps and that one song you always listened to with memoria`}
                      tools={[
                        "Golang",
                        "HTML/CSS",
                        "JavaScript",
                        "Docker",
                      ]}
                      githubLink={
                        "https://github.com/ruwanidealwis/memoria"
                      }
                      imgSrc={withPrefix("/images/memoria-preview.png")}

                    />
                  </Grid>
                  <Grid
                    className="projectCard"
                    item
                    md={12}
                    style={{ margin: "5%", width: "70%" }}
                  >
                    <ProjectCard
                      name={"Music Through The Decades"}
                      tagline={
                        "Compare your Spotify Listening Habbits against the top tracks of the decade!"
                      }
                      type={"Web Development"}
                      description={`a project to allow users to compare their spotify stats with the music of the past & discover some new bangers`}
                      tools={[
                        "NodeJs",

                        "React",
                        "Material-UI",
                        "POSTGRESQL",

                      ]}
                      githubLink={
                        "https://github.com/ruwanidealwis/musicThroughDecades"
                      }
                      liveLink={"https://musicthroughdecades.herokuapp.com/"}
                      imgSrc={withPrefix("/images/mtd-preview.png")}

                    />
                  </Grid>


                  <Grid
                    className="projectCard"
                    item
                    md={12}
                    style={{ margin: "5%", width: "70%" }}
                  >
                    <ProjectCard
                      name={"Space Barcode"}
                      tagline={
                        "Generates a barcode based on events on Space of a particular day"
                      }
                      type={"Web Development"}
                      description={`Explored my fascination and life long love for space using the data provided by NASA!
`}
                      tools={[
                        "NodeJs",
                        "ExpressJs",
                        "MongoDB",

                      ]}
                      githubLink={
                        "https://github.com/ruwanidealwis/Space-Barcode"
                      }
                      liveLink={"https://spacebarcode.herokuapp.com/"}
                      imgSrc={withPrefix("/images/test2.png")}
                    />
                  </Grid>




                  <Grid
                    className="projectCard"
                    item
                    md={12}
                    style={{ margin: "5%", width: "70%" }}
                  >
                  </Grid>


                  <Grid
                    className="projectCard"
                    item
                    md={12}
                    style={{ margin: "5%", width: "70%" }}
                  >
                    <ProjectCard
                      name={"Avatar the Last Airbender: Analysis"}
                      tagline={
                        "Over Analyzing one of my favourite shows of all time!"
                      }
                      type={"Data Science"}
                      description={`What better way to honor your favourite tv show than meticulously analyze its scripts (or rather; Python do the work) and find some cool patterns
`}
                      tools={[
                        "Pandas",
                        "Plotly",
                        "Seaborn",
                        "Jupyter Notebook",
                      ]}
                      githubLink={
                        "https://github.com/ruwanidealwis/tvShowAnalysis"
                      }
                      liveLink={
                        "https://github.com/ruwanidealwis/tvShowAnalysis/blob/master/Avatar%20The%20Last%20Airbender%20Analysis.ipynb"
                      }
                      imgSrc={withPrefix("/images/alta-preview.png")}

                    />
                  </Grid>


                </Grid>
              </Grid>
            </Grid>

          </Box>
          <Footer style={{ marginRight: "4%" }} />
        </Paper>
      </>

    )
  }
}
export default Projects
